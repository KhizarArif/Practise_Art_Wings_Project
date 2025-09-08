<?php

namespace App\Http\Services;

use App\Models\Category;
use App\Models\Review;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class CategoryServices
{
    public function index()
    {
        $categories = Category::orderBy('id', 'desc')->get();
        // return view('admin.category.index', compact('categories'));
        return Inertia::render("Admin/Category/Index", compact('categories'));
    }

    public function create()
    {
        return Inertia::render("Admin/Category/Create");
    }

    public function store($request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'status' => 'required',
            'showHome' => 'required',
        ]);

        if ($validator->fails()) {
             $errorMessages = implode(', ', $validator->errors()->all());

            return redirect()->back()->withErrors([
                'success' => false,
                'message' => $errorMessages
            ]);
        }

        if (empty($request->id)) {
            $categoryExists = Category::where('name', $request->name)->exists();

            if ($categoryExists) {
                $message = 'Category with this name already exists.';

                // return response()->json(['error' => $message]);
                return redirect()->back()->withErrors([
                    'success' => false,
                    'message' => $message
                ]);
            }
        }

        if ($validator->passes()) {

            $category = $request->id ? Category::find($request->id) : new Category();
            $category->name = $request->name;
            $category->slug = $request->slug;
            $category->status = $request->status;
            $category->showHome = $request->showHome;
            $category->save();
            $message = $request->id ? 'Category Update successfully' : 'Category created successfully.'; 
            return redirect()->route('categories.index')->with([
                'success' => true,
                'message' => $message
            ]);
        }
    }

    public function edit($id)
    {
        $category = Category::find($id); 
        return Inertia::render("Admin/Category/Create", compact('category'));
    }

    public function destroy($id)
    {
        $product = Category::find($id);
        $product->delete();

        return response()->json([
            "status" => true,
            "message" => 'Category Deleted Successfully! ',
        ]);
    }
}

<?php

namespace App\Http\Services;

use App\Models\Category;
use App\Models\FeaturedProduct;
use App\Models\NewArrival;
use App\Models\NewArrivalImage;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\SubCategory;
use App\Models\TempImage;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class NewArrivalServices
{
    public function index()
    {
        $newArrivals = NewArrival::with('newArrivalImages')->orderBy('id', 'desc')->get();
        // return view('admin.newArrivals.index', compact('newArrivals')); 
        return Inertia::render("Admin/NewArrivals/Index", [
            'newArrivals' => $newArrivals
        ]);
    }

    public function create()
    {
        $categories = Category::orderBy("id", "desc")->where('status', "active")->get();
        // dd($Categories);
        return Inertia::render("Admin/NewArrivals/Create", [
            'categories' => $categories
        ]);
    }

    public function store($request)
    {
        // dd($request->all());
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'short_description' => 'required',
            'price' => 'required',
            'qty' => 'required',
            'original_price' => 'required',
            'category_id' => 'required',
            'status' => 'required',
        ]);

        if ($validator->fails()) {
            $message = $validator->errors();

            return redirect()->back()->withErrors([
                'suceess' => false,
                'errors' => $message
            ]);
        }

        if (!$request->id) {
            $productExists = NewArrival::where('title', $request->title)->exists();

            if ($productExists) {
                $message = 'Product with this Name already exists.';
                return redirect()->back()->withErrors([
                    'success' => false,
                    'errors' => $message
                ]);
            }
        }

        if ($validator->passes()) {
            $product = $request->id ? NewArrival::find($request->id) : new NewArrival();
            $product->title = $request->title;
            $product->slug = $request->slug;
            $product->detail_description = $request->detail_description;
            $product->short_description = $request->short_description;
            $product->price = $request->price;
            $product->original_price = $request->original_price;
            $product->category_id = $request->category_id;
            $product->qty = $request->qty;
            $product->status = $request->status;
            $product->save();
            if ($request->hasFile('image_array')) {

                NewArrivalImage::where('new_arrival_id', $product->id)->delete();

                foreach ($request->file('image_array') as  $image) {
                    try {
                        $productImage = new NewArrivalImage();
                        $ext = $image->getClientOriginalExtension();
                        $newImageName = $product->slug . '_' . $productImage->id . '_' . uniqid() . '.' . $ext;

                        $productImage->image = $newImageName;
                        $productImage->new_arrival_id = $product->id;
                        $productImage->save();
                        $image->move(public_path() . '/uploads/NewArrival', $newImageName);
                    } catch (\Throwable $th) {
                        return redirect()->back()->withErrors([
                            'success' => false,
                            'message' => $th->getMessage()
                        ]);
                    }
                }
            };


            $message = $request->id ? 'Product updated successfully.' : 'Product created successfully.';

            return redirect()->back()->with([
                'success' => true,
                'message' => $message
            ]);
          
        }
    }

    public function edit($request)
    {
        $editProduct = Product::find($request->id);
        // dd($editProduct);
        $productImages = $editProduct->productImages;
        $categories = Category::orderBy('id', 'desc')->get();
        return Inertia::render("Admin/Products/Create", [
            'editProduct' => $editProduct,
            'productImages' => $productImages,
            'categories' => $categories
        ]);
    }


    public function destroy($id)
    {
        $product = Product::find($id);

        if (empty($product)) {
            return redirect()->back()->withErrors([
                'success' => false,
                'message' => 'Product not found'
            ]);
        }

        $productImages = ProductImage::where('product_id', $product->id)->get();
        if (!empty($productImages)) {
            foreach ($productImages as $productImage) {
                File::delete(public_path() . '/uploads/product' . $productImage->image);
            }
            ProductImage::where('product_id', $product->id)->delete();
        }

        $product->delete();

        // return response()->json([
        //     "status" => true,
        //     "message" => 'Product Deleted Successfully! ',
        // ]);

        return redirect()->back()->with([
            'success' => true,
            'message' => 'Product Deleted Successfully! '
        ]);
    }

    // public function featuredProduct()
    // {
    //     $featured = FeaturedProduct::all();
    //     return view('admin.featured.index', compact('featured'));
    // }

    // public function createFeaturedProduct()
    // {
    //     return view('admin.featured.create');
    // }
    // public function storeFeaturedProduct($request)
    // {
    //     $validator = Validator::make($request->all(), [
    //         'name' => 'required',
    //         'description' => 'required',
    //         'price' => 'required',
    //         'qty' => 'required',
    //         'status' => 'required',
    //     ]);

    //     if ($validator->fails()) {
    //         return response()->json(['error' => $validator->errors()]);
    //     }

    //     if ($validator->passes()) {
    //         $featured = $request->id ? FeaturedProduct::find($request->id) : new FeaturedProduct();
    //         $featured->name = $request->name;
    //         $featured->slug = $request->slug;
    //         $featured->description = $request->description;
    //         $featured->qty = $request->qty;
    //         $featured->price = $request->price;
    //         $featured->status = $request->status;
    //         $featured->showHome = $request->show_on_home;
    //         $featured->save();

    //         if (!empty($request->image)) {
    //             $tempImageInfo = TempImage::find($request->image);
    //             $extArray = explode('.', $tempImageInfo->name);
    //             $ext = last($extArray);
    //             $newImageName = $request->slug . '-' . $featured->id . '-' . time() . '.' . $ext;
    //             $featured->image = $newImageName;
    //             $featured->save();

    //             // For Large Image
    //             try {
    //                 $spath = public_path() . '/temp/' . $tempImageInfo->name;
    //                 $dpath = public_path() . '/uploads/featured/' . $newImageName;
    //                 $manager = new ImageManager(new Driver());
    //                 $image = $manager->read($spath);
    //                 $image->resize(1400, 900);
    //                 $image->save($dpath);
    //             } catch (\Exception $e) {
    //                 dd($e->getMessage());
    //             }
    //         }
    //         $message = $request->id ? 'Featured Product updated successfully.' : 'Featured Product created successfully.';
    //         return response()->json(['status' => true, 'message' => $message]);
    //     }
    // }

    // public function editFeaturedProduct($request){
    //     $editFeatured = FeaturedProduct::find($request->id);
    //     return view('admin.featured.edit', compact('editFeatured'));
    // }

    // public function destroyFeaturedProduct($id){
    //     $featured = FeaturedProduct::find($id);
    //     $featured->delete();
    //     return response()->json(['success' => true, 'message' => 'Featured Product deleted successfully']);
    // }
}

<?php

namespace App\Http\Controllers;

use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;

class TempImageController extends Controller
{
    public function create(Request $request){
  
       
        $image = $request->image;   
        if (!empty($image) ) {
            $ext = $image->getClientOriginalExtension();
            $newName = time() . '.' . $ext; 
            $tempImage = new TempImage();
            $tempImage->name = $newName;
            $tempImage->save();

            $image->move(public_path() . '/temp', $newName);
 
            $spath = public_path() . '/temp/' . $newName; 
              // Creating Image Thumbnail  
            try {
                $manager = new ImageManager(new Driver()); 
                $image = $manager->read($spath);
                $image = $image->resize(300, 275);                     
                $image->toJpeg()->save(base_path('public/temp/thumb/'. $newName));
                $save_url = 'temp/thumb/'.$newName;
                $image->save($save_url);
            } catch (\Intervention\Image\Exceptions\DecoderException $e) { 
                dd($e->getMessage());
            } 
            
            return response()->json([
               "status" => true,
               "image_id" => $tempImage->id,
               "ImagePath" => $save_url,
               "message" => "Image uploaded successfully" 
            ]);
        }
    } 

    public function deleteImage($id)
    {
        $tempImage = TempImage::find($id);
        if ($tempImage) { 
            File::delete(public_path() . '/temp/thumb/' . $tempImage->name);
            File::delete(public_path() . '/temp/' . $tempImage->name);
            $tempImage->delete();

            return response()->json(['success' => true, 'message' => 'Image deleted successfully']);
        }
        return response()->json(['success' => false, 'message' => 'Image not found']);
    }
    
}

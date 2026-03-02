#!/usr/bin/env python3
"""
Crop logo PNG to bounding box and save as transparent PNG
"""
from PIL import Image
import sys

def crop_to_content(input_path, output_path):
    """Crop image to its bounding box (non-transparent content)"""
    try:
        # Open the image
        img = Image.open(input_path)
        
        # Convert to RGBA if not already
        if img.mode != 'RGBA':
            img = img.convert('RGBA')
        
        # Get the bounding box of non-transparent pixels
        bbox = img.getbbox()
        
        if bbox:
            # Crop to bounding box
            cropped = img.crop(bbox)
            
            # Save with transparency
            cropped.save(output_path, 'PNG', optimize=True)
            
            print(f"✅ Cropped logo saved to: {output_path}")
            print(f"   Original size: {img.size}")
            print(f"   Cropped size: {cropped.size}")
            print(f"   Bounding box: {bbox}")
            return True
        else:
            print("❌ No visible content found in image")
            return False
            
    except Exception as e:
        print(f"❌ Error: {e}")
        return False

if __name__ == "__main__":
    input_file = "public/images/logos/logo-official.png"
    output_file = "public/images/logos/logo-official-cropped.png"
    
    print("🔧 Cropping logo to bounding box...")
    crop_to_content(input_file, output_file)

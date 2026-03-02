#!/usr/bin/env python3
"""
Remove white background from logo and save as transparent PNG
"""
from PIL import Image

def remove_white_background(input_path, output_path, threshold=240):
    """Convert white/near-white pixels to transparent"""
    try:
        # Open the image
        img = Image.open(input_path)
        
        # Convert to RGBA
        img = img.convert('RGBA')
        
        # Get pixel data
        pixels = img.load()
        width, height = img.size
        
        # Process each pixel
        white_count = 0
        for y in range(height):
            for x in range(width):
                r, g, b, a = pixels[x, y]
                
                # If pixel is white/near-white, make it transparent
                if r > threshold and g > threshold and b > threshold:
                    pixels[x, y] = (r, g, b, 0)
                    white_count += 1
        
        # Crop to bounding box after transparency
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
        
        # Save with transparency
        img.save(output_path, 'PNG', optimize=True)
        
        print(f"✅ Logo with transparent background saved to: {output_path}")
        print(f"   Transparent pixels created: {white_count:,}")
        print(f"   Final size: {img.size}")
        print(f"   White threshold: {threshold}")
        return True
            
    except Exception as e:
        print(f"❌ Error: {e}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == "__main__":
    input_file = "public/images/logos/logo-official.png"
    output_file = "public/images/logos/logo-transparent.png"
    
    print("🔧 Removing white background from logo...")
    remove_white_background(input_file, output_file, threshold=240)

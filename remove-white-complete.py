#!/usr/bin/env python3
"""
Complete white background removal using aggressive threshold
"""
from PIL import Image

def remove_white_complete(input_path, output_path, threshold=250):
    """Aggressively remove all white/near-white pixels"""
    try:
        # Open the image
        img = Image.open(input_path)
        
        # Convert to RGBA
        img = img.convert('RGBA')
        
        # Get pixel data
        pixels = img.load()
        width, height = img.size
        
        # Process each pixel with very aggressive threshold
        transparent_count = 0
        for y in range(height):
            for x in range(width):
                r, g, b, a = pixels[x, y]
                
                # If pixel is near-white (very aggressive threshold), make transparent
                if r >= threshold and g >= threshold and b >= threshold:
                    pixels[x, y] = (255, 255, 255, 0)
                    transparent_count += 1
                # For non-white pixels, ensure full opacity
                elif a > 0:
                    pixels[x, y] = (r, g, b, 255)
        
        # Crop to bounding box
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            print(f"   Cropped to: {bbox}")
        
        # Save with optimization
        img.save(output_path, 'PNG', optimize=True, compress_level=9)
        
        print(f"✅ Complete white removal saved to: {output_path}")
        print(f"   Transparent pixels: {transparent_count:,}")
        print(f"   Final size: {img.size}")
        print(f"   Threshold: {threshold}")
        return True
            
    except Exception as e:
        print(f"❌ Error: {e}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == "__main__":
    input_file = "public/images/logos/logo-official.png"
    output_file = "public/images/logos/logo-official.png"  # Overwrite
    
    print("🔧 Aggressive white background removal...")
    # Use 250 threshold - extremely aggressive
    remove_white_complete(input_file, output_file, threshold=250)

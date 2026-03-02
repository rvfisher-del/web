#!/usr/bin/env python3
"""
Final logo cleaning - brightness-based threshold to pure transparency
"""
from PIL import Image

def final_logo_clean(input_path, output_path, brightness_threshold=240):
    """Remove all pixels with brightness > threshold"""
    try:
        # Open the image
        img = Image.open(input_path)
        
        # Convert to RGBA
        img = img.convert('RGBA')
        
        # Get pixel data
        pixels = img.load()
        width, height = img.size
        
        # Process each pixel based on brightness
        transparent_count = 0
        for y in range(height):
            for x in range(width):
                r, g, b, a = pixels[x, y]
                
                # Calculate brightness (average of RGB)
                brightness = (r + g + b) / 3
                
                # If brightness is above threshold, make transparent
                if brightness > brightness_threshold:
                    pixels[x, y] = (255, 255, 255, 0)
                    transparent_count += 1
                # Otherwise ensure full opacity
                elif a > 0:
                    pixels[x, y] = (r, g, b, 255)
        
        # Crop to bounding box
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            print(f"   Cropped to: {bbox}")
        
        # Save as high-quality transparent PNG
        img.save(output_path, 'PNG', optimize=True, compress_level=9)
        
        print(f"✅ Final cleaned logo saved to: {output_path}")
        print(f"   Transparent pixels: {transparent_count:,}")
        print(f"   Final size: {img.size}")
        print(f"   Brightness threshold: {brightness_threshold}")
        return True
            
    except Exception as e:
        print(f"❌ Error: {e}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == "__main__":
    input_file = "public/images/logos/logo-official.png"
    output_file = "public/images/logos/logo-official.png"  # Overwrite
    
    print("🔧 Final logo cleaning with brightness threshold...")
    final_logo_clean(input_file, output_file, brightness_threshold=240)

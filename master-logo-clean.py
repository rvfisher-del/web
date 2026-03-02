#!/usr/bin/env python3
"""
Master logo cleaning - final surgical removal of all white artifacts
"""
from PIL import Image

def master_logo_clean(input_path, output_path, brightness_threshold=250):
    """
    Surgical cleaning with brightness-based threshold
    Remove all pixels with brightness > threshold
    """
    try:
        # Open the image
        img = Image.open(input_path)
        print(f"   Loaded: {input_path}")
        print(f"   Original size: {img.size}")
        print(f"   Mode: {img.mode}")
        
        # Convert to RGBA
        img = img.convert('RGBA')
        
        # Get pixel data
        pixels = img.load()
        width, height = img.size
        
        # Process each pixel based on brightness
        transparent_count = 0
        kept_count = 0
        
        for y in range(height):
            for x in range(width):
                r, g, b, a = pixels[x, y]
                
                # Calculate brightness (average of RGB)
                brightness = (r + g + b) / 3
                
                # If brightness is above threshold, make fully transparent
                if brightness > brightness_threshold:
                    pixels[x, y] = (255, 255, 255, 0)
                    transparent_count += 1
                # Otherwise ensure full opacity for visible pixels
                elif a > 0:
                    pixels[x, y] = (r, g, b, 255)
                    kept_count += 1
        
        # Crop to bounding box
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            print(f"   Cropped to: {bbox}")
            print(f"   New size: {img.size}")
        
        # Save as high-quality transparent PNG
        img.save(output_path, 'PNG', optimize=True, compress_level=9)
        
        print(f"\n✅ MASTER LOGO CLEANED")
        print(f"   Output: {output_path}")
        print(f"   Transparent pixels: {transparent_count:,}")
        print(f"   Kept pixels: {kept_count:,}")
        print(f"   Brightness threshold: {brightness_threshold}")
        print(f"   Final dimensions: {img.size}")
        print(f"\n🔒 This is now the MASTER COPY - freeze this quality")
        return True
            
    except Exception as e:
        print(f"❌ Error: {e}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == "__main__":
    input_file = "public/images/logos/logo-official.png"
    output_file = "public/images/logos/logo-official.png"  # Overwrite
    
    print("🔧 MASTER LOGO CLEANING - Final Surgical Pass")
    print("=" * 60)
    master_logo_clean(input_file, output_file, brightness_threshold=250)
    print("=" * 60)

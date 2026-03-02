#!/usr/bin/env python3
"""
Clean logo PNG with threshold-based alpha channel for crisp edges
"""
from PIL import Image

def clean_logo_alpha(input_path, output_path, threshold=245):
    """Create clean transparent PNG with threshold-based alpha"""
    try:
        # Open the image
        img = Image.open(input_path)
        
        # Convert to RGBA
        img = img.convert('RGBA')
        
        # Get pixel data
        pixels = img.load()
        width, height = img.size
        
        # Process each pixel with threshold
        cleaned_count = 0
        for y in range(height):
            for x in range(width):
                r, g, b, a = pixels[x, y]
                
                # If pixel is near-white (above threshold), make fully transparent
                if r >= threshold and g >= threshold and b >= threshold:
                    pixels[x, y] = (255, 255, 255, 0)
                    cleaned_count += 1
                # If pixel is not white, keep it but ensure full opacity
                else:
                    pixels[x, y] = (r, g, b, 255)
        
        # Crop to bounding box
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            print(f"   Cropped to bounding box: {bbox}")
        
        # Save with optimization
        img.save(output_path, 'PNG', optimize=True)
        
        print(f"✅ Clean logo saved to: {output_path}")
        print(f"   Cleaned pixels: {cleaned_count:,}")
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
    output_file = "public/images/logos/logo-clean.png"
    
    print("🔧 Creating clean alpha channel logo...")
    # Use higher threshold (245) for very aggressive white removal
    clean_logo_alpha(input_file, output_file, threshold=245)

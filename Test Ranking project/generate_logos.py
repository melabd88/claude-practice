#!/usr/bin/env python3
"""Generate simple logo PNG images for tier list categories."""

from PIL import Image, ImageDraw, ImageFont
import os

# Create logos directory if it doesn't exist
os.makedirs('logos', exist_ok=True)

# Define categories with items and colors
categories = {
    'systemdesign': {
        'items': [
            ('graphql', 'GQL', '#EC4899'),
            ('microservices', 'μS', '#8B5CF6'),
            ('realtime', 'RT', '#F59E0B'),
            ('search', 'ES', '#6366F1'),
            ('serverless', 'SLS', '#10B981'),
            ('storage', 'S3', '#3B82F6'),
            ('caching', 'CACHE', '#06B6D4'),
            ('loadbalancing', 'LB', '#EF4444'),
            ('queues', 'Q', '#F97316'),
            ('cdn', 'CDN', '#6B7280'),
            ('sharding', 'SHARD', '#8B5CF6'),
            ('ratelimit', 'RATE', '#FBBF24'),
        ]
    },
    'watches': {
        'items': [
            ('rolex-sub', 'RS', '#FFD700'),
            ('omega-speed', 'OS', '#F97316'),
            ('casio-f91w', 'CF', '#1f2937'),
            ('patek-philippe', 'PP', '#4169E1'),
            ('apple-watch', 'AW', '#000000'),
            ('seiko-5', 'S5', '#DC143C'),
            ('cartier-tank', 'CT', '#FFD700'),
            ('rolex-datejust', 'RD', '#C0C0C0'),
            ('tudor-black-bay', 'TB', '#8B0000'),
            ('breitling-navitimer', 'BN', '#000000'),
            ('omega-seamaster', 'OM', '#87CEEB'),
            ('grand-seiko', 'GS', '#696969'),
            ('iwc-pilot', 'IWC', '#8B4513'),
            ('chopard-alpine', 'CA', '#FFD700'),
            ('zenith-el-primero', 'ZEP', '#FF6347'),
        ]
    },
    'cars': {
        'items': [
            ('porsche-911', '911', '#FF0000'),
            ('toyota-supra', 'SUPRA', '#FFD700'),
            ('ford-mustang', 'STNG', '#0066CC'),
            ('tesla-model-s', 'TSLA', '#FF0000'),
            ('lamborghini-miura', 'MIURA', '#FF6600'),
            ('ferrari-f40', 'F40', '#FF0000'),
            ('mercedes-amg-gtr', 'AMG', '#00AA00'),
            ('bugatti-veyron', 'BUGATTI', '#0000FF'),
            ('nissan-r33', 'R33', '#0099FF'),
            ('mclaren-f1', 'F1', '#FF8C00'),
            ('corvette-c8', 'C8', '#FF0000'),
            ('aston-martin-db5', 'DB5', '#00AA00'),
            ('jaguar-xke', 'XKE', '#0066CC'),
            ('bmw-m1', 'M1', '#0066CC'),
            ('delorean-dmc12', 'DMC', '#C0C0C0'),
        ]
    },
    'films': {
        'items': [
            ('godfather', 'GOD', '#8B0000'),
            ('inception', 'INCEP', '#000080'),
            ('pulp-fiction', 'PF', '#FFD700'),
            ('parasite', 'PARA', '#228B22'),
            ('shawshank', 'SHAW', '#696969'),
            ('dark-knight', 'DK', '#000000'),
            ('interstellar', 'INTER', '#000000'),
            ('forrest-gump', 'FG', '#FF6347'),
            ('matrix', 'MATRIX', '#00FF00'),
            ('silence-lambs', 'SL', '#8B4513'),
            ('spirited-away', 'SA', '#FFB6C1'),
            ('la-la-land', 'LLL', '#FFD700'),
            ('lord-rings-fellowship', 'LOTR', '#228B22'),
            ('gladiator', 'GLAD', '#DC143C'),
            ('blade-runner', 'BR2049', '#FFD700'),
        ]
    }
}

def hex_to_rgb(hex_color):
    """Convert hex color to RGB tuple."""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def create_logo(filename, text, color):
    """Create a simple logo image."""
    # Create image with colored background
    size = (128, 128)
    bg_color = hex_to_rgb(color)
    img = Image.new('RGB', size, bg_color)
    draw = ImageDraw.Draw(img)

    # Try to use a nice font, fall back to default
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 24)
    except:
        font = ImageFont.load_default()

    # Get text bounding box for centering
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]

    # Calculate center position
    x = (size[0] - text_width) // 2
    y = (size[1] - text_height) // 2

    # Determine text color (white for dark backgrounds, black for light)
    brightness = sum(bg_color) / 3
    text_color = (255, 255, 255) if brightness < 128 else (0, 0, 0)

    # Draw text
    draw.text((x, y), text, fill=text_color, font=font)

    # Save image
    img.save(filename)

# Generate logos for each category
for category, data in categories.items():
    for item_id, text, color in data['items']:
        filename = f'logos/{category}_{item_id}.png'
        create_logo(filename, text, color)
        print(f'Created {filename}')

print('Logo generation complete!')

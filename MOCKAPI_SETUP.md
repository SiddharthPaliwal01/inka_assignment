# MockAPI Setup Instructions

## Steps to Configure MockAPI

1. **Visit MockAPI.io**
   - Go to https://mockapi.io
   - Sign up for a free account or log in

2. **Create a New Project**
   - Click on "Create New Project"
   - Give it a name (e.g., "guitar-store")

3. **Create Products Endpoint**
   - Click on "New Resource"
   - Name it: `products`
   - Add the following fields:
     - `name` (string) - Guitar brand name
     - `description` (string) - Product description
     - `price` (number) - Price in cents (e.g., 2995 for $29.95)
     - `image` (string) - URL to guitar image
     - `colorsAvailable` (number) - Number of color options

4. **Add Sample Data**
   Create at least 3 products with data like:
   ```json
   {
     "name": "Fender Stratocaster",
     "description": "Classic electric guitar",
     "price": 299500,
     "image": "https://your-image-url.com/guitar1.jpg",
     "colorsAvailable": 3
   }
   ```

5. **Get Your API Endpoint**
   - Copy your project endpoint URL (e.g., `https://abc123.mockapi.io/api/products`)

6. **Update the Code**
   - Open `src/components/NewProducts.tsx`
   - Replace line 22:
     ```typescript
     const response = await fetch('https://YOUR_MOCKAPI_ID.mockapi.io/api/products');
     ```
   - With your actual endpoint URL

## Current Setup

The app currently uses fallback demo data with placeholder images. Once you configure MockAPI:
- Real product data will be fetched automatically
- The app will display your custom guitar products
- You can manage products through the MockAPI dashboard

## Image Recommendations

For best results, use guitar images that are:
- Square or portrait orientation (300x300px or larger)
- Clear product photos on white/neutral background
- High quality and consistent style across products

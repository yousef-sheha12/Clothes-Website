// Mock data fallback when API (hf.space) is down
// Frontend-only mode - all products are local, no backend required
export const mockProducts = [
  {
    id: 1,
    name: "Classic Cotton T-Shirt",
    description: "Premium cotton t-shirt with modern fit. Perfect for everyday wear.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    images: [
      { url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600" },
      { url: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600" },
    ],
    oldPrice: 450,
    newPrice: 299,
    category: "T-Shirts",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    description: "Stylish slim fit jeans with stretch fabric for comfort and durability.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
    images: [
      { url: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600" },
      { url: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600" },
    ],
    oldPrice: 850,
    newPrice: 599,
    category: "Jeans",
  },
  {
    id: 3,
    name: "Oversized Hoodie",
    description: "Cozy oversized hoodie with premium fleece lining and kangaroo pocket.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
    images: [
      { url: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600" },
      { url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600" },
    ],
    oldPrice: 750,
    newPrice: 499,
    category: "Hoodies",
  },
  {
    id: 4,
    name: "Casual Jacket",
    description: "Lightweight casual jacket perfect for any season. Water-resistant fabric.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    images: [
      { url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600" },
      { url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600" },
    ],
    oldPrice: 1200,
    newPrice: 849,
    category: "Jackets",
  },
  {
    id: 5,
    name: "Summer Dress",
    description: "Elegant summer dress with floral pattern and flowy design.",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
    images: [
      { url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600" },
      { url: "https://images.unsplash.com/photo-1515372039744-f1fd71e2f1db?w=600" },
    ],
    oldPrice: 650,
    newPrice: 449,
    category: "Dresses",
  },
  {
    id: 6,
    name: "Formal Shirt",
    description: "Classic formal shirt with slim fit. Ideal for office and events.",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
    images: [
      { url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600" },
      { url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600" },
    ],
    oldPrice: 550,
    newPrice: 399,
    category: "Shirts",
  },
  {
    id: 7,
    name: "Sneakers Pro",
    description: "Premium sneakers with cushioned sole and breathable mesh upper.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    images: [
      { url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600" },
      { url: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600" },
    ],
    oldPrice: 950,
    newPrice: 699,
    category: "Shoes",
  },
  {
    id: 8,
    name: "Denim Jacket",
    description: "Classic denim jacket with vintage wash and modern tailoring.",
    image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=400",
    images: [
      { url: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=600" },
      { url: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=600" },
    ],
    oldPrice: 900,
    newPrice: 649,
    category: "Jackets",
  },
];

export default mockProducts;

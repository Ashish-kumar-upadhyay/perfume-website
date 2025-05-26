'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

// Define types for mega menu content
type ProductItem = {
  title: string;
  price: string;
  image: string;
  href: string;
};

type ListItem = {
  title: string;
  href: string;
};

type FavoriteItem = {
  title: string;
  href: string;
};

type MegaMenuContent = {
  products: ProductItem[];
  listTitle: string;
  listItems: ListItem[];
  favoritesTitle: string;
  favoriteItems: FavoriteItem[];
};

// Sample data for each category
const megaMenuData: Record<string, MegaMenuContent> = {
  'Shop All': {
    products: [
      { 
        title: 'Signature Scent', 
        price: '$89', 
        image: 'https://images.pexels.com/photos/3373230/pexels-photo-3373230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        href: '/product/signature-scent'
      },
      { 
        title: 'Everyday Essence', 
        price: '$65', 
        image: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        href: '/product/everyday-essence'
      },
      { 
        title: 'Morning Dew', 
        price: '$75', 
        image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        href: '/product/morning-dew'
      },
      { 
        title: 'Ocean Breeze', 
        price: '$82', 
        image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        href: '/product/ocean-breeze'
      },
    ],
    listTitle: 'Categories',
    listItems: [
      { title: 'All Products', href: '/shop/all' },
      { title: 'New Arrivals', href: '/shop/new' },
      { title: 'Bestsellers', href: '/shop/bestsellers' },
      { title: 'Last Chance', href: '/shop/last-chance' },
    ],
    favoritesTitle: 'Collections',
    favoriteItems: [
      { title: 'Under $50', href: '/collections/under-50' },
      { title: 'Luxury Picks', href: '/collections/luxury' },
      { title: 'Essentials', href: '/collections/essentials' },
      { title: 'Gift Sets', href: '/collections/gift-sets' },
    ]
  },
  'Bestsellers': {
    products: [
      { 
        title: 'Velvet Orchid', 
        price: '$110', 
        image: 'https://images.pexels.com/photos/2922326/pexels-photo-2922326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        href: '/product/velvet-orchid'
      },
      { 
        title: 'Royal Oud', 
        price: '$125', 
        image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        href: '/product/royal-oud'
      },
    ],
    listTitle: 'Top Rated',
    listItems: [
      { title: 'Fragrances', href: '/bestsellers/fragrances' },
      { title: 'Skin Care', href: '/bestsellers/skin-care' },
      { title: 'Hair Care', href: '/bestsellers/hair-care' },
      { title: 'Body Care', href: '/bestsellers/body-care' },
    ],
    favoritesTitle: 'Customer Favorites',
    favoriteItems: [
      { title: 'Award Winners', href: '/collections/award-winners' },
      { title: 'Editor\'s Picks', href: '/collections/editors-picks' },
      { title: 'Most Reviewed', href: '/collections/most-reviewed' },
      { title: 'Trending Now', href: '/collections/trending' },
    ]
  },
  'Fragrance': {
    products: [
      { 
        title: 'Amber Musk', 
        price: '$98', 
        image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        href: '/product/amber-musk'
      },
      { 
        title: 'Citrus Bloom', 
        price: '$78', 
        image: 'https://images.pexels.com/photos/10513822/pexels-photo-10513822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        href: '/product/citrus-bloom'
      },
    ],
    listTitle: 'Fragrance Types',
    listItems: [
      { title: 'Eau de Parfum', href: '/fragrance/eau-de-parfum' },
      { title: 'Eau de Toilette', href: '/fragrance/eau-de-toilette' },
      { title: 'Body Sprays', href: '/fragrance/body-sprays' },
      { title: 'Scented Oils', href: '/fragrance/scented-oils' },
    ],
    favoritesTitle: 'Scent Families',
    favoriteItems: [
      { title: 'Floral', href: '/fragrance/floral' },
      { title: 'Woody', href: '/fragrance/woody' },
      { title: 'Fresh', href: '/fragrance/fresh' },
      { title: 'Oriental', href: '/fragrance/oriental' },
    ]
  },
  'Skin + Hair': {
    products: [
      { 
        title: 'Radiance Serum', 
        price: '$68', 
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        href: '/product/radiance-serum'
      },
      { 
        title: 'Repair Mask', 
        price: '$45', 
        image: 'https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        href: '/product/repair-mask'
      },
    ],
    listTitle: 'Skin Care',
    listItems: [
      { title: 'Cleansers', href: '/skin/cleansers' },
      { title: 'Moisturizers', href: '/skin/moisturizers' },
      { title: 'Serums', href: '/skin/serums' },
      { title: 'Masks', href: '/skin/masks' },
    ],
    favoritesTitle: 'Hair Care',
    favoriteItems: [
      { title: 'Shampoo', href: '/hair/shampoo' },
      { title: 'Conditioner', href: '/hair/conditioner' },
      { title: 'Treatments', href: '/hair/treatments' },
      { title: 'Styling', href: '/hair/styling' },
    ]
  },
  'Discovery Sets': {
    products: [
      { 
        title: 'Scent Sampler', 
        price: '$35', 
        image: 'https://images.pexels.com/photos/3762324/pexels-photo-3762324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        href: '/product/scent-sampler'
      },
      { 
        title: 'Skincare Starter', 
        price: '$48', 
        image: 'https://images.pexels.com/photos/6621333/pexels-photo-6621333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        href: '/product/skincare-starter'
      },
    ],
    listTitle: 'By Category',
    listItems: [
      { title: 'Fragrance Sets', href: '/discovery/fragrance' },
      { title: 'Skincare Sets', href: '/discovery/skincare' },
      { title: 'Hair Sets', href: '/discovery/hair' },
      { title: 'Mixed Collections', href: '/discovery/mixed' },
    ],
    favoritesTitle: 'By Price',
    favoriteItems: [
      { title: 'Under $30', href: '/discovery/under-30' },
      { title: '$30-$50', href: '/discovery/30-50' },
      { title: '$50+', href: '/discovery/50-plus' },
      { title: 'Value Sets', href: '/discovery/value' },
    ]
  },
  'Gifts + Sets': {
    products: [
      { 
        title: 'Luxury Gift Set', 
        price: '$150', 
        image: 'https://images.pexels.com/photos/6707278/pexels-photo-6707278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        href: '/product/luxury-gift-set'
      },
      { 
        title: 'Essential Collection', 
        price: '$95', 
        image: 'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        href: '/product/essential-collection'
      },
    ],
    listTitle: 'Gift Types',
    listItems: [
      { title: 'Gift Sets', href: '/gifts/sets' },
      { title: 'Gift Cards', href: '/gifts/cards' },
      { title: 'Ready to Gift', href: '/gifts/ready' },
      { title: 'Limited Edition', href: '/gifts/limited' },
    ],
    favoritesTitle: 'Gift Occasions',
    favoriteItems: [
      { title: 'Birthday', href: '/gifts/birthday' },
      { title: 'Anniversary', href: '/gifts/anniversary' },
      { title: 'Thank You', href: '/gifts/thank-you' },
      { title: 'Self Care', href: '/gifts/self-care' },
    ]
  },
  'About Us': {
    products: [
      { 
        title: 'Our Story', 
        price: '', 
        image: 'https://images.pexels.com/photos/3738338/pexels-photo-3738338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        href: '/about/story'
      },
      { 
        title: 'Sustainability', 
        price: '', 
        image: 'https://images.pexels.com/photos/5698697/pexels-photo-5698697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        href: '/about/sustainability'
      },
    ],
    listTitle: 'Learn More',
    listItems: [
      { title: 'Our Brand', href: '/about/brand' },
      { title: 'Ingredients', href: '/about/ingredients' },
      { title: 'Sustainability', href: '/about/sustainability' },
      { title: 'Press', href: '/about/press' },
    ],
    favoritesTitle: 'Connect',
    favoriteItems: [
      { title: 'Contact Us', href: '/about/contact' },
      { title: 'Careers', href: '/about/careers' },
      { title: 'FAQ', href: '/about/faq' },
      { title: 'Journal', href: '/about/journal' },
    ]
  },
  'Perfect Perfume Quiz': {
    products: [
      { 
        title: 'Find Your Scent', 
        price: '', 
        image: 'https://images.pexels.com/photos/6669033/pexels-photo-6669033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        href: '/quiz/start'
      },
      { 
        title: 'Custom Blends', 
        price: 'From $85', 
        image: 'https://images.pexels.com/photos/3650469/pexels-photo-3650469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        href: '/custom-blends'
      },
    ],
    listTitle: 'Quiz Types',
    listItems: [
      { title: 'Scent Profile', href: '/quiz/profile' },
      { title: 'Mood Match', href: '/quiz/mood' },
      { title: 'Personality', href: '/quiz/personality' },
      { title: 'Season', href: '/quiz/season' },
    ],
    favoritesTitle: 'Results',
    favoriteItems: [
      { title: 'Recommended', href: '/quiz/recommended' },
      { title: 'Similar Scents', href: '/quiz/similar' },
      { title: 'Custom Blends', href: '/quiz/custom' },
      { title: 'Gift Guide', href: '/quiz/gift-guide' },
    ]
  },
};

// Default fallback content
const defaultContent: MegaMenuContent = {
  products: [
    { 
      title: 'Featured Item', 
      price: '$75', 
      image: 'https://images.pexels.com/photos/3373230/pexels-photo-3373230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      href: '/product/featured'
    },
    { 
      title: 'New Arrival', 
      price: '$85', 
      image: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      href: '/product/new-arrival'
    },
  ],
  listTitle: 'Categories',
  listItems: [
    { title: 'All Products', href: '/shop/all' },
    { title: 'New Arrivals', href: '/shop/new' },
    { title: 'Bestsellers', href: '/shop/bestsellers' },
    { title: 'Last Chance', href: '/shop/last-chance' },
  ],
  favoritesTitle: 'Collections',
  favoriteItems: [
    { title: 'Under $50', href: '/collections/under-50' },
    { title: 'Luxury Picks', href: '/collections/luxury' },
    { title: 'Essentials', href: '/collections/essentials' },
    { title: 'Gift Sets', href: '/collections/gift-sets' },
  ]
};

type MegaMenuProps = {
  category: string;
  onClose: () => void;
};

export default function MegaMenu({ category, onClose }: MegaMenuProps) {
  const [content, setContent] = useState<MegaMenuContent>(defaultContent);

  useEffect(() => {
    setContent(megaMenuData[category] || defaultContent);
  }, [category]);

  const menuVariants = {
    hidden: { 
      opacity: 0, 
      y: -5,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      className="absolute top-full left-0 right-0 bg-white shadow-lg z-50"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Featured Products */}
          <div className="col-span-7">
            <div className="grid grid-cols-4 gap-4">
              {content.products.map((product, index) => (
                <Link 
                  href={product.href} 
                  key={index} 
                  className="group block"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-2">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 group-hover:text-brand-dark transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500">{product.price}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Categories and Collections */}
          <div className="col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-wider text-gray-900 mb-3">
                {content.listTitle}
              </h3>
              <ul className="space-y-2">
                {content.listItems.map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href} 
                      className="group flex items-center text-sm text-gray-600 hover:text-brand-dark transition-colors"
                    >
                      <span>{item.title}</span>
                      <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-medium uppercase tracking-wider text-gray-900 mb-3">
                {content.favoritesTitle}
              </h3>
              <ul className="space-y-2">
                {content.favoriteItems.map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href} 
                      className="group flex items-center text-sm text-gray-600 hover:text-brand-dark transition-colors"
                    >
                      <span>{item.title}</span>
                      <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
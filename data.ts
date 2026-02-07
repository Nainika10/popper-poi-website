
import { MenuItem } from './types';

export const menuItems: MenuItem[] = [
  // BURGERS
  { 
    id: 1, 
    name: 'Veg Burger', 
    description: 'Crunchy vegetable patty with Indian spices, topped with fresh onions, tomatoes, and spicy green chutney mayo.', 
    price: 80, 
    category: 'burgers', 
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80' 
  },
  { 
    id: 2, 
    name: 'Paneer Burger', 
    description: 'Thick grilled paneer block marinated in tandoori masala with a crispy outer layer.', 
    price: 110, 
    category: 'burgers', 
    image: 'https://images.unsplash.com/photo-1626078436898-96537704209f?w=800&q=80' 
  },
  { 
    id: 3, 
    name: 'Chicken Burger', 
    description: 'Juicy desi-style chicken patty with tandoori mayo and extra zesty seasoning.', 
    price: 110, 
    category: 'burgers', 
    image: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=800&q=80' 
  },
  { 
    id: 4, 
    name: 'Crunchy Chicken Burger', 
    description: 'Spicy, double-breaded chicken fillet with a perfect crunch and Peri-Peri sprinkle.', 
    price: 130, 
    category: 'burgers', 
    image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?w=800&q=80' 
  },
  
  // SANDWICH
  { id: 5, name: 'Veg Sandwich', description: 'Buttered bread with green chutney, spiced potatoes, and garden veg.', price: 80, category: 'sandwich', image: 'https://images.unsplash.com/photo-1528735602780-6552c63e59e3?w=800&q=80' },
  { id: 6, name: 'Paneer Sandwich', description: 'Loaded paneer tikka chunks with capsicum and melted cheese.', price: 120, category: 'sandwich', image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=800&q=80' },
  { id: 7, name: 'Chicken Sandwich', description: 'Juicy chicken breast slices with black pepper and house dressing.', price: 110, category: 'sandwich', image: 'https://images.unsplash.com/photo-1559466273-d95e72debaf8?w=800&q=80' },
  
  // STARTERS
  { id: 8, name: 'Chicken Popcorn', description: 'Crispy southern-spiced bite-sized chicken chunks.', price: 120, category: 'starters', image: 'https://images.unsplash.com/photo-1562967914-6cbb048a1d5f?w=800&q=80' },
  { id: 9, name: 'Chicken Wings (6pc)', description: 'Succulent wings tossed in hot and tangy buffalo sauce.', price: 120, category: 'starters', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&q=80' },
  { id: 10, name: 'French Fries', description: 'Classic salted fries - golden, thin, and always crispy.', price: 80, category: 'starters', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80' },
  
  // SHAWARMA
  { id: 11, name: 'Regular Shawarma', description: 'Authentic rumali roll with slow-roasted chicken and garlic tahini.', price: 79, category: 'shawarma', image: 'https://images.unsplash.com/photo-1642142475494-076f82782e4f?w=800&q=80' },
  { id: 12, name: 'S.P Chicken Shawarma', description: 'Special edition: Loaded with double meat, extra spice, and house sauce.', price: 99, category: 'shawarma', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80' },
  { id: 13, name: 'Popper Poi Pot Shawarma', description: 'Our world-famous Pot Shawarma: Smoky, authentic, and unmatched.', price: 139, category: 'shawarma', image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=800&q=80' },
  
  // COMBOS
  { id: 14, name: '2 + 1 Chicken Shawarma', description: 'Triple treat: Buy 2 get 1 on our classic chicken shawarmas.', price: 199, category: 'combos', image: 'https://images.unsplash.com/photo-1518013391915-e44391401750?w=800&q=80' },
  { id: 15, name: 'Pot + 2 SP + Drink', description: 'The Grand Feast: One Pot Shawarma, 2 Special Shawarmas, and a cold drink.', price: 309, category: 'combos', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80' },
  
  // PIZZA
  { id: 16, name: 'Cheese Pizza', description: 'Gooey mozzarella cheese on a stone-baked crust.', price: 80, category: 'pizza', image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad50?w=800&q=80' },
  { id: 17, name: 'Paneer Pizza', description: 'Desi style pizza topped with marinated paneer and fresh herbs.', price: 140, category: 'pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80' },
  { id: 18, name: 'BBQ Chicken Pizza', description: 'Tangy BBQ sauce with grilled chicken, onions, and extra cheese.', price: 130, category: 'pizza', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80' },
];

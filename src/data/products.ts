export interface Product {

  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVegan?: boolean;
  isGlutenFree?: boolean;
  customizable?: boolean;
  availability?: 'in-stock' | 'pre-order' | 'seasonal';
  nutritionInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

export interface Category {
  title: string;
  items: {
    name: string;
    description: string;
    image: string;
  }[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Croissant",
    description:"A classic croissant is a buttery, flaky pastry that originates from France. Known for its crescent shape, this delightful treat is made from a rich dough that undergoes a process of lamination, where layers of butter are folded into the dough multiple times to create its signature flaky texture. The exterior is golden brown and crisp, while the interior is soft and airy, often with a slightly chewy bite. Croissants are typically enjoyed fresh, either plain or filled with various ingredients such as chocolate, almond paste, or ham and cheese. They are a staple in French bakeries and are often served with coffee or tea, making them a perfect choice for breakfast or a delightful snack throughout the day.",
    price: 60,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Pastries"
  },
  {
    id: 2,
    name: "Whole Wheat Bread",
    description: "Whole wheat bread is a type of bread that is made from whole wheat flour",
    price: 40,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Breads"
  },
  {
    id: 3,
    name: "Chocolate Cake",
    description: "A rich, moist, and decadent chocolate cake that is perfect for any occasion",
    price: 500,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Cakes"
  },
  {
    id: 4,
    name: 'Chocolate Truffle Cake',
    description: 'Rich chocolate cake with truffle frosting',
    price: 599,
    image: 'https://images.unsplash.com/...',
    category: 'Cakes'
  },
  {
    id: 5,
    name: 'Fruit Danish',
    description: 'Flaky pastry with fresh fruit filling',
    price: 79,
    image: 'https://images.unsplash.com/...',
    category: 'Pastries'
  },
  {
    id: 6,
    name: "Butter Naan",
    description: "Soft and buttery Indian bread, perfect with curry",
    price: 35,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    category: "Breads"
  },
  {
    id: 7,
    name: "Pineapple Pastry",
    description: "Fresh cream pastry with pineapple chunks",
    price: 75,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
    category: "Pastries"
  },
  {
    id: 8,
    name: "Wedding Cake - Classic Vanilla",
    description: "Three-tiered elegant vanilla cake with buttercream frosting, perfect for weddings",
    price: 8999,
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d",
    category: "Wedding Cakes"
  },
  {
    id: 9,
    name: "Birthday Special Black Forest",
    description: "Classic Black Forest cake with fresh cherries and chocolate shavings",
    price: 799,
    image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63",
    category: "Birthday Cakes"
  },
  {
    id: 10,
    name: "Multigrain Health Bread",
    description: "Nutritious multigrain bread packed with seeds and whole grains",
    price: 65,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    category: "Healthy Options"
  },
  {
    id: 11,
    name: "Festival Sweet Box",
    description: "Assorted traditional Indian sweets perfect for festivities",
    price: 999,
    image: "https://images.unsplash.com/photo-1589321599763-d66926c29613",
    category: "Gift Boxes"
  },
  {
    id: 12,
    name: "Gluten-Free Chocolate Muffins",
    description: "Delicious chocolate muffins made with gluten-free flour",
    price: 89,
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce",
    category: "Gluten-Free"
  }
];
  
  const categoryList: Category[] = [
    {
      title: "Breads & Pavs",
      items: [
        {
          name: "Fresh Pav",
          description: "Soft, fluffy Mumbai-style pav bread, perfect for vada pav and dabeli",
          image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
          name: "Whole Wheat Bread",
          description: "Healthy whole wheat bread, perfect for sandwiches and toast",
          image: "https://images.unsplash.com/photo-1486887396153-fa416526c108?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
          name: "Butter Toast",
          description: "Crispy, golden-brown toast slices with rich butter flavor",
          image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    {
      title: "Snacks & Namkeen",
      items: [
        {
          name: "Khari Biscuit",
          description: "Flaky, layered puff pastry biscuits, perfect with chai",
          image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
          name: "Butter Cream Roll",
          description: "Soft rolls filled with sweet butter cream",
          image: "https://images.unsplash.com/photo-1586014374593-219aa5678cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
          name: "Masala Namkeen",
          description: "Spicy, crunchy Indian snack mix",
          image: "https://images.unsplash.com/photo-1541533848490-bc8115cd6522?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    {
      title: "Sweets & Desserts",
      items: [
        {
          name: "Motichoor Ladoo",
          description: "Traditional Indian sweet made with tiny gram flour balls",
          image: "https://images.unsplash.com/photo-1589321599763-d66926c29613?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
          name: "Assorted Cupcakes",
          description: "Variety of flavored cupcakes with creamy frosting",
          image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
          name: "Fresh Pastries",
          description: "Daily baked pastries with different fillings",
          image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    {
      title: "Cookies & Biscuits",
      items: [
        {
          name: "Nankhatai",
          description: "Traditional Indian shortbread cookies",
          image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
          name: "Chocolate Chip Cookies",
          description: "Classic cookies loaded with chocolate chips",
          image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
          name: "Butter Cookies",
          description: "Rich, melt-in-mouth butter cookies",
          image: "https://images.unsplash.com/photo-1590080874088-eec64895b423?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    {
      title: "Wedding & Special Occasions",
      items: [
        {
          name: "Premium Wedding Cake",
          description: "Customizable multi-tiered wedding cake with elegant decorations",
          image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d"
        },
        {
          name: "Engagement Special Cupcakes",
          description: "24 pieces of decorated cupcakes perfect for engagement parties",
          image: "https://images.unsplash.com/photo-1586014374593-219aa5678cd2"
        }
      ]
    },
    {
      title: "Healthy & Diet Options",
      items: [
        {
          name: "Sugar-Free Date Cake",
          description: "Naturally sweetened cake made with dates",
          image: "https://images.unsplash.com/photo-1505253286630-1e2471d4d761"
        },
        {
          name: "Keto Bread",
          description: "Low-carb bread perfect for keto diet",
          image: "https://images.unsplash.com/photo-1486887396153-fa416526c108"
        }
      ]
    },
    {
      title: "Festival Specials",
      items: [
        {
          name: "Diwali Sweet Box",
          description: "Premium assorted sweets for festive celebrations",
          image: "https://images.unsplash.com/photo-1589321599763-d66926c29613"
        },
        {
          name: "Christmas Plum Cake",
          description: "Traditional plum cake with rich dried fruits",
          image: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2"
        }
      ]
    }
  ];



// Add more products as needed


// Product categories
export const categories = ["All", ...new Set(products.map(product => product.category))];

// Export the category list separately
export { categoryList };
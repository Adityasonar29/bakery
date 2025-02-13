export interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

export interface OrderStatus {
  status: string;
  timestamp: Date;
  details: string;
}

export interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  status: string;
  statusHistory: OrderStatus[];
  createdAt: Date;
  userId: string;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
}
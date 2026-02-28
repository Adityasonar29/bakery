import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Jahagirdar Bakery brings you the finest baked goods made with love and tradition since 1990.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-sm hover:text-orange-200">Products</Link></li>
              <li><Link to="/order" className="text-sm hover:text-orange-200">Order Online</Link></li>
              <li><Link to="/vision" className="text-sm hover:text-orange-200">Our Vision</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-orange-200">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 1234567890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@jahagirdarbakery.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">123 College Road, Nashik, Maharashtra</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-orange-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-orange-200">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li className="text-sm">Mon - Fri: 8 AM - 8 PM</li>
              <li className="text-sm">Sat: 9 AM - 6 PM</li>
              <li className="text-sm">Sun: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-orange-400">
          <p className="text-center text-sm">
              © {new Date().getFullYear()} Jahagirdar Bakery.
            <p className="text-sm">Developed by Aditya Sonar</p>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
# 🛒 OneOrder React.js Cart Application

This is a responsive e-commerce cart interface built using **React.js** and **Redux**. The application allows users to add products to a cart, adjust product quantities, remove items, and view the total price. The cart state is managed with **Redux** and persisted across sessions using **redux-persist**.

---

## 📋 Project Overview

The project demonstrates how to build a basic shopping cart using **React.js** and **Redux** with features like:
- Adding products to the cart.
- Removing products from the cart.
- Incrementing and decrementing product quantities.
- Displaying the total amount.
- Persisting the cart state across page reloads.

The interface is fully responsive, ensuring a smooth experience across all device sizes.

---

## 🛠️ Key Features

- **Add to Cart**: Users can add products to the cart. If the product is already in the cart, its quantity is updated.
- **Remove from Cart**: Users can remove a product from the cart or clear the entire cart.
- **Increment/Decrement Product Quantity**: Adjust the number of products in the cart directly from the cart page.
- **Total Amount Calculation**: The app calculates the total price based on the quantity of each product.
- **Persistent Cart**: The cart remains stored even after refreshing the page using **redux-persist**.

---

## 🧰 Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Redux**: For managing application state.
- **Redux Toolkit**: Simplifies Redux logic with concise, efficient code.
- **redux-persist**: For persisting the Redux store in local storage.
- **SweetAlert2**: Custom alerts for user feedback.
- **CSS Modules**: Scoped and maintainable CSS.
- **ES6+ JavaScript**: Leveraging modern JavaScript features.

---

## 🚀 Getting Started

To set up the project on your local machine, follow the instructions below.

### Prerequisites

Ensure you have the following installed:
- **Node.js** (version 14 or above)
- **npm** or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/marwa-gamal5/oneorder-shop.git
   cd oneorder-shop
2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm  run dev
4. Open your browser and navigate to:
   ```bash
    http://localhost:5173/
---
## 🛒 Features Breakdown

### 1. Cart State Management

The `cartSlice.js` file defines the cart’s initial state and actions for managing items:

- **`addToCart`**: Adds a product to the cart. If the product already exists, it increments the quantity.
- **`removeFromCart`**: Removes an item from the cart based on its `id`.
- **`incrementQuantity`**: Increases the quantity of a specific item in the cart.
- **`decrementQuantity`**: Decreases the quantity of a specific item. If the quantity reaches zero, the item is removed from the cart.
- **`clearCart`**: Clears all items from the cart.

### 2. API Integration

Products are dynamically fetched from the [FakeStore API](https://fakestoreapi.com/products) to populate the product grid. This API provides product data including title, price, id, and description.

### 3. Responsive Design

The application is designed with a mobile-first approach, utilizing CSS media queries to ensure a responsive and user-friendly experience across all screen sizes.

---
## 📝 Project Structure

 The project is organized as follows:

   
         src/
         │
         ├── components/            # React components
         │   ├── Cart/              # Cart-related components (Cart, CartItem)
         │   ├── Product/           # Product-related components (ProductCard, ProductGrid)
         │
         ├── redux/                 # Redux slice and store
         │   ├── cartSlice.js       # Cart slice for state management
         │   ├── store.js           # Redux store configuration with persist
         │
         ├── App.jsx                # Main app component
         ├── index.jsx              # Entry point
         ├── styles/                # CSS files
         │  
         │
         └── README.md              # Project documentation


 ---
## 🌐 Live Demo

You can view the live demo of the application by clicking the link below:

[Live Demo Link](https://oneorder-shop-owh1.vercel.app/)

---
## 📦 Deployment

To deploy this project, use a service like Vercel

---
## 🐛 Known Issues

- **Quantity Increment Lag**: The quantity increment functionality might experience lag when the network is slow.
  
- **UI Responsiveness**: On smaller screens, the UI responsiveness might break due to long product titles. 

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.
---
## 🔗 Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html) .
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/) .
- [FakeStore API](https://fakestoreapi.com/products) .

---



   

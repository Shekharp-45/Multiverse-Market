# 📦 Multiverse Market

**Multiverse Market** is a full-stack e-commerce web application built with the MERN stack. It allows users to browse, search, and purchase products seamlessly, with secure payment processing and a user-friendly interface.



## 🛠️ Tech Stack

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Gateway**: Braintree (for PayPal and Credit Card payments)
- **Styling**: Bootstrap, CSS
- **State Management**: Context API



## 🚀 Features

### 🛒 User Features
- **Product Browsing**: View and search for products across multiple categories.
- **User Authentication**: Register, login, and manage user accounts.
- **Cart Management**: Add, remove, and manage items in the shopping cart.
- **Checkout**: Secure payments through PayPal and credit card via Braintree.
- **Order History**: View past orders and their status.
- **User Profile**: Manage personal details and shipping address.

### 🔧 Admin Features
- **Admin Dashboard**: Manage products, categories, and users.
- **Order Management**: View and manage customer orders.
- **Add/Update/Delete Products**: Admins can manage the product catalog.


## 🛠️ Installation and Setup

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running locally or a cloud-based instance (e.g., MongoDB Atlas)

### 1. Clone the Repository
git clone https://github.com/username/multiverse-market.git
cd multiverse-market


### 2. Backend Setup
Navigate to the `/server` directory and install dependencies:

cd server
npm install


Create a `.env` file in the `/server` directory with the following variables:

- PORT=your_port_number
- MONGO_URI=your_mongodb_url
- JWT_SECRET=your_jwt_secret
- BRAINTREE_MERCHANT_ID=your_braintree_merchant_id
- BRAINTREE_PUBLIC_KEY=your_braintree_public_key
- BRAINTREE_PRIVATE_KEY=your_braintree_private_key


Start the backend server:

- npm start


### 3. Frontend Setup
Navigate to the `/client` directory and install dependencies:

- cd ../client
- npm install


Create a `.env` file in the `/client` directory with the following variables:

- REACT_APP_API=http:your_port_url/api/v1


Start the frontend development server:

- npm start


## 📄 API Endpoints

### Authentication
- `POST /api/v1/auth/register` – Register a new user
- `POST /api/v1/auth/login` – Login with email and password

### Products
- `GET /api/v1/product/all-products` – Get all products
- `GET /api/v1/product/:productId` – Get a single product

### Cart & Orders
- `POST /api/v1/cart/add` – Add product to the cart
- `POST /api/v1/cart/remove` – Remove product from the cart
- `POST /api/v1/orders` – Place a new order

### Payment
- `GET /api/v1/product/braintree/token` – Get the Braintree token for payment
- `POST /api/v1/product/braintree/payment` – Process the payment



## 🎨 UI/UX Highlights
- Responsive and mobile-friendly design.
- Intuitive navigation and user interface.
- Seamless checkout experience with PayPal and credit card support.



## 📷 Screenshots

### Home Page
![Main home page](https://github.com/user-attachments/assets/ef75460a-bf75-4b26-b91d-a76d8801ba9b)

### Product Page
![product page](https://github.com/user-attachments/assets/50a84ff9-26df-4ed2-afb2-80e9ac55047d)

### Admin Dashboard
![admin dashboard](https://github.com/user-attachments/assets/ea076a70-d000-4017-adfc-af996c26c7bf)

---

## 🐛 Known Issues & Limitations
- [ ] Integration with other payment gateways (e.g., Stripe) is planned.
- [ ] Advanced analytics and reporting features are under development.



## 💡 Future Enhancements
- **Wishlist**: Allow users to save products for later.
- **Coupons**: Implement discount coupon functionality.
- **Product Reviews**: Allow users to review and rate products.
- **Email Notifications**: Send order confirmation and status updates.


## 🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request.



## ✨ Acknowledgments
- [Braintree Payments](https://www.braintreepayments.com/) for the payment gateway integration.
- [React Hot Toast](https://react-hot-toast.com/) for the notification system.


## 📞 Contact
For questions or support, contact me at **shekharpatil@orchidengg.ac.in**.

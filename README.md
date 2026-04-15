# 🛒 Grocery Backend API

Backend system for a grocery web application built using Node.js and Express.

This project includes authentication, product management, cart functionality, email verification, and search features.

---

## 📖 Overview

This project focuses on building a real-world backend system with authentication, data management, and scalable API design.

---

## 🚀 Features

- JWT Authentication & Authorization  
- Email Verification (Nodemailer)  
- Product Management (CRUD with Image Upload)  
- Cart Management  
- Search & Filtering  
- Middleware for Route Protection  
- Modular Backend Architecture  

---

## 📌 Key Highlights

- Designed a modular backend architecture with controllers, models, and middleware  
- Implemented secure authentication using JWT and bcrypt  
- Integrated email verification workflow for user registration  
- Built scalable REST APIs following best practices  

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Authentication:** JSON Web Token (JWT), bcrypt  
- **File Upload:** Multer  
- **Email Service:** Nodemailer  
- **Configuration:** dotenv  
- **Other:** CORS  

---

## 📁 Project Structure

```
backend/
  controllers/
  models/
  routes/
  middlewares/
  email/
  server.js
  package.json
```

---

## ⚙️ Installation & Setup

1. Clone repository:

```
git clone https://github.com/kranthikumar-dev/mern-grocery-backend.git
```

2. Navigate to backend folder:

```
cd MERN_Grocery_App/backend
```

3. Install dependencies:

```
npm install
```

4. Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret
EMAIL_USER=your_email
EMAIL_PASS=your_password
```

5. Run the server:

```
npm start
```

---

## 🔗 API Endpoints

- `/api/auth` → Authentication  
- `/api/products` → Product APIs  
- `/api/cart` → Cart APIs  
- `/api/email` → Email verification  

---

## 🚀 Future Improvements

- Order management system  
- Role-based access control (admin/user)  
- Pagination and advanced filtering  
- Deployment (Render / AWS)  

---

## 📌 Note

This project demonstrates backend development skills including authentication, API design, and database management.

---

## 👨‍💻 Author

Kranthi Kumar

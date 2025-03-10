# Tabletop Kingdom

This repository contains my project for the Introduction to Internet Applications course at AGH UST. The project implements an e-commerce application focusing on tabletop games, utilizing React.js, Material UI, Express.js and SQLite.

## Table of Contents

-   [Setup instructions](#setup-instructions)
-   [Technologies and libraries](#technologies-and-libraries)
-   [Functionality overview](#functionality-overview)
-   [API endpoints](#api-endpoints)

## Setup instructions

**Make sure you have [Node.js](https://nodejs.org/en) installed and clone the repo:**

```
git clone https://github.com/psarsky/tabletop-kingdom.git
cd tabletop-kingdom
```

### Client side:

1. **Navigate to the `client` directory:**
    ```
    cd client
    ```
2. **Install dependencies:**
    ```
    npm install
    ```
3. **Start the development server:**
    ```
    npm run dev
    ```
    By default, the client will run on [`http://localhost:5173`](http://localhost:5173).

### Server side:

1. **Navigate to the `server` directory:**
    ```
    cd server
    ```
1. **Install dependencies:**
    ```
    npm install
    ```
1. **Configure your `.env` file:**
    ```
    PORT=3000
    TOKEN_SECRET=<<your super duper mega secret key>>
    ```
1. **Start the server:**
    ```
    npm start
    ```
    By default, the server will run on [`http://localhost:3000`](http://localhost:3000).

## Technologies and libraries

### Client side:

-   **[Vite](https://vitejs.dev/)**: Build tool for bundling the application.
-   **[React.js](https://reactjs.org/)**: Library for building the user interface.
-   **[React Router](https://reactrouter.com/)**: Library for managing navigation and routing in the application.
-   **[Material UI](https://mui.com/)**: Component library for styling and UI elements.

### Server side:

-   **[Node.js](https://nodejs.org/en)**: JavaScript runtime for building the server.
-   **[Express.js](https://expressjs.com)**: Web framework for creating the REST API.
-   **[SQLite](https://sqlite.org)**: Lightweight database for data storage.
-   **[Sequelize](https://sequelize.org)**: ORM for interacting with the SQLite database.
-   **[JWT (jsonwebtoken)](https://jwt.io)**: For user authentication and authorization.
-   **[bcryptjs](https://npmjs.com/package/bcrypt)**: For password hashing.
-   **[dotenv](https://npmjs.com/package/dotenv)**: For environment variable management.

## Functionality overview

### Client side:

-   **User interface**:
    -   Home page displaying announcements and featured products.
    -   Product list page with searching.
    -   Product details page with detailed descriptions and reviews.
-   **Shopping cart**:
    -   Add products to the cart.
    -   Update quantities or remove items.
-   **Responsive design**:
    -   Optimized for mobile, tablet, and desktop views.

**More features coming as client side is still unfinished.**

### Server side:

-   **User management**:
    -   User registration and login.
    -   Authentication using JWT tokens.
    -   Role-based access control (admin/user).
-   **Product management**:
    -   CRUD operations for products.
-   **Order processing**:
    -   Managing user orders and order items.
    -   Order history retrieval.
-   **Reviews and ratings**:
    -   Users can leave reviews and ratings for products.

## API Endpoints

### User Routes (`userRoutes.js`)

| HTTP Request             | Description                           | Roles allowed                                                                  |
| ------------------------ | ------------------------------------- | ------------------------------------------------------------------------------ |
| **POST /users/register** | Register a new user.                  | Everyone                                                                       |
| **POST /users/login**    | Authenticate a user and return a JWT. | Everyone                                                                       |
| **PATCH /users/id/:id**  | Update user data.                     | Authenticated user (**only their** data)<br> Admin (**any user's** data)       |
| **DELETE /users/id/:id** | Delete user account.                  | Authenticated user (**only their** account)<br> Admin (**any user's** account) |
| **GET /users/id/:id**    | Get user data.                        | Authenticated user (**only their** data)<br> Admin (**any user's** data)       |
| **GET /users**           | Get all users.                        | Admin only                                                                     |

### Product Routes (`productRoutes.js`)

| HTTP Request                      | Description                      | Roles allowed      |
| --------------------------------- | -------------------------------- | ------------------ |
| **POST /products**                | Add a new product.               | Admin only         |
| **POST /products/id/:id/reviews** | Add a review for a product.      | Authenticated user |
| **PATCH /products/id/:id**        | Update product details.          | Admin only         |
| **DELETE /products/id/:id**       | Delete product.                  | Admin only         |
| **GET /products/id/:id**          | Get details of a single product. | Everyone           |
| **GET /products/id/:id/reviews**  | Get the product's reviews.       | Everyone           |
| **GET /products**                 | Get a list of all products.      | Everyone           |
| **GET /products/categories**      | Get a list of all categories.    | Everyone           |

### Order Routes (`orderRoutes.js`)

| HTTP Request              | Description                    | Roles allowed                                                                |
| ------------------------- | ------------------------------ | ---------------------------------------------------------------------------- |
| **POST /orders**          | Create a new order.            | Authenticated user                                                           |
| **PATCH /orders/id/:id**  | Update order details.          | Admin only                                                                   |
| **DELETE /orders/id/:id** | Delete order.                  | Admin only                                                                   |
| **GET /orders/id/:id**    | Get details of a single order. | Authenticated user (**only their** orders)<br> Admin (**any user's** orders) |
| **GET /orders/:userId**   | Get all orders for a user.     | Authenticated user (**only their** orders)<br> Admin (**any user's** orders) |
| **GET /orders**           | Get all orders.                | Admin only                                                                   |

### Review Routes (`reviewRoutes.js`)

| HTTP Request                 | Description             | Roles Allowed                                                                  |
| ---------------------------- | ----------------------- | ------------------------------------------------------------------------------ |
| **DELETE /reviews/:id**      | Remove a review.        | Authenticated user (**only their** reviews)<br> Admin (**any user's** reviews) |
| **GET /reviews/user/userId** | Get all user's reviews. | Authenticated user (**only their** reviews)<br> Admin (**any user's** reviews) |
| **GET /reviews**             | Get all reviews.        | Admin only                                                                     |

## Authentication

JWT-based authentication is implemented in the `auth.js` middleware. Secure routes require a valid JWT token for access. Admin-only routes perform an additional role check.

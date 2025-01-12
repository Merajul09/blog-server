# Blog Project

### Overview

The goal of this assignment is to develop a backend for a blogging platform where users can write, update, and delete their blogs. The system will have two roles: **Admin** and **User**. The Admin has special permissions to manage users and their blogs, while users can perform CRUD operations on their own blogs. The backend will include secure authentication, role-based access control, and a public API for viewing blogs with search, sort, and filter functionalities.

---

### Technologies

- TypeScript
- Node.js
- Express.js
- MongoDB with Mongoose

Where is Admin & User can:

### Admin:

- Will be created manually in the database with predefined credentials.
- Can delete any blog.
- Can block any user by updating a property isBlocked.
- Cannot update any blog.

### User:

- Can register and log in.
- Can create blogs (only when logged in).
- Can update and delete their own blogs.
- Cannot perform admin actions.

### Authentication & Authorization

#### Authentication:

Users must log in to perform write, update, and delete operations.

#### Authorization:

Admin and User roles must be differentiated and secured.

### Blog API

#### A public API for reading blogs:

- Includes blog title, content, author details & other necessary information.
- Supports search, sorting, and filtering functionalities.

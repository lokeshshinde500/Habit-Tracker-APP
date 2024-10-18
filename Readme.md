# API Endpoints

## Auth Routes

- **POST** `/auth/register` - Register a new user.
- **POST** `/auth/login` - Log in an existing user.
- **GET** `/auth/profile` - View user profile (requires authentication).

## Admin Routes

- **GET** `/admin/users` - Get all users (non-admin).
- **GET** `/admin/:id/user` - Get a single user by ID.
- **GET** `/admin/:userId/habit` - Get user habits by user ID.
- **POST** `/admin/habitTemplete` - Create a habit template.

## User Routes

- **GET** `/user/habit` - Get all user habits.
- **GET** `/user/habit/:id` - Get a habit by ID.
- **POST** `/user/habit` - Create a new habit.
- **PATCH** `/user/habit/:id` - Update a habit by ID.
- **DELETE** `/user/habit/:id` - Delete a habit by ID.
- **GET** `/user/habit/pending/:userId` - Get pending habits by user ID.

## Habit Template Routes

- **GET** `/habitTemplete` - Get all habit templates.
- **GET** `/habitTemplete/:id` - Get a specific habit template by ID.

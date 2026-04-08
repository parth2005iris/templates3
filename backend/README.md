# Backend - Iris SaaS

Simple TypeScript backend with Express, Prisma ORM, and PostgreSQL.

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure database**
   - Copy `.env.example` to `.env`
   - Update `DATABASE_URL` with your PostgreSQL connection string

3. **Run migrations**
   ```bash
   npm run migrate
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

Server runs on `http://localhost:3000`

## API Routes

### Auth
- `POST /api/auth/signup` - Create account
- `POST /api/auth/login` - Login

### Users (Protected)
- `GET /api/users/me` - Get current user
- `PUT /api/users/me` - Update user
- `GET /api/users/subscription` - Get subscription plan

## Database

Models:
- **User** - Email, name, password (hashed)
- **Subscription** - User plan (free, pro, enterprise)

## Project Structure

```
backend/
├── src/
│   ├── server.ts           # Main entry
│   ├── config/
│   │   └── database.ts     # Prisma client
│   ├── middleware/
│   │   └── auth.ts         # JWT validation
│   └── routes/
│       ├── auth.ts         # Auth endpoints
│       └── users.ts        # User endpoints
├── prisma/
│   └── schema.prisma       # Database schema
├── package.json
└── .env.example
```

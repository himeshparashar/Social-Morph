# Backend Setup Guide

This project uses PostgreSQL, Prisma, Redis, and JWT for the backend. Below is the guide to set it up and test using Postman.

### **Requirements**:

- Node.js
- PostgreSQL
- Redis
- Prisma
- Postman (for API testing)

### **Steps to Initialize Backend**:

1. **Clone the Repository**:

   ```
   git clone <repository_url>
   cd <project_folder>
   cd server
   ```

2. **Install Dependencies**:
   Ensure you're in the root directory, then run:

   ```
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following:

   ```
   PORT=5000
   ORIGIN=['http://localhost:3000/']
   NODE_ENV='development'
   DATABASE_URL="postgresql://<username>:<password>@localhost:5432/mydatabase"
   ACCESS_TOKEN = "your_access_token_secret"
   ACCESS_TOKEN_EXPIRES_IN = 5
   REFRESH_TOKEN="your_refresh_token_secret"
   REFRESH_TOKEN_EXPIRE = 7
   REDIS_URL=your_redis_url (NOTE: replace redis://default with rediss://default)
   ACTIVATION_SECRET = Your activation secret
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_SERVICE = gmail
   SMTP_EMAIL=your_email
   SMTP_PASSWORD=your_SMTP_password (REMEMBER it is not your generic password, search smtp password)
   ENV_UPDATE = none
   ```

4. **Set Up PostgreSQL**:

   - Ensure PostgreSQL is running locally.
   - Create a new database with the name defined in the `.env` file.
   - Run the Prisma migrations to set up the tables:
     ```
     npx prisma migrate dev --name init
     ```

5. **Start the Development Server**:
   Run the backend server:
   ```
   npm run dev
   ```

### **Testing with Postman**:

1. **Import API Collection**:
   Use Postman to import the provided API collection or manually create requests for each route.

2. **Key Endpoints**:

   - **User Registration**: `POST /api/v1/register`
   - **User Login**: `POST /api/v1/login`
   - **Activate Account (Put OTP)**: `POST /api/v1/activateAccount`
   - **Logout**: `POST /api/v1/logout`

   Test each endpoint using the corresponding request body.

3. **Check Email**:
   Ensure that the SMTP email credentials are correctly configured to receive activation emails.

---

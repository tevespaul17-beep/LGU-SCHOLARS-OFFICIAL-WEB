# LGU Scholars WEB

Simple web dashboard system for LGU scholars and administrators.

## Stack
- Frontend: HTML/CSS, minimal JavaScript
- Backend: Node.js with Express
- Database: MySQL

## Getting Started

### Prerequisites
Before running this website, ensure you have:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MySQL Server** - [Download](https://dev.mysql.com/downloads/mysql/)
- A terminal/command prompt
- A web browser (Chrome, Firefox, Safari, Edge, etc.)

### Step 1: Install Node.js Dependencies

Open your terminal in the project directory and run:
```bash
npm install
```
This will install all required packages like Express, MySQL2, bcrypt, and others.

### Step 2: Set Up Environment Variables

Create a `.env` file in the project root directory with the following content:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=lgu_scholars
SESSION_SECRET=yourSecretKeyHere
PORT=3000
```

**What these mean:**
- `DB_HOST`: Your MySQL server location (usually `localhost`)
- `DB_USER`: Your MySQL username (default is `root`)
- `DB_PASSWORD`: Your MySQL password (leave blank if you didn't set one)
- `DB_NAME`: Name of the database to create
- `SESSION_SECRET`: A random string for session encryption (can be anything)
- `PORT`: Server port (default is 3000)

### Step 3: Set Up MySQL Database

1. Start your MySQL server
2. Open MySQL command line or MySQL Workbench
3. Run these SQL commands to create the database and table:

```sql
-- Create the database
CREATE DATABASE lgu_scholars;

-- Use the database
USE lgu_scholars;

-- Create the users table
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  school VARCHAR(255) NOT NULL,
  school_year VARCHAR(50) NOT NULL,
  address VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('scholar','admin') NOT NULL DEFAULT 'scholar',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Step 4: Start the Server

Choose one of these options:

**Option A: Development Mode (Recommended)**
```bash
npm run dev
```
This uses `nodemon`, which automatically restarts the server when you make code changes.

**Option B: Production Mode**
```bash
npm start
```
This runs the server once. You'll need to manually restart if you make changes.

### Step 5: Access the Website

Once the server is running, you should see:
```
Server running on port 3000
```

Open your web browser and go to:
```
http://localhost:3000
```

- **Theme update:** The HTML/CSS pages in `public/` now use a modern "glassmorphism" theme inspired by the Official Seal of Ormoc City. The primary background is clean white, with a deep‑blue (`#002f6c`) sidebar and light‑blue (`#a7c7e7`) accents. Input fields are rounded with light‑blue borders and deep‑blue icons. The login button, links and error alerts follow the palette. Refresh your browser to pick up the new look.

### React Dashboard Theme
The React example under `frontend/` also implements the same color scheme and provides a fixed deep‑blue sidebar containing:
- Home
- Masterlist
- Scanner
- Overview
- Announcements and Updates
- Community Service Status
- Documents
- Concerns

Clicking each item updates the main content area (welcome message, placeholder data) without a page refresh. The selected link is highlighted in light blue, and the sidebar remains fixed. The top bar shows the current page title with logout button.

Feel free to further customize or extend these layouts and colors to match your branding requirements.

### Testing the Website

**Available Pages:**
- **Home Page**: `http://localhost:3000` - Registration and login
- **Scholar Dashboard**: `http://localhost:3000/scholar/dashboard` - After logging in as scholar
- **Admin Dashboard**: `http://localhost:3000/admin/dashboard` - After logging in as admin
- **Forgot Password**: `http://localhost:3000/forgot` - Password recovery page

**Test Accounts:**
- You can create new accounts via the registration page
- To test admin features, manually update a user's role in MySQL:
  ```sql
  UPDATE users SET role = 'admin' WHERE email = 'test@example.com';
  ```

### Troubleshooting

**Problem: "Cannot find module 'express'"**
- Solution: Run `npm install` again

**Problem: "ECONNREFUSED - Connection refused to database"**
- Check that MySQL server is running
- Verify `.env` file has correct DB_HOST, DB_USER, and DB_PASSWORD
- Ensure the `lgu_scholars` database exists

**Problem: "Port 3000 already in use"**
- Change the PORT in `.env` file to another number (e.g., 3001)
- Or close the application using port 3000

**Problem: Server won't start**
- Check for syntax errors in `.env` file
- Ensure all dependencies are installed: `npm install`
- Check console for error messages

### Stopping the Server

Press `Ctrl + C` in your terminal to stop the server.

## Notes
- The current implementation provides basic pages and form handling.
- OTP and password reset functionality still need server-side logic and mailing setup.
- Role-based redirects and middleware are implemented; other features (announcements, masterlist, etc.) require additional endpoints and UI.

### Front‑end React/Tailwind Example
A sample React front-end has been added under `frontend/` demonstrating a glassmorphic SaaS-style layout with
UI/UX improvements and a functional sidebar. To try it:

1. `cd frontend`
2. `npm install` (ensure [Node.js](https://nodejs.org/) is installed)
3. `npm run start` (this uses Create React App and Tailwind CSS)

The example includes:
- `Login` / `Register` pages with icons and toast-style errors
- A `Layout` component wrapping a collapsible `Sidebar` and top bar
- State-based routing without full page reloads
- Responsive behavior including a hamburger menu on mobile

You can adapt these components or copy styles into your existing EJS/HTML pages.

Feel free to expand on this structure to fit requirements more completely.
# City Pulse

City Pulse is a social platform designed to help users discover and share popular locations in cities. Users can create new posts, save posts, and explore various city hotspots. The application features user authentication and offers a personalized experience for users to save and view posts.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Register, login, and manage user sessions.
- **Create Posts**: Users can create new posts to share city hotspots.
- **Save Posts**: Ability to save posts for quick access later.
- **Filter by Location**: Users can filter posts based on categories, types, and locations.
- **Interactive Map**: Integration with Google Maps API to provide real-time location details.
- **Responsive Design**: Mobile-friendly and accessible on all devices.

## Tech Stack

- **Frontend**: React, SCSS, JSX, React Router
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: Custom session-based authentication (no JWT used)
- **APIs**: Google Maps API
- **Storage**: Local storage for saved items
- **Miscellaneous**: Multer for file uploads, Axios for API requests

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/AsthaChoudhury/City-Pulse.git
   cd City-Pulse

2. **Install Dependencies**
   ```bash
   # For the backend
   cd apii
   npm install

   # For the frontend
   cd ../client
   npm install

3. **Set Up Environment Variables**
Create .env files in both frontend and backend directories with the necessary environment variables. Here’s an example for the backend:
   ```bash
      MONGO_URI=<Your MongoDB URI>
      PORT=5000
      GOOGLE_MAPS_API_KEY=<Your Google Maps API Key>

4. **Run the Application**
 Open two terminals:

- In one terminal, start the backend server:
   ```bash
   cd backend
   npm start
- In another terminal, start the frontend:
   ```bash
   cd frontend
   npm start
Your application will now be running at http://localhost:8800.

## Usage
   1- Register and Login: Start by creating an account or logging in with         your credentials.
   2- Create a Post: Navigate to the “Create Post” section and share a city       hotspot with images and details.
   3- Save a Post: While browsing posts, click the “Save” button to add           posts to your saved items.
   4- View Saved Posts: Access your saved posts in the profile section to         view or remove them.
   5- Search and Filter: Use filters to find posts based on categories,           types, and locations.
   
## API Endpoints

# User Authentication
   - POST /auth/register - Register a new user
   - POST /auth/login - Log in a user
   - POST /auth/logout - Log out a user
     
# Post Management
   - GET /posts/user/:userId - Get all posts by a specific user
   - POST /posts - Create a new post
   - GET /posts - Retrieve all posts
   - GET /posts/:id - Retrieve a specific post by ID
     
# Saved Items
   - POST /posts/save/:id - Save a specific post to the user's profile
   - GET /posts/saved/:userId - Retrieve all saved posts for a specific user

## File Structure

               CityPulse/
               │
               ├── backend/
               │   ├── controllers/          # API route handlers
               │   ├── models/               # Mongoose schemas
               │   ├── routes/               # Express routes
               │   ├── middleware/           # Authentication and authorization logic
               │   ├── utils/                # Utility functions
               │   ├── app.js             # Main server file
               │   └── .env                  # Backend environment variables
               │
               ├── frontend/
               │   ├── src/
               │   │   ├── components/       # Reusable components (e.g., MyList, Card, Filter)
               │   │   ├── context/          # Context providers (e.g., AuthContext, UserContext)
               │   │   ├── pages/            # Application pages (e.g., ProfilePage, Login)
               │   │   ├── App.js            # Main app component
               │   │   ├── index.js          # Entry point for React
               │   └── .env                  # Frontend environment variables
               │
               ├── README.md
               └── .gitignore
## Contributing
If you’d like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.





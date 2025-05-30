# NetReview

A sleek and modern React application to explore movies, view detailed information, and watch trailers seamlessly. NetReview integrates with movie APIs and YouTube to provide an immersive movie browsing experience.

---

## 🚀 Project Overview

NetReview is a dynamic movie review platform built with **React**. It fetches real-time movie details and trailers by integrating third-party APIs, including YouTube for video trailers. The app features:

- Browse popular and trending movies  
- Detailed movie information (cast, synopsis, ratings)  
- Watch trailers directly inside the app via embedded YouTube videos  
- Smooth navigation with React Router  
- Responsive and user-friendly UI using React libraries  

---

## 🛠️ Built With

- **React** – Frontend framework for building user interfaces  
- **React Router DOM** – For client-side routing  
- **Axios** – HTTP client to fetch movie data from external APIs  
- **YouTube API / React YouTube library** – To embed and play movie trailers  
- **Tailwind CSS** (optional if used) – For styling components  
- **Vite** – Development server and build tool  

---

## ⚙️ Features

- **Movie Listing:** View a list of movies fetched from a public movie database API  
- **Movie Details:** Access detailed information about each movie  
- **Trailer Integration:** Watch official trailers via embedded YouTube player  
- **Search Functionality:** Quickly find movies by title  
- **Responsive Design:** Mobile-friendly and optimized for all screen sizes  

---

## 🎯 Getting Started

### Prerequisites

- Node.js installed (v14 or above recommended)  
- npm or yarn package manager  

### Installation

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/vinay1506/netreview.git
   cd netreview
Install dependencies:

bash
Copy
Edit
npm install
Add API keys:
Create a .env file in the root directory with your API keys:

env
Copy
Edit
REACT_APP_MOVIE_API_KEY=your_movie_db_api_key_here
REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key_here
Start the development server:

bash
Copy
Edit
npm run dev
Open the app:
Visit http://localhost:5173 in your browser.

🔗 API Integration
Movie Database API: Provides movie details such as titles, descriptions, ratings, and cast information. (e.g., The Movie Database (TMDb))

YouTube API: Enables embedding and playback of movie trailers inside the app through the React YouTube library.

🖼️ Screenshots

Browse through popular movies with detailed thumbnails.


Detailed view including synopsis, cast, and ratings.


Watch trailers embedded via YouTube.

(Replace these screenshots with your actual images in the /screenshots folder.)

🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to:

Fork the repository

Create a new branch (git checkout -b feature/YourFeature)

Commit your changes (git commit -m 'Add some feature')

Push to the branch (git push origin feature/YourFeature)

Open a pull request

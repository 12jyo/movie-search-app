# 🎥 Movie Search App

A responsive and user-friendly web application for searching movies and viewing detailed information about them using the [OMDB API](http://www.omdbapi.com/).

## 🚀 Features
- **Search Movies:** Input movie titles to search for specific movies.
- **Popular Movies:** Displays a default list of popular movies on the homepage.
- **Movie Details Modal:** View detailed information about a movie, including:
  - Plot
  - Genre
  - Ratings
  - Year of Release
- **Responsive Design:** Works seamlessly across devices, including desktops and mobiles.

## 🛠️ Tech Stack
- **Frontend Framework:** React.js
- **Styling:** Basic CSS for simplicity and responsiveness
- **API Integration:** [OMDB API](http://www.omdbapi.com/)

## 📂 Folder Structure
MOVIE-SEARCH-APP
├── node_modules
├── public
├── src
│   ├── components
│   │   └── style
│   │       ├── Header.css
│   │       ├── index.css
│   │       ├── MovieCard.css
│   │       └── MovieDetailsModal.css
│   ├── api.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   └── setupTests.js
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── README.md


## 🚀 Getting Started

### Prerequisites
- Install [Node.js](https://nodejs.org/) (v14 or higher recommended).
- Obtain an API key from the [OMDB API](http://www.omdbapi.com/apikey.aspx).

### Steps to Run Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/movie-search-app.git
   cd movie-search-app

Install Dependencies
npm install

Set Up Environment Variables Create a .env file in the root directory and add the following:
REACT_APP_API_KEY=your_omdb_api_key
REACT_APP_BASE_URL=http://www.omdbapi.com/

Start the Development Server
npm start

The app uses the OMDB API to fetch movie data. Below is an example API call:
http://www.omdbapi.com/?s=Inception&apikey=your_omdb_api_key


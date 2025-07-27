📽️ Movie Flix - React Native App
Welcome to Movie Flix, a sleek and modern React Native mobile app that lets users browse movies, view detailed information, and explore current and upcoming trending titles.

Built with Expo + NativeWind + TMDB API + Appwrite, Movie Flix delivers a responsive and visually engaging movie experience for mobile users.

🚀 Features
🎬 Browse Popular & Trending Movies

🔍 Search for your favorite titles

📝 View detailed movie info including:

-Poster

-Title, Release Year, Duration

-Ratings (from TMDB)

-Budget & Revenue

-Overview, Genres, and Production Companies

💾 Save favorite movies (local state or future Firebase integration)

🌙 Beautiful dark mode UI with NativeWind

🔙 Go-back navigation for smooth UX

🧑‍💻 Tech Stack
React Native

Expo

TypeScript

Tailwind CSS / NativeWind

Appwrite for Database

TMDB API

Expo Router for navigation


📦 Installation
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/WinningCloud/Movie_flix_React_Native_App.git
cd Movie_flix_React_Native_App
2. Install Dependencies
bash
Copy
Edit
npm install
3. Add Your API Key
Create a .env file in the root directory and add your TMDB API key:

env
Copy
Edit
TMDB_API_KEY=your_tmdb_api_key_here
💡 If you're using expo-constants to load .env, make sure the babel.config.js and metro.config.js are configured properly.

4. Start the App
bash
Copy
Edit
npx expo start
📁 Folder Structure
php
Copy
Edit
├── app/
│   ├── (tabs)/         # Tab screens (Home, Search, Saved)
│   ├── movies/         # Movie detail screen
│   └── _layout.tsx     # Router layout
├── components/         # Reusable UI components
├── constants/          # Icons, Images
├── services/           # API logic and fetch helpers
├── types/              # Custom TypeScript interfaces
├── tailwind.config.js  # NativeWind config
├── global.css
✅ To-Do (Future Features)
🔐 User authentication (Firebase)

❤️ Save favorites to cloud

🎞️ Watch trailers (YouTube integration)

📱 Android/iOS builds & store publishing

🙌 Credits
Movie data powered by TMDB API

Icons and UI inspired by modern movie apps and design trends

📄 License
This project is licensed under the MIT License.

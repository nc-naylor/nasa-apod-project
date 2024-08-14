# Astronomy Picture of the Day Project

This project is a React.js application that showcases NASA's Astronomy Picture of the Dat (APOD). The application fetches and displays the daily image, although with its title, description, and other relevant details.

## Live Demo

Check out the live version of the Astronomy Picture of the Day Project here: [APOD Project](https://nc-naylor-nasa-apod-project.netlify.app/)

## Features

- **API Integration**: Fetches data from NASA's APOD API to display the astronomy picture of the day and other relevant data.
- **Local Caching**: API data is cached using `localStorage` to reduce unnecessary API calls and enhance loading speed.
- **Responsive Sidebar**: A responsive sidebar that can be toggled to show detailed information about the image.
- **Loading State**: A loading spinner is displayed while the API data is being fetched.

## Getting Started

#### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- [NASA API KEY](https://api.nasa.gov/): You'll need NASA's APOD API key to fetch data. If you don't have one, you can get it [here](https://api.nasa.gov/).

## Installation

1. Clone the repository:

```bash
  git clone https://github.com/nc-naylor/nasa-apod-project.git
  cd nasa-apod-project
```

2. Set up your API key:

- Create a `.env` file in the root of your project.
- Add your NASA API key to this file:

```env
  VITE_NASA_API_KEY=your_nasa_api_key_here
```

3. Install dependencies:

```bash
  npm install
```

4. Start the development server:

```bash
  npm run dev
```

5. Open your browser and navigate to:

```bash
  http://localhost:5173/
```

## Project Structure

- `App.jsx`: Manages the state of the application and handles API data fetching, caching, and rendering the main components (Main, Sidebar, and Footer).
- `Main.jsx`: Responsible for displaying the background image of the day.
- `Sidebar.jsx`: Displays detailed information about the image, such as title, date, description, and copyright details.
- `Footer.jsx`: Displays the project and image titles, and contains a button to toggle the sidebar.
- `index.css`: Styling for the application.

## License

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.

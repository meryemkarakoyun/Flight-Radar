
# ✈️ Flight Radar
A live flight tracking application built with **React**, **Redux Toolkit**, and **Bootstrap**. Users can explore active flights over the Turkey region on an interactive map, browse flights in a paginated table, and view detailed flight information — all powered by the **Flight Radar API** via RapidAPI.  

## 🚀 Features
- 🗺️ **Interactive Map** – Leaflet map with OpenStreetMap tiles, centered on Turkey.
- ✈️ **Live Flight Markers** – Aircraft displayed as direction-rotated plane icons with popup (callsign & detail action).
- 📋 **Flight List** – Table view with id, callsign, latitude, longitude, direction, speed, and altitude.
- 📄 **Pagination** – 12 flights per page with React Paginate navigation.
- 🔍 **Flight Detail Modal** – Callsing, flight number, aircraft model code, image gallery, airport info, and time data.
- 🖼️ **Aircraft Image Gallery** – Splide carousel for large, medium, or thumbnail aircraft photos.
- 🛫 **Airport Information** – Origin & destination IATA codes, cities, and timezone details.
- 🕐 **Flight Times** – Scheduled, real, and estimated departure/arrival times.
- 🛩️ **Aircraft Details** – Aircraft type, registration (tail code), and country ID.
- 🧭 **Route Visualization** – Red polyline trail on the map for the selected flight.
- 📍 **Airport Markers** – Origin and destination markers on the map when a flight detail is open.
- ⚡ **Redux Toolkit** – Centralized state with `createAsyncThunk` for API requests.
- 📱 **Responsive Layout** – Bootstrap table and custom CSS styling.

  
## 🛠️ Tech Stack


<div align="center">
  
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white) 
![Redux](https://img.shields.io/badge/Redux_Toolkit-2-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-1.9-199900?style=for-the-badge&logo=leaflet&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![RapidAPI](https://img.shields.io/badge/Flight_Radar_API-0055FF?style=for-the-badge&logo=rapidapi&logoColor=white)

</div>


| Technology | Purpose |
|------------|---------|
| **React 19** | Core UI library |
| **Redux Toolkit** | Global state management & async thunks |
| **React Router DOM v7** | Client-side routing |
| **Axios** | HTTP requests to Flight Radar API |
| **Flight Radar API (RapidAPI)** | Live flights, flight details & trail data |
| **Leaflet + React Leaflet** | Interactive map, markers & polylines |
| **Bootstrap v5** | Table and responsive utilities |
| **Splide.js** | Aircraft image carousel in detail modal |
| **React Paginate** | Pagination for the flight list |
| **Lucide React** | Icon library |
| **Vite** | Fast development & build tool |


## 📽️ Demo

<div align="center">

<img width="800" height="385" alt="FlightRadar2 mp4-ezgif com-video-to-gif-converter" src="https://github.com/user-attachments/assets/352d8b30-f4bb-487a-8948-cb1c9bbff826" />


</div>

## ⚙️ Getting Started
### Prerequisites
- Node.js
- A RapidAPI key for [Flight Radar API](https://rapidapi.com/apidojo/api/flight-radar1)

 Create environment file
 Add your RapidAPI key:
 VITE_API_KEY=your_rapidapi_key_here

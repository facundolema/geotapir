import React from "react";
import { NavLink } from "react-router-dom";
import './Home.css';

export default function Home() {

  return (
    <main>
      <h1>GeoTapir</h1>
      <p>A collection of interactive maps, made with React, Leaflet and Vite.</p>
      <div className="button-container">
        <NavLink to="/places" className="button">Places</NavLink>
        <NavLink to="/crime" className="button">Crime</NavLink>
      </div>
    </main>
  );
}

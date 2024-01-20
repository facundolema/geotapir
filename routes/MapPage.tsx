import React from "react";
import './MapPage.css';

export default function MapPage({component: Component, title}: {component: React.ElementType, title: string}) {
  return (
    <main>
      <h1>{title}</h1>
      <Component />
    </main>
  );
}

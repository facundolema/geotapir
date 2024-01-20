import React from "react";
import Map from "@/components/Map";
import world from "@/src/maps/ne_50m_admin_0_sovereignty.json";
import markers from "@/src/maps/markers.json";
import styles from  './styles.json'

export default function PlacesMap() {
  const selected_countries = [
    "FRA","ESP","ITA","DEU","GBR","NLD","BEL","SWE","AUS","PRT","DEN","CHE",
    "NOR","FIN","POL","AUT","ARG","CZE","USA","CAN","DNK","IRL","ISL","HRV",
    "NZL", "USA"
  ]

  return (
    <Map
      map={world}
      markers={markers}
      center={[25, -35]}
      zoom={2.4}
      styles={styles}
      onEachDivision={(feature: any, layer: any) => {
        console.log(feature.properties);
        if (selected_countries.includes(feature.properties.ADM0_ISO)) {
          layer.options.fillColor = "var(--secondary)";
        }
      }}
    />
  );
}
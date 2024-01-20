import React from "react";
import Map from "@/components/Map";
import world from "@/src/maps/ne_50m_admin_0_sovereignty.json";
import data from "@/src/data/homice_rate_2008-2021";
import styles from "./styles.json";

function hslToHex(h, s, l) {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

const getColor = (number) => {
  const minLightness = 90;
  const maxLightness = 50;
  const lightness = minLightness + (number / 3) * (maxLightness - minLightness);
  return hslToHex(0, 60, lightness);
};

export default function CrimeMap() {
  return (
    <Map
      map={world}
      center={[55, 15]}
      zoom={4}
      styles={styles}
      onEachDivision={(feature: any, layer: any) => {
        let crime_stats = data[feature.properties.ISO_A2];
        if (crime_stats)
          layer.options.fillColor = getColor(
            crime_stats["homicide_rate"]["2021"]
          );
      }}
    />
  );
}

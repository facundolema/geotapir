import { MapContainer, GeoJSON, Popup, CircleMarker } from "react-leaflet";
import React from "react";
import "./Map.css";

const Map = ({
  map,
  center,
  zoom,
  styles,
  onEachDivision,
  markers,
}: {
  map: any;
  center: [number, number];
  zoom: number;
  styles: { mapContainer: any; geoJSON: any; marker: any };
  onEachDivision: (feature: any, layer: any) => void;
  markers?: { name: string; coord: [number, number] }[];
}) => {
  return (
    <div className="container">
      <MapContainer
        center={center}
        zoom={zoom}
        zoomSnap={0.1}
        style={styles.mapContainer}
      >
        <GeoJSON
          data={map}
          onEachFeature={onEachDivision}
          style={styles.geoJSON}
        />

        {markers &&
          markers.map((marker) => (
            <CircleMarker
              center={[marker.coord[1], marker.coord[0]]}
              radius={4}
              pathOptions={styles.marker}
            >
              <Popup>{marker.name}</Popup>
            </CircleMarker>
          ))}
      </MapContainer>
    </div>
  );
};

export default Map;

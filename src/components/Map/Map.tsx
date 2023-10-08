"use client";

import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { Loader } from "@googlemaps/js-api-loader";
import styles from "@/components/Map/Map.module.sass";
import { useMemo } from "react";

export default function Map({ markers }: { markers: Array<any> }) {
  // const loader = new Loader({
  //   apiKey: process.env.GOOGLE_MAPS_API_KEY,
  //   version: "weekly",
  // });

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY || "",
  });

  const center = useMemo(
    () => ({ lat: 46.1194375974886, lng: 14.757951817004084 }),
    []
  );

  return (
    <div className={styles.map}>
      {isLoaded ? (
        <GoogleMap
          mapContainerClassName={styles.mapContainer}
          center={center}
          zoom={8}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={{ lat: marker.latitude, lng: marker.longitude }}
              label={marker?.label}
            >
              {/* {
                        (activeInfoWindow === index)
                        &&
                        <InfoWindow 
                            position={marker.position} 
                            onCloseClick={() => setActiveInfoWindow(null)}
                        >
                            <b>{marker.position.lat}, {marker.position.lng}</b>
                        </InfoWindow>
                    }   */}
            </Marker>
          ))}
        </GoogleMap>
      ) : (
        "loading map"
      )}
    </div>
  );
}

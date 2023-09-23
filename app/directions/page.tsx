"use client";

import { useEffect } from "react";
import Header from "../_global_components/Header";
import { googleConfig } from "../_library/google_api/googleMapsApi";
import { Metadata } from "next";

export const metadeta: Metadata = {
  title: "Directions",
  description: "Directions to Firehouse BBQ & Blues in Richmond, Indiana",
};

const DirectionsPage = () => {
  const COORDS = { lat: 39.83364, lng: -84.89175 };
  const ZOOM = 17;
  const ADDRESS_STREET = "400 N 8th St";
  const ADDRESS_CITY_STATE_ZIP = "Richmond, Indiana 47374";

  const googleMapsConfig = async () => {
    const googleLoader = await googleConfig();
    const { Map } = await googleLoader.importLibrary("maps");
    const { AdvancedMarkerElement } = await googleLoader.importLibrary(
      "marker"
    );

    const map = new Map(document.getElementById("map") as HTMLElement, {
      center: COORDS,
      zoom: ZOOM,
      mapId: "DIRECTIONS_MAP",
      disableDefaultUI: true,
      zoomControl: true,
    });

    new AdvancedMarkerElement({
      map,
      position: COORDS,
      title: "Firehouse BBQ & Blues",
    });
  };

  useEffect(() => {
    googleMapsConfig();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Header
        header="Directions"
        subHeader="Get directions to Firehouse BBQ & Blues"
      />
      <div className="py-5">
        <h1 className="text-lg">{ADDRESS_STREET}</h1>
        <h2 className="text-lg">{ADDRESS_CITY_STATE_ZIP}</h2>
      </div>
      <div id="map" className="h-[300px] w-auto"></div>
    </div>
  );
};

export default DirectionsPage;

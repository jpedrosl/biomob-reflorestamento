'use client';

import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

interface HortaMapPoint {
  nome: string;
  status: string;
  position: [number, number];
}

interface MapSectionHortasProps {
  hortas: HortaMapPoint[];
}

export const MapSectionHortas: React.FC<MapSectionHortasProps> = ({ hortas }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    const loadLeaflet = async () => {
      const L = await import('leaflet');

      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }

      if (!mapRef.current) return;

      mapInstance.current = L.map(mapRef.current).setView([-22.4600, -43.1800], 12);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(mapInstance.current);

      const gardenIcon = L.icon({
        iconUrl: 'https://www.svgrepo.com/show/297221/tomato.svg',
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -36],
      });

      hortas.forEach((horta) => {
        L.marker(horta.position, { icon: gardenIcon })
          .addTo(mapInstance.current!)
          .bindPopup(`<b>${horta.nome}</b><br/>Status: ${horta.status}`);
      });
    };

    loadLeaflet();

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [hortas]);

  return (
    <section
      className="
        w-full max-w-[985px] h-[520px]
        shadow
        bg-white rounded-lg
        flex flex-col items-center justify-start
        p-4
        mx-auto
        max-md:max-w-full max-md:h-auto
      "
    >
      <h2 className="text-black text-[32px] font-normal mb-5 text-center w-full">
        EcoMapa (Hortas Comunitárias)
      </h2>
      <div
        ref={mapRef}
        className="rounded-[10px] overflow-hidden w-full flex-1"
        style={{ minHeight: '405px' }}
      />
    </section>
  );
};

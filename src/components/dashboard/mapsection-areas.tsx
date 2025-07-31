'use client';

import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

interface AreaMapPoint {
  nome: string;
  status: string;
  position: [number, number];
}

interface MapSectionAreasProps {
  areas: AreaMapPoint[];
}

export const MapSectionAreas: React.FC<MapSectionAreasProps> = ({ areas }) => {
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

      const treeIcon = L.icon({
        iconUrl: 'https://www.svgrepo.com/show/267077/tree.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      });

      areas.forEach((ponto) => {
        L.marker(ponto.position, { icon: treeIcon })
          .addTo(mapInstance.current!)
          .bindPopup(`<b>${ponto.nome}</b><br/>Status: ${ponto.status}`);
      });
    };

    loadLeaflet();

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [areas]);

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
        EcoMapa (Reflorestamento)
      </h2>
      <div
        ref={mapRef}
        className="rounded-[10px] overflow-hidden w-full flex-1"
        style={{ minHeight: '405px' }}
      />
    </section>
  );
};

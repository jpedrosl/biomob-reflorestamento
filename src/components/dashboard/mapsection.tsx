'use client';

import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

export const MapSection: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadLeaflet = async () => {
      const L = await import('leaflet');

      const treeIcon = L.icon({
        iconUrl: 'https://www.svgrepo.com/show/267077/tree.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      });

      const hortaIcon = L.icon({
        iconUrl: 'https://www.svgrepo.com/show/297221/tomato.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      });

      const pontosReflorestamento = [
        { position: [-22.4200, -43.2100], nome: 'Reflorestamento Cedro Alto' },
        { position: [-22.4750, -43.2700], nome: 'Mata Serra Branca' },
        { position: [-22.4900, -43.1200], nome: 'Bosque da Luz' },
        { position: [-22.3500, -43.1600], nome: 'Reserva Morro Claro' },
        { position: [-22.4400, -43.1000], nome: 'Floresta da Pedra' },
        { position: [-22.4000, -43.1700], nome: 'Vale dos Pinheiros' },
        { position: [-22.4700, -43.1300], nome: 'Jardim do Mirante' },
        { position: [-22.4350, -43.2100], nome: 'Refúgio das Bromélias' },
        { position: [-22.5100, -43.1800], nome: 'Bosque das Águas Claras' },
        { position: [-22.4550, -43.1400], nome: 'Mata do Alto' },
      ];

      const pontosHorta = [
        { position: [-22.3600, -43.1100], nome: 'Horta Sol Nascente' },
        { position: [-22.4300, -43.2600], nome: 'Horta Vila Nova' },
        { position: [-22.4550, -43.1400], nome: 'Horta Jardim das Oliveiras' },
        { position: [-22.4900, -43.2100], nome: 'Horta do Morro Verde' },
        { position: [-22.5100, -43.1800], nome: 'Horta Pôr do Sol' },
        { position: [-22.4250, -43.1200], nome: 'Horta Vale do Cedro' },
        { position: [-22.4500, -43.1600], nome: 'Horta do Bosque' },
        { position: [-22.4750, -43.2350], nome: 'Horta das Flores' },
        { position: [-22.3950, -43.1500], nome: 'Horta do Mirante' },
        { position: [-22.4950, -43.1900], nome: 'Horta Verdejante' },
      ];

      if (mapRef.current && !(mapRef.current as any)._leaflet_id) {
        const map = L.map(mapRef.current).setView([-22.4600, -43.1800], 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);

        pontosReflorestamento.forEach((ponto) => {
          L.marker(ponto.position, { icon: treeIcon })
            .addTo(map)
            .bindPopup(`<b>${ponto.nome}</b><br/>Área de Reflorestamento`);
        });

        pontosHorta.forEach((ponto) => {
          L.marker(ponto.position, { icon: hortaIcon })
            .addTo(map)
            .bindPopup(`<b>${ponto.nome}</b><br/>Horta Comunitária`);
        });
      }
    };

    loadLeaflet();
  }, []);

  return (
    <section
      className="
        w-full max-w-[922px] h-[520px]
        shadow
        bg-white rounded-lg
        flex flex-col items-center justify-start
        p-4
        mx-auto
        max-md:max-w-full max-md:h-auto
      "
    >
      <h2 className="text-black text-[32px] font-normal mb-5 text-center w-full">
        EcoMapa (Áreas & Hortas Comunitárias)
      </h2>
      <div
        ref={mapRef}
        className="rounded-[10px] overflow-hidden w-full flex-1"
        style={{ minHeight: '405px' }}
      />
    </section>
  );
};

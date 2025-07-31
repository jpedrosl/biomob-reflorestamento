'use client'

import React from 'react';

interface ContactInfo {
  icon: string;
  title: string;
  details: string;
  alt: string;
}

interface SocialMedia {
  icon: string;
  name: string;
  url: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: 'https://www.svgrepo.com/show/389924/location-pin-map.svg',
    title: 'Localização',
    details: 'R. Afrânio Melo Franco, 333 - Quitandinha, Petrópolis - RJ, 25650-000',
    alt: 'Ícone de localização'
  },
  {
    icon: 'https://www.svgrepo.com/show/447356/email.svg',
    title: 'E-mail',
    details: 'biomob@biomob.org',
    alt: 'Ícone de email'
  },
  {
    icon: 'https://www.svgrepo.com/show/345278/whatsapp.svg',
    title: 'WhatsApp',
    details: '(21) 96537-9669',
    alt: 'Ícone do WhatsApp'
  }
];

const socialMedia: SocialMedia[] = [
  {
    icon: 'https://www.svgrepo.com/show/447135/instagram-fill.svg',
    name: 'Instagram',
    url: 'https://www.instagram.com/biomobguia/'
  },
  {
    icon: 'https://www.svgrepo.com/show/473701/linkedin.svg',
    name: 'Linkedin',
    url: 'https://br.linkedin.com/company/biomobguia'
  },
  {
    icon: 'https://www.svgrepo.com/show/512317/github-142.svg',
    name: 'GitHub',
    url: 'https://github.com/RTIC-STEM/2024_2_Biomob_Reflorestamento_Gestao_Hortas_Comunitarias'
  }
];

const mailtoLink = `mailto:biomob@biomob.org`;

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 bg-[rgba(120,227,202,0.49)] w-full px-16 py-10 max-md:px-6 max-md:py-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-16 max-md:flex-col max-md:items-start max-md:gap-8">

        {/* Contatos Localização e Email juntos */}
        <div className="flex items-center gap-14 max-md:flex-col max-md:gap-8 max-md:w-full">
          {contactInfo.slice(0, 2).map((contact, idx) => (
            <div key={idx} className="flex items-center gap-5 min-w-[220px] max-md:min-w-full">
              <img
                src={contact.icon}
                alt={contact.alt}
                className="w-10 h-10 object-contain flex-shrink-0"
              />
              <div>
                <p className="text-black font-semibold text-xl leading-tight">{contact.title}</p>
                {idx === 0 ? (
                  // Endereço com link para Google Maps
                  <a
                    href="https://www.google.com/maps/place/R.+Afrânio+Melo+Franco,+333+-+Quitandinha,+Petrópolis+-+RJ,+25650-000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black text-lg hover:underline hover:text-teal-700 transition-colors"
                  >
                    {contact.details}
                  </a>
                ) : (
                  // E-mail com apenas destinatário
                  <a
                    href={mailtoLink}
                    className="text-black text-lg hover:underline hover:text-teal-700 transition-colors"
                  >
                    {contact.details}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp */}
        <div className="flex items-center gap-5 min-w-[180px] max-md:w-full whitespace-nowrap">
          <img
            src={contactInfo[2].icon}
            alt={contactInfo[2].alt}
            className="w-10 h-10 object-contain flex-shrink-0"
          />
          <div>
            <p className="text-black font-semibold text-xl leading-tight">{contactInfo[2].title}</p>
            <a
              href="https://wa.me/5521965379669"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-lg hover:underline hover:text-teal-700 transition-colors"
            >
              {contactInfo[2].details}
            </a>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="flex flex-col items-center min-w-[220px] max-md:w-full">
          <h3 className="text-black text-xl font-semibold leading-tight whitespace-nowrap mb-4">
            Nossas Redes Sociais
          </h3>
          <div className="flex gap-8">
            {socialMedia.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar nosso ${social.name}`}
                className="transition duration-200 hover:scale-110"
              >
                <img
                  src={social.icon}
                  alt={`Ícone do ${social.name}`}
                  className="w-10 h-10 object-contain flex-shrink-0 transition duration-200 hover:brightness-75 hover:invert hover:sepia hover:hue-rotate-[110deg] hover:saturate-[500%]"
                />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

import type { Metadata } from 'next';
import InfrastructureClient from './InfrastructureClient';

export const metadata: Metadata = {
  title: 'Infrastructure & Manufacturing Plant | CNC & Laser Cutting | Anjali Doors',
  description:
    'Tour Anjali Doors\' modern manufacturing plant in Boisar MIDC equipped with fiber laser cutting, CNC bending presses, robotic laser welding & automated finishing.',
  alternates: {
    canonical: 'https://anjalidoor.com/infrastructure',
  },
  openGraph: {
    title: 'Infrastructure & Manufacturing Plant | CNC & Laser Cutting | Anjali Doors',
    description:
      'High-precision sheet metal fabrication plant at Tarapur MIDC, Boisar. Fiber laser cutting, CNC press brakes, and computerized PUF core injection lines.',
    url: 'https://anjalidoor.com/infrastructure',
    siteName: 'Anjali Doors PVT. LTD.',
    images: [
      {
        url: 'https://anjalidoor.com/images/CNC-Bending-Machines.png',
        width: 1200,
        height: 630,
        alt: 'Anjali Doors CNC Bending & Laser Cutting Infrastructure',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Infrastructure & Manufacturing Plant | CNC & Laser Cutting | Anjali Doors',
    description:
      'Over 1,000 door sets monthly capacity. Explore Anjali Doors advanced sheet metal infrastructure in Boisar MIDC, Maharashtra.',
    images: ['https://anjalidoor.com/images/CNC-Bending-Machines.png'],
  },
};

export default function InfrastructurePage() {
  const infrastructurePageSchema = {
    '@context': 'https://schema.org',
    '@type': ['WebPage', 'IndustrialBusiness'],
    '@id': 'https://anjalidoor.com/infrastructure#webpage',
    url: 'https://anjalidoor.com/infrastructure',
    name: 'Anjali Doors Manufacturing Infrastructure & Production Plant',
    description:
      'State-of-the-art sheet metal processing, computerized CNC bending, high-speed fiber laser cutting, and PUF insulation injection facility in Boisar MIDC, Maharashtra.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'G-3/11, MIDC Tarapur, District Palghar',
      addressLocality: 'Boisar',
      addressRegion: 'Maharashtra',
      postalCode: '401506',
      addressCountry: 'IN',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://anjalidoor.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Infrastructure',
        item: 'https://anjalidoor.com/infrastructure',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(infrastructurePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <InfrastructureClient />
    </>
  );
}

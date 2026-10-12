import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Fire Rated Doors & Industrial Doors Manufacturer India | Anjali Doors',
  description:
    'Anjali Doors is a leading manufacturer of ARAI-certified fire rated doors, industrial steel doors, cleanroom doors & motorized rolling shutters in India. 45+ years trust.',
  alternates: {
    canonical: 'https://anjalidoor.com/',
  },
  openGraph: {
    title: 'Fire Rated Doors & Industrial Doors Manufacturer India | Anjali Doors',
    description:
      'Anjali Doors – Certified manufacturer of 120/180-min fire rated doors, motorized rolling shutters, cleanroom doors & architectural metal solutions in Boisar, Maharashtra.',
    url: 'https://anjalidoor.com/',
    siteName: 'Anjali Doors PVT. LTD.',
    images: [
      {
        url: 'https://anjalidoor.com/images/banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Anjali Doors - Certified Fire Rated & Industrial Door Manufacturer',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fire Rated Doors & Industrial Doors Manufacturer India | Anjali Doors',
    description:
      'ARAI & NABL certified fire rated doors, cleanroom doors & heavy-duty rolling shutters. 45+ years of engineering excellence in India.',
    images: ['https://anjalidoor.com/images/banner.jpg'],
  },
};

export default function HomePage() {
  // Deep structured JSON-LD schemas
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://anjalidoor.com/#organization',
    name: 'Anjali Doors PVT. LTD.',
    url: 'https://anjalidoor.com/',
    logo: 'https://anjalidoor.com/images/logo-1-1.png',
    description:
      'Pioneering Indian manufacturer and exporter of certified fire rated doors, cleanroom doors, motorized rolling shutters, and architectural hollow metal doors.',
    foundingDate: '1980',
    telephone: '+91 9823521791',
    email: 'mayurkulkarni@anjalidoor.com',
    sameAs: [
      'https://www.facebook.com/share/1HhDPiQuFj/?mibextid=wwXIfr',
      'https://www.linkedin.com/in/anjali-doors-bb5598205',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'G-3/11, MIDC Tarapur, District Palghar',
      addressLocality: 'Boisar',
      addressRegion: 'Maharashtra',
      postalCode: '401506',
      addressCountry: 'IN',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Manufacturer'],
    '@id': 'https://anjalidoor.com/#localbusiness',
    name: 'Anjali Doors PVT. LTD.',
    image: 'https://anjalidoor.com/images/Steel-Doors-680x410.jpg',
    telephone: '+91 9823521791',
    email: 'mayurkulkarni@anjalidoor.com',
    url: 'https://anjalidoor.com/',
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'G-3/11, MIDC Tarapur, District Palghar',
      addressLocality: 'Boisar',
      addressRegion: 'Maharashtra',
      postalCode: '401506',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '19.8000',
      longitude: '72.7500',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '17:00',
      },
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://anjalidoor.com/#website',
    url: 'https://anjalidoor.com/',
    name: 'Anjali Doors',
    publisher: {
      '@id': 'https://anjalidoor.com/#organization',
    },
  };

  const catalogItemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Anjali Doors Certified Door Range',
    description: 'Comprehensive catalogue of certified fire rated, cleanroom, and industrial steel doors.',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Fire Rated Doors',
        url: 'https://anjalidoor.com/products/fire-rated-doors',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Pharmaceutical Doors',
        url: 'https://anjalidoor.com/products/pharmaceutical-doors',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Air Tight Doors',
        url: 'https://anjalidoor.com/products/air-tight-doors',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Emergency Exit Doors',
        url: 'https://anjalidoor.com/products/emergency-exit-doors',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Electric Rolling Shutter',
        url: 'https://anjalidoor.com/products/electric-rolling-shutter',
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Shaft Doors',
        url: 'https://anjalidoor.com/products/shaft-doors',
      },
    ],
  };

  return (
    <>
      {/* Server Injected Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogItemListSchema) }}
      />

      <HomeClient />
    </>
  );
}

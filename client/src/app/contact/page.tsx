import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Anjali Doors | Factory Boisar & Office Thane | Get a Quote',
  description:
    'Connect directly with Anjali Doors for factory pricing, BOQ reviews & technical specs. Visit our Boisar MIDC plant or Thane office, or request an online quote.',
  alternates: {
    canonical: 'https://anjalidoor.com/contact',
  },
  openGraph: {
    title: 'Contact Anjali Doors | Factory Boisar & Office Thane | Get a Quote',
    description:
      'Direct contact desk for fire rated steel doors and industrial shutters. Get in touch with our Boisar manufacturing facility or Thane sales office.',
    url: 'https://anjalidoor.com/contact',
    siteName: 'Anjali Doors PVT. LTD.',
    images: [
      {
        url: 'https://anjalidoor.com/images/banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Anjali Doors - Factory and Sales Office',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Anjali Doors | Factory Boisar & Office Thane | Get a Quote',
    description:
      'Direct factory consultation, architectural drawing review & same-day estimates for certified fire rated and industrial doors.',
    images: ['https://anjalidoor.com/images/banner.jpg'],
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': 'https://anjalidoor.com/contact#webpage',
    url: 'https://anjalidoor.com/contact',
    name: 'Contact Anjali Doors PVT. LTD.',
    description:
      'Commercial sales desk, factory technical consultations, and quotation requests for fire-rated doors, rolling shutters, and architectural metal systems.',
  };

  const boisarLocationSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Manufacturer'],
    '@id': 'https://anjalidoor.com/#boisar-plant',
    name: 'Anjali Doors PVT. LTD. - Boisar Manufacturing Plant & Works',
    telephone: '+91 9823521791',
    email: 'mayurkulkarni@anjalidoor.com',
    url: 'https://anjalidoor.com/contact',
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

  const thaneLocationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://anjalidoor.com/#thane-office',
    name: 'Anjali Doors PVT. LTD. - Thane Regional Sales Office',
    telephone: '+91 9823521791',
    email: 'mayurkulkarni@anjalidoor.com',
    url: 'https://anjalidoor.com/contact',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop-10 Rutu Enclave, Anandnagar, Ghodbunder Road',
      addressLocality: 'Thane West',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '19.2600',
      longitude: '72.9600',
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
        name: 'Contact Us',
        item: 'https://anjalidoor.com/contact',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(boisarLocationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(thaneLocationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <ContactClient />
    </>
  );
}

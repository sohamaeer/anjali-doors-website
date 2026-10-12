import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Anjali Doors | 45+ Years of Certified Door Manufacturing in India',
  description:
    'Discover Anjali Doors PVT. LTD. – pioneering manufacturer of fire-rated doors, rolling shutters & industrial metal doors with 45+ years of engineering mastery in Boisar.',
  alternates: {
    canonical: 'https://anjalidoor.com/about',
  },
  openGraph: {
    title: 'About Anjali Doors | 45+ Years of Certified Door Manufacturing in India',
    description:
      'Learn about Anjali Doors PVT. LTD., an established Indian manufacturer of certified fire rated doors, cleanroom systems, and industrial shutters since 1978.',
    url: 'https://anjalidoor.com/about',
    siteName: 'Anjali Doors PVT. LTD.',
    images: [
      {
        url: 'https://anjalidoor.com/images/Steel-Doors-680x410.jpg',
        width: 1200,
        height: 630,
        alt: 'About Anjali Doors Manufacturing Heritage',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Anjali Doors | 45+ Years of Certified Door Manufacturing in India',
    description:
      'Pioneering door manufacturing in India since 1978. ARAI & NABL certified fire rated doors and industrial access systems.',
    images: ['https://anjalidoor.com/images/Steel-Doors-680x410.jpg'],
  },
};

export default function AboutPage() {
  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://anjalidoor.com/about#webpage',
    url: 'https://anjalidoor.com/about',
    name: 'About Anjali Doors PVT. LTD.',
    description:
      '45+ years of certified excellence in manufacturing fire-resistant steel doors, cleanroom doors, and heavy-duty motorized shutters in Boisar, Maharashtra, India.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Anjali Doors PVT. LTD.',
      foundingDate: '1978',
      url: 'https://anjalidoor.com/',
      telephone: '+91 9823521791',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'G-3/11, MIDC Tarapur, District Palghar',
        addressLocality: 'Boisar',
        addressRegion: 'Maharashtra',
        postalCode: '401506',
        addressCountry: 'IN',
      },
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
        name: 'About Us',
        item: 'https://anjalidoor.com/about',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <AboutClient />
    </>
  );
}

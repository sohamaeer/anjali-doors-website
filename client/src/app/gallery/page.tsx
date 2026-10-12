import type { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'Project Gallery | Fire Doors & Industrial Installations | Anjali Doors',
  description:
    'Browse real site photos of Anjali Doors installations across commercial towers, pharmaceutical cleanrooms, metro stations, and industrial complexes in India.',
  alternates: {
    canonical: 'https://anjalidoor.com/gallery',
  },
  openGraph: {
    title: 'Project Gallery | Fire Doors & Industrial Installations | Anjali Doors',
    description:
      'Verified real installation portfolio of certified fire rated doors, cleanroom doors, shaft access doors, and CNC fabrication machinery by Anjali Doors PVT. LTD.',
    url: 'https://anjalidoor.com/gallery',
    siteName: 'Anjali Doors PVT. LTD.',
    images: [
      {
        url: 'https://anjalidoor.com/images/Fire-shaft-doors-680x410.jpeg',
        width: 1200,
        height: 630,
        alt: 'Anjali Doors Project Gallery and Installations',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Gallery | Fire Doors & Industrial Installations | Anjali Doors',
    description:
      'Real project photos: Fire shaft doors, cleanroom doors, acoustic louvres, and motorized shutters manufactured by Anjali Doors in Boisar.',
    images: ['https://anjalidoor.com/images/Fire-shaft-doors-680x410.jpeg'],
  },
};

export default function GalleryPage() {
  const gallerySchema = {
    '@context': 'https://schema.org',
    '@type': ['ImageGallery', 'CollectionPage'],
    '@id': 'https://anjalidoor.com/gallery#webpage',
    url: 'https://anjalidoor.com/gallery',
    name: 'Anjali Doors Project Portfolio & Product Gallery',
    description:
      'Photo gallery of real-world site installations including certified fire rated doors, cleanroom access systems, utility shaft doors, and modern CNC manufacturing machinery.',
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
        name: 'Gallery',
        item: 'https://anjalidoor.com/gallery',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <GalleryClient />
    </>
  );
}

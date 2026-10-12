import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS, Product } from '@/data/siteData';
import { PRODUCT_SEO_DATA, ProductSeoItem } from '@/data/productSeoData';
import ProductDetailClient from './ProductDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Helper to look up product by slug or id
function findProduct(slug: string): Product | undefined {
  return (
    PRODUCTS.find((p) => p.slug === slug || p.id === slug) ||
    PRODUCTS.find((p) => p.slug.replace('-2', '') === slug.replace('-2', ''))
  );
}

// Generate static params for all 24 products for lightning-fast SSR & static caching
export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

// Next.js dynamic metadata for top Google search engine rankings
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = findProduct(slug);

  if (!product) {
    return {
      title: 'Product Not Found | Anjali Doors PVT. LTD.',
      description: 'The requested architectural steel door product was not found.',
    };
  }

  const seo: ProductSeoItem | undefined =
    PRODUCT_SEO_DATA[product.slug] || PRODUCT_SEO_DATA[product.id];

  const title = seo?.metaTitle || `${product.name} Manufacturer in India | Anjali Doors`;
  const description =
    seo?.metaDescription ||
    `${product.name} manufactured by Anjali Doors in India. Certified hollow metal construction, durable finishes, and custom hardware. Contact us for technical specifications and project quotes.`;
  const canonicalUrl = `https://anjalidoor.com/products/${product.slug}`;
  const imageUrl = product.image.startsWith('http')
    ? product.image
    : `https://anjalidoor.com${product.image}`;

  return {
    title,
    description,
    keywords: seo?.keywords || [
      `${product.name} manufacturer`,
      `${product.name} India`,
      `${product.name} Mumbai`,
      'steel doors manufacturer',
      'Anjali Doors',
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Anjali Doors PVT. LTD.',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: seo?.imageAlt || `${product.name} - Anjali Doors`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = findProduct(slug);

  if (!product) {
    notFound();
  }

  const seoData: ProductSeoItem | undefined =
    PRODUCT_SEO_DATA[product.slug] || PRODUCT_SEO_DATA[product.id];

  const canonicalUrl = `https://anjalidoor.com/products/${product.slug}`;
  const imageUrl = product.image.startsWith('http')
    ? product.image
    : `https://anjalidoor.com${product.image}`;

  // Build JSON-LD structured data graph including Product, BreadcrumbList, and FAQPage
  const jsonLdGraph: Record<string, unknown>[] = [
    {
      '@type': 'Product',
      '@id': `${canonicalUrl}#product`,
      name: product.name,
      image: imageUrl,
      description: seoData?.metaDescription || product.shortDesc,
      category: product.category,
      brand: {
        '@type': 'Brand',
        name: 'Anjali Doors',
      },
      manufacturer: {
        '@type': 'Organization',
        name: 'Anjali Doors PVT. LTD.',
        url: 'https://anjalidoor.com',
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: '0',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'INR',
          valueAddedTaxIncluded: true,
        },
        availability: 'https://schema.org/InStock',
        url: canonicalUrl,
        seller: {
          '@type': 'Organization',
          name: 'Anjali Doors PVT. LTD.',
        },
      },
      additionalProperty: [
        ...(product.specs.fireRating
          ? [{ '@type': 'PropertyValue', name: 'Fire Resistance Rating', value: product.specs.fireRating }]
          : []),
        ...(product.specs.material
          ? [{ '@type': 'PropertyValue', name: 'Material', value: product.specs.material }]
          : []),
        ...(product.specs.standard
          ? [{ '@type': 'PropertyValue', name: 'Certified Standard', value: product.specs.standard }]
          : []),
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumbs`,
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
          name: 'Products',
          item: 'https://anjalidoor.com/products',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: product.name,
          item: canonicalUrl,
        },
      ],
    },
  ];

  // Include FAQPage schema if FAQs exist
  if (seoData && seoData.faqs.length > 0) {
    jsonLdGraph.push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: seoData.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': jsonLdGraph,
  };

  return (
    <>
      {/* Server-Side Rendered JSON-LD Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ProductDetailClient product={product} seoData={seoData} />
    </>
  );
}

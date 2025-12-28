import type { BlogPost } from './blog-data'

export function generateBlogPostStructuredData(post: BlogPost, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${url}/profile-image/${post.slug}.png`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: 'https://github.com/ehsanghaffar',
    },
    publisher: {
      '@type': 'Person',
      name: 'Ehsan Ghaffar',
      url: 'https://eindev.ir',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${url}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    timeRequired: post.readTime,
  }
}

export function generateWebsiteStructuredData(url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'NISHANT.DEV',
    description: "A digital workshop where code meets curiosity. Experiments, prototypes, and open-source artifacts by Nishant Bhardwaj.",
    url: url,
    author: {
      '@type': 'Person',
      name: 'Nishant Bhardwaj',
      url: 'https://github.com/ehsanghaffar',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generatePersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nishant Bhardwaj',
    url: 'https://github.com/nishant2864',
    image: 'https://github.com/nishant2864.png',
    sameAs: [
      'https://github.com/nishant2864',
      'https://twitter.com/nishant2864',
      'https://linkedin.com/in/nishantbhardwaj28',
    ],
    jobTitle: 'Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'NISHANT.DEV',
    },
  }
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

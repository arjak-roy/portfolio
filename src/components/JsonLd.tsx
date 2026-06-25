import { Helmet } from 'react-helmet-async';

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Arjak Roy",
    "jobTitle": "AI Engineer & Full-Stack Developer",
    "url": "https://arjakroy.tech",
    "sameAs": [
      "https://github.com/arjak-roy",
      "https://linkedin.com/in/arjak-roy" 
    ],
    "knowsAbout": ["React", "Next.js", "AI", "TypeScript", "SQL", "Vite", "System Design"],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Your University Name" // Can be updated by the user later
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

import React from 'react';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1>Proyecto: {params.slug}</h1>
    </main>
  );
}

import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Metadata } from "next";
import ProjectContent from "@/components/ui/ProjectContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Victor Saldaña`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.images.length > 0 ? [project.images[0]] : [],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}
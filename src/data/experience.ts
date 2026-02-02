export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Fullstack Engineer",
    company: "Tech Innovators Inc.",
    period: "2023 - Present",
    description: "Leading the development of scalable web applications using Next.js and .NET. Implementing AI-driven workflows to increase productivity by 40%.",
    technologies: ["Next.js", ".NET 8", "Azure", "OpenAI API"],
  },
  {
    id: "2",
    role: "Game Developer",
    company: "Indie Studio",
    period: "2021 - 2023",
    description: "Developed 2D action games and educational experiences. Managed the entire pipeline from game design to deployment on Steam and Mobile stores.",
    technologies: ["Unity", "C#", "HLSL", "Photon"],
  },
  {
    id: "3",
    role: "Software Developer",
    company: "Gov Solutions",
    period: "2019 - 2021",
    description: "Built robust management systems for public sector entities. Focused on CQRS architecture and clean code practices.",
    technologies: ["Angular", ".NET Core", "SQL Server"],
  },
];

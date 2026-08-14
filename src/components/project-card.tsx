import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/site";

export function ProjectCard({ project, number }: { project: Project; number: number }) {
  return <article className="project-card"><Link href={`/projects/${project.slug}`}><div className="project-image"><Image src={project.cover.src} alt={project.cover.alt} width={project.cover.width} height={project.cover.height} sizes="(max-width: 700px) 100vw, 50vw" /></div><div className="project-meta"><span>0{number}</span><h3>{project.name}</h3><p>{project.location} · {project.category}</p></div></Link></article>;
}

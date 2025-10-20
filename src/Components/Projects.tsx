import '../Projects.Module.css'
import { useState, useEffect } from 'react'

interface Project {
  id: string
  image: string
  altText: string
  title: string
  description: string
  liveLink?: string
  githubLink?: string
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchProjects = async () => {
    try {
      setLoading(true)
      const response = await fetch('http://54.90.193.130:3004/portfolio')

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setProjects(data.reverse())
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch projects')
      console.error('Error fetching projects:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  if (loading) {
    return <div>Loading projects...</div>
  }

  if (error) {
    return <div>Error loading projects: {error}</div>
  }

  return (
    <div>
      {projects.map((project) => (
        <section
          key={project.id}
          className={project.id}>
          <img
            src={project.image}
            alt={project.altText}
          />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div>
            {project.liveLink && (
              <a
                className="live-site"
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer">
                Live Site
              </a>
            )}
            {project.githubLink && (
              <a
                className="github"
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer">
                Github
              </a>
            )}
          </div>
        </section>
      ))}
    </div>
  )
}
export default Projects

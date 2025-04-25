import { motion } from "framer-motion";
import { ProjectCard, ProjectContent, ProjectDescription, ProjectImage, ProjectLink, ProjectLinks, ProjectsContainer, ProjectsSection, ProjectsTitle, ProjectTag, ProjectTags, ProjectTitle, RepoLink, RepoLinksContainer } from "./Project.styles";
import { projectData } from '../../data/projectData';
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {

    // Variantes para animación con Framer Motion
    const containerVariants = {
        hidden: { opacity:0 },
        visible: {
            opacity:1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { opacity:0, y:30 },
        visible: { 
            opacity:1, y:0, 
            transition: { 
                duration: 0.6,
                type: "spring",
                stiffness: 80
            } 
        }
    };

    return (

        <ProjectsSection id="projects">
            <ProjectsTitle>Proyectos</ProjectsTitle>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                <ProjectsContainer>
                    {projectData.map(project => (
                        <ProjectCard
                            key={project.id}
                            as={motion.div}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <ProjectImage>
                                {project.image ? (
                                    <img src={project.image} alt={project.title} />
                                ): (
                                    <div className="placeholder-img" style={{
                                        background:`linear-gradient(45deg, #0088ff, #00e1ff)`
                                    }} />
                                )}
                            </ProjectImage>

                            <ProjectContent>
                                <ProjectTitle>{project.title}</ProjectTitle>
                                <ProjectDescription>{project.description}</ProjectDescription>

                                <ProjectTags>
                                    {project.technologies.map((tech, index) => (
                                        <ProjectTag key={index}>{tech}</ProjectTag>
                                    ))}
                                </ProjectTags>

                                <ProjectLinks>
                                    {project.repoLinks && project.repoLinks.length > 0 && (
                                        <RepoLinksContainer>
                                            {project.repoLinks.map((repo, index) => (
                                                <RepoLink key={index} href={repo.url} target="_blank" rel="noopener noreferrer">
                                                    <FaGithub /> {repo.name}
                                                </RepoLink>
                                            ))}
                                        </RepoLinksContainer>
                                    )}
                                    {project.codeLink && (
                                        <ProjectLink href={project.codeLink} target="_blank" rel="noopener noreferrer">
                                            <FaCode /> Código
                                        </ProjectLink>
                                    )}
                                </ProjectLinks>
                            </ProjectContent>
                        </ProjectCard>
                    ))}
                </ProjectsContainer>
            </motion.div>

            {/* Modal para detalles del proyecto */}
            {/* {selectedProject && (
                <ModalOverlay onClick={closeProjectModal}>
                    <ProjectModal
                        as={motion.div}
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={e => e.stopPropagation()}
                    >
                        <ProjectModalContent>
                            <ProjectModalDescription>
                                {selectedProject.description || selectedProject.description}
                            </ProjectModalDescription>

                            <ProjectTechnologies>
                                {selectedProject.technologies.map((tech, i) => (
                                    <ProjectTech key={i}>{tech}</ProjectTech>
                                ))}
                            </ProjectTechnologies>

                            {selectedProject.images && selectedProject.images.length > 0 && (
                                <ProjectModalImage>
                                    {selectedProject.images.map((img, i) => (
                                        <img src={img} alt={`${selectedProject.title} screenshot ${i + 1}`} />
                                    ))}
                                </ProjectModalImage>
                            )}

                            <ProjectLinks>
                                {selectedProject.liveLink && (
                                    <ProjectLink href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer">
                                        Ver Proyecto
                                    </ProjectLink>
                                )}
                                {selectedProject.codeLink && (
                                    <ProjectLink href={selectedProject.codeLink} target="_blank" rel="noopener noreferrer" secondary>
                                        Ver Código
                                    </ProjectLink>
                                )}
                            </ProjectLinks>
                        </ProjectModalContent>
                    </ProjectModal>
                </ModalOverlay>
            )}*/}
        </ProjectsSection> 
    );
};

export default Projects;

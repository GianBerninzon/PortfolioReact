import { FaAngular, FaCode, FaDatabase, FaGithub, FaJava, FaJsSquare, FaPython, FaReact } from "react-icons/fa";
import { SiHibernate, SiMysql, SiPostgresql, SiSpringboot } from "react-icons/si";
import { SkillIcon, SkillItem, SkillName, SkillsContainer, SkillsGrid, SkillsSection, SkillsTitle } from "./Skills.styles";
import { motion } from "framer-motion";
const skillsData = [
    { id: 1, name: "Java", icon: <FaJava />, color: "#007396" },
    { id: 2, name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
    { id: 3, name: "Python", icon: <FaPython />, color: "#3776AB" },
  { id: 4, name: "SQL", icon: <FaDatabase />, color: "#336791" },
  { id: 5, name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
  { id: 6, name: "React", icon: <FaReact />, color: "#61DAFB" },
  { id: 7, name: "Angular", icon: <FaAngular />, color: "#DD0031" },
  { id: 8, name: "Hibernate", icon: <SiHibernate />, color: "#59666C" },
  { id: 9, name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { id: 10, name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  { id: 11, name: "Git", icon: <FaGithub />, color: "#F05032" },
  { id: 12, name: "IntelliJ", icon: <FaCode />, color: "#000000" }
];

const Skills = () => {
    //Variantes para animacion con Framer Motion
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity : 1,
            transition: {
                staggerChildren: 0.1,
            }
        }
    };

    const itemVariants = {
        hidden: { y : -50, opacity: 0},
        visible: {
            y: 0,
            opacity: 1
        },
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.5
        }
    };

    return (
        <SkillsSection id="skills">
            <SkillsTitle>Mis Habilidades</SkillsTitle>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1}}
                variants={containerVariants}
            >
                <SkillsContainer>
                    <SkillsGrid>
                        {skillsData.map((skill) => (
                            <SkillItem
                                key={skill.id}
                                as={motion.div}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <SkillIcon style={{ color: skill.color }}>
                                    {skill.icon}
                                </SkillIcon>
                                <SkillName>{skill.name}</SkillName>
                            </SkillItem>
                        ))}
                    </SkillsGrid>
                </SkillsContainer>
            </motion.div>
        </SkillsSection>
    );
};

export default Skills;

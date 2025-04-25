import { AboutContainer, AboutContent, AboutInfoGrid, AboutInfoItem, AboutInfoLabel, AboutInfoValue, AboutSection, AboutText, AboutTitle } from "./AboutMe.styles";
import { motion } from "framer-motion";

const AboutMe = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            staggerChildren: 0.2
        }
    }


const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Datos personales
const personalInfo= [
    { label: "Nombre", value: "Giancarlo Berninzon" },
    { label: "Ubicación", value: "Móstoles, Madrid" },
    { label: "Email", value: "Giancarlo.berninzon.2@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/giancarlo-berninzon" }
];

    return (
        <AboutSection id= "about">
            <AboutTitle>Sobre mí</AboutTitle>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                <AboutContainer>
                    <AboutContent as={motion.div} variants={itemVariants}>
                        <AboutText>
                        Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM) con formación sólida en Java, 
                        Spring Boot, Angular, React, SQL y Python.  
                        </AboutText>

                        <AboutText>
                            Busco una posición como desarrollador donde pueda contribuir con mis habilidades técnicas mientras
                            continúo creciendo profesionalmente.
                        </AboutText>

                        <AboutInfoGrid as={motion.div} variants={itemVariants}>
                            {personalInfo.map((info, index) => (
                                <AboutInfoItem key={index}>
                                    <AboutInfoLabel>{info.label}</AboutInfoLabel>
                                    <AboutInfoValue>{info.value}</AboutInfoValue>
                                </AboutInfoItem>
                            ))}
                        </AboutInfoGrid>
                    </AboutContent>
                </AboutContainer>
            </motion.div>
        </AboutSection>
    );
};

export default AboutMe;

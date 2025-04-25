import { educationData } from "../../data/educationData";
import { motion } from 'framer-motion';
import { EducationCard, EducationContainer, EducationContent, EducationItemDescription, EducationItemInstitution, EducationItemPeriod, EducationItemSkills, EducationItemTitle, EducationLogo, EducationSection, EducationSkill, EducationTitle } from "./Education.styles";

const Education = () => {
    // Variantes para animacion con Framer Motion
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1, 
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0, transition: {duration: 0.5}}
    };

    return (
        <EducationSection id="education">
            <EducationTitle>Formacion Academica</EducationTitle>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                <EducationContainer>
                    {educationData.map((item) => (
                        <EducationCard
                            key={item.id}
                            as={motion.div}
                            variants={cardVariants}
                        >
                            <EducationLogo>
                                <img src={item.logo || '/assets/images/placeholder-institucion.png'} alt={item.institution} />
                            </EducationLogo>
                            
                            <EducationContent>
                                <EducationItemTitle>{item.title}</EducationItemTitle>
                                <EducationItemInstitution href={item.institutionLink} target="_blank" rel="noopener noreferrer">
                                    {item.institution}
                                </EducationItemInstitution>
                                <EducationItemPeriod>{item.period}</EducationItemPeriod>
                                <EducationItemDescription>{item.description}</EducationItemDescription>

                                {item.skills && (
                                    <EducationItemSkills>
                                        {item.skills.map((skill, i) => (
                                            <EducationSkill key={i}>{skill}</EducationSkill>
                                        ))}
                                    </EducationItemSkills>
                                )}
                            </EducationContent>
                        </EducationCard>
                    ))}
                </EducationContainer>
            </motion.div>
        </EducationSection>
    );
};

export default Education;
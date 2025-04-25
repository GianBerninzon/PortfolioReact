import { experienceData } from "../../data/experienceData";
import { motion } from 'framer-motion';
import { TimelineContainer, TimelineDot, TimelineItem, TimelineItemCompany, TimelineItemContent, TimelineItemDescription, TimelineItemPeriod, TimelineItemTechnologies, TimelineItemTitle, TimelineLine, TimelineSection, TimelineTechnology, TimelineTitle } from "./TimelineExperience.styles";

const TimelineExperience = () => {
    // Variantes para animación con Framer Motion
    const containerVariants = {
        hidden: { opacity: 0},
        visible: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20},
        visible: { opacity: 1, y: 0, transition: { duration: 0.5}}
    };

    return (
        <TimelineSection id="experience">
            <TimelineTitle>Experiencia</TimelineTitle>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <TimelineContainer>
                    <TimelineLine />

                    {experienceData.map((item, index) => (
                        <TimelineItem
                            key={item.id}
                            position={index % 2 === 0 ? 'left' : 'right'}
                            as={motion.div}
                            variants={itemVariants}
                        >
                            <TimelineDot />
                            <TimelineItemContent>
                                <TimelineItemTitle>{item.title}</TimelineItemTitle>
                                <TimelineItemCompany href={item.companyLink} target="_blank" rel="noopener noreferrer">
                                    {item.company}
                                    {item.logo && <img src={item.logo} alt={item.company} />}
                                </TimelineItemCompany>
                                <TimelineItemPeriod>{item.period}</TimelineItemPeriod>
                                <TimelineItemDescription>{item.description}</TimelineItemDescription>

                                {item.technologies && (
                                    <TimelineItemTechnologies>
                                        {item.technologies.map((tech, i) => (
                                            <TimelineTechnology key={i}>{tech}</TimelineTechnology>
                                        ))}
                                    </TimelineItemTechnologies>
                                )}
                            </TimelineItemContent>
                        </TimelineItem>
                    ))}
                </TimelineContainer>
            </motion.div>
        </TimelineSection>
    );
};

export default TimelineExperience;
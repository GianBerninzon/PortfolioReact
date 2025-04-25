import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { motion } from 'framer-motion';
import { ContactContainer, ContactForm, ContactFormTitle, ContactIcon, ContactInfo, ContactItem, ContactLink, ContactSection, ContactText, ContactTitle, FormButton, FormGroup, FormInput, FormLabel, FormTextarea, SocialLink, SocialLinks, SubmitButton } from "./Contact.styles";

const Contact = () => {
    // Variantes para animacion con Framer Motion
    const containerVariants = {
        hidden: { opacity:0 },
        visible: { 
            opacity:1, 
            transition: { 
                staggerChildren: 0.2 
            } 
        }
    };

    const itemVariants = {
        hidden: { opacity:0, y:20 },
        visible: { opacity:1, y:0, transition: { duration: 0.5 } }
    };

    // Datos de contacto
    const contactData = [
        { 
            id: 1, 
            icon: <FaEnvelope />, 
            text: "Giancarlo.berninzon.2@gmail.com", 
            link: "mailto:Giancarlo.berninzon.2@gmail.com" 
          },
          { 
            id: 2, 
            icon: <FaPhone />, 
            text: "(+34) 607157749", 
            link: "tel:+34607157749" 
          },
          { 
            id: 3, 
            icon: <FaMapMarkerAlt />, 
            text: "Móstoles, Madrid", 
            link: "#" 
          },
          { 
            id: 4, 
            icon: <FaLinkedin />, 
            text: "linkedin.com/in/giancarlo-berninzon", 
            link: "https://www.linkedin.com/in/giancarlo-berninzon/" 
          },
          { 
            id: 5, 
            icon: <FaGithub />, 
            text: "github.com/GianBerninzon", 
            link: "https://github.com/GianBerninzon" 
          }
    ];

    // Manejar el envio del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Enviar correo
        alert('!Gracias por tu mensaje! Te responderé lo antes posible');
    };

    return (
        <ContactSection id="contact">
            <ContactTitle>Contacto</ContactTitle>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                <ContactContainer>
                    <ContactInfo as={motion.div} variants={itemVariants}>
                        {contactData.map((item) => (
                            <ContactItem key={item.id} as={motion.div} variants={itemVariants}>
                                <ContactIcon>{item.icon}</ContactIcon>
                                <ContactLink href={item.link} target="_blank" rel="noopener noreferrer">
                                    <ContactText>{item.text}</ContactText>
                                </ContactLink>
                            </ContactItem>
                        ))}
                    </ContactInfo>

                    <ContactForm as={motion.form} variants={itemVariants} onSubmit={handleSubmit}>
                        <ContactFormTitle>Envíanos un mensaje</ContactFormTitle>

                        <FormGroup as={motion.div} variants={itemVariants}>
                            <FormLabel htmlFor="name">Nombre</FormLabel>
                            <FormInput 
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Tu nombre"
                                required
                            />
                        </FormGroup>

                        <FormGroup as={motion.div} variants={itemVariants}>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <FormInput 
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Tu email"
                                required
                            />
                        </FormGroup>

                        <FormGroup as={motion.div} variants={itemVariants}>
                            <FormLabel htmlFor="message">Mensaje</FormLabel>
                            <FormTextarea 
                                id="message"
                                name="message"
                                placeholder="Escribe tu mensaje"
                                rows="5"
                                required
                            />
                        </FormGroup>

                        <FormButton
                            as={motion.button}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                        >
                            Enviar Mensaje
                        </FormButton>
                        
                    </ContactForm>
                </ContactContainer>
            </motion.div>
        </ContactSection>
    );
};

export default Contact;

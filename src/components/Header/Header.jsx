import { HeaderActionButton, HeaderActions, HeaderContainer, HeaderContent, HeaderSubtitle, HeaderTitle } from "./Header.styles";
import { motion } from 'framer-motion';
import React from 'react';

const Header = () => {
    return (
        <HeaderContainer id="header">
            <HeaderContent>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity:1, y: 0}}
                    transition={{ duration: 0.8}}
                >
                    <HeaderTitle>Giancarlo Berninzon</HeaderTitle>
                    <HeaderSubtitle>Desarrollador Full Stack</HeaderSubtitle>
                </motion.div>

                <HeaderActions>
                    <motion.div
                        initial={{ opacity: 0, y:20 }}
                        animate={{ opacity:1, y:0}}
                        transition={{ delay: 0.5, duration: 0.6}}
                    >
                        <HeaderActionButton
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('projects').scrollIntoView({behavior: 'smooth'});
                            }}
                        >Ver Proyectos</HeaderActionButton>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y:20 }}
                        animate={{ opacity:1, y: 0}}
                        transition={{ delay: 0.7, duration: 0.6 }}
                    >
                        <HeaderActionButton
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
                            }}
                            $variant="outline"
                        >
                            Contacto
                        </HeaderActionButton>
                    </motion.div>
                </HeaderActions>
            </HeaderContent>
        </HeaderContainer>
    );
};

export default Header;
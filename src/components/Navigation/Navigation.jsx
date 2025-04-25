import { useEffect, useState } from "react";
import { Link as ScrollLink } from 'react-scroll';
import { IconLabel, NavButton, NavButtons, NavContainer, NavIndicator } from "./Navigation.styles";
import { FaBriefcase, FaCode, FaEnvelope, FaGraduationCap, FaHome } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
    const [activeSection, setActiveSection] = useState('experience');
    const location = useLocation();
    const navigate = useNavigate();

    //Verificar si estamos en la pagina de inicio
    const isHomePage = location.pathname === '/';

    // Detectar que seccion esta visible para actualizar la navegacion
    useEffect(() => {
        if(!isHomePage) return;

        const handleScroll = () => {
            const sections = ['skills', 'about', 'projects', 'education', 'contact'];
            const scrollPosition = window.scrollY + 300;

            for(const section of sections){
                const element = document.getElementById(section);
                if(element){
                    const elementTop = element.offsetTop;
                    const elementHeight = element.offsetHeight;

                    if(scrollPosition >= elementTop && scrollPosition < elementTop + elementHeight){
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);

    // Actualizar seccion activa basdo en la ruta actual
    useEffect(() => {
        if(location.pathname === '/'){

        }else if(location.pathname === '/skills'){
            setActiveSection('skills');
        }else if(location.pathname === '/sobre-mi'){
            setActiveSection('about');
        }else if(location.pathname === '/proyectos'){
            setActiveSection('projects');
        }else if (location.pathname ==='eduacion'){
            setActiveSection('education');
        }else if(location.pathname === '/contacto'){
            setActiveSection('contact');
        }
    },[location.pathname]);

    const handleNavClick= (itemId) => {
        // si estamos en la pagina de inicio, usarmos react-scroll
        if(isHomePage){

        }else{
            navigate("/");
            setTimeout(() => {
                const element = document.getElementById(itemId);
                if(element){
                    element.scrollIntoView({ behavior: 'smooth'});
                }
            }, 100);
        }
    };

    const navItems = [
        { id: 'top', icon: <FaHome />, label: 'Inicio' },
        { id: 'projects', icon: <FaCode />, label: 'Proyectos' },
        { id: 'education', icon: <FaGraduationCap />, label: 'Educación' },
        { id: 'contact', icon: <FaEnvelope />, label: 'Contacto' },
    ];

    return (
        <NavContainer>
            <NavButtons>
                {navItems.map(item => (
                    <ScrollLink
                        key={item.id}
                        to={item.id}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        onClick={() => handleNavClick(item.id)}
                    >
                        <NavButton $isActive={activeSection === item.id}>
                             {item.icon}
                             <IconLabel>{item.label}</IconLabel>
                             {activeSection === item.id && <NavIndicator />}
                        </NavButton>
                    </ScrollLink>
                ))}
            </NavButtons>
        </NavContainer>
    );
};

export default Navigation;
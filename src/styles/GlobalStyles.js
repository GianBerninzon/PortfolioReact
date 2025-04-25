import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        overflow-x: hidden;
    }

    .app {
        position: relative;
        min-height: 100vh;
    }

    main{
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem 1rem;
        position: relative;
        z-index: 1;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
        color: ${props => props.theme.colors.heading};
    }

    h1{
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    h2{
        font-size: 2rem;
        margin-bottom: 0.8rem;
    }

    p{
        line-height: 1.6;
        margin-bottom: 1rem;
    }

    a{
        color: ${props => props.theme.colors.primary};
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover{
            color: ${props => props.theme.colors.secondary};
        }
    }

    section{
        margin: 4rem 0;
    }

    /* Scrollbar estilizado */
    ::-webkit-scrollbar{
        width: 8px;
    }

    ::-webkit-scrollbar-track{
        background: ${props => props.theme.colors.backgroundLight};
    }

    ::-webkit-scrollbar-thumb{
        background: ${props => props.theme.colors.primary};
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover{
        background: ${props => props.theme.colors.secondary};
    }

    @media (max-width: 768px){
        h1{
            font-size: 2rem;
        }

        h2{
            font-size: 1.5rem;
        }

        h3{
            font-size: 1rem;
        }
    }
`;

export default GlobalStyles;

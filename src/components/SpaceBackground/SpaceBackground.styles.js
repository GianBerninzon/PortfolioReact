import styled from 'styled-components';

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: ${props => props.theme.zIndex.background};
    overflow: hidden;

    .stars-canvas{
        display: block;
        width: 100%;
        height: 100%;
    }
`;
// añadir capas adicionales para crear efecto de profundidad
export const NebulaEffect = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
        ellipse at center,
        rgba(29, 43, 100, 0.15) 0%,
        rgba(10, 14, 23, 0) 70%
    );
    pointer-events: none;
`;
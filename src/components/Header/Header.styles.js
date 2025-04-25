import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 120px 0 60px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 100px 0 40px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 80px 0 30px;
  }
`;

export const HeaderContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const HeaderTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.heading};
  margin-bottom: 1rem;
  background: linear-gradient(to right, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 2.8rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2.2rem;
  }
`;

export const HeaderSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const HeaderActionButton = styled.a`
  display: inline-block;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${props => props.$variant === 'outline' 
    ? css`
      border: 2px solid ${props.theme.colors.primary};
      color: ${props.theme.colors.primary};
      background: transparent;
      
      &:hover {
        background-color: ${props.theme.colors.primary};
        color: #fff;
      }
    `
    : css`
      background: linear-gradient(to right, ${props.theme.colors.primary}, ${props.theme.colors.secondary});
      color: #fff;
      border: none;
      box-shadow: 0 4px 15px rgba(0, 163, 255, 0.3);
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(0, 163, 255, 0.4);
      }
    `
    }
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        width: 100%;
        max-width: 250px;
        text-align: center;
    }
`;


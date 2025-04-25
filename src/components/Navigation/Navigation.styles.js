import styled from 'styled-components';

export const NavContainer = styled.nav`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  max-width: 90%;
  z-index: ${props => props.theme.zIndex.navigation};
  background-color: rgba(20, 29, 45, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  padding: 0.75rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const NavButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 0.25rem;
  }
`;

export const NavButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.$isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  border: none;
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  color: ${props => props.$isActive ? props.theme.colors.primary : props.theme.colors.text};
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    color: ${props => props.theme.colors.primary};
    transform: translateY(-3px);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0.75rem 1rem;
    font-size: 1rem;
  }
`;

export const IconLabel = styled.span`
  font-size: 0.75rem;
  margin-top: 0.25rem;
  font-weight: 500;
  opacity: 0.9;
`;

export const NavIndicator = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 5px;
  height: 5px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  box-shadow: 0 0 5px ${props => props.theme.colors.primary};
`;
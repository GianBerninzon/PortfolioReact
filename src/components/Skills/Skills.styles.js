import styled from 'styled-components';

export const SkillsSection = styled.section`
  margin: 6rem 0;
  position: relative;
`;

export const SkillsTitle = styled.h2`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.xxlarge};
  color: ${props => props.theme.colors.heading};
  margin-bottom: 3rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: ${props => props.theme.colors.primary};
  }
`;

export const SkillsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    gap: 1rem;
  }
`;

export const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: 1.2rem 0.8rem;
  box-shadow: ${props => props.theme.shadows.medium};
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.large};
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

export const SkillIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

export const SkillName = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 500;
  text-align: center;
  color: ${props => props.theme.colors.text};
`;
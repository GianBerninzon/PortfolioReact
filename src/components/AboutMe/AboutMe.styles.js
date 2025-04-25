import styled from 'styled-components';

export const AboutSection = styled.section`
  margin: 6rem 0;
  position: relative;
`;

export const AboutTitle = styled.h2`
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

export const AboutContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: ${props => props.theme.borderRadius.medium};
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: ${props => props.theme.shadows.medium};
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const AboutText = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: 1.7;
  color: ${props => props.theme.colors.text};
  margin: 0;
`;

export const AboutInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 1.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const AboutInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const AboutInfoLabel = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
`;

export const AboutInfoValue = styled.span`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.text};
`;
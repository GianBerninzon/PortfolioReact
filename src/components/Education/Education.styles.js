import styled from 'styled-components';

export const EducationSection = styled.section`
    padding: 4rem 1rem;
    position: relative;
`;

export const EducationContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const EducationItemTitle = styled.h3`
    font-size: ${props => props.theme.fontSizes.large};
    color: ${props => props.theme.colors.accent};
    margin-bottom: 0.5rem;
`;

export const EducationItemInstitution = styled.a`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 600;
  color: ${props => props.theme.colors.heading};
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

export const EducationItemPeriod = styled.span`
  display: inline-block;
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.accent};
  background-color: rgba(118, 74, 188, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: ${props => props.theme.borderRadius.small};
  margin-bottom: 1rem;
  align-self: flex-start;
`;

export const EducationItemDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: 1.6;
  margin-bottom: 1rem;
  flex: 1;
`;

export const EducationItemSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
`;

export const EducationSkill = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
  background-color: rgba(118, 74, 188, 0.1);
  color: ${props => props.theme.colors.accent};
  padding: 0.25rem 0.75rem;
  border-radius: ${props => props.theme.borderRadius.small};
  border: 1px solid rgba(118, 74, 188, 0.3);
`;

export const EducationTitle = styled.h2`
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
    background-color: ${props => props.theme.colors.accent};
  }
`;

export const EducationContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

export const EducationCard = styled.div`
    background-color: ${props => props.theme.colors.cardBackground};
    border-radius: ${props => props.theme.borderRadius.medium};
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: ${props => props.theme.shadows.medium};
    display: flex;
    flex-direction: column;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 0 15px rgba(118, 74, 188, 0.5);
    }
`;

export const EducationLogo = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: rgba(118, 74, 188, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;



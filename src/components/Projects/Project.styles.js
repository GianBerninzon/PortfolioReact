import styled from 'styled-components';

export const ProjectsSection = styled.section`
  margin: 6rem 0;
  position: relative;
`;

export const ProjectsTitle = styled.h2`
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

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: ${props => props.theme.borderRadius.medium};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: ${props => props.theme.shadows.medium};
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: ${props => props.theme.shadows.large};
  }
`;

export const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img, .placeholder-img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    transition: transform 0.5s ease;
  }
  
  .placeholder-img {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
  }
  
  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

export const ProjectContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ProjectTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.heading};
  margin-bottom: 0.75rem;
`;

export const ProjectDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
  flex-grow: 1;
  line-height: 1.6;
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const ProjectTag = styled.span`
  background-color: rgba(0, 163, 255, 0.1);
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.small};
  padding: 0.25rem 0.75rem;
  border-radius: ${props => props.theme.borderRadius.small};
  border: 1px solid rgba(0, 163, 255, 0.3);
`;

export const ProjectLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
  
  svg {
    font-size: 1rem;
  }
`;

export const RepoLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.25rem;
`;

export const RepoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 500;
  transition: color 0.3s ease;
  padding-left: 0.5rem;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
  
  svg {
    font-size: 0.875rem;
  }
`;





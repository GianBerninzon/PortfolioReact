import styled from 'styled-components';

export const ContactSection = styled.section`
  margin: 6rem 0;
  position: relative;
  padding-bottom: 6rem;
`;

export const ContactTitle = styled.h2`
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

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: ${props => props.theme.colors.cardBackground};
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.medium};
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: fit-content;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ContactIcon = styled.div`
  font-size: 1.2rem;
  min-width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 163, 255, 0.1);
  color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  border: 1px solid rgba(0, 163, 255, 0.3);
`;

export const ContactText = styled.span`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.text};
  word-break: break-word;
`;

export const ContactLink = styled.a`
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

export const ContactForm = styled.form`
  background-color: ${props => props.theme.colors.cardBackground};
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.medium};
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ContactFormTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.heading};
  margin-bottom: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FormLabel = styled.label`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.text};
`;

export const FormInput = styled.input`
  padding: 0.8rem 1rem;
  background-color: ${props => props.theme.colors.inputBackground};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius.small};
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.text};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(0, 163, 255, 0.2);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const FormTextarea = styled.textarea`
  padding: 0.8rem 1rem;
  background-color: ${props => props.theme.colors.inputBackground};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius.small};
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.text};
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(0, 163, 255, 0.2);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const FormButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: linear-gradient(to right, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  color: #fff;
  border: none;
  border-radius: ${props => props.theme.borderRadius.medium};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 163, 255, 0.3);
  align-self: flex-start;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 163, 255, 0.4);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;
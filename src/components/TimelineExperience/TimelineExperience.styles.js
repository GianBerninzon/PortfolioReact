import styled from 'styled-components';

export const TimelineTitle = styled.h2`
    padding: 4rem 1rem;
    position: relative;
`;

export const TimelineSection = styled.section`
    text-align: center;
    font-size: ${props => props.theme.fontSizes.xxlarge};
    color: ${props => props.theme.colors.heading};
    margin-bottom: 3rem;
    position: relative;

    &:after{
        content: '';
        position: absolute;
        bottom: -10;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background-color: ${props => props.theme.colors.primary};
    }
`;

export const TimelineContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const TimelineLine = styled.div`
    position: absolute;
    width: 4px;
    background-color: ${props => props.theme.colors.primary};
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 4px;
    z-index: 1;

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        display: 20px;
    }
`;

export const TimelineDot = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.primary};
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    box-shadow: 0 0 10px ${props => props.theme.colors.primary};

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        left: 20px;
    }
`;

export const TimelineItem = styled.div`
    display: flex;
    justify-content: ${props => props.position === 'left' ? 'flex-end' : 'flex-start'};
    padding-left: ${props => props.position === 'right' ? 'calc(50% + 30px)' : '0'};
    padding-right: ${props => props.position === 'left' ? 'calc(50% + 30px)' : '0'};
    position: relative;

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        justify-content: flex-start;
        padding-left: 50px;
        padding-right: 0;
    }
`;

export const TimelineItemContent = styled.div`
    background-color: ${props => props.theme.colors.cardBackground};
    padding: 1.5rem;
    border-radius: ${props => props.theme.borderRadius.medium};
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: ${props => props.theme.shadows.medium};
    max-width: 500px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: ${props => props.theme.shadows.large};
    }

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        padding: 1rem;
    }
`;

export const TimelineItemTitle = styled.h3`
    font-size: ${props => props.theme.fontSizes.large};
    color: ${props => props.theme.colors.primary};
    margin-bottom: 0.5rem;
`;

export const TimelineItemCompany = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: 600;
    color: ${props => props.theme.colors.heading};
    margin-bottom: 0.5rem;

    img {
        width: 24px;
        height: 24px;
        border-radius: ${props => props.theme.borderRadius.small};
        object-fit: contain;
    }
`;

export const TimelineItemPeriod = styled.span`
    display: inline-block;
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.colors.secondary};
    background-color: rgba(0, 229, 255, 0.1);
    padding: 0.25rem 0.75rem;
    border-radius: ${props => props.theme.borderRadius.small};
    margin-bottom: 1rem;
`;

export const TimelineItemDescription = styled.p`
    font-size: ${props => props.theme.fontSizes.medium};
    line-height: 1.6;
    margin-bottom: 1rem;
`;

export const TimelineItemTechnologies = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
`;

export const TimelineTechnology = styled.span`
    font-size: ${props => props.theme.fontSizes.small};
    background-color: rgba(0, 163, 255, 0.1);
    color: ${props => props.theme.colors.primary};
    padding: 0.25rem 0.75rem;
    border-radius: ${props => props.theme.borderRadius.small};
    border: 1px solid rgba(0, 163, 255, 0.3);
`;








import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from 'styled-components';
import logo from '../images/th.jpg';
import ecom from "../images/ecom.png";
import staybnb from "../images/staybnb.png";
import capcha from "../images/capcha.png";
import xzoom from "../images/xzoom.png";
import profile from '../images/portfolio.jpeg';

const projects = [
    {
        title: "Clothingnest Ecommerce website",
        description: "An e-commerce site built with React for seamless shopping experiences, featuring Redux for state management and a dynamic interface.",
        image: ecom,
        tools: ["React", "Redux", "CSS", "Slick", 'React-router-dom'],
        viewLink: "https://clothingnest.netlify.app/",
        codeLink: "https://github.com/vruttik223/ClothingNest---An-ecommerce-shopping-platform"
    },
    {
        title: "StayBnB-platform to rent stays",
        description: "A platform where users can list, view, and review rental places, built with EJS, Node.js, and MongoDB for a full-featured stay rental service.",
        image: staybnb,
        tools: ["EJS", "Node.js", "MongoAtlas", "Passportjs", "Multer"],
        viewLink: "",
        codeLink: "https://github.com/vruttik223/StayBnB-Express-project"
    },
    {
        title: "TaskMate",
        description: "A task management app for tracking daily activities, designed with React and Tailwind CSS for a responsive and user-friendly interface.",
        image: logo,
        tools: ["React", "Tailwind", "Json"],
        viewLink: "#",
        codeLink: "https://github.com/vruttik223/TaskMate-applicaton"
    },
    {
        title: "CapchaCode Generator",
        description: "Generates captcha codes and includes a hide/show password feature with SweetAlert for enhanced user interaction ",
        image: capcha,
        tools: ["Javascript","SweatAlert", "Html", "CSS"],
        viewLink: "#",
        codeLink: "https://github.com/vruttik223/Random-Capcha-code-generato"
    },
    {
        title: "Portfoio Website",
        description: " A personal portfolio site showcasing projects, built with React and Styled-Components for modern, animated presentations.",
        image: profile,
        tools: ["React", "Styled-Components", "Animate on scroll"],
        viewLink: "#",
        codeLink: "https://github.com/vruttik223/Vruttik-Portfolio"
    },
    {
        title: "xzoom plugin",
        description: "Explores the jQuery xZoom plugin to create an interactive image zoom feature, enhancing user experience ",
        image: xzoom,
        tools: ["Jquery", "XZoom", "Html"],
        viewLink: "#",
        codeLink: "https://github.com/vruttik223/Jquery-Plugin-xzoom"
    },
];

const WorkSection = styled.div`
    padding: 2rem 1rem;
    background: #FFFFFF; 
    color: #333333; 
`;

const Heading = styled.h2`
    text-align: center;
    margin-bottom: 1.5rem;
    color: #854CE6;

    i {
        margin-right: 0.5rem;
    }
`;

const BoxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    justify-content: center;
    padding: 0 1.5rem;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }

    @media (min-width: 601px) and (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 993px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const BoxWork = styled.div`
    background: #F8F9FA;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.2);
        filter: brightness(1.1);
    }

    img {
        width: 100%;
        height: 200px;
        background-color: #FFFFFF;
        border-radius: 10px;
        box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.1);
    }
`;

const Content = styled.div`
    padding: 0px 2px;
`;

const Tools = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0.25rem 0 0.5rem;
`;

const Tool = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: #854CE6;
    background-color: #8d57ea32;
    padding: 2px 8px;
    border-radius: 10px;
`;

const ProjectTitle = styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: #666666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const ProjectDescription = styled.p`
    font-weight: 400;
    color: rgba(102, 102, 102, 0.99);
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
   
    text-overflow: ellipsis;
    font-size: 0.8rem;
`;

const Btns = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 0.5rem;
`;

const Button = styled.a`
    font-size: 14px;
    font-weight: 600;
    color: #854CE6;
    background-color: #844ce632;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    text-decoration: none;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: rgba(0, 123, 255, 0.3);
    }
`;

function Work() {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: false,
        });
    }, []);

    return (
        <WorkSection id="projects">
            <Heading><i className="bi bi-laptop"></i> Projects <span>Made</span></Heading>
            <BoxContainer>
                {projects.map((project, index) => (
                    <BoxWork key={index} data-aos="fade-up">
                        <img src={project.image} alt="Project" className="project-image" />
                        <Content>
                            <Tools>
                                {project.tools.map((tool, idx) => (
                                    <Tool key={idx}>{tool}</Tool>
                                ))}
                            </Tools>
                            <ProjectTitle>{project.title}</ProjectTitle>
                            <ProjectDescription>{project.description}</ProjectDescription>
                            <Btns>
                                <Button href={project.viewLink} target="_blank" rel="noopener noreferrer"><i className="fas fa-eye"></i> View</Button>
                                <Button href={project.codeLink} target="_blank" rel="noopener noreferrer">Code <i className="fas fa-code"></i></Button>
                            </Btns>
                        </Content>
                    </BoxWork>
                ))}
            </BoxContainer>
        </WorkSection>
    );
}

export default Work;

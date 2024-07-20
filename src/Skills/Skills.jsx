import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import styled from 'styled-components';

const Skillsdata = [
  {
    "name": "ReactJS",
    "icon": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
  },
  {
    "name": "ExpressJS",
    "icon": "https://img.icons8.com/fluency/48/000000/node-js.png"
  },
  {
    "name": "NodeJS",
    "icon": "https://img.icons8.com/color/48/000000/nodejs.png"
  },
  {
    "name": "MaterialUI",
    "icon": "https://img.icons8.com/color/48/000000/material-ui.png"
  },
  {
    "name": "TailwindCSS",
    "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
  },
  {
    "name": "Bootstrap",
    "icon": "https://img.icons8.com/color/48/000000/bootstrap.png"
  },
  {
    "name": "HTML5",
    "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png"
  },
  {
    "name": "CSS3",
    "icon": "https://img.icons8.com/color/48/000000/css3.png"
  },
  {
    "name": "JavaScript",
    "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png"
  },
  {
    "name": "Python",
    "icon": "https://img.icons8.com/color/48/000000/python--v1.png"
  },
  {
    "name": "MongoDB",
    "icon": "https://img.icons8.com/color/48/000000/mongodb.png"
  },
  {
    "name": "MySQL",
    "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png"
  },
  {
    "name": "Netlify",
    "icon": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"
  },
  {
    "name": "jQuery",
    "icon": "https://img.icons8.com/ios-filled/48/1169ae/jquery.png"
  },
  {
    "name": "Git VCS",
    "icon": "https://img.icons8.com/color/48/000000/git.png"
  },
  {
    "name": "GitHub",
    "icon": "https://img.icons8.com/?size=48&id=fmFqQmR0UdsR&format=png"
  }
];

const SkillsContainer = styled.div`
  min-height: 90vh;
  background: #F2F3F4; /* Light background */
  color: #333333; /* Primary text color */
  padding: 20px;
`;

const Heading = styled.h2`
  padding: 10px;
  text-align: center;
  color: #854CE6; /* Highlight color */
`;

const Sentence = styled.p`
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Bar = styled.div`
  flex: 1 1 200px;
  max-width: 200px;
  height: 120px;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  background: #FFFFFF; /* Light bar background */
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2); /* Slightly darker shadow */
  }

  @media (max-width: 466px) {
    max-width: 160px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 5px;
`;

const SkillIcon = styled.img`
  width: 48px;
  height: 48px;
`;

const SkillName = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #333333; /* Primary text color */
`;

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Animation should happen only once
    });
  }, []);

  return (
    <SkillsContainer id="skills">
      <Heading data-aos="fade-up">
      <i className="bi bi-laptop"></i><span> Skills & </span><span>Abilities</span>
      </Heading>
      <Sentence data-aos="fade-up" data-aos-delay="200">
        Here are some of my skills I have developed over the past few years.
      </Sentence>
      <Row>
        {Skillsdata.map((val, index) => (
          <Bar className="skills-bar" key={index} data-aos="zoom-in" data-aos-delay={index * 50}>
            <Info>
              <SkillIcon src={val.icon} alt={val.name} />
              <SkillName>{val.name}</SkillName>
            </Info>
          </Bar>
        ))}
      </Row>
    </SkillsContainer>
  );
};

export default Skills;

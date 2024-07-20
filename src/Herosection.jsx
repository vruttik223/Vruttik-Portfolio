import React, { useEffect } from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Heroimg from "./images/p.jpg";
import AOS from "aos"; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  background: #FFFFFF; 
  
  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;

  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;

  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const StyledTitle = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: black;
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: #111111; 
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: #854CE6;
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: rgba(17, 17, 17, 0.7);

  @media (max-width: 960px) {
    text-align: center;
    font-size: 16px;
    line-height: 32px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;

  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1F2634;
    filter: brightness(1);
  }
    
  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  } 
  color: white;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 5px solid #854CE6;

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const Herosection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <div id="about">
      <HeroContainer>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <StyledTitle data-aos="fade-right">Hi, I am <br />Vruttik Ghanekar</StyledTitle>    
            <TextLoop data-aos="fade-up">
              I am a 
              <Span>
                <Typewriter
                    options={{
                        strings: [
                            "Full Stack Developer",
                            "Frontend Developer",
                            "Backend Developer",
                            "Programmer",
                            "Web Developer"
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
              </Span>
            </TextLoop>
            <SubTitle data-aos="fade-up" data-aos-delay="200">
              "I am a motivated and versatile aspiring Full Stack Developer, passionate about improving my coding skills and creating Web Applications. With a positive attitude and a growth mindset, I am dedicated to continuous learning and tackling new challenges. Excited to collaborate in dynamic team environments and create impactful solutions together."
            </SubTitle>
            <ResumeButton href="#"  data-aos-delay="400">Check Resume</ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer data-aos="zoom-in">
            <Img src={Heroimg} />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default Herosection;

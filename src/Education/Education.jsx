import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import Img1 from '../images/Graduation.jpg';
import Img2 from '../images/HSC.jpg';
import Img3 from '../images/SSC.jpg';

const EducationContainer = styled.div`
  background: #FFFFFF; /* lightTheme.background */
  min-height: 80vh;
`;

const Heading = styled.h1`
  text-align: center;
  color: #333333; /* lightTheme.text_primary */

  span {
    color: #007BFF; /* lightTheme.primary */
  }
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 200px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 24px;
  backdrop-filter: blur(3px) saturate(106%);
  background-color: #F8F9FA; /* lightTheme.card */
  border: 1px solid rgba(0, 0, 0, 0.125);
  position: relative;
  margin-top: 30px;
  overflow: hidden;
  transition: all 0.3s;
  margin-bottom: 20px;

  &:hover {
    transform: scale(1.03);
    box-shadow: 10px 5px 15px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 80%;
    height: auto;
  }
`;

const ImageContainer = styled.div`
  width: 35%;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 150px;
  }
`;

const Image = styled.img`
  object-fit: cover;
  position: relative;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 15px;
  flex-wrap: wrap;

  @media screen and (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h3`
  font-size: 22px;
  padding: 10px 0;
  font-weight: 600;
  text-align: left;
  margin-left: 10px;
  color: #333333; /* lightTheme.text_primary */
  color: #854CE6;

  @media screen and (max-width: 600px) {
    font-size: 18px;
    margin-left: 5px;
  }
`;

const Text = styled.p`
  font-size: 18px;
  margin-left: 10px;
  text-align: left;
  color: #666666; /* lightTheme.text_secondary */

  @media screen and (max-width: 600px) {
    font-size: 18px;
    margin-left: 5px;
  }
`;

const Year = styled.h4`
  font-size: 18px;
  color: #22b100; /* Green */
  text-align: left;
  margin: 10px;
  font-weight: 700;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

function Education() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  return (
    <EducationContainer id="education">
      <Heading>
      <i className="bi bi-mortarboard"></i> My <span>Education</span>
      </Heading>
      {/* <Quote>
        Education is not the learning of facts, but the training of the mind to
        think.
      </Quote> */}

      <BoxContainer>
        <Box data-aos="fade-up">
          <ImageContainer><Image src={Img1} alt="Graduation"/></ImageContainer>
          <Content>
            <Title>Bachelors of Science in Information technology</Title>
            <Text>Pune Vidyarthi Griha's College of Science & Technology</Text>
            <Year>2020-2023 | Completed</Year>
          </Content>
        </Box>

        <Box data-aos="fade-up">
          <ImageContainer><Image src={Img2} alt="HSC"/></ImageContainer>
          <Content>
            <Title>HSC (12th)</Title>
            <Text>Ramnarain Ruia College</Text>
            <Year>2018-2020 | Completed</Year>
          </Content>
        </Box>

        <Box data-aos="fade-up">
          <ImageContainer><Image src={Img3} alt="SSC"/></ImageContainer>
          <Content>
            <Title>SSC (10th)</Title>
            <Text>Shree Dev Gopalkrishna Madhyamik Vidyamandir, Guhagar</Text>
            <Year>2018 | Completed</Year>
          </Content>
        </Box>
      </BoxContainer>
    </EducationContainer>
  );
}

export default Education;

import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #F2F3F4; /* light background */
`;

const Wrapper = styled.div`
  max-width: 1350px;
  width: 100%;
  padding: 20px;
  text-align: center;
`;

const Title = styled.div`
  font-size: 52px;
  font-weight: 600;
  margin-top: 20px;
  color: #333333;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-top: 12px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-top: 10px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  margin: 12px auto;
  max-width: 600px;
  color: #666666;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  margin: 28px auto;
  padding: 32px;
  background-color: #FFFFFF; /* light background */
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: #333333;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Input = styled.input`
  font-size: 18px;
  padding: 12px 16px;
  border: 1px solid rgba(102, 102, 102, 0.5);
  border-radius: 12px;
  outline: none;
  background-color: #FFFFFF; /* light background */
  color: #333333;

  &:focus {
    border-color: #854CE6; /* highlight color */
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px 12px;
  }
`;

const TextArea = styled.textarea`
  font-size: 18px;
  padding: 12px 16px;
  border: 1px solid rgba(102, 102, 102, 0.5);
  border-radius: 12px;
  outline: none;
  background-color: #FFFFFF; /* light background */
  color: #333333;

  &:focus {
    border-color: #854CE6; /* highlight color */
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px 12px;
  }
`;

const Button = styled.input`
  font-size: 18px;
  font-weight: 600;
  padding: 13px 16px;
  border: none;
  border-radius: 12px;
  background: #854CE6; /* gradient with highlight color */
  color: #F2F3F4; /* light text */
  cursor: pointer;

  &:hover {
    background: linear-gradient(225deg, #663399 0%, #4B0082 100%);
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px 12px;
  }
`;

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container id="contact" data-aos="fade-up">
      <Wrapper>
        <Title data-aos="fade-up">Contact</Title>
        <Desc data-aos="fade-up" data-aos-delay="100">Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm action="https://formspree.io/f/mkgwnvkz" method="post" data-aos="fade-up" data-aos-delay="200">
          <ContactTitle>Email Me 🚀</ContactTitle>
          <Input type="email" placeholder="Your Email" name="from_email" required />
          <Input type="text" placeholder="Your Name" name="from_name" required />
          <Input type="text" placeholder="Subject" name="subject" required />
          <TextArea placeholder="Message" name="message" rows="4" required />
          <Button type="submit" value="Send" />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;

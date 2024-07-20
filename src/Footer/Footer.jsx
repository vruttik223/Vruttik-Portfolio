import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background: #171721; /* Dark background */
  padding-bottom: 30px;
  color: #F2F3F4; /* Light text color */
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: #171721;
`;

const Box = styled.div`
  flex: 1 1 25rem;
  margin: 30px;

  h3 {
    font-size: 25px;
    color: #854CE6; /* Highlight color */
    padding-bottom: 10px;
    font-weight: normal;
  }

  p {
    font-size: 20px;
    color: #F2F3F4; /* Light text color */
    padding: 5px 0;
    text-transform: none;

    i {
      padding-right: 10px;
      color: #854CE6; /* Highlight color */
    }
  }

  a {
    font-size: 18px;
    color: #FFFFFF; /* Light color for links */
    padding: 5px 0;
    display: block;

    &:hover {
      color: #854CE6; /* Highlight color on hover */
    }
  }

  .share {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;

    a {
      height: 50px;
      width: 50px;
      padding: 13px;
      text-align: center;
      border-radius: 50%;
      font-size: 25px;
      margin-right: 20px;
      transition: 0.2s;
      background: #854CE6; /* Highlight color */
      color: #F2F3F4; /* Light text color */
      border: none;

      &:hover {
        background: #6b3cb6; /* Darker highlight color on hover */
        transform: scale(0.98);
        border: 1px solid #6b3cb6; /* Darker highlight color on hover */
        color: #F2F3F4; /* Light text color */
      }
    }
  }

  @media (max-width: 600px) {
    margin: 20px;

    p {
      padding: 10px;
    }

    .share a {
      padding: 12px;
    }
  }
`;

const Credit = styled.h1`
  padding: 10px 0 0 0;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #F2F3F4; /* Light text color */
  border-top: 2px solid #ccc;

  a {
    color: #854CE6; /* Highlight color */
  }

  .bi-heart-fill {
    color: red;
    margin: 0 3px;
    font-size: 25px;
    animation: pound 0.35s infinite alternate;

    @keyframes pound {
      to {
        transform: scale(1.1);
      }
    }
  }
`;

function Footer() {
  return (
    <FooterContainer  id="footer">
      <BoxContainer>
        <Box data-aos="fade-up">
          <h3>Vruttik's Portfolio</h3>
          <p>
            Thank you for visiting my personal portfolio website. Connect with me over socials. <br /> <br />
            Let's make something great together <i className="bi bi-stars-fill"></i>. Keep Rising 🚀.
          </p>
        </Box>

        <Box data-aos="fade-up" data-aos-delay="100">
          <h3>Quick Links</h3>
          <a href="#home"><i className="bi bi-chevron-right"></i> Home</a>
          <a href="#about"><i className="bi bi-chevron-right"></i> About</a>
          <a href="#skills"><i className="bi bi-chevron-right"></i> Skills</a>
          <a href="#project"><i className="bi bi-chevron-right"></i> Project</a>
          <a href="#education"><i className="bi bi-chevron-right"></i> Education</a>
          <a href="#contact"><i className="bi bi-chevron-right"></i> Contact</a>
        </Box>

        <Box data-aos="fade-up" data-aos-delay="200">
          <h3>Contact Info</h3>
          <p><i className="bi bi-telephone-fill"></i>+91 770610343</p>
          <p><i className="bi bi-envelope-fill"></i>vruttikghanekar@gmail.com</p>
          <p><i className="bi bi-map-fill"></i>Mumbai, India-421202</p>
          <div className="share">
            <a href="https://github.com/vruttik223" className="bi bi-github" target="_blank" rel="noopener noreferrer"></a>
            <a href="mailto:vruttikghanekar@gmail.com" className="bi bi-envelope-fill" aria-label="Mail" target="_blank" rel="noopener noreferrer"></a>
            <a href="#" className="bi bi-instagram" target="_blank" rel="noopener noreferrer"></a>
            <a href="#" className="bi bi-telegram" target="_blank" rel="noopener noreferrer"></a>
          </div>
        </Box>
      </BoxContainer>

      <Credit>
        Designed with <i className="bi bi-heart-fill"></i> by <a href="#"> Vruttik</a>
      </Credit>
    </FooterContainer>
  );
}

export default Footer;

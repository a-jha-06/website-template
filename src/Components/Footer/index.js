// Filename - components/Footer.js
import React from "react";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import { SocialIcon } from 'react-social-icons'
const Footer = () => {
  return (
    <div className="container">
      <Box>
        <h1 className="header"
          style={{
            color: "#ADBBDA",
            textAlign: "center",
            marginTop: "10px",
          
          }}
        >
          &copy; {new Date().getFullYear()} Amisha Jha
        </h1>

        <FooterContainer>
          <Row>
            <Row>
              <div>
                <SocialIcon url="www.youtube.com" />
                <SocialIcon url="www.instagram.com" />
                <SocialIcon url="www.twitter.com" />

                <SocialIcon url="www.linkedin.com" />
              </div>
            </Row>

              <Column>
              <Heading>Use Cases</Heading>
              <FooterLink href="#">
                UI design
              </FooterLink>
              <FooterLink href="#">
                UX design
              </FooterLink>
              <FooterLink href="#">
                Wireframing
              </FooterLink>
              <FooterLink href="#">
                Diagramming
              </FooterLink>
              <FooterLink href="#">
                Brainstorming
              </FooterLink>
              <FooterLink href="#">
                Online Whiteboard
              </FooterLink>
              <FooterLink href="#">
                Team Collaboration
              </FooterLink>
            </Column>
            <Column>
              <Heading>Explore</Heading>
              <FooterLink href="#">
                Design
              </FooterLink>
              <FooterLink href="#">
                Prototyping
              </FooterLink>
              <FooterLink href="#">
                Development
              </FooterLink>
              <FooterLink href="#">
                Design System
              </FooterLink>
              <FooterLink href="#">
                Collaboration
              </FooterLink>
              <FooterLink href="#">
                 Design Process
              </FooterLink>
              <FooterLink href="#">
                FigJam
              </FooterLink>
            </Column>
            <Column>
              <Heading>Resources</Heading>
              <FooterLink href="#">
                Blog
              </FooterLink>
              <FooterLink href="#">
                Best Practices
              </FooterLink>
              <FooterLink href="#">
                Colors
              </FooterLink>
              <FooterLink href="#">
                Color wheel
              </FooterLink>
              <FooterLink href="#">
                Support
              </FooterLink>
              <FooterLink href="#">
                Developers
              </FooterLink>
              <FooterLink href="#">
                Resource Library
              </FooterLink>
            </Column>
            
          </Row>
         
        </FooterContainer>
       
      </Box>
      
    </div>
    
  );
};
export default Footer;


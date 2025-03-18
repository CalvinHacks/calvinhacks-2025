import React from 'react'
import { FooterContainer, SocialMediaContainer, InfoContainer, ContentContainer, StyledLink } from './FooterElement'
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IconContext } from 'react-icons';

function FooterSection() {
    return (
        <>
            <IconContext.Provider value={{ color: '#fff', size: '30px' }}>
                <FooterContainer>
                    <ContentContainer>
                        <InfoContainer>
                            <p>More Info</p>
                            <StyledLink><a href="https://abstraction-hackathon-2025.devpost.com/?preview_token=mM4lt3C5zP6qX4PiRX7mXDXf8YS0%2B1yPZUOPAercIE8%3D" target="_blank" rel="noopener noreferrer">Devpost</a></StyledLink> | <StyledLink><a href="https://discord.gg/cyXUzYnrn8" target="_blank" rel="noopener noreferrer">Discord</a></StyledLink>
                            <p>Copyright @ Abstraction 2025</p>
                        </InfoContainer>
                        <SocialMediaContainer>
                            <p> Follow us on social media!</p>
                            <a href="https://www.instagram.com/calvinabstraction/" target="_blank" rel="noopener noreferrer">
                                <BsInstagram />
                            </a>
                            <a href="mailto:abstraction@calvin.edu" target="_blank" rel="noopener noreferrer">
                                <AiOutlineMail />
                            </a>
                        </SocialMediaContainer>
                    </ContentContainer>
                </FooterContainer>
            </IconContext.Provider>
        </>
    )
}

export default FooterSection

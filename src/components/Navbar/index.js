import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavButton,
  NavButtonLink,
  NavItemResume,
} from "./NavbarElement";
import { animateScroll as scroll } from "react-scroll";
import logo from "../../image/logo.png";

const Navbar = ({ toggle }) => {
  const [ScrollNav, SetScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      SetScrollNav(true);
    } else {
      SetScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav>
        <NavbarContainer scrollNav>
          <NavLogo to="/">
            <img onClick={toggleHome} src={logo} alt="logo" />
            {/* <p>CalvinHacks</p> */}
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="faq"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                FAQ
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="schedule"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Schedule
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="Sponsors"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Sponsors
              </NavLinks>
            </NavItem>
            <NavItemResume 
              as="a"
              href="https://docs.google.com/document/d/1PMoMHBsA6PeJWPApwMy9zLURWc5ExGQJRLX_38UgbL0/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"             
            >
            Rules
              
            </NavItemResume>
            {/* TODO: My changes */}
            <NavButton>
              <NavButtonLink 
                as="a"
                href="https://abstraction-hackathon-2025.devpost.com/?preview_token=mM4lt3C5zP6qX4PiRX7mXDXf8YS0%2B1yPZUOPAercIE8%3D"
                target="_blank"
                rel="noopener noreferrer" 
                >
              Submit Code
              </NavButtonLink>
            </NavButton>
            
            {/* <NavButton>
              <NavButtonLink to="/signin">Log in</NavButtonLink>
            </NavButton>  */}
            {/* TODO: My changes */}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

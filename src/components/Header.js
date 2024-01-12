import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const nav = useRef(null);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    var lastScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = (event) => {
      var currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop == lastScrollTop) {
        nav.current.style.transform = "translateY(0px)";
      } else if (currentScrollTop < lastScrollTop) {
        nav.current.style.transform = "translateY(0px)";
      } else {
        nav.current.style.transform = "translateY(-200px)";
      }

      lastScrollTop = currentScrollTop;
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [nav]);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={nav}>
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center">
          <nav>
            {/* Add social media links based on the `socials` data */}
            {socials.map((social, index) => (
              <a href={social.url} key={index}>
                <FontAwesomeIcon
                  icon={social.icon}
                  size="2x"
                  width={50}
                  height={50}></FontAwesomeIcon>
              </a>
            ))}
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <button onClick={handleClick("projects")}>Projects</button>
              <button onClick={handleClick("contactme")}>Contact Me</button>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};;;;;;;;;
export default Header;

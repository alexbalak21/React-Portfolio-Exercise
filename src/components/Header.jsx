import React, { useEffect, useRef } from "react";
import { Box, HStack } from "@chakra-ui/react";


const socials = [
  { icon: "/React-Portfolio-Exercise/icons/envelope.svg", label: "Email", url: "mailto:pete@example.com" },
  { icon: "/React-Portfolio-Exercise/icons/github.svg", label: "GitHub", url: "https://github.com" },
  { icon: "/React-Portfolio-Exercise/icons/linkedin.svg", label: "LinkedIn", url: "https://www.linkedin.com" },
  { icon: "/React-Portfolio-Exercise/icons/medium.svg", label: "Medium", url: "https://medium.com" },
  { icon: "/React-Portfolio-Exercise/icons/stack-overflow.svg", label: "Stack Overflow", url: "https://stackoverflow.com" },
];


const Header = () => {
  const headerRef = useRef();
  const prevScrollPos = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const header = headerRef.current;

      if (!header) return;

      if (currentScrollPos > prevScrollPos.current && currentScrollPos > 60) {
        header.style.transform = "translateY(-200px)";
      } else {
        header.style.transform = "translateY(0)";
      }

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Smooth scroll with configurable duration and header offset
  const smoothScrollTo = (targetY, duration = 700) => {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    let startTime = null;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, startY + distance * eased);
      if (elapsed < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const handleClick = (anchor, duration = 500) => (e) => {
    e.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      const header = headerRef.current;
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      const elementY = element.getBoundingClientRect().top + window.pageYOffset;
      const targetY = Math.max(elementY - headerHeight - 12, 0);
      smoothScrollTo(targetY, duration);
    }
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      transform="translateY(0)"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`social-${idx}`}
                >
                  <img src={social.icon} alt={social.label} width="32" height="32" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#projects" onClick={handleClick("projects")}>Projects</a>
              <a href="/#contactme" onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;

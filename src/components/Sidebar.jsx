import React from 'react';
import styled from 'styled-components';
import logImage from "../Images/Logo.png";
import { HomeRounded, SearchRounded, CloseRounded, UploadRounded, LightModeRounded, FavoriteRounded, LogoutRounded, DarkModeRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const MenuContainer = styled.div`
  flex: 0.6;
  flex-direction: column;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
   transform: ${({ menuOpen }) => (menuOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
`;

const Image = styled.img`
  height: 40px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: bold;
  font-size: 20px;
  margin: 16px 0px;
`;

const Close = styled.div`
  display: none;
  @media (max-width: 1100px) {
    display: block;
    cursor: pointer;
  }
`;

const Elements = styled.div`
  padding: 4px 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  cursor: pointer;
  text-decoration: none !important;
  color: ${({ theme }) => theme.text_primary};
  width: 83%;
  &:hover {
    background-color: ${({ theme }) => theme.text_secondary + 50};
  }
`;

const Navtext = styled.div`
  padding: 12px 0;
`;

const HR = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.text_primary};
  margin: 10px 0px;
`;

const Sidebar = ({ setMenuOpen, setDarkMode, darkMode, menuOpen }) => {
  const menuItems = [
    {
      link: "/",
      name: "Dashboard",
      icon: <HomeRounded />
    },
    {
      link: "/search",
      name: "Search",
      icon: <SearchRounded />
    },
    {
      link: "/favourites",
      name: "Favourites",
      icon: <FavoriteRounded />
    },
  ];

  const button = [
    {
      fun: () => console.log("upload"),
      name: "Upload",
      icon: <UploadRounded />
    },
    {
      fun: () => setDarkMode(!darkMode),
      name: darkMode ? "Light Mode" : "Dark Mode",
      icon: darkMode ? <LightModeRounded /> : <DarkModeRounded />
    },
    {
      fun: () => console.log("logout"),
      name: "Log out",
      icon: <LogoutRounded />
    }
  ];

  return (
    <MenuContainer menuOpen={menuOpen}>
      <Flex>
        <Logo>
          <Image src={logImage} />
          Podstream
        </Logo>
        <Close onClick={() => setMenuOpen(false)}>
          <CloseRounded />
        </Close>
      </Flex>
      {menuItems.map((item, index) => (
        <Link to={item.link} style={{ textDecoration: "none" }} key={index}>
          <Elements>
            {item.icon}
            <Navtext>{item.name}</Navtext>
          </Elements>
        </Link>
      ))}
      <HR />
      {button.map((item, index) => (
        <Elements onClick={item.fun} key={index}>
          {item.icon}
          <Navtext>{item.name}</Navtext>
        </Elements>
      ))}
    </MenuContainer>
  );
};

export default Sidebar;

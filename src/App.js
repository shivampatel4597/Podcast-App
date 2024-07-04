import React, { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './utils/Themes';
import Sidebar from './components/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import MenuRounded from '@mui/icons-material/MenuRounded';

const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.bgLight};
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

const HamburgerMenu = styled.div`
  display: none;
  position: absolute;
  top: 16px;
  left: 16px;
  cursor: pointer;
  @media (max-width: 1100px) {
    display: block;
  }
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container>
          <HamburgerMenu onClick={() => setMenuOpen(true)}>
            <MenuRounded />
          </HamburgerMenu>
          <Sidebar setMenuOpen={setMenuOpen} setDarkMode={setDarkMode} darkMode={darkMode} menuOpen={menuOpen} />
          <Frame>Podestream</Frame>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AboutPage, HobbyPage, Main, MySkillsPage, WorkPage } from './components';
import { theme } from './components/Themes';
import GlobalStyle from './globalStyles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<MySkillsPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/hobby" element={<HobbyPage />} />
          {/* TODO: ADD status page here */}
          <Route path="*" element={<Main />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;

import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { About, Hobbies, Main, Skills, Work } from './pages';
import { PageUrl } from './constants';
import { theme } from './themes';
import GlobalStyle from './globalStyles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path={PageUrl.MAIN} element={<Main />} />
          <Route path={PageUrl.ABOUT} element={<About />} />
          <Route path={PageUrl.SKILLS} element={<Skills />} />
          <Route path={PageUrl.WORK} element={<Work />} />
          <Route path={PageUrl.HOBBIES} element={<Hobbies />} />
          {/* TODO: ADD status page here */}
          <Route path="*" element={<Main />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;

import { useLocation } from 'react-router-dom';
import { PageUrl } from '../constants';

const useShouldBeLightTheme = () => {
  const { pathname } = useLocation();
  const shouldBeLight = [PageUrl.WORK, PageUrl.ABOUT].includes(pathname as PageUrl);
  return shouldBeLight;
};

export default useShouldBeLightTheme;

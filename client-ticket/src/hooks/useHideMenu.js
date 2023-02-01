import { useContext, useEffect } from 'react';
import { UiContext } from '../context/uiContext';

export const useHideMenu = (hiden) => {
  const { showMenu, hideMenu } = useContext(UiContext);

  useEffect(() => {
    if (hiden) {
      hideMenu();
    } else {
      showMenu();
    }
  }, [hideMenu, showMenu, hiden]);
};

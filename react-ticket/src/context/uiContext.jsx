import { createContext, useState } from 'react';

export const UiContext = createContext();

const UiProvider = ({ children }) => {
  const [hidenMenu, setHidenMenu] = useState(false);

  const showMenu = () => {
    setHidenMenu(false);
  };

  const hideMenu = () => {
    setHidenMenu(true);
  };

  return (
    <UiContext.Provider
      value={{
        showMenu,
        hideMenu,
        hidenMenu,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export default UiProvider;

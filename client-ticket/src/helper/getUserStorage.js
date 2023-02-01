export const getUserStorage = () => {
  return {
    desktop: localStorage.getItem('desktop'),
    agent: localStorage.getItem('agent'),
  };
};

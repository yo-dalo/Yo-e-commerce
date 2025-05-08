import { createContext, useContext, useState, useEffect } from "react";

const UtilityContext = createContext();

export const UtilityProvider = ({ children }) => {
  const [isPhone, setIsPhone] = useState({
    isPhone: null,
    width: null,
    height: null,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setIsPhone({
        isPhone: width <= 600,
        width,
        height,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call immediately to set initial values

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <UtilityContext.Provider value={{ isPhone }}>
      {children}
    </UtilityContext.Provider>
  );
};

export const useUtility = () => useContext(UtilityContext);
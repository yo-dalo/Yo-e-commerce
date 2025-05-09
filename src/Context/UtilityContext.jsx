import { createContext, useContext, useState, useEffect } from "react";
import Yo from '../Part/Utility/Axios';

const UtilityContext = createContext();

export const UtilityProvider = ({ children }) => {
  const [isPhone, setIsPhone] = useState({
    isPhone: null,
    width: null,
    height: null,
  });
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  
  useEffect(()=>{
    const getSubCategoryData = async ()=>{
      try {
       const res = await Yo.get('/api/site/sub-categories/')
        setSubCategoryData(res?.data ||[]);
      } catch (error) {
        alert("sub cat err")
      }
    }
    getSubCategoryData()
  },[])
  

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
    <UtilityContext.Provider value={{ isPhone , subCategoryData}}>
      {children}
    </UtilityContext.Provider>
  );
};

export const useUtility = () => useContext(UtilityContext);
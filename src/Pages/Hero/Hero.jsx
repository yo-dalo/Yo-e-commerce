import React, { useEffect, useState } from 'react';
import HeroPage_1 from './HeroPage_1.jsx';
import HeroPageWithTabs from '../../Part/Hero/HeroPageWithTabs.jsx';
import HeroPage_3 from './HeroPage_3.jsx';
import { useUtility } from "../../Context/UtilityContext";

const Hero = () => {
  const { isPhone, yoData, getYoData } = useUtility();
  const [displayData, setDisplayData] = useState([]);
  const [activeTab, setActiveTab] = useState('best_seller');
  const [loading, setLoading] = useState({
    loading_x:true,
  });

  // Initial load
  useEffect(() => {
    fetchBestSeller();
  }, []);

  const fetchBestSeller = async () => {
    setActiveTab('best_seller');
    try {
      if (!yoData?.best_seller) {
       setLoading(pre=>({...pre,loading_x:true}))
        await getYoData("best_seller", "../src/TestData/Bast_saller.json");
       setLoading(pre=>({...pre,loading_x:false}))
      }
      setDisplayData(yoData?.best_seller || []);

    } catch (error) {
      console.error("Error loading best sellers:", error);
    }
  };

  const fetchMostRecent = async () => {
    setActiveTab('most_recent');
    try {
      if (!yoData?.most_recent) {
       setLoading(pre=>({...pre,loading_x:true}))
        await getYoData("most_recent", "../src/TestData/Mast_Recnt.json");
        setLoading(pre=>({...pre,loading_x:false}))

      }
      setDisplayData(yoData?.most_recent || []);
    } catch (error) {
      console.error("Error loading most recent:", error);
    }
  };

  // Update display data when yoData changes
  useEffect(() => {
    if (activeTab === 'best_seller' && yoData?.best_seller) {
      setDisplayData(yoData.best_seller);
    } else if (activeTab === 'most_recent' && yoData?.most_recent) {
      setDisplayData(yoData.most_recent);
    }
  }, [yoData, activeTab]);

  return (
    <div className="font-[Inter] dark:bg-gray-900 bg-white relative z-[10]">
      <HeroPage_1 />
      <HeroPageWithTabs 
        data={yoData?.tranding} 
        option1="Trending" 
        option2="Coming Soon" 
        spaceBetween={10} 
        slidesPerView={1.2}
        isLoading={true}
      />
      <HeroPageWithTabs 
        data={displayData} 
        option1="Best Seller" 
        option2="Most Recent" 
        onClick1={fetchBestSeller} 
        onClick2={fetchMostRecent}
        imgClassName="!h-[35.1vh]" 
        infoClassName="text-sm" 
        spaceBetween={5} 
        slidesPerView={2.2}
        isLoading={loading.loading_x}
      />
      <HeroPageWithTabs 
        data={yoData?.deluxe} 
        option1="Deluxe" 
        option2="Coming Soon" 
        imgClassName="!h-[35.1vh]" 
        infoClassName="text-sm" 
        spaceBetween={5} 
        slidesPerView={2.2}
        isLoading={0}
      />
      <HeroPage_3 />
    </div>
  );
};

export default Hero;
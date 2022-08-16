import axios from "axios";
import { useEffect, useState } from "react";
import FilterSearch from "../components/FilterSearch";
import SearchResults from "../components/SearchResults";

const ListPage = () => {

  const dummyData = [
    {
      thumbnail: '../assets/img/listdummy1.png',
      platform: "Steam",
      name: "Red Dead Redemption 2",
      tags: ["FPS", "RPG"],
      originalPrice: 30000,
      discountPrice: 15000,
      cut: 50,
      link: "http://steamcommunity.com",
    },
    {
      thumbnail: "../assets/img/listdummy2.png",
      platform: "EPIC Store",
      name: "Crysis Remastered",
      tags: ["FPS"],
      originalPrice: 60000,
      discountPrice: 15000,
      cut: 75,
      link: "http://steamcommunity.com",
    },
    {
      thumbnail: "../assets/img/listdummy3.png",
      platform: "GOG",
      name: "Grand Theft Auto IV: The Complete Edition",
      tags: ["Single", "Action"],
      originalPrice: 10000,
      discountPrice: 9000,
      cut: 10,
      link: "http://steamcommunity.com",
    },
  ];
  
  const [searchData, setSearchData] = useState(dummyData);

  const searchHandler = (filters) => {
    console.log(`----Filters----`);
    console.log(filters);
    const filteredResults = dummyData.filter(
      (item) => item.tags.includes(filters.genre) && item.platform === filters.platform
    );
    console.log(filteredResults);
    setSearchData(filteredResults);
  };

  return (
    <section>
      <FilterSearch searchHandler={searchHandler} />
      <SearchResults results={searchData} />
    </section>
  );
};

export default ListPage;

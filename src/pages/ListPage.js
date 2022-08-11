import { useState } from "react";
import FilterSearch from "../components/FilterSearch";
import SearchResults from "../components/SearchResults";

const ListPage = () => {
  const dummyData = [
    {
      thumbnail: "../assets/img/Kubernetes_logo.png",
      platform: "Steam",
      name: "Test Game 1",
      tags: ["FPS", "RPG"],
      originalPrice: 30000,
      discountPrice: 15000,
      cut: 50,
      link: "http://steamcommunity.com",
    },
    {
      thumbnail: "../assets/img/Kubernetes_logo.png",
      platform: "EPIC Store",
      name: "Test Game 2",
      tags: ["RTS", "RPG"],
      originalPrice: 60000,
      discountPrice: 15000,
      cut: 75,
      link: "http://steamcommunity.com",
    },
    {
      thumbnail: "../assets/img/Kubernetes_logo.png",
      platform: "GOG",
      name: "Test Game 3",
      tags: ["Horror", "FPS"],
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

import { createContext, useState } from "react";
import axios from "axios";

export const SearchContext = createContext({
  cars: [],
  searchParams: {
    name: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    isRented: false,
  },
  searchCars: () => {},
});

export const SearchProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [searchParams, setSearchParams] = useState({
    name: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    isRented: false,
  });

  const funcSearch = async () => {
    const res = await axios.get(
      "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car",
      { params: searchParams }
    );

    console.log(res.data.cars);
    setCars([...res.data.cars]);
  };

  const value = { cars, searchParams, setSearchParams, funcSearch };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

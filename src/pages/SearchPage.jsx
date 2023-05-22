/* eslint-disable no-unused-vars */
import Navigation from "../components/Navigation";
import SearchForm, {
  PRICE_RANGE,
  CAR_CAPACITY,
} from "../components/SearchForm";
import ListCar from "../components/ListCar";
import { useState } from "react";
import axios from "axios";
import Hero from "../components/Hero";

const defaultParams = {
  name: "",
  category: "",
  isRented: false,
  minPrice: "",
  maxPrice: "",
};

const SearchPage = () => {
  const [cars, setCars] = useState();
  const [searchParams, setSearchParams] = useState(defaultParams);

  const onSubmitHandler = async () => {
    const res = await axios.get(
      "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car",
      { params: searchParams }
    );
    setCars(res.data.cars);
    console.log(searchParams);
  };

  const onChangeHandler = (e) => {
    const { name: formName, value } = e.target;
    switch (formName) {
      case "name":
        setSearchParams({ ...searchParams, name: value });
        break;
      case "category":
        setSearchParams({ ...searchParams, category: CAR_CAPACITY[value].id });
        break;
      case "price":
        setSearchParams({
          ...searchParams,
          minPrice: PRICE_RANGE[value].minPrice,
          maxPrice: PRICE_RANGE[value].maxPrice,
        });
        break;
      case "is_rented":
        setSearchParams({ ...searchParams, isRented: value });
        break;
      default:
        break;
    }
  };

  console.log(searchParams);

  return (
    <div className="position-relative">
      <Navigation />
      <Hero />
      <SearchForm
        onChangeHandler={onChangeHandler}
        onSubmitHandler={onSubmitHandler}
      />
      <div className="position-relative">
        <ListCar cars={cars} />
      </div>
    </div>
  );
};

export default SearchPage;

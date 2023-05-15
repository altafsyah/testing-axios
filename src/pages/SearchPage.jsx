import { useContext } from "react";
import { SearchContext } from "../context/search_context";
import Navigation from "../components/Navigation";
import SearchForm from "../components/SearchForm";
import ListCar from "../components/ListCar";

const SearchPage = () => {
  const { cars } = useContext(SearchContext);
  console.log(cars);
  return (
    <div className="position-relative">
      <Navigation />
      <div
        className="position-relative"
        style={{ background: "#F1F3FF", height: "30vh" }}
      >
        <SearchForm title="Pencarianmu" buttonTitle="edit" />
      </div>
      <div style={{ marginTop: "200px" }}>
        <ListCar />
      </div>
    </div>
  );
};

export default SearchPage;

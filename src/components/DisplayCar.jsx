import Navigation from "./Navigation";
import "../../public/assets/img-car.png";
// import { Container } from "react-bootstrap";
import Hero from "./Hero";
import SearchForm from "./SearchForm";

const DisplayCar = () => {
  return (
    <div className="position-relative">
      <Navigation />
      <Hero />
      <SearchForm/>
    </div>
  );
};

export default DisplayCar;

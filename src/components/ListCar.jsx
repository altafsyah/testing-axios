import { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { SearchContext } from "../context/search_context";

const ListCar = () => {
  const { cars } = useContext(SearchContext);
  return (
    <Container className="">
      <Row className="justify-content-center align-items-center" lg={3} xs={1}>
        {cars.map((car) => {
          return (
            <Col className="mb-4" key={car.id}>
              <Card className="px-3 py-3">
                <Card.Img
                  src="../../public/assets/car.png"
                  className="w-100 mt-3"
                />
                <Card.Body>
                  <Card.Title>{car.name}</Card.Title>
                  <Card.Title>Rp {car.price}/hari</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <Button className="w-100" variant="success">
                    Pilih Mobil
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ListCar;

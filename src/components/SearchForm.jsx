/* eslint-disable react/prop-types */
import { Container, Form, Card, Row, Col, Button } from "react-bootstrap";

export const CAR_CAPACITY = [
  {
    id: "small",
    title: "2 - 4 Orang",
  },
  {
    id: "medium",
    title: "4 - 6 Orang",
  },
  {
    id: "large",
    title: "6 - 8 Orang",
  },
];

export const PRICE_RANGE = [
  {
    id: 0,
    minPrice: 0,
    maxPrice: 400000,
    title: "< Rp 400.000",
  },
  {
    id: 1,
    minPrice: 400000,
    maxPrice: 600000,
    title: "Rp 400.000 - Rp 600.000",
  },
  {
    id: 2,
    minPrice: 600000,
    maxPrice: null,
    title: "> 600.000",
  },
];

const SearchForm = ({
  title,
  buttonTitle = "search",
  onChangeHandler,
  onSubmitHandler,
}) => {
  return (
    <Container
      className="mb-5"
      // style={{ top: "90%", left: "50%" }}
    >
      <Card className="py-4 px-4 shadow">
        <Form
          className=""
          //  onSubmit={onSubmitHandler}
        >
          {title && (
            <Row>
              <Col>{title}</Col>
            </Row>
          )}
          <Row className="align-items-end">
            <Col className="col-2">
              <Form.Group>
                <Form.Label>Nama Mobil</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ketik Nama/Tipe Mobil"
                  name="name"
                  onChange={onChangeHandler}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col className="col-3">
              <Form.Group>
                <Form.Label>Kategori</Form.Label>
                <Form.Select onChange={onChangeHandler} name="category">
                  <option value="">Masukkan Kapasitas Mobil</option>
                  {CAR_CAPACITY.map((cat, index) => {
                    return (
                      <option key={cat.id} value={index}>
                        {cat.title}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col className="col-3">
              <Form.Group>
                <Form.Label>Harga</Form.Label>
                <Form.Select name="price" onChange={onChangeHandler}>
                  <option value="">Masukkan Harga Sewa/Hari</option>
                  {PRICE_RANGE.map((price) => (
                    <option key={price.id} value={price.id}>
                      {price.title}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col className="col-2">
              <Form.Group>
                <Form.Label>Status</Form.Label>
                <Form.Select
                  className=""
                  name="is_rented"
                  onChange={onChangeHandler}
                >
                  <option value={true}>Disewakan</option>
                  <option value={false}>Tidak Disewakan</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col className="col-2">
              <Button
                type="button"
                onClick={onSubmitHandler}
                className="w-100"
                variant={`${
                  buttonTitle == "search" ? "primary" : "outline-primary"
                }`}
              >
                {buttonTitle.toUpperCase()}
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default SearchForm;

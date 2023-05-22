import { Image, Container } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="position-relative" style={{ background: "#F1F3FF", height: "60vh" }}>
      <Container className="h-100 d-flex justify-content-start align-items-center">
        <div className="w-50 z-0">
          <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
        </div>
      </Container>
      <Image
        src="../../public/assets/img-car.png"
        height="80%"
        className="position-absolute t end-0 z-n1 bottom-0"
      ></Image>
    </div>
  );
};

export default Hero;
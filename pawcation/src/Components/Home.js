import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import iphone6 from "../images/iphone6.png";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ControlledCarousel from "./Carousel";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const Features = [
    {
      title: "Easy to use.",
      description: "Book your pet's stay in just a few clicks!",
      icon: '<i class="fa-solid fa-circle-check fa-5x"></i>',
    },
    {
      title: "Grooming Services",
      description:
        "Give your pet the spa treatment with our grooming services.",
      icon: '<i class="fa-solid fa-spa fa-5x"></i>',
    },
    {
      title: "Live Updates",
      description:
        "Get real-time updates on your pet's activities and well-being.",
      icon: '<i class="fa-solid fa-bullseye fa-5x"></i>',
    },
  ];

  const handleBookNowClick = () => {
    console.log("Clicked");
    navigate("/bookingpage");
  };

  const handleOtherServicesClick = () => {
    navigate("/otherservices")
  }

  return (
    <>
      <div className="title fluid-container">
        <Container fluid className="fluid-container">
          <Row>
            <Col lg={6}>
              <h1 className="heading">
                Give your pet the luxury stay they deserve !
              </h1>
              <Button
                id="download-button"
                variant="dark"
                size="lg"
                onClick={handleBookNowClick}
              >
                <i class="fa-solid fa-hand-pointer"></i> Book now
              </Button>
              <Button id="download-button" variant="outline-light" size="lg" onClick={handleOtherServicesClick} >
                <i class="fa-solid fa-dog"></i> Other services
              </Button>
            </Col>
            <Col lg={6}>
              <img id="title-image" src={iphone6} alt="iphone-mockup" />
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <section id="features">
          <Row>
            {Features.map((feature, index) => (
              <Col lg={4}>
                <div className="feature-box" key={index}>
                  <div
                    className="icon"
                    dangerouslySetInnerHTML={{ __html: feature.icon }}
                  ></div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </section>
      </Container>

      <section id="testimonials">
        <ControlledCarousel />
      </section>

      <section id="book">
        <h3>
          Going on vacation? Let Pawcation take care of your pet's needs and
          give them a vacation too!
        </h3>
        <Button
          id="download-button"
          variant="dark"
          size="lg"
          onClick={handleBookNowClick}
        >
          <i class="fa-solid fa-hand-pointer"></i> Book now
        </Button>
      </section>

      {/* <!-- Footer --> */}

      <footer id="footer">
        <i class="socials fa-brands fa-facebook fa-2x"></i>
        <i class="socials fa-brands fa-twitter fa-2x"></i>
        <i class="socials fa-brands fa-instagram fa-2x"></i>
        <i class="socials fa-solid fa-envelope fa-2x"></i>
        <p className="socials">© Copyright Pawcation</p>
      </footer>
    </>
  );
}

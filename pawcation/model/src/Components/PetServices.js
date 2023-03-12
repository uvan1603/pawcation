import React, { useState } from "react";
import { GiStethoscope } from "react-icons/gi";
import {
  FaWalking,
  FaShower,
  FaCameraRetro,
  FaTruck,
  FaBrain,
} from "react-icons/fa";
import { Card, Row, Col } from "react-bootstrap";
import "./PetServices.css";
import PetServiceModal from "./PetServiceModal";

const PET_SERVICES = [
  {
    id: 1,
    icon: <FaWalking size="3rem" />,
    title: "Dog Walking",
    description:
      "Don't let a busy schedule keep your dog cooped up all day. We'll take them for a walk!",
  },
  {
    id: 2,
    icon: <FaShower size="3rem" />,
    title: "Pet grooming",
    description:
      "Your pet deserves the royal treatment. Give them the pampering they deserve with our pet grooming services.",
  },
  {
    id: 3,
    icon: <FaBrain size="3rem" />,
    title: "Training and behavior modification",
    description:
      "Say goodbye to bad habits and hello to a well-behaved pet with our expert training and behavior modification services.",
  },
  {
    id: 4,
    icon: <GiStethoscope size="3rem" />,
    title: "Veterinary care",
    description:
      "Our state-of-the-art facilities and advanced diagnostic tools ensure that your pet receives the best possible care.",
  },
  {
    id: 5,
    icon: <FaTruck size="3rem" />,
    title: "Pet transportation",
    description:
      "We know that pets can have unique needs and preferences during transportation. Our personalized service ensures that those needs are met.",
  },
  {
    id: 6,
    icon: <FaCameraRetro />,
    title: "Pet Photography",
    description:
      "From playful to majestic, our photographers know how to bring out the best in your pet during every photoshoot.",
  },
];

const PetServices = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleCardClick = (service) => {
    setShowModal(true);
    setSelectedService(service);
    // console.log(service);
  };

  return (
    <>
      <Card className="pet-services-card">
        <Card.Body>
          <Card.Title>Pet Services</Card.Title>
          <Row>
            {PET_SERVICES.slice(0, 3).map((service) => (
              <Col key={service.id}>
                <Card
                  className="pet-service-card"
                  onClick={() => handleCardClick(service)}
                >
                  <Card.Body>
                    <div className="service-icon">{service.icon}</div>
                    <Card.Title>{service.title}</Card.Title>
                    {/* <Card.Text>{service.description}</Card.Text> */}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row>
            {PET_SERVICES.slice(3, 6).map((service) => (
              <Col key={service.id}>
                <Card
                  className="pet-service-card"
                  onClick={() => handleCardClick(service)}
                >
                  <Card.Body>
                    <div className="service-icon">{service.icon}</div>
                    <Card.Title>{service.title}</Card.Title>
                    {/* <Card.Text>{service.description}</Card.Text> */}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
      {showModal && (
        <PetServiceModal
          service={selectedService}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default PetServices;

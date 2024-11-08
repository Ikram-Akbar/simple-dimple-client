import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Badge } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

import Loading from "../../Components/Loading";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/services")
      .then((response) => {
        setServices(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to fetch services");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center my-2">Our Services</h2>
      <div className="row">
        {services.map((service) => (
          <div className="col-md-4" key={service.id}>
            <Card className="mb-4 shadow-sm shadow-lg p-2">
              <Card.Img
                style={{ objectFit: "cover", height: "200px" }}
                variant="top"
                src={service.imageUrl}
                alt={service.name}
              />
              <Card.Body>
                <div className="my-3">
                  <div>
                    {service.technologies.map((tech, index) => (
                      <Badge pill bg="dark" key={index} className="me-2 ">
                        #{tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>{service.description}</Card.Text>

                {/* Rating & Button container */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        color={
                          index < Math.floor(service.rating)
                            ? "dark"
                            : "lightgray"
                        }
                      />
                    ))}
                    <span className="ms-2">{service.rating}</span>
                  </div>
                  <Button
                    as={Link}
                    to={`/services/${service._id}`}
                    variant="outline-dark"
                    size="sm"
                    aria-label={`View details of ${service.name}`}
                  >
                    View Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
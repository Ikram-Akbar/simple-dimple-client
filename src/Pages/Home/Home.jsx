import { Container, Row, Col } from "react-bootstrap";
import PromotionalCarousel from "../../Components/PromotionalCarousel";
import Team from "../../Components/Team";
import NewsletterSignUp from "../../Components/NewsletterSignUp";
import Partners from "../../Components/Partners";



const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <PromotionalCarousel />
                    <Partners/>
                    <Team />
                    <NewsletterSignUp />
                    

                </Col>
            </Row>
        </Container>
    );
};

export default Home;

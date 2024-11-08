import { Button, Carousel } from 'react-bootstrap';

const PromotionalCarousel = () => (
    <Carousel>
        {/* Slide 1 */}
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400"
                alt="First slide"
                style={{ height: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
                <h3>Exclusive Offer</h3>
                <p>Get 50% off on your first booking with us!</p>
                <Button variant='outline-primary'>Buy Now</Button>
            </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400"
                alt="Second slide"
                style={{ height: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
                <h3>Summer Special</h3>
                <p>Book now and enjoy special discounts on summer trips!</p>
                <Button variant='outline-primary'>Buy Now</Button>
            </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400"
                alt="Third slide"
                style={{ height: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
                <h3>Adventure Awaits</h3>
                <p>Join us for an adventure of a lifetime with our premium packages!</p>
                <Button variant='outline-primary'>Buy Now</Button>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
);

export default PromotionalCarousel;

import { Button, Carousel } from 'react-bootstrap';

const slides = [
    {
        image: 'https://i.ibb.co/L6bgJnD/carlos-muza-hpj-Sk-U2-UYSU-unsplash-1.jpg',
        title: 'Innovate with Us',
        subtitle: 'Empowering your business through custom web solutions.',
        description: 'Get 50% off on your first project with Simple Dimple!',
        buttonText: 'Start Project'
    },
    {
        image: 'https://i.ibb.co/c2z0HfT/marvin-meyer-SYTO3xs06f-U-unsplash-1.jpg',
        title: 'Boost Your Reach',
        subtitle: 'Drive traffic and growth with expert SEO strategies.',
        description: 'Exclusive discounts on SEO services this summer!',
        buttonText: 'Learn More'
    },
    {
        image: 'https://i.ibb.co/kQQvM3Z/emile-perron-xr-VDYZRGdw4-unsplash-1.jpg',
        title: 'Transform Ideas into Reality',
        subtitle: 'Customized apps to suit your unique business needs.',
        description: 'Join us for a consultation and explore our premium packages.',
        buttonText: 'Consult Us'
    }
];

const PromotionalCarousel = () => (
    <Carousel>
        {slides.map((slide, index) => (
            <Carousel.Item key={index}>
                <img
                    className="d-block w-100"
                    src={slide.image}
                    alt={`${slide.title} image`}
                    style={{ height: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.82)', padding: '1rem', borderRadius: '8px' }}>
                    <h3>{slide.title}</h3>
                    <h5>{slide.subtitle}</h5>
                    <p>{slide.description}</p>
                    <Button variant="outline-light">{slide.buttonText}</Button>
                </Carousel.Caption>
            </Carousel.Item>
        ))}
    </Carousel>
);

export default PromotionalCarousel;

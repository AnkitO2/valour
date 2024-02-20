
import { useState } from 'react';
import { Footerbaar } from '../Footer/Footerbaar';
import { Carousel, CarouselControl, CarouselIndicators, CarouselCaption, CarouselItem, Col, Row, Container } from 'reactstrap';
import './Scrollbaar.css';
const items = [
    {
        
        src:"/images/coding1.jpg",
        key: 1,

    },
    {
        src: '',
        key: 2,

    },
    {
        src: "",
        key: 3,
    },
    {
        src: '',
        key: 4,
    },
    {
        src: '',
        key: 5,
    },
    {
        src: '',
        key: 6,
    },
    {
        src: '',
        key: 7,
    },
    {
        src: '',
        key: 8,

    },
    {
        src: '',
        key: 9,
    },
    {
        src: '',
        key: 10,

    },
    {
        src: '',
        key: 11,
    },
];
export const Scrollbaar = (args) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };
    const slides = items.map((item) => {
        return (
            
            <CarouselItem
            className="custom-tag"
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}

            >
                <img src={item.src} />
                <CarouselCaption
                    captionText={item.caption}
                    captionHeader={item.caption}
                />
            </CarouselItem>
        );
    });

    return (

        <Container fluid>

            <Row>
                <Col lg={12} md={12} sm={12}>
                <style>
           {`.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`}
      </style>
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                        {...args}
                    >
                        <CarouselIndicators
                            items={items}
                            activeIndex={activeIndex}
                            onClickHandler={goToIndex}
                        />
                        {slides}
                        <CarouselControl

                            direction="prev"
                            directionText="Previous"
                            onClickHandler={previous}

                        />
                        <CarouselControl
                            direction="next"
                            directionText="Next"
                            onClickHandler={next}

                        />
                    </Carousel>

                </Col>
            </Row>
            <Footerbaar />
        </Container>

    );
}

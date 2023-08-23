import React from 'react'
import { useState } from 'react';
import { Carousel, CarouselControl, CarouselIndicators, CarouselCaption, CarouselItem } from 'reactstrap';
import './Scrollbaar.css'
const items = [
    {
        src: 'https://sigmasoftwares.org/images/hotel.png',
        key: 1,

    },
    {
        src: 'https://sigmasoftwares.org/images/account.png',
        key: 2,
    },
    {
        src: 'https://sigmasoftwares.org/images/food-main-pos-1.png',
        key: 3,
    },
    {
        src: 'https://sigmasoftwares.org/images/slide_1.jpg',
        key: 4,
    },
    {
        src: 'https://sigmasoftwares.org/images/slide_1.jpg',
        key: 5,
    },
    {
        src: 'https://sigmasoftwares.org/images/nidhi.png',

        key: 6,
    },
    {
        src: 'https://sigmasoftwares.org/images/realestate.png',
        key: 7,
    },
    {
        src: 'https://sigmasoftwares.org/images/slide_1.jpg',
        key: 8,

    },
    {
        src: 'https://sigmasoftwares.org/erp-img/Poultry-farm-ERP-Software.png',
        key: 9,
    },
    {
        src: 'https://sigmasoftwares.org/images/crm.png',
        key: 10,

    },
    {
        src: 'https://sigmasoftwares.org/images/slide_1.jpg',
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

        <div>
            <style>
                {`.CarouselItem{
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

        </div>
    );
}

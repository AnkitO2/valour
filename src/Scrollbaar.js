import React from 'react'
import { useState } from 'react';
import { Carousel, CarouselControl, CarouselIndicators, CarouselCaption, CarouselItem } from 'reactstrap';
import './Scrollbaar.css'
const items = [
    {
        src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1550&h=600',
        key: 1,

    },
    {
        src: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29mdHdhcmUlMjBDb21wYW55fGVufDB8fDB8fHww&auto=format&fit=crop&w=1550&h=600',
        key: 2,
    },
    {
        src: 'https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNvZnR3YXJlJTIwQ29tcGFueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1550&h=600',
        key: 3,
    },
    {
        src: 'https://images.unsplash.com/photo-1571826915679-c3568eab4be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1550&h=600',
        key: 4,
    },
    {
        src: 'https://images.unsplash.com/photo-1444653389962-8149286c578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1550&h=600',
        key: 5,
    },
    {
        src: 'https://images.unsplash.com/photo-1557186814-b29c2b31d57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1550&h=600',

        key: 6,
    },
    {
        src: 'https://images.unsplash.com/photo-1590650486895-79681b6f26a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1550&h=600',
        key: 7,
    },
    {
        src: 'https://images.unsplash.com/photo-1556565681-306458ef93cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1550&h=600',
        key: 8,

    },
    {
        src: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1550&h=600',
        key: 9,
    },
    {
        src: 'https://images.unsplash.com/flagged/photo-1551135049-83f3419ef05c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1550&h=600',
        key: 10,

    },
    {
        src: 'https://images.unsplash.com/photo-1549045345-058277380fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1550&h=600',
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

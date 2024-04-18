import React, { useEffect, useRef, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const Carousel = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });


    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])
    
    const intervalRef = useRef(null);
    
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            scrollNext();
        }, 5000);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
    }, [scrollNext]);

    return (
        <div>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                        <div className="embla__slide">
                            <img src="https://via.placeholder.com/1200x600" alt="Placeholder image" />
                        </div>
                        <div className="embla__slide">
                            <img src="https://via.placeholder.com/1200x600" alt="Placeholder image" />
                        </div>
                        <div className="embla__slide">
                            <img src="https://via.placeholder.com/1200x600" alt="Placeholder image" />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel
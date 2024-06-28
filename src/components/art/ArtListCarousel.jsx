import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import { getAllArtPieces } from '../../services/artService.jsx';
import "./Art.css"

export const ArtListCarousel = () => { 

    const [artPieces, setArtPieces] = useState([])
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const getAndSetPieces = () => {

        const shuffle = (array) => {
            for (var i = array.length - 1; i > 0; i--) {
              var j = Math.floor(Math.random() * (i + 1));
              var temp = array[i];
              array[i] = array[j];
              array[j] = temp;
            }
          }

        getAllArtPieces()
            .then(artArray => {
            shuffle(artArray)
            setArtPieces(artArray)
        })
    }

    useEffect(() => {
        getAndSetPieces()

    },[])
    
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === artPieces.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? artPieces.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = artPieces.map((item) => {
    return (
      <CarouselItem
        className="carousel-item"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.url} />
        <CarouselCaption
          className="text-light"
          captionText={item.artist}
          captionHeader={item.name}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {`.custom-tag {
            max-width: 100%;
            height: 50%px;
            background: black;
            }`}
      </style>
      <Carousel 
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        keyboard={true}
        >
        <CarouselIndicators
          items={artPieces}
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

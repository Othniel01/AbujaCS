import React, { useEffect } from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButton";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const SponsorCarousel = (props) => {
  const { children, options } = props;
  const autoplayOptions = { delay: 3000 }; // Delay in milliseconds
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // Optionally, to control autoplay, you can add a useEffect
  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("init", () => emblaApi.plugins.autoplay.start());
    }
  }, [emblaApi]);

  return (
    <section className="emblaSpons" dir="rtl">
      <div className="embla__viewportSpons" ref={emblaRef}>
        <div className="embla__containerSpons">
          {React.Children.map(children, (child, index) => (
            <div className="embla__slideSpons" key={index}>
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controlsSpons">
        <div className="embla__buttonsSpons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default SponsorCarousel;

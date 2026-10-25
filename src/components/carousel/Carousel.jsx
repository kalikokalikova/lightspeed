import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { VisualStudioPoint02, VisualStudioPoint2 } from 'react-old-icons'
import { useEffect } from "react"

import "./carousel.css"

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const goToPrev = () => emblaApi?.scrollPrev()
  const goToNext = () => emblaApi?.scrollNext()

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.plugins().autoplay?.play()
  }, [emblaApi])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <div>There's only one rule that I know of, babies--God damn it, you've got to be kind.</div>
            <div>Kurt Vonnegut</div>
          </div>
          <div className="embla__slide">
            <div>Sell your cleverness and buy bewilderment.</div>
            <div>Rumi</div>
          </div>
          <div className="embla__slide">
            <div>The man who is really serious, with the urge to find out what truth is, has no style at all. He lives only in what is.</div>
            <div>Bruce Lee</div>
          </div>
          <div className="embla__slide">
            <div>There is more wisdom in your body than in your deepest philosophy.</div>
            <div>Friedrich Nietzsche</div>
          </div>
          <div className="embla__slide">
            <div>A revolution without dancing is not a revolution worth having.</div>
            <div>Emma Goldman</div>
          </div>
          <div className="embla__slide">
            <div>If you have been, then continue to and don't even think of stopping.</div>
            <div>Kurt Vonnegut</div>
          </div>
          
        </div>
      </div>

      <div className="scrollers">
        <VisualStudioPoint02 size={40} onClick={goToPrev} />
        <VisualStudioPoint2 size={40} onClick={goToNext} />
      </div>
      
      
    </div>
  )
}
import img1 from '../assets/plumbing2.jpg'
import img2 from '../assets/plumbing3.jpg'
import img3 from '../assets/plumbing4.webp'
import img4 from '../assets/plumbing4.jpg'
import img5 from '../assets/tap.jpg'
// import img6 from '../assets/bgImage.webp'

const SlideComponent = () => {
    return (
        <div>


            <div id="indicators-carousel" className="relative w-full" data-carousel="static">
  
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

                    <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                        <img src={img1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>

                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={img2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>

                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={img3} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>

                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={img4} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>

                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={img5} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>
                </div>

                <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>

            </div>

        </div>
    )
}
export default SlideComponent;
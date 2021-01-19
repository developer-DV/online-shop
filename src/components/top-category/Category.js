import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import './Category.scss'
import img_1 from './img/camera.svg'
import img_2 from './img/computer.svg'
import img_3 from './img/game.svg'
import img_4 from './img/machine.svg'
import img_5 from './img/mobile-phone.svg'
import img_6 from './img/television.svg'

function Category() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true
    }

    return (
        <section className="top-category">
            <div className="container">
                <h1 className="top-category__headline"><span>top</span> category</h1>
                <div className="top-category__slider">
                    <Slider {...settings}>
                        <div className="top-category__card">
                            <a href="./" className="top-category__card-inner">
                                <div className="top-category__image">
                                    <img src={img_1} alt="camera" />
                                </div>
                                <div className="top-category__text">camera</div>
                            </a>
                        </div>
                        <div className="top-category__card">
                            <a href="./" className="top-category__card-inner">
                                <div className="top-category__image">
                                    <img src={img_2} alt="computer" />
                                </div>
                                <div className="top-category__text">computer</div>
                            </a>
                        </div>
                        <div className="top-category__card">
                            <a href="./" className="top-category__card-inner">
                                <div className="top-category__image">
                                    <img src={img_3} alt="game" />
                                </div>
                                <div className="top-category__text">game</div>
                            </a>
                        </div>
                        <div className="top-category__card">
                            <a href="./" className="top-category__card-inner">
                                <div className="top-category__image">
                                    <img src={img_4} alt="machine" />
                                </div>
                                <div className="top-category__text">machine</div>
                            </a>
                        </div>
                        <div className="top-category__card">
                            <a href="./" className="top-category__card-inner">
                                <div className="top-category__image">
                                    <img src={img_5} alt="mobile-phone" />
                                </div>
                                <div className="top-category__text">phone</div>
                            </a>
                        </div>
                        <div className="top-category__card">
                            <a href="./" className="top-category__card-inner">
                                <div className="top-category__image">
                                    <img src={img_6} alt="televisiion" />
                                </div>
                                <div className="top-category__text">televisiion</div>
                            </a>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Category
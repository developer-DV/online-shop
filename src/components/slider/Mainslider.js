import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./Mainslider.scss"
import slide1 from "./img/slide1.jpg"
import slide2 from "./img/slide2.jpg"

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <button
            className="slick-btn slick-prev"
            onClick={onClick}
        ></button>
    );
}

function NextArrow(props) {
    const { onClick } = props;
    return (
        <button
            className="slick-btn slick-next"
            onClick={onClick}
        ></button>
    );
}

function Mainslider() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        autoplay: true,
        autoplaySpeed: 3000,
    }

    return (
        <div className="slider">
            <Slider {...settings} className="slider__inner">
                <div className="slider__item">
                    <img className="slider__img" src={slide1} alt="slide1" />
                </div>
                <div className="slider__item">
                    <img className="slider__img" src={slide2} alt="slide1" />
                </div>
            </Slider>
        </div>
    );
}

export default Mainslider
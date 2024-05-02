import Slider from "react-slick";

export default function BasisSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        <div className="p-4">
          <img
            src={`/images/basis/candidates/Profile Template-5_Bangla-01.jpg`}
            alt=""
            className="h-[450px]object-cover"
          />
        </div>
        <div className="p-4">
          <img
            src={`/images/basis/candidates/Profile Template-5_Bangla-02.jpg`}
            alt=""
            className="h-[450px]object-cover"
          />
        </div>

        <div className="p-4">
          <img
            src={`/images/basis/candidates/Profile Template-5_Bangla-03.jpg`}
            alt=""
            className="h-[450px]object-cover"
          />
        </div>

        <div className="p-4">
          <img
            src={`/images/basis/candidates/Profile Template-5_Bangla-04.jpg`}
            alt=""
            className="h-[450px]object-cover"
          />
        </div>
        <div className="p-4">
          <img
            src={`/images/basis/candidates/Profile Template-5_Bangla-05.jpg`}
            alt=""
            className="h-[450px]object-cover"
          />
        </div>
        <div className="p-4">
          <img
            src={`/images/basis/candidates/Profile Template-5_Bangla-06.jpg`}
            alt=""
            className="h-[450px]object-cover"
          />
        </div>
        <div className="p-4">
          <img
            src={`/images/basis/candidates/Profile Template-5_Bangla-07.jpg`}
            alt=""
            className="h-[450px]object-cover"
          />
        </div>
        <div className="p-4">
          <img
            src={`/images/basis/candidates/Profile Template-5_Bangla-08.jpg`}
            alt=""
            className="h-[450px]object-cover"
          />
        </div>
        <div className="p-4">
          <img
            src={`/images/basis/candidates/Profile Template-5_Bangla-09.jpg`}
            alt=""
            className="h-[450px]object-cover"
          />
        </div>
        <div className="p-4">
          <img
            src={`/images/basis/candidates/Profile Template-5_Bangla-10.jpg`}
            alt=""
            className="h-[450px]object-cover"
          />
        </div>
      </Slider>
    </div>
  );
}

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./categorySlider.css";

const Sliders = ({ sliderSettings, children, ...rest }) => {
  const settings = sliderSettings;

  return (
    <div {...rest}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};
export default Sliders;

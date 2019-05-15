import React from "react";
import Slider from "react-slick";
 
class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {this.props.items.map((fileURL) => {
          return (
            <div key={this.props.items.indexOf(fileURL)}>
              <img src={fileURL}></img>
            </div>
          ) 
        })}
      </Slider>
    );
  }
}

export default SimpleSlider;
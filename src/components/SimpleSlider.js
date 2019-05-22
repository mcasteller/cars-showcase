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
        {this.props.items.map((file) => {
          return (
            <div key={this.props.items.indexOf(file)}>
              <img src={file.url}></img>
            </div>
          ) 
        })}
      </Slider>
    );
  }
}

export default SimpleSlider;
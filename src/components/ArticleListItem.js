import React from 'react';
import { Media } from 'react-bootstrap';
import strings from '../resources/strings';

export class ArticleListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: props.title ? props.title : '', 
      subTitle: props.subTitle ? props.subTitle : '', 
      files: props.files ? props.files : '',
      error: ''
    };
  }

	render() {
		return (
			<Media>
			  <img
			    className="mr-3"
			    src={this.state.files[0].url}
			    alt="Generic placeholder"
			  />
			  <Media.Body>
			    <h3>{this.state.title}</h3>
		   	    <h3>{this.state.subTitle}</h3>
			  </Media.Body>
			</Media>
		);
	}
} 

export default ArticleListItem;
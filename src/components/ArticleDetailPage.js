import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import SimpleSlider from './SimpleSlider'; 
import strings from '../resources/strings';

export class ArticleDetailPage extends React.Component {
	constructor(props) {
	    super(props);

	    this.state = {
	      title: props.article ? props.article.title : '', 
	      subTitle: props.article ? props.article.subTitle : '', 
	      description: props.article ? props.article.description : '',
	      files: props.article ? props.article.files : '',
	      error: ''
	    };
	};

	render() {
		return (
		    <div className="content-container">
		      <SimpleSlider
		      	items={this.state.files || [] }
		      	/>
	          <h1>{this.state.title}</h1>
	   	      <h2>{this.state.subTitle}</h2>
		      <span className="vehicle-description">{ReactHtmlParser(this.state.description)}</span>
		    </div>
		)	
	}
}

const mapStateToProps = (state, props) => ({
  article: state.articles.find((article) => article.id === props.match.params.articleId)
});

export default connect(mapStateToProps, undefined)(ArticleDetailPage);
import React from 'react';
import { connect } from 'react-redux';
import ArticleForm from './ArticleForm';
import { startAddArticle } from '../actions/articles';
import strings from '../resources/strings';

class AddArticlePage extends React.Component {
  onSubmit = (article) => {
    this.props.startAddArticle(article);
    this.props.history.push('/admin');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">{strings.site.article.addArticle}</h1>
          </div>
        </div>
        <div className="content-container">
          <ArticleForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

// Make dispatch functions to be available on props 
const mapDispatchToProps = (dispatch) => ({
  startAddArticle: (article) => dispatch(startAddArticle(article))
});

// Call higher order component with our component as function call parameter
// Also pass two params to connect component
export default connect(undefined, mapDispatchToProps)(AddArticlePage);

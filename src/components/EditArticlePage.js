import React from 'react';
import { connect } from 'react-redux';
import ArticleForm from './ArticleForm';
import { startEditArticle, startRemoveArticle } from '../actions/articles';
import strings from '../resources/strings';

export class EditArticlePage extends React.Component {
  onSubmit = (article) => {
    this.props.startEditArticle(this.props.article.id, article);
    this.props.history.push('/admin');
  };
  onRemove = () => {
    this.props.startRemoveArticle({ id: this.props.article.id });
    this.props.history.push('/admin');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">{strings.site.article.editArticle}</h1>
          </div>
        </div>
        <div className="content-container">
          <ArticleForm
            article={this.props.article}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>{strings.site.article.removeArticle}</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  article: state.articles.find((article) => article.id === props.match.params.articleId)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditArticle: (id, article) => dispatch(startEditArticle(id, article)),
  startRemoveArticle: (data) => dispatch(startRemoveArticle(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditArticlePage);
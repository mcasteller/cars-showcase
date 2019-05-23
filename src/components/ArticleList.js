import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ArticleListItem from './ArticleListItem';
import selectVehicles from '../selectors/vehicles';
import strings from '../resources/strings';

// This component is used on both vehicle list view and vehicle list
// edit mode
export const ArticleList = (props) => (
  <div className="content-container article">
    <div className="article__banner">
      <img className="hero__image"src="images/article_banner.jpg"/>
    </div>
    <h1>{strings.site.articles}</h1>
    <div className="list-body">
      {
        props.articles.length === 0 ? (
          <div className="list-item list-item--message">
            <span>{strings.site.noArticles}</span>
          </div>
        ) : (
            props.articles.map((article) => (
                <Link key={article.id} to={props.match ? `${props.match.url}/${article.id}` : `articulos/${article.id}`}>
                  <ArticleListItem {...article} />;
                </Link>
            ))
        )
      }
    </div>
  </div>

);

// Maps store state into component props
const mapStateToProps = (state) => {
  return {
   // vehicles: selectVehicles(state.vehicles, state.filters)
    articles: state.articles || []
  };
};

export default connect(mapStateToProps)(ArticleList);
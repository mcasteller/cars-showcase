import React from 'react';
import moment from 'moment';
import ReactQuill from 'react-quill';
import FileSelect from './FileSelect';
import strings from '../resources/strings';

export default class ArticleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.article ? props.article.title : '', 
      subTitle: props.article ? props.article.subTitle : '', 
      description: props.article ? props.article.description : '',
      shortDescription: props.article ? props.article.shortDescription : '',
      filesURL: props.article ? props.article.filesURL : '',
      error: ''
    };
  }
  
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onSubTitleChange = (e) => {
    const subTitle = e.target.value;
    this.setState(() => ({ subTitle }));
  };

  onDescriptionChange = (value) => {
    const description = value;
    this.setState(() => ({ description }));
  };
  
  onShortDescriptionChange = (value) => {
    const shortDescription = value;
    this.setState(() => ({ shortDescription }));
  };
      
  onFilesChange = (filesURL) => {
    this.setState(() => filesURL);
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.title) {
      this.setState(() => ({ error: 'Please provide description and title.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        title: this.state.title,
        subTitle: this.state.subTitle,
        description: this.state.description,
        shortDescription: this.state.shortDescription,
        filesURL: this.state.filesURL
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <h3>{strings.site.fileRatioWarning}</h3>
        <FileSelect 
          filesURL={this.state.filesURL}
          onChange={this.onFilesChange} 
        />
        <input
          type="textarea"
          placeholder={strings.site.article.title}
          className="text-input"
          value={this.state.title || ''}
          onChange={this.onTitleChange}
        />
        <input
          type="textarea"
          placeholder={strings.site.article.subTitle}
          className="text-input"
          value={this.state.subTitle || ''}
          onChange={this.onSubTitleChange}
        />
        <ReactQuill 
          placeholder={strings.site.article.description}
          value={this.state.description}    
          onChange={this.onDescriptionChange} 
        />
        <ReactQuill
          placeholder={strings.site.article.shortDescription}
          value={this.state.shortDescription}
          onChange={this.onShortDescriptionChange}
        />
        <div>
          <button className="button">{strings.site.article.save}</button>
        </div>
      </form>
    )
  }
}
import React from 'react';
import moment from 'moment';
import ReactQuill from 'react-quill';
import FileSelect from './FileSelect';
import strings from '../resources/strings';

export default class VehicleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: props.vehicle ? props.vehicle.brand : '', 
      trim: props.vehicle ? props.vehicle.trim : '',
      currency: props.vehicle ? props.vehicle.currency : '', 
      amount: props.vehicle ? (props.vehicle.amount).toString() : '',
      year: props.vehicle ? (props.vehicle.year).toString() : '',
      engine: props.vehicle ? props.vehicle.engine : '', 
      kilometers: props.vehicle ? (props.vehicle.kilometers).toString() : '',
      color: props.vehicle ? props.vehicle.color : '', 
      description: props.vehicle ? props.vehicle.description : '',
      shortDescription: props.vehicle ? props.vehicle.shortDescription : '',
      calendarFocused: false,
      files: props.vehicle ? props.vehicle.files : '',
      error: ''
    };
  }
  
  onBrandChange = (e) => {
    const brand = e.target.value;
    this.setState(() => ({ brand }));
  };

  onTrimChange = (e) => {
    const trim = e.target.value;
    this.setState(() => ({ trim }));
  };

  onCurrencyChange = (e) => {
    const currency = e.target.value;
    this.setState(() => ({ currency }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onYearChange = (e) => {
    const year = e.target.value;

    if (!year || year.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ year }));
    }
  };

  onEngineChange = (e) => {
    const engine = e.target.value;
    this.setState(() => ({ engine }));
  };

  onKilometersChange = (e) => {
     const kilometers = e.target.value;

    if (!kilometers || kilometers.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ kilometers }));
    }
 };

  onColorChange = (e) => {
    const color = e.target.value;
    this.setState(() => ({ color }));
  };

  onDescriptionChange = (value) => {
    const description = value;
    this.setState(() => ({ description }));
  };
  
  onShortDescriptionChange = (value) => {
    const shortDescription = value;
    this.setState(() => ({ shortDescription }));
  };
      
  onFilesChange = (files) => {
    this.setState(() => files)
    this.setState(() => ({ resetFiles: true }));
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        brand: this.state.brand,
        trim: this.state.trim,
        currency: this.state.currency || strings.site.currencies.pesos,
        amount: this.state.amount ? parseFloat(this.state.amount, 10) : '',
        year: this.state.year ? parseInt(this.state.year, 10) : '',
        engine: this.state.engine,
        kilometers: this.state.kilometers ? parseFloat(this.state.kilometers, 10) : '',
        color: this.state.color,
        description: this.state.description,
        shortDescription: this.state.shortDescription,
        files: this.state.files,
        resetFiles: this.state.resetFiles
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <h3>{strings.site.fileRatioWarning}</h3>
        <FileSelect 
          files={this.state.files}
          onChange={this.onFilesChange} 
        />
        <input
          type="textarea"
          placeholder={strings.site.vehicle.brand}
          autoFocus
          className="text-input"
          value={this.state.brand || ''}
          onChange={this.onBrandChange}
        />
        <input
          type="textarea"
          placeholder={strings.site.vehicle.trim}
          autoFocus
          className="text-input"
          value={this.state.trim || ''}
          onChange={this.onTrimChange}
        />
        <input
          type="text"
          placeholder={strings.site.vehicle.year}
          className="text-input"
          value={this.state.year}
          onChange={this.onYearChange}
        />
        <select
              className="select"
              value={this.state.currency}
              onChange={this.onCurrencyChange}
            >
              <option value={strings.site.currencies.pesos}>{strings.site.currencies.pesos}</option>
              <option value={strings.site.currencies.uss}>{strings.site.currencies.uss}</option>
        </select>
        <input
          type="text"
          placeholder={strings.site.vehicle.amount}
          className="text-input"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <input
          type="text"
          placeholder={strings.site.vehicle.engine}
          className="text-input"
          value={this.state.engine}
          onChange={this.onEngineChange}
        />
        <input
          type="text"
          placeholder={strings.site.vehicle.kilometers}
          className="text-input"
          value={this.state.kilometers}
          onChange={this.onKilometersChange}
        />
        <input
          type="text"
          placeholder={strings.site.vehicle.color}
          className="text-input"
          value={this.state.color}
          onChange={this.onColorChange}
        />
        <ReactQuill 
          placeholder={strings.site.vehicle.description}
          value={this.state.description}    
          onChange={this.onDescriptionChange} 
        />
        <ReactQuill
          placeholder={strings.site.vehicle.shortDescription}
          value={this.state.shortDescription}
          onChange={this.onShortDescriptionChange}
        />
        <div>
          <button className="button">{strings.site.vehicle.saveVehicle}</button>
        </div>
      </form>
    )
  }
}
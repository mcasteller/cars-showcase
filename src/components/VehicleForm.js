import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import FileSelect from './FileSelect';

export default class VehicleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.vehicle ? props.vehicle.title : '', 
      description: props.vehicle ? props.vehicle.description : '',
      note: props.vehicle ? props.vehicle.note : '',
      amount: props.vehicle ? (props.vehicle.amount / 100).toString() : '',
      createdAt: props.vehicle ? moment(props.vehicle.createdAt) : moment(),
      calendarFocused: false,
      filesURL: props.vehicle ? props.vehicle.filesURL : '',
      error: ''
    };
  }
  
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  
  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  
  onFilesChange = (filesURL) => {
    this.setState(() => filesURL);
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        title: this.state.title,
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
        filesURL: this.state.filesURL
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <FileSelect 
          filesURL={this.state.filesURL}
          onChange={this.onFilesChange} 
        />
        <input
          type="textarea"
          placeholder="Titulo"
          autoFocus
          className="text-input"
          value={this.state.title || ''}
          onChange={this.onTitleChange}
        />
        <textarea
          placeholder="Agregar Descripcion Vehiculo"
          className="textarea"
          value={this.state.description}
          onChange={this.onDescriptionChange}
        >
        </textarea>
        <input
          type="text"
          placeholder="Valor"
          className="text-input"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          placeholder="Notas adicionales (opcional)"
          className="textarea"
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>
        <div>
          <button className="button">Guardar Vehiculo</button>
        </div>
      </form>
    )
  }
}
import React from "react";

export default class File extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }

  render() {
    return (
      <div className='formfield'>
        <div className='file'>
          <span className='formfield__label'>{this.props.label}</span>

          <input
            className='file__input'
            type='file'
            ref={this.fileInput}
            id={this.props.name}
            name={this.props.name}
            onChange={this.props.onChange}
            required
          />

          <label
            htmlFor={this.props.name}
            className='file-custom formfield__input'
          />

          <span className='formfield__error-text'>{this.props.error}</span>
        </div>
      </div>
    );
  }
}

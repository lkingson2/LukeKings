import React from 'react'
import '../Style/TextField.css'

class TextField extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active: (props.locked && props.active) || false,
      value: props.value || "",
      error: props.error || "",
      label: props.label || "",
      placeholder: props.placeholder || ""
    };
  }

  changeValue(event) {
    const value = event.target.value;
    this.setState({ value, error: "" });
  }

  changeFocus(){
    this.setState({ active: true, placeholder: "" })
  }

  changeBlur(){
    this.setState({ active: false, placeholder: this.state.label })
  }

  render(){
    const { active, value, error, label, placeholder } = this.state;
    const { id } = this.props;
    const fieldClassName = `field ${ !active ? '' : 'active'}`;

    return(
      <div className={fieldClassName}>
        <input
          id={id}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={this.changeValue.bind(this)}
          onFocus={this.changeFocus.bind(this)}
          onBlur={this.changeBlur.bind(this)}
        />
        <label htmlFor={id} className={error && "error"}>
          {error || label}
        </label>
      </div>
    )
  }
}

export default TextField;

import React from 'react';
import './style.css';

const types = {
  primary: 'button-primary',
  info: 'button-info',
  danger: 'button-danger',
  warning: 'button-warning'
};

export default props => (
  <button
    className={`button ${types[props.color]} ${props.className}`}
    type={props.type}
    onClick={props.onClick}
  >
    {props.children}
  </button>
)
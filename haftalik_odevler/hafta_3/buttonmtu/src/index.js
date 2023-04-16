import React from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types';



export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}


export const Button = ({ type, children }) => {
  let className = 'Button';

  if (type === 'primary') {
    className += ' Button--primary';
  } else if (type === 'default') {
    className += ' Button--default';
  } else if (type === 'dashed') {
    className += ' Button--dashed';
  } else if (type === 'text') {
    className += ' Button--text';
  } else if (type === 'link') {
    className += ' Button--link';
  }

  return (
    <button className={className}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'default', 'dashed', 'text', 'link']),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'default',
};


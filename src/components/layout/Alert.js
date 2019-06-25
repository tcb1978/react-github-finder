import React from 'react';

const Alert = ({ alert }) => {
  return(
    !!alert && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-exclamation-circle" />{alert.message}
      </div>
    )
  )
};

export default Alert
import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => <Fragment>
  <figure>
    <img src={spinner} alt= "Loading..." style={{ width: '200px', margin: 'auto', display: 'block'}} />
  </figure>
</Fragment>

export default Spinner;

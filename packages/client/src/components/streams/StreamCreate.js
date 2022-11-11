/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createStream } from '../../actions/index';
import StreamForm from './StreamForm';

// eslint-disable-next-line no-shadow
function StreamCreate({ createStream }) {
  const history = useHistory();

  const onSubmit = (formValues) => {
    createStream(formValues, history);
  };

  return (
    <div>
      <h3>Create Stream</h3>
      <StreamForm onSubmit={onSubmit} />
    </div>
  );
}

export default connect(null, { createStream })(StreamCreate);

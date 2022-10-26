import React from 'react';
import { Field, reduxForm } from 'redux-form';

function StreamCreate() {
  const renderInput = () => <div>I am an input</div>;

  return (
    <form>
      <Field name="title" component={renderInput} />
      <Field name="description" component={renderInput} />
    </form>
  );
}

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate);

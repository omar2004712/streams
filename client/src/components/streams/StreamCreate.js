/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Field, reduxForm } from 'redux-form';

function StreamCreate({ handleSubmit }) {
  const renderError = (meta) => {
    const { error, touched } = meta;
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }

    return <div />;
  };

  const renderInput = ({ input, label, meta }) => (
    <div className={`field ${meta.error && meta.touched ? 'error' : ''}`}>
      <label>{label}</label>
      <input type="text" {...input} />
      {renderError(meta)}
    </div>
  );

  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="ui form error">
      <Field name="title" component={renderInput} label="Enter Title: " />
      <Field
        name="description"
        component={renderInput}
        label="Enter Description: "
      />
      <button type="submit" className="ui button primary">
        Submit
      </button>
    </form>
  );
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Title is required';
  }

  if (!formValues.description) {
    errors.description = 'Description is required';
  }

  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);

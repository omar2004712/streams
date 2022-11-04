import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

function StreamEdit({ match, fetchStream, stream, editStream }) {
  const history = useHistory();

  useEffect(() => {
    if (!stream) {
      // if the stream already exists in the streams object in the redux store avoid fetching it from the server
      fetchStream(match.params.id);
    }
  }, []);

  const onSubmit = (formValues) => {
    editStream(stream.id, formValues, history);
  };

  const getInitialValues = () => {
    if (!stream) {
      return null;
    }

    return {
      title: stream.title,
      description: stream.description,
    };
  };

  return (
    <div>
      <h3>Edit Stream</h3>
      <StreamForm onSubmit={onSubmit} initialValues={getInitialValues()} />
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  stream: state.streams[props.match.params.id],
});

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);

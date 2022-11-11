import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from '../Modal';
import { fetchStream, deleteStream } from '../../actions';

function StreamDelete({ stream, match, fetchStream, deleteStream }) {
  const history = useHistory();

  useEffect(() => {
    if (!stream) fetchStream(match.params.id);
  }, []);

  const dismiss = () => history.push('/');

  const actions = (
    <>
      <button
        onClick={() => {
          deleteStream(match.params.id);
          dismiss();
        }}
        className="ui negative button"
      >
        Delete
      </button>
      <button onClick={dismiss} className="ui button">
        Cancel
      </button>
    </>
  );

  return (
    <>
      <Modal
        title="Delete Stream"
        content={
          stream ? `Are you sure you want to delete '${stream.title}'?` : ''
        }
        actions={actions}
        onDismiss={dismiss}
      />
    </>
  );
}

const mapStateToProps = (state, props) => ({
  stream: state.streams[props.match.params.id],
});

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);

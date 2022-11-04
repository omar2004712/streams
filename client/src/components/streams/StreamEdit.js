import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

function StreamEdit({ match, fetchStream, stream }) {
  useEffect(() => {
    if (!stream) {
      // if the stream already exists in the streams object in the redux store avoid fetching it from the server
      fetchStream(match.params.id);
    }
  }, []);

  return <div>{stream ? stream.title : 'Loading'}</div>;
}

const mapStateToProps = (state, props) => ({
  stream: state.streams[props.match.params.id],
});

export default connect(mapStateToProps, { fetchStream })(StreamEdit);

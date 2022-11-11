import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

function StreamShow({ match, fetchStream, stream }) {
  useEffect(() => {
    if (!stream) {
      fetchStream(match.params.id);
    }
  }, []);

  const renderStream = () => {
    if (!stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>{stream.title}</h1>
        <h5>{stream.description}</h5>
      </div>
    );
  };

  return <div>{renderStream()}</div>;
}

const mapStateToProps = (state, props) => ({
  stream: state.streams[props.match.params.id],
});

export default connect(mapStateToProps, { fetchStream })(StreamShow);

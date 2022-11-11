import React, { useEffect, useMemo, useRef } from 'react';
import { connect } from 'react-redux';
import flv from 'flv.js';
import { fetchStream } from '../../actions';

function StreamShow({ match, fetchStream, stream }) {
  const videoRef = useRef();

  useEffect(() => {
    const { id } = match.params;

    if (!stream) {
      fetchStream(id);
    }

    const flvPlayer = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`,
    });

    flvPlayer.attachMediaElement(videoRef.current);
    flvPlayer.load();
  }, []);

  const renderStream = () => {
    return (
      <div>
        <video ref={videoRef} style={{ width: '100%' }} controls />
        {stream ? (
          <>
            <h1>{stream.title}</h1>
            <h5>{stream.description}</h5>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  };

  return <div>{renderStream()}</div>;
}

const mapStateToProps = (state, props) => ({
  stream: state.streams[props.match.params.id],
});

export default connect(mapStateToProps, { fetchStream })(StreamShow);

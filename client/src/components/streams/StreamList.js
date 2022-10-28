import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

// eslint-disable-next-line no-shadow
function StreamList({ fetchStreams, streams, currentUserId }) {
  useEffect(() => {
    fetchStreams();
  }, []);

  const renderAdmin = (stream) => {
    if (stream.userId === currentUserId) {
      return <div>buttons</div>;
    }
    return null;
  };

  const renderList = () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    streams.map((stream) => (
      <div className="item" key={stream.id}>
        <i className="large middle aligned icon camera" />
        <div className="content">
          {stream.title}
          <div className="description">{stream.description}</div>
        </div>
        {renderAdmin(stream)}
      </div>
    ));

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderList()}</div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  streams: Object.values(state.streams),
  currentUserId: state.auth.userId,
});

export default connect(mapStateToProps, { fetchStreams })(StreamList);

import React from 'react';
import { connect } from 'react-redux';

function StreamEdit({ stream }) {
  console.log('stream: ', stream);
  return <div>StreamEdit</div>;
}

const mapStateToProps = (state, props) => ({
  stream: state.streams[props.match.params.id],
});

export default connect(mapStateToProps)(StreamEdit);

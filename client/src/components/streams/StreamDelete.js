import React from 'react';
import { useHistory } from 'react-router-dom';
import Modal from '../Modal';

export default function StreamDelete() {
  const history = useHistory();

  const actions = (
    <>
      <button className="ui negative button">Delete</button>
      <button className="ui button">Cancel</button>
    </>
  );

  return (
    <div>
      StreamDelete
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onDismiss={() => history.push('/')}
      />
    </div>
  );
}

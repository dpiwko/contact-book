import React from 'react';
import './Loading.css';

const Loading = (props) => {
  const loadingText = props.text || 'Loading...';

  return (
    <p className="c-loading">
      {loadingText}
    </p>
  );
}

export default Loading;

import React from 'react';

const Homepage = () => {
  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <div>
      <h2>Welcome to the Homepage</h2>
      <p>
        To get started, please{' '}
        <button onClick={() => navigateTo('/login')}>sign in</button>{' '}
        or{' '}
        <button onClick={() => navigateTo('/signup')}>sign up</button>.
      </p>
    </div>
  );
};

export default Homepage;

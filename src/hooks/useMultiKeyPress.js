import { useState, useEffect } from 'react';

// Detect when the user is pressing a multiple-specific key on their keyboard
// Credits & usage example goes here: https://codesandbox.io/s/y3qzyr3lrz

const useMultiKeyPress = () => {
  const [keysPressed, setKeyPressed] = useState(new Set([]));

  function downHandler({ key }) {
    setKeyPressed(keysPressed.add(key));
  }

  const upHandler = ({ key }) => {
    keysPressed.delete(key);
    setKeyPressed(keysPressed);
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);

  return keysPressed;
};

export default useMultiKeyPress;

import React from 'react';

const LazyImage = ({ children, src }) => {
  let [source, setSource] = React.useState();

  React.useEffect(
    () => {
      let img = document.createElement('IMG');
      img.onload = () => {
        setSource(img.src);
      };
      img.src = src;
    },
    [src, src]
  );

  return children(source);
};

export default LazyImage;

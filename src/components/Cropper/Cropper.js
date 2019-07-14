// import './Cropper.scss';
import styles from './Cropper.module.scss';
import React from 'react';
import ImageEditorRc from 'react-cropper-image-editor';
import cx from 'classnames';
import Button from '../Button/Button';
import Image from '../Image/Image';
import axios from 'axios';

const Cropper = ({ className, src, name, height, ...restProps }) => {
  const cropper = React.useRef();
  let [img, setImage] = React.useState(null);
  let [source, setSource] = React.useState(null);
  let [color, setColor] = React.useState('#f0f0ee');

  const handleClick = () => {
    setSource(cropper.current.getCroppedCanvas().toDataURL());
    cropper.current.getCroppedCanvas().toBlob(blob => {
      setImage(blob);
    });
  };

  React.useEffect(
    () => {
      let formData = new FormData();
      formData.append('image', img);
      axios({
        method: 'post',
        url: 'https://arcane-tor-41675.herokuapp.com/process',
        data: formData,
        config: {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
      })
        .then(res => {
          console.log('DOMINANT: ', res.data.colors);
          setColor(res.data.colors);
        })
        .catch(err => console.log(err));
    },
    [img]
  );

  return (
    <>
      <ImageEditorRc
        src={src}
        ref={cropper}
        className={cx({ [styles.root]: true, [className]: className })}
        viewMode={1}
        autoCrop={true}
        dragMode="move"
        crossOrigin="true"
        style={{
          height: `${height || '480px'}`,
          width: '100%',
          backgroundColor: '#101010'
        }}
        background={false}
        aspectRatio={16 / 9}
        imageName={name}
        responseType="blob/base64"
        guides={false}
        minCropBoxWidth={1200}
        cropBoxMovable={false}
        {...restProps}
      />
      <Button small primary onClick={handleClick}>
        Save
      </Button>
      {color && <Image bgColor={color} naturalWidth="16" naturalHeight="9" />}
      {/* {source ?
        <Image
        src={source}
        alt='cropped image'
        bgColor={color}
        naturalWidth='16'
        naturalHeight='9'
        /> :
        <Image
        bgColor={color}
        naturalWidth='16'
        naturalHeight='9'
        />
      } */}
    </>
  );
};

export default Cropper;

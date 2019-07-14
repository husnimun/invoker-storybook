import styles from './Socky.module.scss';
import React from 'react';
import cx from 'classnames';

import SockyCanvas from '../SockyCanvas/SockyCanvas';
import SockyToolbar from '../SockyToolbar/SockyToolbar';

import Text from '../Text/Text';
import Button from '../Button/Button';

import SockyHeader from '../SockyHeader/SockyHeader';
import SockyZoom from '../SockyZoom/SockyZoom';
import SockyRotate from '../SockyRotate/SockyRotate';

const Socky = ({
  children,
  maxZoom,
  header,
  data,
  secondary,
  canvas,
  className,
  ratio,
  getImageData,
  getRotationValue,
  closeDialog,
  src,
  ...restProps
}) => {
  const sockyRef = React.useRef();
  window.ref = sockyRef;

  let [image, setImage] = React.useState();
  let [blob, setBlob] = React.useState();
  let [imageData, setImageData] = React.useState(data);
  let [canvasData, setCanvasData] = React.useState(canvas);

  let [zoomValue, setZoomValue] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener('ready', function() {
      let cropperBox = document.getElementsByClassName('cropper-crop-box');
      let cropperDragBox = document.getElementsByClassName('cropper-drag-box');
      if (cropperBox[0]) {
        cropperBox[0].addEventListener(
          'touchstart',
          function(e) {
            e.preventDefault();
          },
          true
        );
        cropperBox[0].addEventListener(
          'touchend',
          function(e) {
            e.preventDefault();
          },
          true
        );
      }
      if (cropperDragBox[0]) {
        cropperDragBox[0].addEventListener(
          'touchstart',
          function(e) {
            e.preventDefault();
          },
          true
        );
        cropperDragBox[0].addEventListener(
          'touchend',
          function(e) {
            e.preventDefault();
          },
          true
        );
      }
    });
  }, []);

  React.useEffect(
    () => {
      if (zoomValue) {
        // const container = sockyRef.current.getCropBoxData();
        // const cropbox = sockyRef.current.getCropBoxData();
        // console.log(container.width / 2, cropbox.width / 2);
        sockyRef.current.zoomTo(
          zoomValue
          // {
          //   x: container.width / 2,
          //   y: container.height / 2,
          // }
        );
      }
    },
    [zoomValue]
  );

  React.useEffect(
    () => {
      if (getImageData && image && blob) {
        getImageData(image, blob, imageData);
        handleClose();
      }
      if (secondary && imageData) {
        sockyRef.current.setData(imageData);
      }
      if (secondary && canvasData) {
        sockyRef.current.setCanvasData(canvasData);
      }
    },
    [image, blob, imageData, canvasData]
  );

  const setCroppedImage = () => {
    setImageData(sockyRef.current.getData());
    setCanvasData(sockyRef.current.getImageData());
    setImage(sockyRef.current.getCroppedCanvas().toDataURL());
    sockyRef.current.getCroppedCanvas().toBlob(blob => {
      setBlob(blob);
    });
  };

  const handleClose = () => {
    if (closeDialog) {
      closeDialog();
    }
  };

  const handleZoom = () => {
    let left =
      (sockyRef.current.getContainerData().width -
        sockyRef.current.getCropBoxData().width) /
      2;
    let top =
      (sockyRef.current.getContainerData().height -
        sockyRef.current.getCropBoxData().height) /
      2;
    sockyRef.current.setCropBoxData({
      top: top < 0 ? 0 : top,
      left: left < 0 ? 0 : left
    });
  };

  const handleRotate = val => {
    if (sockyRef.current) {
      sockyRef.current.rotateTo(val);
    }
    if (getRotationValue) {
      getRotationValue(val);
    }
  };

  return (
    <div
      className={cx({
        [styles.root]: true
      })}
      {...restProps}
    >
      <SockyToolbar>
        <Text
          className={styles.title}
          heading2
          style={{ color: '#ffffff' }}
          component="h2"
        >
          Edit photo
        </Text>
        <div>
          <SockyZoom
            id="socky_zoom"
            name="socky_zoom"
            min={0}
            max={maxZoom}
            value={zoomValue}
            setZoom={value => setZoomValue(value)}
          />
          <SockyRotate getRotateValue={handleRotate} />
        </div>
        <footer className={styles.footer}>
          <Button primary className={styles.save} onClick={setCroppedImage}>
            Save and replace
          </Button>
          <Button
            secondaryAlt
            light
            className={styles.cancel}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </footer>
      </SockyToolbar>
      <SockyCanvas
        secondary={secondary}
        data={imageData}
        sockyRef={sockyRef}
        src={src}
        ratio={ratio}
        zoom={handleZoom}
      />
      <SockyHeader onClick={handleClose}>{header}</SockyHeader>
    </div>
  );
};

export default Socky;

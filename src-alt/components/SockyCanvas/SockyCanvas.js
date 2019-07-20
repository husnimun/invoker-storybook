import styles from './SockyCanvas.module.scss';
import React from 'react';
import cx from 'classnames';
import SockyCore from '../SockyCore/SockyCore';

const SockyCanvas = ({
  children,
  data,
  secondary,
  sockyRef,
  zoom,
  zoomValue,
  className,
  height,
  name,
  ratio,
  src,
  options,
  ...restProps
}) => {
  return (
    <div
      className={cx({
        [styles.root]: true,
        [className]: className
      })}
      {...restProps}
    >
      <SockyCore
        className={styles.canvas}
        ref={sockyRef}
        src={src}
        viewMode={1}
        autoCrop={true}
        dragMode="move"
        data={secondary ? data : null}
        crossOrigin="true"
        responseType="blob/base64"
        aspectRatio={ratio}
        imageName={name}
        background={false}
        minCropBoxWidth={1080}
        minCropBoxHeight={1080}
        guides={false}
        center={false}
        // zoomOnTouch={false}
        cropBoxMovable={false}
        cropBoxResizable={false}
        zoom={zoom}
      />
    </div>
  );
};

export default SockyCanvas;

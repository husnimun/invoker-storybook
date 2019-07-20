import styles from './LunaPreview.module.scss';
import React from 'react';
import cx from 'classnames';
import SinglePreview from '../SinglePreview/SinglePreview';

const LunaPreview = ({ className, images, removeImage, ...restProps }) => {
  return (
    <div className="row">
      {images.length > 0 &&
        images.map((image, index) => (
          <div
            key={index}
            onClick={() => removeImage(image.public_id)}
            className={cx('col-sm-4', styles.imagePreview)}
          >
            <SinglePreview src={image.secure_url} alt="Cool!" />
          </div>
        ))}
    </div>
  );
};

export default LunaPreview;

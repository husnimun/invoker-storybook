import styles from './Lab.module.scss';
import React, { Component } from 'react';
import cx from 'classnames';

import Image from '../Image/Image';
import Text from '../Text/Text';

class Lab extends Component {
  render() {
    return (
      <div className={cx(styles.root)}>
        <div className={styles.row}>
          {this.props.post &&
            this.props.post.map((post, index) => {
              return (
                <div
                  key={post.fields.id}
                  style={{ marginBottom: '48px' }}
                  className={styles.post}
                >
                  <div className={styles.imageContainer}>
                    <Image src={post.fields.cover_url} fit="cover" />
                  </div>
                  <Text
                    heading6
                    component="h6"
                    style={{ marginBottom: '8px', color: 'rgba(0,0,0,.54)' }}
                  >
                    Published on {post.fields.publishedAt} by{' '}
                    {post.fields.author}
                  </Text>
                  <Text heading3 component="h2" style={{ marginBottom: '4px' }}>
                    {post.fields.title}
                  </Text>
                  <Text medium component="p" className={styles.description}>
                    {post.fields.description}
                  </Text>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Lab;

/** Serializing the RichText render
 *  Learn more about it here:
 *  https://prismic.io/docs/reactjs/beyond-the-api/html-serializer
*/

import styles from './htmlSerialize.module.scss'
import React from 'react';
import { Elements } from 'prismic-reactjs'
// import cx from 'classnames'

import Text from '../../components/Text/Text';
import Link from '../../components/Link/Link';

const propsWithUniqueKey = function(props, key) {
  return Object.assign(props || {}, { key });
};

const htmlSerializer = (type, element, content, children, key) => {

  var props = {};
  switch(type) {

    case Elements.heading1:
      return <Text heading1 component="h1" className={styles.heading1} key={key}>{children}</Text>

    case Elements.heading2:
      return <Text heading2 component="h2" className={styles.heading2} key={key}>{children}</Text>

    case Elements.heading3:
      return <Text heading3 component="h3" className={styles.heading3} key={key}>{children}</Text>

    case Elements.heading4:
      return <Text heading4 component="h4" className={styles.heading4} key={key}>{children}</Text>

    case Elements.heading5:
      return <Text heading5 component="h5" className={styles.heading5} key={key}>{children}</Text>

    case Elements.heading6:
      return <Text heading6 component="h6" className={styles.heading6} key={key}>{children}</Text>

    case Elements.paragraph:
      // props = {className: 'paragraph-class'};
      return <Text large className={styles.paragraph} component="p" key={key}>{children}</Text>

    case Elements.preformatted:
      return <pre className={styles.preformatted} key={key}>{children}</pre>

    case Elements.strong:
      return <strong className={styles.strong} key={key}>{children}</strong>

    case Elements.em:
      return <em className={styles.emphasis} key={key}>{children}</em>

    case Elements.listItem:
      return <Text large className={styles.listItem} component="li" key={key}>{children}</Text>

    case Elements.oListItem:
      return <Text large className={styles.listItem} component="li" key={key}>{children}</Text>

    case Elements.list:
    return <ul className={styles.listContainer} key={key}>{children}</ul>

    case Elements.oList:
      return <ol className={styles.oListContainer} key={key}>{children}</ol>

    case Elements.image:
    const linkUrl = element.linkTo ? element.linkTo.url || linkResolver(element.linkTo) : null;
    const linkTarget = (element.linkTo && element.linkTo.target) ? { target: element.linkTo.target } : {};
    const linkRel = linkTarget.target ? { rel: 'noopener' } : {};
    const img = <img key={key} src={element.url} alt={element.alt} className={styles.image} />;
    return React.createElement(
      'div',
      propsWithUniqueKey({ className: [element.label || '', styles.blockImage].join(' ') }, key),
      linkUrl ? React.createElement('a', Object.assign({ href: linkUrl }, linkTarget, linkRel), img) : img
    );

    case Elements.embed:
      props = Object.assign({
        "data-oembed": element.oembed.embed_url,
        "data-oembed-type": element.oembed.type,
        "data-oembed-provider": element.oembed.provider_name,
      }, element.label ? {className: element.label} : {});
      const embedHtml = React.createElement('div', {dangerouslySetInnerHTML: {__html: element.oembed.html}});
      return React.createElement('div', propsWithUniqueKey(props, key), embedHtml);

    case Elements.label:
      props = element.data ? Object.assign({}, { className: element.data.label }) : {};
      return React.createElement('span', propsWithUniqueKey(props, key), children);

    case Elements.hyperlink:
      return <Link
        target={ element.data.target || '_blank' }
        rel={element.data.target ? 'noopener noreferrer' : ''}
        key={key}
        to={element.data.url || linkResolver(element.data)}
        className={styles.link}
        external>
          {children}
        </Link>

    default:
      return null;
  }
};

export default htmlSerializer

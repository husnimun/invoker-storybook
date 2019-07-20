import styles from './Blogs.module.scss';
import React from 'react';
import cx from 'classnames';
import { StaticQuery, graphql } from 'gatsby'

import Link from '../Link/Link';
import Text from '../Text/Text';
import Container from '../../layouts/Container/Container';
import Section from '../../layouts/Section/Section';

const Blogs = ({data}) => <StaticQuery
  query={graphql`
    query {
      prismic {
        allBlogss {
          edges {
            node {
              _meta {
                id
                uid
                lang
              }
              title
            }
          }
        }
      }
    }
  `}
  render={data => {
    let posts = data.prismic.allBlogss.edges
    return (
      <Section component="section" className={cx(styles.root)}>
        <Container narrow component="main">
          {
            posts.map(post => (
              <Link key={post.node._meta.id} to={`/blogs/${encodeURI(post.node._meta.uid)}`}>
                <Text heading1 component="h2" className={styles.title}>{post.node.title[0].text}</Text>
              </Link>
            ))
          }
        </Container>
      </Section>
    )}
  }
/>

export default Blogs

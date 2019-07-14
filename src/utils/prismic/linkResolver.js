module.exports = {
  linkResolver(doc) {
    if (doc.type === 'blog') return `/blog/${doc.uid}`;
    else return '/';
  },
};

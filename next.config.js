module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://github.com/Grij/linked-blog-starter-md',
        permanent: true,
      },
    ]
  },
}

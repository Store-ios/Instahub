var routes = [
  {
    path: '/',
    url: './index.html',
  },
      // Default route, match to all pages (e.g. 404 page)
    {
      path: '(.*)',
      url: './pages/404.html',
    },
];


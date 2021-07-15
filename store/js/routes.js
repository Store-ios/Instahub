var routes = [{
        path: '/paidapps/',
        url: './sections/paidapps.html',
    },
    {
        path: '/search/',
        url: './sections/search.html',
    },
    {
        path: '/tweakedapps/',
        url: './sections/tweakedapps/games.html',
    },
    {
        path: '/paidgames/',
        url: './sections/paidgames.html',
    },
    {
        path: '/tweakedgames/',
        url: './sections/tweakedgames.html',
    },
    {
        path: '/jailbreaks/',
        url: './sections/jailbreaks.html',
    },
    {
        path: '/emulators/',
        url: './sections/emulators.html',
    },
    {
        path: '/social/',
        url: './sections/social.html',
     },
    {
        path: '/entertainment/',
        url: './sections/entertainment.html',
      },
			{
        path: '/other/',
        url: './sections/other.html',
			},
			{
        path: '/themes/',
        url: './sections/themes.html',
			},
    {
        path: '/scarlet/',
        url: './sections/scarlet.html',
    },
    // Apps
    {
        path: '/spotify/',
        url: './sections/apps/spotify.html',
    },
    {
        path: '/eclipse/',
        url: './sections/apps/eclipse.html',
    },
		{
        path: '/nullified/',
        url: './sections/nullified.html',
		},
      // Default route (404 page). MUST BE THE LAST
    {
    path: "(.*)",
    url: "./pages/404.html",
    },
		
		//Routable Tabs
		{
    path: '/tabs/',
    url: './sections/tabs/routable.html',
    // Pass "tabs" property to route
    tabs: [
      // First (default) tab has the same url as the page itself
      {
        path: '/',
        id: 'about',
        // Fill this tab content from content string
        content: `
          <div class="block">
            <h3>About Me</h3>
            <p>...</p>
          </div>
        `
      },
      // Second tab
      {
        path: '/contacts/',
        id: 'contacts',
        // Fill this tab content via Ajax request
        url: './pages/about-me/contacts.html',
      },
      // Third tab
      {
        path: '/cv/',
        id: 'cv',
        // Load this tab content as a component via Ajax request
        componentUrl: './pages/about-me/cv.html',
      },
    ],
  }
];
var routes = [{
    path: "/main/",
    url: "./index.html",
  },
    {
        path: '/contact/',
        url: './sections/form/contact.html',
    },
    {
        path: '/tutubox/',
        url: './sections/providers/tutubox.html',
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
        path: '/failedtoverify/',
        url: './sections/failedtoverify.html',
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
        path: '/delta/',
        url: './sections/apps/delta.html',
			},
			{
    path: "/aurora/",
    url: "./sections/apps/aurora.html",
    },
		{
    path: "/provenance/",
    url: "./sections/apps/provenance.html",
	},
		{
        path: '/nullified/',
        url: './sections/nullified.html',
		},
		//Providers
		{
    path: "/unctutu/",
    url: "./sections/apps/unctutu.html",
	},
	{
    path: "/tutudelta/",
    url: "./sections/apps/tutudelta.html",
	},
	{
    path: "/tutuppsspp/",
    url: "./sections/apps/tutuppsspp.html",
	},
	{
    path: "/ppsspp/",
    url: "./sections/apps/ppsspp.html",
	},
      // Default route (404 page). MUST BE THE LAST
    {
    path: "(.*)",
    url: "./pages/404.html",
    },
];
var routes = [{
    path: "/main/",
    url: "./index.html",
  },
    {
        path: '/contact/',
        url: './sections/form/contact.html',
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
		{
        path: '/ads/',
        url: './sections/ads.html',
			},


    //InstaHub Apps
    {
        path: '/4/',
        url: './sections/apps/spotify.html',
    },
    {
        path: '/6/',
        url: './sections/apps/eclipse.html',
    },
    {
        path: '/7/',
        url: './sections/apps/delta.html',
			},
			{
    path: "/8/",
    url: "./sections/apps/aurora.html",
    },
		{
    path: "/9/",
    url: "./sections/apps/provenance.html",
	},
		{
        path: '/nullified/',
        url: './sections/nullified.html',
		},
    {
    path: "/13/",
    url: "./sections/apps/ppsspp.html",
	 },
	 {
    path: "/10/",
    url: "./sections/apps/happychick.html",
	 },
	 {
    path: "/11/",
    url: "./sections/apps/gba4ios.html",
	 },
	 {
    path: "/12/",
    url: "./sections/apps/inds.html",
	},
	{
    path: "/3/",
    url: "./sections/apps/cercube.html",
	},
	{
    path: "/2/",
    url: "./sections/apps/ytmusic.html",
	},
	{
    path: "/1/",
    url: "./sections/apps/deezer.html",
	},
		//providers
		{
        path: '/tutubox/',
        url: './sections/providers/tutubox.html',
			},


		//tutubox apps
		{
    path: "/unctutu/",
    url: "./sections/apps/tutubox/unctutu.html",
	},
	{
    path: "/tutudelta/",
    url: "./sections/apps/tutubox/tutudelta.html",
	},
	{
    path: "/ipogotutu/",
    url: "./sections/apps/tutubox/ipogotutu.html",
	},
	{
    path: "/fortnitetutu/",
    url: "./sections/apps/tutubox/fortnitetutu.html",
	},
	{
    path: "/tutuppsspp/",
    url: "./sections/apps/tutubox/tutuppsspp.html",
	},
	{
    path: "/ppsspptutu/",
    url: "./sections/apps/tutubox/ppsspptutu.html",
	},
	{
    path: "/taurinetutu/",
    url: "./sections/apps/tutubox/taurinetutu.html",
	},
	{
    path: "/tiktoktutu/",
    url: "./sections/apps/tutubox/tiktoktutu.html",
	},
	{
    path: "/odysseytutu/",
    url: "./sections/apps/tutubox/odysseytutu.html",
	},
      // Default route (404 page). MUST BE THE LAST
    {
    path: "(.*)",
    url: "./pages/404.html",
    },
];
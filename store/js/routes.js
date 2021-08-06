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
    {
    path: "/ppsspp/",
    url: "./sections/apps/ppsspp.html",
	 },
	 {
    path: "/happychick/",
    url: "./sections/apps/happychick.html",
	 },
	 {
    path: "/gba4ios/",
    url: "./sections/apps/gba4ios.html",
	 },
	 {
    path: "/inds/",
    url: "./sections/apps/inds.html",
	},
	{
    path: "/cercube/",
    url: "./sections/apps/cercube.html",
	},
	{
    path: "/ytmusic/",
    url: "./sections/apps/ytmusic.html",
	},
	{
    path: "/deezer/",
    url: "./sections/apps/deezer.html",
	},
	{
    path: "/tiktok/",
    url: "./sections/apps/tiktokunicorn.html",
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
	
	//Other OS
	{
    path: "/windows/",
    url: "./sections/otheros/windows.html",
	},
	{
    path: "/mac/",
    url: "./sections/otheros/mac.html",
	},
	{
    path: "/android/",
    url: "./sections/otheros/android.html",
	},
	
	//Windows Apps
	{
    path: "/msoffice/",
    url: "./sections/apps/windows/msoffice.html",
	},
      // Default route (404 page). MUST BE THE LAST
    {
    path: "(.*)",
    url: "./pages/404.html",
    },
];
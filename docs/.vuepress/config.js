module.exports = {
	title: 'CBL API Docs',
	description: 'An API for known bad actors in crypto',
	head: [
		['link', {
			rel: 'icon',
			href: `/logo.jpg`
		}],
		['meta', {
			name: 'theme-color',
			content: '#96abec'
		}],
		['meta', {
			name: 'apple-mobile-web-app-capable',
			content: 'yes'
		}],
		['meta', {
			name: 'apple-mobile-web-app-status-bar-style',
			content: 'black'
		}],
		['link', {
			rel: 'apple-touch-icon',
			href: `/icons/apple-touch-icon.png`
		}]
	],
	themeConfig: {
		repo: 'PureInvestments/docs.cbltools',
		editLinks: true,
		editLinkText: 'Edit this page on GitHub',
		lastUpdated: 'Last Updated',
		nav: [{
				text: 'Docs',
				link: '/',
			}
		],
		sidebar: {
			'/': genSidebarConfig()
		}
	}
}

function genSidebarConfig() {
	return [
		{
			title: 'Docs',
			collapsable: false,
			children: [
				'',
				'structures',
				'errors',
				'auth',
				'images',
				'users'
			]
		}
	]
}

/**
 * @type {import('vitepress').UserConfig}
 */

import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

export default defineConfig({
    lang: 'en-US',
    title: 'Facile CSS (BETA)',
    description:
        'Simple functional CSS library, build on utility classes & components.',

    head: [['link', { rel: 'icon', type: 'image/png', href: './icon.png' }]],

    lastUpdated: true,
    appearance: true,

    markdown: {
        theme: 'material-palenight',
        lineNumbers: true,
    },

    themeConfig: {
        logo: './icon.png',

        editLink: {
            pattern: 'https://github.com/facilecss/core/edit/main/docs/:path',
            text: 'Edit this page on GitHub',
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/facilecss/core' },
        ],

        nav: [
            { text: 'Home', link: '/' },
            { text: 'Team', link: '/team' },

            {
                text: version,
                items: [
                    {
                        text: 'Releases',
                        link: 'https://github.com/facilecss/core/releases',
                    },
                ],
            },
        ],

        sidebar: [
            {
                text: 'Introduction',
                collapsible: true,
                items: [{ text: 'Getting Started', link: '/getting-started' }],
            },
        ],

        footer: {
            message: 'Licensed under MIT',
            copyright: 'Copyright © 2022 Facile CSS',
        },

        algolia: {
            appId: 'TCHQIC2XOG',
            apiKey: '679441a9a78880a66a5f57d9ded2d270',
            indexName: 'hypestylecss',
        },
    },
})

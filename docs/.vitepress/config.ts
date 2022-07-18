/**
 * @type {import('vitepress').UserConfig}
 */

import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

export default defineConfig({
    lang: 'en-US',
    title: 'Facile CSS',
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

            {
                text: 'Components',
                collapsible: true,
                items: [
                    { text: 'Button', link: '/components/button' },
                    { text: 'Form', link: '/components/forms' },
                    { text: 'Navbar', link: '/components/navbar' },
                ],
            },

            {
                text: 'CLI',
                collapsible: true,
                items: [
                    { text: 'Commands', link: '/cli/commands' },
                    { text: 'Config File', link: '/cli/config-file' },
                ],
            },

            {
                text: 'Color',
                collapsible: true,
                items: [
                    { text: 'Text', link: '/classes/color/text' },
                    { text: 'Background', link: '/classes/color/background' },
                ],
            },

            {
                text: 'Spacing',
                collapsible: true,
                items: [
                    { text: 'Margin', link: '/classes/spacing/margin' },
                    { text: 'Padding', link: '/classes/spacing/padding' },
                ],
            },

            {
                text: 'Typography',
                collapsible: true,
                items: [
                    {
                        text: 'Font Size',
                        link: '/classes/typography/font-size',
                    },

                    {
                        text: 'Font Family',
                        link: '/classes/typography/font-family',
                    },

                    {
                        text: 'Text Alignment',
                        link: '/classes/typography/text-alignment',
                    },
                ],
            },
            {
                text: 'Sizing',
                collapsible: true,
                items: [{ text: 'Height', link: '/classes/sizing/height' }],
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

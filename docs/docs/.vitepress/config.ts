/**
 * @type {import('vitepress').UserConfig}
 */

import { defineConfig } from 'vitepress'
import { version } from '../../../package.json'

export default defineConfig({
    lang: 'en-US',
    title: 'Facile CSS',
    description:
        'Simple functional CSS library, build on utility classes & components.',

    head: [['link', { rel: 'icon', type: 'image/png', href: './icon.png' }]],

    lastUpdated: true,
    appearance: true,

    themeConfig: {
        logo: './icon.png',

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

        footer: {
            message: 'Licensed under MIT',
            copyright: 'Copyright © 2022 Facile CSS',
        },
    },
})

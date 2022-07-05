/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Facile CSS',
    tagline:
        'Simple functional CSS library, build on utility classes & components',
    url: 'https://facilecss.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/icon.png',

    organizationName: 'facilecss',
    projectName: 'facilecss',

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),

                    editUrl:
                        'https://github.com/facilecss/core/tree/main/docs/templates/shared/',
                },
                blog: {
                    showReadingTime: true,

                    editUrl:
                        'https://github.com/facilecss/core/tree/main/docs/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/style.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Facile CSS',
                logo: {
                    alt: 'Facile CSS Icon',
                    src: 'img/icon.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Documentation',
                    },
                    {to: 'blog', label: 'Blog', position: 'left'},
                    // Please keep GitHub link to the right for consistency.
                    {
                        href: 'https://github.com/facilecss/core',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Getting Started',
                        items: [
                            {
                                label: 'Introduction',
                                to: 'docs/intro',
                            },
                        ],
                    },

                    {
                        title: 'Socials',
                        items: [
                            {
                                label: 'Blog',
                                to: 'blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/facilecss/core',
                            },
                        ],
                    },
                ],
                logo: {
                    alt: 'Facile CSS Icon',
                    src: 'img/icon.png',
                    width: '48',
                    height: '48',
                    href: '/',
                },

                copyright: `Copyright © ${new Date().getFullYear()} Facile CSS. Built with ❤️`,
            },
        }),
};

module.exports = config;

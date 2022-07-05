/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

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

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'facilecss', // Usually your GitHub org/user name.
    projectName: 'facilecss', // Usually your repo name.

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
                        title: 'Learn',
                        items: [
                            {
                                label: 'Style Guide',
                                to: 'docs/',
                            },
                            {
                                label: 'Second Doc',
                                to: 'docs/doc2',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/docusaurus',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: 'blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/facebook/docusaurus',
                            },
                        ],
                    },
                    {
                        title: 'Legal',
                        // Please do not remove the privacy and terms, it's a legal requirement.
                        items: [
                            {
                                label: 'Privacy',
                                href: 'https://opensource.facebook.com/legal/privacy/',
                            },
                            {
                                label: 'Terms',
                                href: 'https://opensource.facebook.com/legal/terms/',
                            },
                            {
                                label: 'Data Policy',
                                href: 'https://opensource.facebook.com/legal/data-policy/',
                            },
                            {
                                label: 'Cookie Policy',
                                href: 'https://opensource.facebook.com/legal/cookie-policy/',
                            },
                        ],
                    },
                ],
                logo: {
                    alt: 'Facebook Open Source Logo',
                    src: 'img/oss_logo.png',
                    href: 'https://opensource.facebook.com',
                },
                // Please do not remove the credits, help to publicize Docusaurus :)
                copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc. Built with Docusaurus.`,
            },
        }),
};

module.exports = config;

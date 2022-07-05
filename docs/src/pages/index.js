import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: 'Functional',
        imageUrl: 'img/undraw_functionnal.svg',
        description: (
            <>
                Facile CSS comes with a config file that allows you to customize
                the classes or colors, etc.
            </>
        ),
    },
    {
        title: 'Focus on Performance',
        imageUrl: 'img/undraw_performance.svg',
        description: (
            <>
                Facile CSS is built on utility classes and components, which
                means it is optimized for performance.
            </>
        ),
    },
    {
        title: 'Easy to Use',
        imageUrl: 'img/undraw_easy.svg',
        description: (
            <>
                Facile CSS is one of the most simple css librarys out there. The
                word facile is French and means "simple, easy" on english.
            </>
        ),
    },
];

function Feature({imageUrl, title, description}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img
                        className={styles.featureImage}
                        src={imgUrl}
                        alt={title}
                    />
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Simple functional CSS library, build on utility classes & components. <head />">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--outline button--secondary button--lg button--get-started',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('docs/intro')}>
                            Get Started
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map(
                                    ({title, imageUrl, description}) => (
                                        <Feature
                                            key={title}
                                            title={title}
                                            imageUrl={imageUrl}
                                            description={description}
                                        />
                                    ),
                                )}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

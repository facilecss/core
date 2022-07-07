import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import BackedBy from '../components/BackedBy';

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
        <Layout description="Simple functional CSS library, build on utility classes & components. <head />">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            style={{margin: '0 20px'}}
                            className={clsx(
                                'button button--secondary button--lg button--get-started',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('docs/intro')}>
                            Get Started
                        </Link>

                        <iframe
                            src={
                                'https://ghbtns.com/github-btn.html?user=facilecss&repo=core&type=star&count=true&size=large'
                            }
                            frameBorder="0"
                            scrolling="0"
                            width="160px"
                            height="30px"
                            style={{marginTop: '8px'}}
                        />
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

            <BackedBy />
        </Layout>
    );
}

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../styles.module.css';
import users from '../../../users.json';

export default function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={siteConfig.title + ' - Users'}
            description="Simple functional CSS library, build on utility classes & components. <head />">
            <main>
                <div
                    className="mainContainer"
                    style={{
                        padding: '2rem 0',
                    }}>
                    <div
                        style={{
                            margin: '0 auto',
                            maxWidth: '1100px',
                            padding: '0 20px',
                        }}>
                        <div className="showcaseSection text--center">
                            <div
                                className="prose"
                                style={{marginBottom: '20px'}}>
                                <h1 style={{marginBottom: '20px'}}>
                                    Who are using Facile CSS?
                                </h1>
                                <p>
                                    Do you use Facile CSS? Then add your
                                    company/project to our website
                                </p>
                                <Link
                                    className="button button--outline button--info button--lg"
                                    target="_blank"
                                    to="https://github.com/facilecss/core/edit/main/docs/users.json">
                                    Add your company/project
                                </Link>

                                <div
                                    className="logos"
                                    style={{
                                        alignItems: 'center',
                                        display: 'flex',
                                        flexFlow: 'row wrap',
                                        justifyContent: 'center',
                                    }}>
                                    {users.map((user, index) => (
                                        <a
                                            key={index}
                                            href={`${user.href}`}
                                            className="--hover-opacity"
                                            target={`${user.target}`}>
                                            <img
                                                style={{padding: '20px'}}
                                                width={user.width}
                                                alt="bit"
                                                src={user.icon}
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

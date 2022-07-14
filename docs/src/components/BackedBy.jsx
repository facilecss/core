import React from 'react';
import users from '../../users.json';

function BackedBy() {
    return (
        <div
            className="mainContainer"
            style={{
                backgroundColor: 'var(--ifm-color-emphasis-100)',
                padding: '2rem 0',
            }}>
            <div
                style={{
                    margin: '0 auto',
                    maxWidth: '1100px',
                    padding: '0 20px',
                }}>
                <div className="showcaseSection text--center">
                    <div className="prose" style={{marginBottom: '20px'}}>
                        <h1 style={{marginBottom: '20px'}}>
                            Who is using this?
                        </h1>
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
                                    target={`${user.target}`}
                                    style={
                                        user.pinned === false
                                            ? {
                                                  display: 'none',
                                              }
                                            : {
                                                  display: 'inline-block',
                                                  margin: '0 10px',
                                              }
                                    }>
                                    <img
                                        style={{padding: '20px'}}
                                        width={user.width}
                                        alt="bit"
                                        src={user.icon}
                                    />
                                </a>
                            ))}
                        </div>
                        <a
                            href="/users"
                            className="button button--outline button--secondary">
                            More users
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BackedBy;

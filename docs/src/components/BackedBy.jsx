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
                        <h1>Backed up by</h1>
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
                                    target="_blank">
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
    );
}

export default BackedBy;

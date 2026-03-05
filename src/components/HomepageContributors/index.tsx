import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type ContributorItem = {
  name: string;
  role: string;
  imageUrl: string;
  githubUrl: string;
};

const ContributorList: ContributorItem[] = [
  {
    name: 'Fauzilazhim',
    role: 'Lead Maintainer',
    imageUrl: 'https://github.com/fauzilxx.png',
    githubUrl: 'https://github.com/fauzilxx',
  },
  {
    name: 'Velengio',
    role: 'Co-Maintainer', 
    imageUrl: 'https://github.com/Unalome7431.png',
    githubUrl: 'https://github.com/Unalome7431',
  },
  {
    name: 'Firizqi Aditya',
    role: 'Co-Maintainer', 
    imageUrl: 'https://github.com/Adityamulyaf.png',
    githubUrl: 'https://github.com/Adityamulyaf',
  },
  {
    name: 'Arul',
    role: 'Co-Maintainer', 
    imageUrl: 'https://github.com/ArluxShow.png',
    githubUrl: 'https://github.com/ArluxShow',
  }
  
];

function Contributor({name, role, imageUrl, githubUrl}: ContributorItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('avatar avatar--vertical', styles.avatar)}>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <img
            className={styles.avatarPhoto}
            src={imageUrl}
            alt={name}
            onError={(e) => {
              e.currentTarget.src = `https://github.com/${name}.png`; // Try username fallback
            }}
          />
        </a>
        <div className="avatar__intro">
          <div className="avatar__name">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer"><h3>{name}</h3></a>
          </div>
          <small className="avatar__subtitle">{role}</small>
        </div>
      </div>
    </div>
  );
}

export default function HomepageContributors() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          Kontributor Website
        </Heading>
        <div className="row" style={{justifyContent: 'center'}}>
          {ContributorList.map((props, idx) => (
            <Contributor key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

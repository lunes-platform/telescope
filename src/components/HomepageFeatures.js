import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Lunes Plataform',
    Svg: require('../../static/img/frame.svg').default,
    description: (
      <>
        Your Future is here!
      </>
    ),
  },
  {
    title: 'Lunes Documentation',
    Svg: require('../../static/img/frame3.svg').default,
    description: (
      <>
        All our features in one place.
      </>
    ),
  },
  {
    title: 'Lunes Blockchain',
    Svg: require('../../static/img/frame2.svg').default,
    description: (
      <>
        Decentralization is our theme.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

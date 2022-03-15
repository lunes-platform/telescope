import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>Lunes Platform</Translate>,
    Svg: require('../../static/img/frame.svg').default,
    description: (
      <Translate>
        Your Future is here!
      </Translate>
    ),
  },
  {
    title: <Translate>Lunes Documentation</Translate>,
    Svg: require('../../static/img/frame3.svg').default,
    description: (
      <Translate>
        All our features in one place.
      </Translate>
    ),
  },
  {
    title: <Translate>Lunes Blockchain</Translate>,
    Svg: require('../../static/img/frame2.svg').default,
    description: (
      <Translate>
        Decentralization is our theme.
      </Translate>
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

import React from "react";
import styles from "./HomepageFeatures.module.css";
import Translate, { translate } from "@docusaurus/Translate";

const FeatureList = [
  {
    title: <Translate>Core Engine</Translate>,
    image: require("../../static/roadmap/core-engine.png").default,
    description:
      <Translate>
        Solid foundation for future
      </Translate>,
    link: "https://github.com/lunes-platform/lunes-node/milestone/2"
  },
  {
    title: <Translate>Public API</Translate>,
    image: require("../../static/roadmap/public-api.png").default,
    description:
      <Translate>
        Public API for everyone
      </Translate>,
    link: "https://github.com/lunes-platform/lunes-node/milestone/3"
  },
  {
    title: <Translate>Mass Transfer</Translate>,
    image: require("../../static/roadmap/mass-transfer.png").default,
    description:
      <Translate>
        High volume transfers
      </Translate>,
    link: "https://github.com/lunes-platform/lunes-node/milestone/4"
  },
  {
    title: <Translate>Enable Tokens & NFT</Translate>,
    image: require("../../static/roadmap/enable-tokens-nft.png").default,
    description:
      <Translate>
        Tokens airdrop and mint NFT
      </Translate>,
    link: "https://github.com/lunes-platform/lunes-node/milestone/5"
  },
  {
    title: <Translate>Sponsor Fee</Translate>,
    image: require("../../static/roadmap/sponsor-fee.png").default,
    description:
      <Translate>
        Sponsor Fee of any Token and NFT
      </Translate>,
    link: "https://github.com/lunes-platform/lunes-node/milestone/6"
  },
  {
    title: <Translate>Smart Tokens & NFT</Translate>,
    image: require("../../static/roadmap/smart-tokens-nft.png").default,
    description:
      <Translate>
        Control your Tokens & NFT
      </Translate>,
    link: "https://github.com/lunes-platform/lunes-node/milestone/7"
  },
  {
    title: <Translate>Smart Wallet</Translate>,
    image: require("../../static/roadmap/smart-wallets.png").default,
    description:
      <Translate>
        Programing your Wallet
      </Translate>,
    link: "https://github.com/lunes-platform/lunes-node/milestone/8"
  },
  {
    title: <Translate>Smart Contracts</Translate>,
    image: require("../../static/roadmap/smart-contracts.png").default,
    description:
      <Translate>
        Programing everthing
      </Translate>,
    link: "https://github.com/lunes-platform/lunes-node/milestone/9"
  },
];

function Feature({ image, title, description, link }) {
  return (
    <div className="text--center">
      <div className="text--center">
        <img className={styles.featureImg} alt={title.props.children} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
          <h3 href="">{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.features}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

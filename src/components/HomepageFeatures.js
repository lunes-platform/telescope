import React from "react";
import styles from "./HomepageFeatures.module.css";
import Translate, { translate } from "@docusaurus/Translate";


function getTheme(item) {
  return item.replace('X', document.documentElement.getAttribute('data-theme'))
}


const FeatureList = [
  {
    title: <Translate>Core Engine</Translate>,
    image: require("../../static/roadmap/core-engine-dark.png").default,
    description:
      <Translate>
        Solid foundation for future
      </Translate>,
    link: "https://github.com/lunes-platform/lunes-node/milestone/2"
  },
  {
    title: <Translate>LIP</Translate>,
    image: require("../../static/roadmap/lip-dark.png").default,
    description:
      <Translate>
        Lunes Improvement Proposal
      </Translate>,
    link: "https://github.com/lunes-platform/lunes-node/milestone/2"
  },
  {
    title: <Translate>LPoS</Translate>,
    image: require("../../static/roadmap/lease-proof-of-stake-dark.png").default,
    description:
      <Translate>
        Lease Proof of Stake
      </Translate>,
    link: "https://github.com/lunes-platform/lunes-node/milestone/3"
  },
  {
    title: <Translate>Public API</Translate>,
    image: require("../../static/roadmap/public-api-dark.png").default,
    description:
      <Translate>
        Public API for everyone
      </Translate>,
    link: "https://github.com/lunes-platform/lunes-node/milestone/3"
  },
  {
    title: <Translate>Mass Transfer</Translate>,
    image: require("../../static/roadmap/mass-transfer-dark.png").default,
    description:
      <Translate>
        High volume transfers
      </Translate>,
    link: "https://github.com/lunes-platform/lunes-node/milestone/4"
  },
  {
    title: <Translate>Tokens & NFT</Translate>,
    image: require("../../static/roadmap/tokens-nft-dark.png").default,
    description:
      <Translate>
        Tokens airdrop and mint NFT
      </Translate>,
    link: "https://github.com/lunes-platform/lunes-node/milestone/5"
  },
  {
    title: <Translate>Sponsor Fee</Translate>,
    image: require("../../static/roadmap/sponsor-fee-dark.png").default,
    description:
      <Translate>
        Sponsor Fee of any Token and NFT
      </Translate>,
    link: "https://github.com/lunes-platform/lunes-node/milestone/6"
  },
  {
    title: <Translate>Smart Tokens & NFT</Translate>,
    image: require("../../static/roadmap/smart-tokens-nft-dark.png").default,
    description:
      <Translate>
        Control your Tokens & NFT
      </Translate>,
    link: "https://github.com/lunes-platform/lunes-node/milestone/7"
  },
  {
    title: <Translate>Liquidy Pools</Translate>,
    image: require("../../static/roadmap/liquidy-pools-dark.png").default,
    description:
      <Translate>
        Yield Farming any Tokens pairs
      </Translate>,
    link: "https://github.com/lunes-platform/lunes-node/milestone/7"
  },
  {
    title: <Translate>DeFi</Translate>,
    image: require("../../static/roadmap/defi-dark.png").default,
    description:
      <Translate>
        Swap any Tokens pairs
      </Translate>,
    link: "https://github.com/lunes-platform/lunes-node/milestone/7"
  },
  {
    title: <Translate>Smart Wallet</Translate>,
    image: require("../../static/roadmap/smart-wallets-dark.png").default,
    description:
      <Translate>
        Programing your Wallet
      </Translate>,
    link: "https://github.com/lunes-platform/lunes-node/milestone/8"
  },
  {
    title: <Translate>Smart Contracts</Translate>,
    image: require("../../static/roadmap/smart-contracts-dark.png").default,
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

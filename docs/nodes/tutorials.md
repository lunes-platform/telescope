---
sidebar_position: 1
---

# ✅ Tutorials

## How to LunesNode works

The Lunes Blockchain is a decentralized and distributed network based on the LPoS consensus algorithm. This network can be mainnet or testnet, in mainnet the nodes work with real values of tokens, currencies, NFT and assets. On the other hand, testnet has "fake" tokens to provide a test environment.
In the dev language, mainnet is prod and testnet is dev.

LunesNode is a node or server that has the responsibility to maintain and validate the blockchain, broadcast new transactions and provide an api for interaction and integration with the network.

With a LunesNode you become a Lunes Blockchain participant and can provide network resiliency, validate data, and integrate real-world services into the blockchain.

## How to Run a LunesNode in MAINNET and TESTNET

<details>
  <summary>Linux</summary>

**Get files**

You need **LunesNode java executable** **[download here](https://github.com/lunes-platform/lunesnode/releases/download/v0.1.4/lunesnode-latest.jar)**

Now you need also a set a config file with you want.

```HOCON
lunes {
  directory = ""

  blockchain.type = 
  network.known-peers = [""]

  wallet.password = ""
  wallet.seed = ""
}
```

**info**
- `directory` is the file where your Lunes Blockchain will download with according to your `WorkingDirectory`
- `blockchain.type` type of network you want connect, MAINNET or TESTNET
- `network.known-peers` in here your should be put a `ip:7770` like address of a lunesnode, for **mainnet** `5.196.155.34:7770` or **testnet** `5.196.155.46:7770`
- `wallet.password` the password that your wallet will be encrypted
- `wallet.seed` your seed in `BASE58` hash

**after save this file with `lunesnode.conf` name**
* you can be take a **completely conf**  in **[here](https://github.com/lunes-platform/lunesnode/blob/master/src/main/resources/application.conf)**

Now your machine should have files:
```
lunesnode.conf
lunesnode-latest.jar
```

**Run**
```
java -jar lunesnode-lates.jar
```

If you want enable LunesNode to run forever, save this file in `/etc/systemd/system/` with `lunesnode.service`
```
[Unit]
Description=Lunes Node Blockchain
After=network.target

[Service]
WorkingDirectory=PATH_DIR_LUNES_BLOCKCHAIN
ExecStart=/usr/bin/java -jar PATH_LUNES_NODE.jar PATH_LUNES_NODE.conf
Restart=always
RestartSec=30s
StandardOutput=journal
StandardError=journal
SyslogIdentifier=lunesnode

[Install]
WantedBy=multi-user.target
```

</details>

<details>
  <summary>Docker</summary>

Ready on 26/12/2021 - Issue -> [#8](https://git.lunes.io/blockchain/production/docs/-/issues/8)

</details>

<details>
  <summary>MacOs</summary>

Ready on 26/12/2021 - Issue -> [#11](https://git.lunes.io/blockchain/production/docs/-/issues/11)

</details>

<details>
  <summary>Windows</summary>

Ready on 26/12/2021 - Issue -> [#10](https://git.lunes.io/blockchain/production/docs/-/issues/10)

</details>

## How to Create a Custom Network (Fork)

<details>
  <summary>Private Lunes Blockchain</summary>

**Changed genesis transactions**

```txt
Coming Soon
```

**Runnig and get signature of genesis transactions**

```txt
Coming Soon
```

**Add signature and Build your Node**

```txt
Coming Soon
```

</details>

---
sidebar_position: 2
---

# Tutorials ✅


## How to LunesNode works

The Lunes Blockchain is a decentralized and distributed network based on the LPoS consensus algorithm. This network can be mainnet or testnet, in mainnet the nodes work with real values of tokens, currencies, NFT and assets. On the other hand, testnet has "fake" tokens to provide a test environment.
In the dev language, mainnet is prod and testnet is dev.

LunesNode is a node or server that has the responsibility to maintain and validate the blockchain, broadcast new transactions and provide an api for interaction and integration with the network.

```py
# The Network e.g.
                     o 
                    / \
          o _ o    o   \
         /     \  /     \
        o _____ o ______ o ___ o
       / \     / \            /
     o    \   /   \          /
            o _____ o       o
```

With a LunesNode you become a Lunes Blockchain participant and can provide network resiliency, validate data, and integrate real-world services into the blockchain.

## How to Runnig a LunesNode in MAINNET and TESTNET

<details>
  <summary>Lunix</summary>

**Get files**

Your need **LunesNode java executable** **[get here](https://github.com/lunes-platform/lunesnode/releases/download/v0.1.4/lunesnode-latest.jar)**

Now your need also a set a config file with your want.

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
- `directory` is a local on your copy from lunesblockchain will be persisted
- `blockchain.type` type of network your want connect, MAINNET or TESTNET
- `network.known-peers` in here your should be put a `ip:7770` like address of a lunesnode, for **mainnet** `5.196.155.34:7770` or **testnet** `5.196.155.46:7770`
- `wallet.password` the password that your wallet will be encrypted
- `wallet.seed` your seed in `BASE58` hash

**after save this file with `lunesnode.conf` name**
* your can be take a **completely conf**  in **[here](https://github.com/lunes-platform/lunesnode/blob/master/src/main/resources/application.conf)**

Now your machine shold have files:
```
lunesnode.conf
lunesnode-latest.jar
```

**Run**
```
java -jar lunesnode-lates.jar
```

If your want enable LunesNode to run forever, save this file in `/etc/systemd/system/` with `lunesnode.service`
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

```
Coming Soon
```
</details>

<details>
  <summary>MacOs</summary>

```
Coming Soon
```
</details>


<details>
  <summary>Windows</summary>

```
Coming Soon
```
</details>


## How to Create a Custom Network (Fork)


<details>
  <summary>Private Lunes Blockchain</summary>

**Changed genesis transactions**

```
Coming Soon
```
**Runnig and get signature of genesis transactions**

```
Coming Soon
```
**Add signature and Build your Node**

```
Coming Soon
```
</details>

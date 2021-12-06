---
sidebar_position: 1
---

# How to install

## Supported system by node

    Any system that is compatible with Java 8.

For now, the installation is only supported for Linux.

## Minimum Requirements

### Minimum

- One Lunes seed
- 2gb Ram
- 20gb HD
- 2 Cores

### Ideal

- One Lunes seed
- 4gb RAM
- 40gb HD
- 2 cores

## MainNet and TestNet

### Difference between TestNet and MainNet

- MainNet

    Where things happen, here the Lunes currency has value

- TestNet

    Where things are tested, no coin has value here

## Amount of Lunes

### Amount necessary for Lunes Node

In MAINNET is necessary `5000` Lunes.

In TESTNET is necessary `5000` Lunes.

## Lease Proof-of-Stake

### Consensus LPOS

In this algorithm, the person responsible for validating a block is randomly drawn.

However the node that has saved(stake) `5000` lunes or more, has more chance of being drawn.

The more Lunes saved (stake), the greater the chance of being drawn to validate a block and receive the reward.

It is also possible to rent (lease) Lunes to full nodes and receive rewards.

When lunes are rented, they **are not transferred**, they are just locked in the staker's wallet.

## Lease - Stake

Whoever carries a knot can receive a bet. That way, he can increase the chance of being drawn, even without adding Lunes to the wallet.

- Requirements for Leasing: `5000` of Lunes

## How to up a node

1. The choice is made in the field `lunes.blockchain.type`
2. Modify for `MAINNET` or `TESTNET`
3. In the field `lunes.network.know-peers` point the network node `["ip:7770"]`

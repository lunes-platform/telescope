---
sidebar_position: 3
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";


# 📮 Transactions

## Send _Lunes_

Only for send Lunes asset you dont must be pass asset_id parameter in TranferToken.
**The transfer costs 0.001Lunes**

<Tabs>
  <TabItem value="Python3" label="Python3" default>

```py
from lunespy.client.transactions.transfer import TransferToken
from lunespy.client.wallet import Account


# Generate the wallet
sender_wallet = Account(
  seed="phone dove naive find erase grant right cause garden struggle robust ball"
)
receiver_wallet = Account()

# Set up the transaction to transfer your tokens
tx = TransferToken(
  sender=sender_wallet.public_key,
  receiver=receiver_wallet.address,
  amount=100
)

# For validate data pass
tx.ready

# You can show your raw transaction
tx.transaction

# You need sign your transaction with sender account before send
tx.sign(sender_wallet.private_key)

# You can show your sign raw transaction
tx.transaction

# Now you can send your transfer transaction
tx.send()

# To see the transaction response use
tx.history
```


<details>
  <summary>successful response</summary>

```json
{
  "ready": true,
  "senderPublicKey": "4SpyrKC8KFq2AF2RjgS6o373vTFrAAwrFmMfYL8PfezE",
  "signature": "4jD1B37yewcwedSZ6gt8LeVPY8f2i4tn8VjrnhNukCkpTrvm1e5YtrH7Byzj7rYTbB9dMzKzdL5P1E7xR7N89zp9",
  "timestamp": 1631473467403,
  "recipient": "37ani1re8pMVYRkHo1xDPtj8kBYyDu3DGkP",
  "feeAsset": "",
  "assetId": "",
  "amount": 100,
  "type": 4,
  "fee": 100000,
  "send": true,
  "response": {
    "type": 4,
    "id": "DFh451K5ot7J8sjobVsrMcAQiFnRESXG6C19UnKsS5Mi",
    "sender": "37bpECMv85nUr14YEfkyyyWKN2gYgrCfDhX",
    "senderPublicKey": "FYvp88jP2xC21JCQfeSxUkg6qmLSGs5x8TBr5V3pT2NH",
    "fee": 100000,
    "timestamp": 1631473695599,
    "signature": "2VwHiMtN2CUqJuMiaGqhsM1Qorhz7jMbjGb5wxN9Hb7WnLZXAwPPTEYjht8Ey8FjDt8739EFnuSvwMiwioqJ3XXd",
    "recipient": "37hqrPGmzzT6xk5GFXbc9u5yYnRmBWSJuTY",
    "assetId": null,
    "amount": 100,
    "feeAsset": null
  }
}
```
</details>

<details>
  <summary>failure response</summary>

```json
{
  "ready": true,
  "senderPublicKey": "4SpyrKC8KFq2AF2RjgS6o373vTFrAAwrFmMfYL8PfezE",
  "signature": "4jD1B37yewcwedSZ6gt8LeVPY8f2i4tn8VjrnhNukCkpTrvm1e5YtrH7Byzj7rYTbB9dMzKzdL5P1E7xR7N89zp9",
  "timestamp": 1631473467403,
  "recipient": "37ani1re8pMVYRkHo1xDPtj8kBYyDu3DGkP",
  "feeAsset": "",
  "assetId": "",
  "amount": 100,
  "type": 4,
  "fee": 100000,
  "send": false,
  "response": {
    "error": 112,
    "message": "State check failed. Reason: Attempt to transfer unavailable funds: Transaction application leads to negative lunes balance to (at least) temporary negative state, current balance equals 0, spends equals -100100, result is -100100",
    "tx": {
      "type": 4,
      "id": "EzQVTZGavd9jmWprnADWMK3dya8ZeF1dAF4JNYmAkkH1",
      "sender": "37QqvghNGWrUWSjALayGjCnT1nC28wXV6pL",
      "senderPublicKey": "4SpyrKC8KFq2AF2RjgS6o373vTFrAAwrFmMfYL8PfezE",
      "fee": 100000,
      "timestamp": 1631473467403,
      "signature": "4jD1B37yewcwedSZ6gt8LeVPY8f2i4tn8VjrnhNukCkpTrvm1e5YtrH7Byzj7rYTbB9dMzKzdL5P1E7xR7N89zp9",
      "recipient": "37ani1re8pMVYRkHo1xDPtj8kBYyDu3DGkP",
      "assetId": null,
      "amount": 100,
      "feeAsset": null
    }
  }
}
```
</details>
  </TabItem>

  <TabItem value="JavaScript" label="JavaScript" default>

```js
const lunescrab = require("lunescrab")
const TransferToken = lunescrab.client.transactions.transfer.TransferToken
const Account = lunescrab.client.wallet.Account


// Generate the wallet
const senderWallet = Account({
  seed:"phone dove naive find erase grant right cause garden struggle robust ball"
})
const receiverWallet = Account({})

// Set up the transaction to transfer your tokens
var tx = TransferToken({
  from: senderWallet.publicKey,
  to: receiverWallet.address,
  amount: 100
})

// For validate data pass
tx.ready

// You can show your raw transaction
tx.transaction

// You need sign your transaction before send
tx.sign(senderWallet.privateKey)

// You can show your sign raw transaction
tx.transaction

// Now you can send your transfer transaction
tx.send()

// To see the transaction response use
tx.history
```


<details>
  <summary>successful response</summary>

```json
{
  "ready": true,
  "senderPublicKey": "4SpyrKC8KFq2AF2RjgS6o373vTFrAAwrFmMfYL8PfezE",
  "signature": "4jD1B37yewcwedSZ6gt8LeVPY8f2i4tn8VjrnhNukCkpTrvm1e5YtrH7Byzj7rYTbB9dMzKzdL5P1E7xR7N89zp9",
  "timestamp": 1631473467403,
  "recipient": "37ani1re8pMVYRkHo1xDPtj8kBYyDu3DGkP",
  "feeAsset": "",
  "assetId": "",
  "amount": 100,
  "type": 4,
  "fee": 100000,
  "send": true,
  "response": {
    "type": 4,
    "id": "DFh451K5ot7J8sjobVsrMcAQiFnRESXG6C19UnKsS5Mi",
    "sender": "37bpECMv85nUr14YEfkyyyWKN2gYgrCfDhX",
    "senderPublicKey": "FYvp88jP2xC21JCQfeSxUkg6qmLSGs5x8TBr5V3pT2NH",
    "fee": 100000,
    "timestamp": 1631473695599,
    "signature": "2VwHiMtN2CUqJuMiaGqhsM1Qorhz7jMbjGb5wxN9Hb7WnLZXAwPPTEYjht8Ey8FjDt8739EFnuSvwMiwioqJ3XXd",
    "recipient": "37hqrPGmzzT6xk5GFXbc9u5yYnRmBWSJuTY",
    "assetId": null,
    "amount": 100,
    "feeAsset": null
  }
}
```
</details>

<details>
  <summary>failure response</summary>

```json
{
  "ready": true,
  "senderPublicKey": "4SpyrKC8KFq2AF2RjgS6o373vTFrAAwrFmMfYL8PfezE",
  "signature": "4jD1B37yewcwedSZ6gt8LeVPY8f2i4tn8VjrnhNukCkpTrvm1e5YtrH7Byzj7rYTbB9dMzKzdL5P1E7xR7N89zp9",
  "timestamp": 1631473467403,
  "recipient": "37ani1re8pMVYRkHo1xDPtj8kBYyDu3DGkP",
  "feeAsset": "",
  "assetId": "",
  "amount": 100,
  "type": 4,
  "fee": 100000,
  "send": false,
  "response": {
    "error": 112,
    "message": "State check failed. Reason: Attempt to transfer unavailable funds: Transaction application leads to negative lunes balance to (at least) temporary negative state, current balance equals 0, spends equals -100100, result is -100100",
    "tx": {
      "type": 4,
      "id": "EzQVTZGavd9jmWprnADWMK3dya8ZeF1dAF4JNYmAkkH1",
      "sender": "37QqvghNGWrUWSjALayGjCnT1nC28wXV6pL",
      "senderPublicKey": "4SpyrKC8KFq2AF2RjgS6o373vTFrAAwrFmMfYL8PfezE",
      "fee": 100000,
      "timestamp": 1631473467403,
      "signature": "4jD1B37yewcwedSZ6gt8LeVPY8f2i4tn8VjrnhNukCkpTrvm1e5YtrH7Byzj7rYTbB9dMzKzdL5P1E7xR7N89zp9",
      "recipient": "37ani1re8pMVYRkHo1xDPtj8kBYyDu3DGkP",
      "assetId": null,
      "amount": 100,
      "feeAsset": null
    }
  }
}
```
</details>
  </TabItem>
</Tabs>




## Send _Token_
By passing an `asset_id` parameter it is possible to send any asset that has already been issued in lunes-blockchain.
**The transfer costs 0.001Lunes**

<Tabs>
  <TabItem value="Python3" label="Python3" default>

```py
from lunespy.client.transactions.transfer import TransferToken
from lunespy.client.wallet import Account


# Generate the wallet
sender_wallet = Account(
  seed="phone dove naive find erase grant right cause garden struggle robust ball"
)
receiver_wallet = Account()


# Get your Asset Id, NFT Id or Token Id
token = "9ax6usn3TmwdTRoTnn8zr5Kku9qykstYxRkUb4Z1Z2oY"


# Set up the transaction to transfer your tokens
tx = TransferToken(
  sender=sender_wallet.public_key,
  receiver=receiver_wallet.address,
  amount=100,
  asset_id=token
)

# For validate data pass
tx.ready

# You can show your raw transaction
tx.transaction

# You need sign your transaction before send
tx.sign(sender_wallet.private_key)

# You can show your sign raw transaction
tx.transaction

# Now you can send your transfer transaction
tx.send()

# To see the transaction response use
tx.history
```


<details>
  <summary>successful response</summary>

```json
{
  "ready": true,
  "senderPublicKey": "4SpyrKC8KFq2AF2RjgS6o373vTFrAAwrFmMfYL8PfezE",
  "signature": "4jD1B37yewcwedSZ6gt8LeVPY8f2i4tn8VjrnhNukCkpTrvm1e5YtrH7Byzj7rYTbB9dMzKzdL5P1E7xR7N89zp9",
  "timestamp": 1631473467403,
  "recipient": "37ani1re8pMVYRkHo1xDPtj8kBYyDu3DGkP",
  "feeAsset": "",
  "assetId": "9ax6usn3TmwdTRoTnn8zr5Kku9qykstYxRkUb4Z1Z2oY",
  "amount": 100,
  "type": 4,
  "fee": 100000,
  "send": true,
  "response": {
    "type": 4,
    "id": "DFh451K5ot7J8sjobVsrMcAQiFnRESXG6C19UnKsS5Mi",
    "sender": "37bpECMv85nUr14YEfkyyyWKN2gYgrCfDhX",
    "senderPublicKey": "FYvp88jP2xC21JCQfeSxUkg6qmLSGs5x8TBr5V3pT2NH",
    "fee": 100000,
    "timestamp": 1631473695599,
    "signature": "2VwHiMtN2CUqJuMiaGqhsM1Qorhz7jMbjGb5wxN9Hb7WnLZXAwPPTEYjht8Ey8FjDt8739EFnuSvwMiwioqJ3XXd",
    "recipient": "37hqrPGmzzT6xk5GFXbc9u5yYnRmBWSJuTY",
    "assetId": "9ax6usn3TmwdTRoTnn8zr5Kku9qykstYxRkUb4Z1Z2oY",
    "amount": 100,
    "feeAsset": null
  }
}
```
</details>

<details>
  <summary>failure response</summary>

```json
{
  "ready": true,
  "senderPublicKey": "4SpyrKC8KFq2AF2RjgS6o373vTFrAAwrFmMfYL8PfezE",
  "signature": "4jD1B37yewcwedSZ6gt8LeVPY8f2i4tn8VjrnhNukCkpTrvm1e5YtrH7Byzj7rYTbB9dMzKzdL5P1E7xR7N89zp9",
  "timestamp": 1631473467403,
  "recipient": "37ani1re8pMVYRkHo1xDPtj8kBYyDu3DGkP",
  "feeAsset": "",
  "assetId": "9ax6usn3TmwdTRoTnn8zr5Kku9qykstYxRkUb4Z1Z2oY",
  "amount": 100,
  "type": 4,
  "fee": 100000,
  "send": false,
  "response": {
    "error": 112,
    "message": "State check failed. Reason: Attempt to transfer unavailable funds: Transaction application leads to negative lunes balance to (at least) temporary negative state, current balance equals 0, spends equals -100100, result is -100100",
    "tx": {
      "type": 4,
      "id": "EzQVTZGavd9jmWprnADWMK3dya8ZeF1dAF4JNYmAkkH1",
      "sender": "37QqvghNGWrUWSjALayGjCnT1nC28wXV6pL",
      "senderPublicKey": "4SpyrKC8KFq2AF2RjgS6o373vTFrAAwrFmMfYL8PfezE",
      "fee": 100000,
      "timestamp": 1631473467403,
      "signature": "4jD1B37yewcwedSZ6gt8LeVPY8f2i4tn8VjrnhNukCkpTrvm1e5YtrH7Byzj7rYTbB9dMzKzdL5P1E7xR7N89zp9",
      "recipient": "37ani1re8pMVYRkHo1xDPtj8kBYyDu3DGkP",
      "assetId": "9ax6usn3TmwdTRoTnn8zr5Kku9qykstYxRkUb4Z1Z2oY",
      "amount": 100,
      "feeAsset": null
    }
  }
}
```
</details>
  </TabItem>

  <TabItem value="JavaScript" label="JavaScript" default>

```js
const lunescrab = require("lunescrab")
const TransferToken = lunescrab.client.transactions.transfer import TransferToken
const Account = lunescrab.client.wallet import Account


// Get your Asset Id, NFT Id or Token Id
token = "9ax6usn3TmwdTRoTnn8zr5Kku9qykstYxRkUb4Z1Z2oY"


// Generate the wallet
const senderWallet = Account({
  seed:"phone dove naive find erase grant right cause garden struggle robust ball"
})
const receiverWallet = Account({})

// Set up the transaction to transfer your tokens
var tx = TransferToken({
  from: senderWallet.publicKey,
  to: receiverWallet.address,
  amount: 100,
  assetId: token
})

// For validate data pass
tx.ready

// You can show your raw transaction
tx.transaction

// You need sign your transaction before send
tx.sign(senderWallet.privateKey)

// You can show your sign raw transaction
tx.transaction

// Now you can send your transfer transaction
tx.send()

// To see the transaction response use
tx.history
```


<details>
  <summary>successful response</summary>

```json
{
  "ready": true,
  "senderPublicKey": "4SpyrKC8KFq2AF2RjgS6o373vTFrAAwrFmMfYL8PfezE",
  "signature": "4jD1B37yewcwedSZ6gt8LeVPY8f2i4tn8VjrnhNukCkpTrvm1e5YtrH7Byzj7rYTbB9dMzKzdL5P1E7xR7N89zp9",
  "timestamp": 1631473467403,
  "recipient": "37ani1re8pMVYRkHo1xDPtj8kBYyDu3DGkP",
  "feeAsset": "",
  "assetId": "",
  "amount": 100,
  "type": 4,
  "fee": 100000,
  "send": true,
  "response": {
    "type": 4,
    "id": "DFh451K5ot7J8sjobVsrMcAQiFnRESXG6C19UnKsS5Mi",
    "sender": "37bpECMv85nUr14YEfkyyyWKN2gYgrCfDhX",
    "senderPublicKey": "FYvp88jP2xC21JCQfeSxUkg6qmLSGs5x8TBr5V3pT2NH",
    "fee": 100000,
    "timestamp": 1631473695599,
    "signature": "2VwHiMtN2CUqJuMiaGqhsM1Qorhz7jMbjGb5wxN9Hb7WnLZXAwPPTEYjht8Ey8FjDt8739EFnuSvwMiwioqJ3XXd",
    "recipient": "37hqrPGmzzT6xk5GFXbc9u5yYnRmBWSJuTY",
    "assetId": null,
    "amount": 100,
    "feeAsset": null
  }
}
```
</details>

<details>
  <summary>failure response</summary>

```json
{
  "ready": true,
  "senderPublicKey": "4SpyrKC8KFq2AF2RjgS6o373vTFrAAwrFmMfYL8PfezE",
  "signature": "4jD1B37yewcwedSZ6gt8LeVPY8f2i4tn8VjrnhNukCkpTrvm1e5YtrH7Byzj7rYTbB9dMzKzdL5P1E7xR7N89zp9",
  "timestamp": 1631473467403,
  "recipient": "37ani1re8pMVYRkHo1xDPtj8kBYyDu3DGkP",
  "feeAsset": "",
  "assetId": "",
  "amount": 100,
  "type": 4,
  "fee": 100000,
  "send": false,
  "response": {
    "error": 112,
    "message": "State check failed. Reason: Attempt to transfer unavailable funds: Transaction application leads to negative lunes balance to (at least) temporary negative state, current balance equals 0, spends equals -100100, result is -100100",
    "tx": {
      "type": 4,
      "id": "EzQVTZGavd9jmWprnADWMK3dya8ZeF1dAF4JNYmAkkH1",
      "sender": "37QqvghNGWrUWSjALayGjCnT1nC28wXV6pL",
      "senderPublicKey": "4SpyrKC8KFq2AF2RjgS6o373vTFrAAwrFmMfYL8PfezE",
      "fee": 100000,
      "timestamp": 1631473467403,
      "signature": "4jD1B37yewcwedSZ6gt8LeVPY8f2i4tn8VjrnhNukCkpTrvm1e5YtrH7Byzj7rYTbB9dMzKzdL5P1E7xR7N89zp9",
      "recipient": "37ani1re8pMVYRkHo1xDPtj8kBYyDu3DGkP",
      "assetId": null,
      "amount": 100,
      "feeAsset": null
    }
  }
}
```
</details>
  </TabItem>

</Tabs>
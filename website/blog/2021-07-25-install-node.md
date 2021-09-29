---
slug: install-node #Nome no arquivo
title: Installing a Lunes Full Node #Titulo do arquivo
author: Lucas Oliveira #Nome do Autor
author_title: Matemático | Dev. Blockchain @LunesPlatform #Cargo do Autor e Empresa
author_url: https://gitlab.com/olivmath_ #GitHub do Autor
author_image_url: https://avatars.githubusercontent.com/u/50037567?v=4 #Foto do Autor pode ser obtida api.github.com/users/USER-DO-AUTOR
tags: [Init, Lorem, Ipsum] # Tags desse post
---

### First step
To start you need to clone **installer repository** with *git*.

On terminal:
```
git clone https://github.com/Lunes-platform/install_node.git
```

### Second step
After, simply Run :four_leaf_clover:

```bash
./install_node.py
```
Following the steps...

### Third step
Good, now you have a Lunes Full Node run in your machine, but yet been one step.

If you want earn tax for validated blocks in lunes blockchain you need to add one seed with 5000 Lunes or more into you Lunes Full Node.

Take a seed with **5000 Lunes** or more and **hash** :hash: to **[base58](https://incoherency.co.uk/base58/)**

```
seed = "Your Seed With Over Five Thousand LUNES"
hash_seed_base58 = "21PtJgXkoEopeTriSevpd3qdTNuhtTvUhK6oRv7btCtPpurRARrchG"
```

Then go to file **lunesnode.conf** :gear:...

```bash
vim /etc/lunesnode/lunesnode.conf
```

And modifier the field **seed** :seedling:...

```
wallet {
   file = ***
    password = ***
    seed = "21PtJgXkoEopeTriSevpd3qdTNuhtTvUhK6oRv7btCtPpurRARrchG"  // <- Your HASH_SEED_BASE58
  }
```

## Done!

Alright, now whenever your machine is **connected to the internet** and your **seed has 5000 lunes or more**, your **lunesfullnode** will be yielding Lunes for you. Remember, the more Lunes your seed has, the more likely you are to close a block and get paid for it, this is a Proof-of-Stake!
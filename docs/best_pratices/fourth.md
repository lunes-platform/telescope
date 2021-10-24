---
sidebar_position: 4
---
# Kubernetes in Gitlab Private Projects

## 1 - Step

- Do a login in git.lunes.io with your user and password: `registry.lune.io`

- Its will make a docker create a archive with your credentials in: `~./.docker/config.json`:

```json
{
 "auths": {
  "registry.lunes.io": {
   "auth": "CREDENCIAL_HASH_IN_BASE64"
  }
 }
}
```

- Transform this file into `base64` and save a temporary archive:

```bash
cat ~./.docker/config.json | base64 > tmp.txt`
```

## 2 - Step

- Create a new object `Secret` with `hash base64` of your credential an save with a `Secret.yaml`:

```yaml
apiVersion: v1
kind: Secret
metadata:
name: registry.lunes.io
type: kubernetes.io/dockerconfigjson
data:
.dockerconfigjson: ARCHIVE_HASH_IN_BASE64
```

- Add this secret in Kubernetes with command:  `kubectl create -f Secret.yaml`

- Reference your secret in your deployment with:

```yaml
kind: Deployment
apiVersion: apps/v1
metadata:
  name: flask8s
spec:
 [...]
  template:
    [...]
    spec:
      imagePullSecrets:
      - name: registry.lunes.io
      containers:
        [...]
```

# BFF

This folder holds an utterly simple backend for the frontend app which listens to Kafka topics and propagates them via Websocket.

## Start it

- Using `npm i && npm start`
- As a simple deployment to a (local) cluster

    ```bash
    helm upgrade --install bff ./helm
    ```

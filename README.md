# Node.js App Learning

## Create http server

## Node.js core modules

## Create Node.js module for App

## use mongodb

    1. docker run -d --name mongo mongo
    2. docker exec -it mongo bash
### install mongodb
    windows: choco install mongodb

#### macOS: 
    1. brew search mongodb (select community)
    2. brew install  mongodb/brew/mongodb-community@4.2
    3. mongod --dbpath ~/Download/data/db

## 生成公钥和私钥

    MacOS:
    > openssl
    > genrsa -out rsa_private_key.pem 1024 
    > rsa -in rsa_private_key.pem -pubout -out rsa_public_key.pem

    验证jwt:https://jwt.io/


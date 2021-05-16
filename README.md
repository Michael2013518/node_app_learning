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

    Windows:

    1. Start PuTTY Key Generator.

    2. In the Parameters section, select the encryption method SSH-RSA 2.

    3. Enter the desired encryption strength in the field Number of bits in a generated key.

    4. Optional: Enter a comment in the Key comment field.

    5. Optional: Enter a password in the Key passphrase field and repeat it.

    6. Click on Generate.

    7. To generate the necessary random factor, swipe the mouse point back and forth in the free   section of the dialog box.
    The key pair is created. 

    8. In the field Public key for pasting into OpenSSH authorized_keys file, mark the public key.

    9. Copy the public key to the clipboard.

    10. Open the editor and insert the public key.

    11. Save the file on your computer.

    12. To save the private key, click Save private key.


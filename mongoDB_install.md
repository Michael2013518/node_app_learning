## MacOS安装MongoDB

### 使用Homebrew安装

    brew search mongodb  // (选择 community 社区版)

    brew install  mongodb/brew/mongodb-community@4.2
    
    mongod //启动mongo服务

    //因为mongodb默认的运行目录是/data/db,所以会报如下异常：
    exception in initAndListen: 29 Data directory /data/db not found., terminating

    mongod --dbpath ~/Downloads/mongodb/data/db


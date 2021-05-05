const EventEmitter = require('events')

class Player extends EventEmitter {}

const player = new Player()

// once事件只能执行一次
player.on('play', (track) => {
    console.log(`${track} 正在播放`)
})

player.emit('play', "《再见理想》")
player.emit('play', "《海阔天空》")
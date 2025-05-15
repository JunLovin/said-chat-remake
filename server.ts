import { WebSocket, WebSocketServer } from 'ws'

const ws = new WebSocketServer({ port: 7173 })

const users = new Set<WebSocket>()

ws.on('connection', (socket: WebSocket) => {
    users.add(socket)
    console.log("Usuario conectado")

    socket.on('message', (msg:any) => {
        let data
        try {
            data = JSON.parse(msg)
        } catch (err) {
            data = { nombre: "Desconocido", mensaje: msg, pfp: 'https://github.com/shadcn.png' }
            console.error(err)
        }
        users.forEach(user => {
            if (user.readyState === WebSocket.OPEN) {
                user.send(JSON.stringify(data))
            }
        })
        // socket.send(msg)
    })

    socket.on('close', () => {
        users.delete(socket)
        console.log("Usuario desconectado")
    })
})

ws.on('listening', () => {
    console.log("Servidor iniciado en ws://localhost:7173")
})
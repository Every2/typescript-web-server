import * as net from 'net'
import { compileResponse } from './response'
import { parseRequest } from './request'

const port: number = 3000
const ip: string = '127.0.0.1'
const backlog: number = 100

net.createServer().listen(port, ip, backlog).on('connection',
socket => socket.on('data', buffer => {
    socket.write(compileResponse({
        protocol: 'HTTP/1.1',
        headers: new Map(),
        status: 'OK',
        statusCode: 200,
        body: `<html><body><h1>Greetings</h1></body></html>`
    }))
    socket.end()
}))





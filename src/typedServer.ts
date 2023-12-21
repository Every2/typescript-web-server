import * as net from 'net'
import { compileResponse } from './response'
import { parseRequest } from './request'


export default function start(port: number, ip: string, backlog: number): void {
net.createServer().listen(port, ip, backlog).on('connection',
socket => socket.on('data', buffer => {
    const request = parseRequest(buffer.toString())
    socket.write(compileResponse({
        protocol: 'HTTP/1.1',
        headers: new Map(),
        status: 'OK',
        statusCode: 200,
        body: `<html><body><h1>Greetings</h1></body></html>`
    }))
    socket.end()
}))
}
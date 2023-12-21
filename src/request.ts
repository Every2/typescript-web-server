export interface Request {
    protocol: string
    method: string
    url: string
    headers: Map<string, string>
    body: string
}

export const parseRequest = (str: string): Request => {
    const [firstline, rest] = divideStringOn(str, '\r\n')
    const [method, url, protocol] = firstline.split(' ', 3)
    const [headers, body] = divideStringOn(rest, '\r\n\r\n')
    const parsedHeaders = headers.split('\r\n').reduce((map, header) => {
        const [key, value] = divideStringOn(header, ': ')
        return map.set(key, value)
    }, new Map())
    return {protocol, method, url, headers: parsedHeaders, body}
}

const divideStringOn = (str: string, search: string): string[] => {
    const index = str.indexOf(search)
    const first = str.slice(0, index)
    const rest = str.slice(index + search.length)
    return [first, rest] 
}
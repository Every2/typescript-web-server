export interface Response {
    status: string
    statusCode: number
    protocol: string
    headers: Map<string, string>
    body: string
  }
  
  export const compileResponse = (response: Response): string => `${response.protocol} ${response.statusCode} ${response.status}
  ${Array.from(response.headers).map(keyValue => `${keyValue[0]}: ${keyValue[1]}`).join('\r\n')}
  ${response.body}`
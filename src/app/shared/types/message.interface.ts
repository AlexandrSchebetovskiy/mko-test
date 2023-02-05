export interface IMessage {
  id: number
  name: string
  message: string
  date: string
}

export interface IMessageResponse {
  messages: IMessage[]
  total: number
}

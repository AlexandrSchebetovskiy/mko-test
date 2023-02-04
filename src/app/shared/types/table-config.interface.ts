import {IMessage} from "./message.interface";

export interface IRowConfig {
  title: string
  width: number
  prop: keyof IMessage
  format?: string
}
export type ITableConfig = IRowConfig[]

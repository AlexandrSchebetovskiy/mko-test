import {IMessage} from "./message.interface";

export interface IRowConfig {
  title: string
  width: number
  prop: keyof IMessage
}
export type ITableConfig = IRowConfig[]

import {ITableConfig} from "./src/app/shared/types/table-config.interface";

export const tableConfig:ITableConfig =
  [
    {
      title: "Id",
      width: 5,
      prop: 'id',

    },
    {
      title: "Name",
      width: 10,
      prop: 'name'
    },
    {
      title: "Message",
      width: 64,
      prop: 'message'
    },
    {
      title: "Date",
      width: 16,
      prop: 'date',
      format: 'dd.MM.YYYY HH:mm:ss'
    }
  ]


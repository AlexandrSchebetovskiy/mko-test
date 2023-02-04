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
      width: 65,
      prop: 'message'
    },
    {
      title: "Date",
      width: 15,
      prop: 'date',
      format: 'dd.MM.YYYY HH:mm:ss'
    }
  ]


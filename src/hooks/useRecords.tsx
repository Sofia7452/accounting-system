import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';


export type NewRecordItem = {
  tagIds: number[],
  note: string,
  category: '+' | '-'
  amount: number,
}
export type RecordItem = NewRecordItem & {
  createdAt: string;  //ISO 8601
}
//或者通过Omit<RecordItem,'createdAt'>的方式
// 表示在类型NewRecordItem中，比RecordItem缺少createdAt这一项

// export type recordItem = {
//   tagIds: number[],
//   note: string,
//   category: '+' | '-'
//   amount: number,
//   createdAt: string;  //ISO 8601
// }
// export type NewRecordItem = Omit<RecordItem,'createdAt'>
export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records]);
  const addRecord = (newRecord: NewRecordItem) => {
    const record = {...newRecord, createdAt: (new Date()).toISOString()};
    setRecords([...records, record]);
  };

  return {records, addRecord};
};
import {useState} from 'react';
//封装自定义hook，最后return出需要外媒使用的方法和函数
const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>(
    [
      {id: 1, name: '衣'},
      {id: 2, name: '食'},
      {id: 3, name: '住'},
      {id: 4, name: '行'},
    ]
  );
  return {
    tags,
    setTags
  };
};

export {useTags};

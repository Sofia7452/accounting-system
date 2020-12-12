import {useState} from 'react';
//封装自定义hook，最后return出需要外媒使用的方法和函数
const useTags = () => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  return {
    tags,
    setTags
  }
};

export {useTags};

import React from 'react';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}
type Props = {
  name?: string,
} & React.SVGAttributes<SVGElement>
const Icon = (props: Props) => {
  const {name, children, className, ...rest} = props;
  //用classname这个库比较优雅
  //1.不用的话如果写成classname="icon",父组件传进来的classname放在rest中会覆盖icon样式
  //2.或者写成className={`icon ${className ? className : ''}`}
  // 还是在className不存在时有一个空格不优雅，所以用库
  return (
    <svg className={`icon ${className ? className : ''}`} {...rest}>
      {props.name && <use xlinkHref={'#' + props.name}/>}
    </svg>
  );
};
export default Icon;
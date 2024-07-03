// 设计一个 Select 组件
import React, { useState, useEffect } from 'react';
interface Option {
  title: string;
  value: string | number;
}

interface SelectorProps {
  defaultValue?: string | number;
  value?: string | number;
  options: Option[];
  onChange?: (selected: string | number) => void;
}

const Selector: React.FC<SelectorProps> = (props) => {
  // 1.解构props
  const { defaultValue, value, options, onChange } = props;

  // 2. 状态变量, 初始为默认值
  const [selectedValue, setSelectedValue] = useState<string | number>(defaultValue);

  // 3. 监听状态的变化
  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);// 更新value
    }
  }, [value]);
  // 4. 状态的逻辑处理
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);// 更新value的状态
    if (onChange) { // 在onChange回调函数存在
      onChange(newValue);// 处理新的值
    }
  };
  // 5. 返回组件
  return (
    <select value={selectedValue} onChange={handleChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.title}</option>
      ))}
    </select>
  );
};

export default Selector;

// 使用示例
<Selector
  defaultValue={1}
  options={[
      {
          title: '选项一',
          value: 1,
      },
      {
          title: '选项2',
          value: 2,
      },
  ]}
  onChange={selected => console.log(selected)}
/>;
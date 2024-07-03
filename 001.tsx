// 设计一个 Select 组件

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

const Selector: React.FC<SelectorProps> = props => {
  // 你的实现

};

// 调用方式
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
  onChange={selected => {}}
/>;
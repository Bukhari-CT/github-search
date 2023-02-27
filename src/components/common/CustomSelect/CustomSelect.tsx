import { FC } from "react";
import { Typography, Select } from "antd";

const { Text } = Typography;
const { Option } = Select;

interface Props {
  label?: string;
  value?: string;
  userId?: string;
  onChange?: any;
  disabled?: boolean;
  inputRef?: any;
  onSelect?: any;
  fieldIndex?: any;
  selected?: any;
  onClick?: any;
  selectOptions?: any;
}

const CustomSelect: FC<Props> = (Props) => {
  const { label, onChange, disabled, selected, fieldIndex, onClick, onSelect, selectOptions = [] } = Props;
  return (
    <div style={{ position: "relative" }}>
      <Text className="textInputPlaceholder">{label}</Text>
      <Select
        dropdownStyle={{
          borderRadius: "15px",
        }}
        value={selected}
        onChange={onChange}
        onSelect={onSelect}
        disabled={disabled}
        onClick={onClick}
        className={"selectStyle"}
        optionFilterProp="children"
      >
        {selectOptions &&
          selectOptions?.map((option: any, index: any) => {
            return (
              <Option disabled={disabled} value={option.value} name={fieldIndex} key={`${selectOptions[index].key}`}>
                {option.label}
              </Option>
            );
          })}
      </Select>
    </div>
  );
};

export default CustomSelect;

import { FC } from "react";
import { Input, Typography } from "antd";

const { Text } = Typography;

interface Props {
  label: string;
  onBlur?: any;
  value?: string;
  onChange?: any;
  disabled?: boolean;
  inputRef?: any;
  maxLength?: number;
  minLength?: number;
  isSmallWidth?: boolean;
}

const TextInput: FC<Props> = (Props) => {
  const {
    label,
    value,
    onChange,
    onBlur,
    disabled,
    inputRef,
    maxLength = 524288,
    minLength = 0,
    isSmallWidth = false,
  } = Props;
  return (
    <div style={{ position: "relative" }}>
      <Text className="textInputPlaceholder">{label}</Text>
      <Input
        className={"textInputStyle"}
        value={value}
        defaultValue={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        ref={inputRef}
        maxLength={maxLength}
        minLength={minLength}
      />
    </div>
  );
};

export default TextInput;

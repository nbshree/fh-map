import { Button, Input } from "antd";
import { useState } from "react";

const NewPosition = (props) => {
  const { onClick } = props;
  const [value, setValue] = useState([]);
  const [inputValue, setInputValue] = useState("317,264");
  return (
    <div>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        onClick={() => {
          const [x, y] = inputValue.split(",").map((item) => Number(item));
          if (!value.some((item) => item.bottom === y && item.top === x)) {
            const newValue = [
              ...value,
              {
                top: x,
                bottom: y,
                color: "blue",
              },
            ];
            setValue(newValue);
            onClick(newValue);
          }
        }}
      >
        生成
      </Button>
      <Button
        onClick={() => {
          setValue([]);
          onClick([]);
        }}
      >
        清除
      </Button>
      {value.map((item) => {
        return (
          <p>
            {item.top},{item.bottom}
          </p>
        );
      })}
    </div>
  );
};

export default NewPosition;

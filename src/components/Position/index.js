import { Checkbox } from "antd";
import { useEffect } from "react";

const defaultPosition1 = [
  { top: 900, bottom: 292 },
  { top: 716, bottom: 808 },
  { top: 815, bottom: 415 },
  { top: 717, bottom: 291 },
  { top: 177, bottom: 443 },
  { top: 507, bottom: 175 },
  { top: 128, bottom: 87 },
  { top: 349, bottom: 195 },
  { top: 424, bottom: 397 },
  { top: 743, bottom: 704 },
  { top: 556, bottom: 691 },
].map((item, index) => ({ ...item, index: index + 1, color: "black" }));

const defaultPosition2 = [
  { top: 317, bottom: 264 },
  { top: 58, bottom: 94 },
  { top: 704, bottom: 735 },
  { top: 815, bottom: 416 },
  { top: 240, bottom: 168 },
  { top: 193, bottom: 692 },
  { top: 775, bottom: 363 },
  { top: 157, bottom: 658 },
  { top: 73, bottom: 211 },
  { top: 688, bottom: 550 },
  { top: 816, bottom: 415 },
].map((item, index) => ({ ...item, index: index + 1, color: "red" }));

const options = [
  { label: "向往大海的泪", value: 1 },
  { label: "亲亲亲爱的", value: 2 },
];

const defaultPositionList = [defaultPosition1, defaultPosition2];

const Position = (props) => {
  const { setData } = props;
  const onChange = (v) => {
    setData(v.map((item, index) => defaultPositionList[index]));
  };
  useEffect(() => {
    setData([defaultPosition1]);
  }, []);
  return (
    <div>
      <Checkbox.Group
        options={options}
        defaultValue={[1]}
        onChange={onChange}
      />
    </div>
  );
};

export default Position;

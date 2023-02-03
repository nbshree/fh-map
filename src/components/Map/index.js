import "./index.css";

const Map = (props) => {
  const { value, newValue } = props;
  const showValue = value.reduce((pre, cur) => {
    return [...pre, ...(cur || [])];
  }, []);
  return (
    <div className={"content"}>
      {[...showValue, ...(newValue || [])].map((item) => {
        return (
          <p
            style={{
              position: "absolute",
              top: item.top * 0.9,
              left: item.bottom * 0.9,
              fontSize: 10,
              margin: 0,
              color: item.color,
            }}
          >
            {item.index ?? "x"}
          </p>
        );
      })}
    </div>
  );
};

export default Map;

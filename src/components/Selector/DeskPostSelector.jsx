import React from "react";
import SwitchSelector from "react-switch-selector";
const DeskPostSelector = () => {
  const options = [
    {
      label: "작업실 모음",
      value: "desks",
      selectedBackgroundColor: "#f6f5f7",
      selectedFontColor: "#515462",
    },
    {
      label: "게시글 모음",
      value: "bar",
      selectedBackgroundColor: "#f6f5f7",
      selectedFontColor: "#515462",
    },
  ];

  const onChange = (newValue) => {
    console.log(newValue);
  };

  const initialSelectedIndex = options.findIndex(
    ({ value }) => value === "desks"
  );

  return (
    <div className="your-required-wrapper" style={{ width: 500, height: 40 }}>
      <SwitchSelector
        onChange={onChange}
        options={options}
        initialSelectedIndex={initialSelectedIndex}
        backgroundColor={"#515462"}
        fontColor={"#f5f6fa"}
        selectionIndicatorMargin={4}
      />
    </div>
  );
};

export default DeskPostSelector;

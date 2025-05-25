import ReactSpeedometer from "react-d3-speedometer";

const HealthSpeedometr = () => {
  function segmentValueFormatter(value: any) {
    if (value < 200) {
      return `${value} 😒`;
    }
    if (value < 400) {
      return `${value} 😐`;
    }
    if (value < 600) {
      return `${value} 😌`;
    }
    if (value < 800) {
      return `${value} 😊`;
    }
    if (value < 900) {
      return `${value} 😉`;
    }

    return `${value} 😇`;
  }
  return (
    <div>
      <ReactSpeedometer
        value={333}
        needleColor="steelblue"
        segmentValueFormatter={segmentValueFormatter}
        textColor={"#eee"}
        paddingHorizontal={34}
        paddingVertical={34}
        height={80}
      />
    </div>
  );
};

export default HealthSpeedometr;

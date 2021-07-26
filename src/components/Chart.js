import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLabel,
  VictoryVoronoiContainer,
} from "victory";

const Chart = ({ setTime, data }) => {
  const tickValues = [
    setTime(8, 0),
    setTime(9, 0),
    setTime(10, 0),
    setTime(11, 0),
    setTime(12, 0),
    setTime(13, 0),
    setTime(14, 0),
    setTime(15, 0),
    setTime(16, 0),
    setTime(17, 0),
    setTime(18, 0),
    setTime(19, 0),
    setTime(20, 0),
    setTime(21, 0),
  ];

  return (
    <VictoryChart
      theme={VictoryTheme.material}
      containerComponent={
        <VictoryVoronoiContainer
          labels={(obj) =>
            `Time: ${obj.datum.date
              .toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })
              .replace(":", "")}, Count: ${obj.datum.count}`
          }
          radius={25}
        />
      }
      minDomain={{ x: setTime(7, 0), y: 0 }}
      maxDomain={{ x: setTime(22, 0), y: 40 }}
      height={250}
      width={900}
      padding={{ top: 0, right: 25, bottom: 0, left: 50 }}
    >
      <VictoryAxis
        label="Time"
        tickValues={tickValues}
        tickFormat={(date) => {
          return new Date(date)
            .toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })
            .replace(":", "");
        }}
        axisLabelComponent={<VictoryLabel dy={30} />}
      />
      <VictoryAxis
        dependentAxis
        label={"Capacity"}
        axisLabelComponent={<VictoryLabel dy={-30} />}
      />
      <VictoryLine
        data={data}
        x="date"
        y="count"
        scale={{ x: "time", y: "linear" }}
      ></VictoryLine>
    </VictoryChart>
  );
};

export default Chart;

import { ResponsiveStream } from "@nivo/stream";
// Make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
const LineChart = ({ data}) => (
  <ResponsiveStream
    data={data}
    keys={["Pro", "Con"]}
    margin={{ top: 5, right: 5, bottom: 50, left: 55 }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Hour",
      legendOffset: 36,
      tickValues:
        data.length <= 26
          ? Array(10).keys()
          : Array.from(Array(parseInt(1 + data.length / 12, 10)), (_, i) => i * 12),
    }}
    axisLeft={{
      orient: "left",
      tickSize: 12,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Votes (Sats)",
      legendOffset: -50,
      format: (values) => `${values}`,
    }}
    offsetType="diverging"
    colors={["#70e0b5", "#55b3b9"]}
    fillOpacity={0.85}
    borderColor={{ theme: "background" }}
    dotSize={8}
    dotColor={{ from: "color" }}
    dotBorderWidth={2}
    dotBorderColor={{ from: "color", modifiers: [["darker", 0.7]] }}
    animate
    motionStiffness={90}
    motionDamping={15}
    legends={[
      {
        anchor: "top-left",
        direction: "column",
        translateX: 15,
        itemWidth: 80,
        itemHeight: 20,
        itemTextColor: "#999999",
        symbolSize: 12,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000000",
            },
          },
        ],
      },
    ]}
  />
);

export default LineChart;

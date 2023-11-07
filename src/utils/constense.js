export const candleStickOptions = {
    chart: {
        type: "candlestick",
    },
    title: {
        text: "CandleStick Chart",
        align: "left",
    },
    xaxis: {
        type: "datetime",
        style: {
            colors: "#FF0000", // Change the X-axis text color to red (#FF0000)
          },
    },
    yaxis: {
        tooltip: {
            enabled: true,
        },
    },
};
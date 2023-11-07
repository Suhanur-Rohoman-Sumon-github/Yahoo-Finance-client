import { useEffect, useMemo, useState } from "react";
import { getstockdata } from "../../utils/servises";
import { formatStockData } from "../../utils/Utils";
import ReactApexChart from "react-apexcharts";
import { candleStickOptions } from "../../utils/constense";


const ShereChart = ({ symbol }) => {
    const [stockData, setStockData] = useState({})
    useEffect(() => {
        getstockdata(symbol).then(data => setStockData(data))
    }, [symbol])

    const seriesData = useMemo(() => formatStockData(stockData), [stockData])
    return (
        <div>
            <ReactApexChart
                series={
                    [
                        {
                            data: seriesData
                        }
                    ]
                }
                options={candleStickOptions}
                type="candlestick"
            />

        </div>
    );
};

export default ShereChart;
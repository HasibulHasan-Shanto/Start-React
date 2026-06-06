
import { BarChart, Bar, XAxis, YAxis } from "recharts";
const Rechart = () => {
    const data = [
        { name: "Page A", value: 400 },
        { name: "Page B", value: 300 },
        { name: "Page C", value: 300 },
        { name: "Page D", value: 200 },
        { name: "Page E", value: 278 },
        { name: "Page F", value: 189 }
    ];
    return (
        <BarChart width={400} height={300} data={data} barGap={'400'}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
    );
};

export default Rechart;
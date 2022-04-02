import { useState } from 'react';
import { Pie } from '@visx/shape';
import { Group } from '@visx/group';
import { Text } from '@visx/text'

const clean_investments = [
    { type: 'Clean Energy', amount: 200, color: 'rgb(82, 246, 103)' },
    { type: 'Efficiency', amount: 123, color: 'rgb(35, 171, 216)' },
    { type: 'Mobility', amount: 20, color: 'rgb(110, 64, 170)' },
    { type: 'Agricultute & Food', amount: 400, color: 'rgb(29, 223, 163)' },
    { type: 'Air & Ecosystems', amount: 100, color: 'rgb(254, 75, 131)' },
]

const PieChart = ({ width, height }) => {
    const half = (height) / 2

    const [active, setActive] = useState(null)
    return (
        <svg width={width } height={height}>
            <Group top={half} left={half} >
                <Pie
                 
                    data={clean_investments}
                    pieValue={data => data.amount}
                    outerRadius={half}
                    innerRadius={({ data }) => {
                        const size = active && active.type == data.type ? 16 : 12;
                        return half - size
                    }}
                    padAngle={0.01}
                >
                    {pie => {
                        return pie.arcs.map(arc => {
                            return <g
                                key={arc.data.type}
                                onMouseEnter={() => setActive(arc.data)}
                                onMouseLeave={() => setActive(null)}
                            >
                                <path d={pie.path(arc)} fill={arc.data.color} fillOpacity={0.6}>

                                </path>
                            </g>
                        })
                    }}
                </Pie>

                {active ? <>  <Text textAnchor='middle' fontSize={30} dy={-20}>

                    {` US$ ${Math.floor(active.amount)} mln`}

                </Text>
                    <Text textAnchor='middle' fontSize={15} dy={20} color='#aaa'>
                        {active.type} 
                    </Text></> : <>
                    <Text textAnchor='middle' fontSize={30} dy={-20}>

                        {` US$ ${Math.floor(
                            clean_investments.reduce((acc, type) => acc + type.amount, 0)
                        )} mln`}

                    </Text>
                    <Text textAnchor='middle' fontSize={15} dy={20} color='#aaa'>
                        total investments
                    </Text>
                </>}

            </Group>
        </svg>
    )
}

export default PieChart
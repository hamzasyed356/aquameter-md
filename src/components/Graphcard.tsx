import React from 'react'
import { Card, CardContent, CardFooter, CardTitle, CardHeader, CardDescription } from "@/components/ui/card";
import { RiSettings3Fill } from 'react-icons/ri';
import Link from 'next/link';
import Linegraph from './Linegraph';

const generateDummyData = () => {
  const data = [];
  let currentTime = new Date();

  for (let i = 0; i < 120; i++) {
    data.push({
      timestamp: new Date(currentTime.getTime() + i * 36000).toISOString(),
      sensor_value: Math.floor(Math.random() * (100 - 10 + 1) + 10)
    });
  }

  return data;
};


const Graphcard = ({data}:{data:any}) => {
  const {name,slug} = data
  const dummyData = generateDummyData();

  const chartData = {
    labels: dummyData.map(d => new Date(d.timestamp).toLocaleTimeString()),
    datasets: [{
      label: name,
      data: dummyData.map(d => d.sensor_value),
      fill: false,
      borderColor: 'rgba(75,192,192,1)'
    }]
  };

  
    return (
      <Card className="m-4 w-full">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardDescription className='flex justify-between mx-6 -mt-2'>
          From {chartData.labels[0]} To {chartData.labels[23]}
          <Link href={`/graph/${slug}`} className="text-xl border rounded-xl p-2">
            <RiSettings3Fill />
            </Link>
          </CardDescription>
        <CardContent>
       <Linegraph data={chartData}/>
    </CardContent>
    </Card>
  )
}

export default Graphcard
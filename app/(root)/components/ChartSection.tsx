import { chartData } from '@/lib/constants';
import React from 'react'
import ChartComp from './ChartComp';
export interface IchartData {
  title: string;
  upcoming: number;
  onGoing: number;
  completed: number;
  total: number;
}
const ChartsSection = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
      {chartData.map((chart: IchartData, index: number) => (
        <ChartComp chart={chart} key={index} />
      ))}
    </div>
  );
}

export default ChartsSection
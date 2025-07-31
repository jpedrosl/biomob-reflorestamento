'use client';

import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { format, subDays, subMonths, subYears } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

const TIMEZONE = 'America/Sao_Paulo';

type ChartDataPoint = {
  date: string;
  mudas: number;
};

const generateData = (startDate: Date, endDate: Date): ChartDataPoint[] => {
  const data: ChartDataPoint[] = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    data.push({
      date: format(currentDate, 'dd/MM/yyyy'),
      mudas: Math.floor(Math.random() * 200) + 50,
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return data;
};

export const GrowthChart = () => {
  const [range, setRange] = useState<'30dias' | '3meses' | '1ano'>('30dias');
  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);

  useEffect(() => {
    const now = toZonedTime(new Date(), TIMEZONE);
    let startDate: Date;

    switch (range) {
      case '30dias':
        startDate = subDays(now, 30);
        break;
      case '3meses':
        startDate = subMonths(now, 3);
        break;
      case '1ano':
        startDate = subYears(now, 1);
        break;
      default:
        startDate = subDays(now, 30);
    }

    const data = generateData(startDate, now);
    setChartData(data);
  }, [range]);

  return (
    <section
      className="
        w-full max-w-[922px] h-[475px]
        shadow
        bg-[rgba(255,255,255,0.76)]
        p-[19px]
        rounded-lg
        mx-auto
        max-md:max-w-full max-md:px-5 max-md:py-0 max-sm:w-full max-sm:px-[15px] max-sm:py-0
        flex flex-col
      "
    >
      <h2 className="text-black text-[32px] font-normal text-center mb-[24px] w-full">
        Crescimento das Mudas
      </h2>


      <div className="flex justify-center mb-2">
        <select
          value={range}
          onChange={(e) => setRange(e.target.value as '30dias' | '3meses' | '1ano')}
          className="border rounded p-1 text-sm"
        >
          <option value="30dias">Últimos 30 dias</option>
          <option value="3meses">Últimos 3 meses</option>
          <option value="1ano">Último ano</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={chartData}
          margin={{ top: 10, right: 20, left: 0, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            angle={-45}
            textAnchor="end"
            height={60}
          />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="mudas"
            stroke="#28a745"
            strokeWidth={2}
            name="Centímetros"
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="text-center text-green-600 mt-0 text-sm">
        <span className="inline-block w-[5px] h-[5px] border-2 border-green-600 rounded-full mr-2 align-middle"></span>
        Centímetros
      </div>
    </section>
  );
};

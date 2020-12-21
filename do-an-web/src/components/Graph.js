import axios from 'axios';
import React , {useState,useEffect}from 'react';
import  {Line } from 'react-chartjs-2';


  const LineChart = () => {
    const [dailyData,setDailyData] = useState([]);

    const fetchDailyData = async () => {
        try {
          const { data } = await axios.get(`https://disease.sh/v3/covid-19/historical/all?lastdays=90`);
          let deaths = Object.values(data.deaths);
          let date = Object.keys(data.cases);
          let cases = Object.values(data.cases);
          const fetchedData = date.map((a,i) => {return {date: a,cases:cases[i],deaths:deaths[i]}});
          return fetchedData;
        } catch (error) {
          return error;
        }
      };

      useEffect(() => {
        const fetchMyAPI = async () => {
          const initialDailyData = await fetchDailyData();
    
          setDailyData(initialDailyData);
        };
    
        fetchMyAPI();
      }, []);
      return (
        <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map(( { cases } ) => cases),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          },{
            data: dailyData.map(({deaths}) => deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: false,
          },]
        }}
      />
      )
  }
export default LineChart;

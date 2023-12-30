import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HCExporting from 'highcharts/modules/exporting';
import '../Charts/Charts.css';

// Initialize Highcharts modules
HCExporting(Highcharts);

const Highchart = () => {
  // Fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://cdn.jsdelivr.net/gh/highcharts/highcharts@latest/samples/data/usdeur.json'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      updateChartConfig(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  // Update chart configuration with fetched data
  const updateChartConfig = (data) => {
    chartConfig.series[0].data = data;
    Highcharts.chart('container', chartConfig);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Chart configuration
  const chartConfig = {
    chart: {
      zoomType: 'x'
    },
    title: {
      text: 'USD to EUR exchange rate over time',
      align: 'left'
    },
    subtitle: {
      text: document.ontouchstart === undefined
        ? 'Click and drag in the plot area to zoom in'
        : 'Pinch the chart to zoom in',
      align: 'left'
    },
    xAxis: {
      type: 'datetime'
    },
    yAxis: {
      title: {
        text: 'Exchange rate'
      }
    },
    legend: {
      enabled: false
    },
    credits: {
        enabled: false, // Disable Highcharts.com credits
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          ]
        },
        marker: {
          radius: 2
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },
    series: [{
      type: 'area',
      name: 'USD to EUR',
      data: [] // The data will be populated dynamically
    }]
  };

  return <div id="container" style={{ gridArea: 'main' }}></div>;
};

export default Highchart;

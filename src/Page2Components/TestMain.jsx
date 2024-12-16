import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const TestMain = () => {
  useEffect(() => {
    const colors = [
      '#FFA07A', '#FF7F50', '#FF6347', '#FF4500', '#FF6347', '#FFA07A', '#FF7F50', '#FF4500',
    ];

    const data = [3, 4, 11, 2, 6, 9, 5, 2, 9, 7, 3];

    // 상위 3개의 큰 값을 찾아 해당 색상을 진하게 설정
    const sortedData = [...data].sort((a, b) => b - a); // 내림차순 정렬
    const topThreeValues = sortedData.slice(0, 3); // 상위 3개 값 가져오기

    const dynamicColors = data.map((value) =>
      topThreeValues.includes(value) ? '#FF4500' : '#FFA07A' // 상위 3개는 진한 색, 나머지는 기본 색
    );
//
    const options = {
      series: [
        {
          data: data,
        },
      ],
      chart: {
        height: 600,
         width: '90%',
        type: 'bar',
      },
      colors: dynamicColors, // 동적으로 설정된 색상 배열
      plotOptions: {
        bar: {
          columnWidth: '35%',
          distributed: true,
          borderRadius: 20, // 상단만 둥글게 적용
          borderRadiusApplication: 'end',
          dataLabels: {
            position: 'top',
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + '명'; // 데이터 레이블에 "명" 추가
        },
        offsetY: -30, // 텍스트를 더 위로 이동
        style: {
          fontSize: '20px',
          colors: ['#FFB583'],
          fontWeight: 'bold',
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00',
        ],
        labels: {
          style: {
            colors: '#FFB685',
            fontSize: '18px',
            fontWeight: 'bold',
          },
        },
      },
      yaxis: {
        labels: {
          show: false, // y축 텍스트 제거
        },
      },
      grid: {
        show: false,
      },
    };

    const chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();

    // Cleanup function
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div>
      <div id="chart"style={{display:'flex',justifyContent: 'center'}}></div>
    </div>
  );
};

export default TestMain;

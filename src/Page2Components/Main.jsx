import React from 'react';
import { Box } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

const Main = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', // 중앙 정렬
        alignItems: 'center',
        mt: '5%',
      }}
    >
      <PieChart
        sx={{
          fontSize: 50, 
          '& text': {  
            fill: 'white', 
            fontWeight:'bold', // 텍스트 굵기
          },
        }}
        series={[{
          arcLabel: (item) => `${item.value}%`, // 각 섹터에 값 표시
           arcLabelRadius: '50%', // 레이블 위치
          data: [
            { id: 0, value: 23, label: '10 시 ~ 12 시' },
            { id: 1, value: 28, label: '1 시 ~ 4 시' },
            { id: 2, value: 49, label: '6 시 ~ 8 시' },
            
          ],
        }]}
        width={1200}
        height={500}
        colors={['#FF6E0B', '#FFA76C', '#ffc9a4']}
        slotProps={{
          legend: {
            
            labelStyle: {
              fontSize: 30,
               fontWeight:'bold',
               padding:20,
               
             },
          },
        }}
      />
    </Box>
  );
};
export default Main;

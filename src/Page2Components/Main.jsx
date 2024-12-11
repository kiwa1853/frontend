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
          fontSize: 30, // 레이블 텍스트 크기
          fontWeight: 'bold', // 레이블 텍스트 굵기
        }}
        series={[
          {
            arcLabel: (item) => `${item.value}%`, // 각 섹터에 값 표시
            arcLabelMinAngle: 35, // 레이블 최소 각도
            arcLabelRadius: '60%', // 레이블 위치
            data: [
              { id: 0, value: 23, label: '오전 10시 ~ 12시' },
              { id: 1, value: 28, label: '오후 1시 ~ 4시' },
              { id: 2, value: 49, label: '오후 6시 ~ 8시' },
            ],
          },
        ]}
        width={800}
        height={400}
        colors={['#FF6E0B', '#FFA76C', '#ffc9a4']}  
      />
    </Box>
  );
};

export default Main;

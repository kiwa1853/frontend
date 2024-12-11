import React from 'react';
import { Box } from '@mui/material';
import Data from './Data';
import Juso from './Juso'

const Page4Main = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row', // 왼쪽과 오른쪽으로 나누기
        height: '70vh', // 화면 전체 높이
      }}
    >
      {/* 왼쪽 영역 */}
      <Box
        sx={{
          flex: 1, // 왼쪽 영역 비율
          display: 'flex',
          justifyContent: 'center', // 중앙 정렬
          alignItems: 'center', // 세로 중앙 정렬
          padding: 2,
        }}
      >
        <Data/>
         <Juso/>
       </Box>
   
      {/* 오른쪽 영역 */}
      <Box
        sx={{
          flex: 1, // 오른쪽 영역 비율
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff', // 흰색 배경
        }}
      >
        오른쪽 영역
      </Box>
    </Box>
  );
};

export default Page4Main;

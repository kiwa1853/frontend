import React from 'react';
import { Box } from '@mui/material';

const Title = () => {
  return (
    <Box
      sx={{
        display: 'flex',  
        justifyContent: 'center',
        mt:7
       }}
    >
      <Box
        sx={{
          background: "#FF6E0B",
          color: "white",
          borderRadius: 10,
          height: 70,
          width: "40%",
          fontWeight: 'bold',
          fontSize: '1.5rem',
          display: 'flex', // 내부 텍스트 중앙 정렬
          justifyContent: 'center', // 가로 중앙 정렬
          alignItems: 'center', // 세로 중앙 정렬
        }}
      >
        20대 여성이 가장 많이 방문하는 시간
      </Box>
    </Box>
  );
};

export default Title;

import React from 'react';
import { Typography, Box } from '@mui/material';

const Data = () => {
  // 재사용 가능한 스타일 정의
  const boxStyle = (backgroundColor, width) => ({
    background: backgroundColor,
    borderRadius: 100,
    fontSize: '2rem', // 기존 1.7rem * 1.5
    fontWeight: 'bold',
    width: `calc(${width} * 1.5)`, // 기존 width의 1.5배
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: '65px', // 기존 48px * 1.5
    height: '65px', // 기존 50px * 1.5
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4.5, // 기존 gap: 3 * 1.5
        mt: 3, // 기존 mt: 2 * 1.5
      }}
    >
      {/* 제목 */}
      <Typography
        sx={{
          fontSize: '2rem', // 기존 1.5rem * 1.5
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        CAMV9로 부터 추출된 텍스트 데이터 결과보고
      </Typography>

      {/* 여성 및 연령 박스 */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5, // 기존 gap: 8 * 1.5
        }}
      >
      
        {/* 여성 박스 */}
        <Box sx={boxStyle('#FF6E0B', '120px')}>여성</Box>

        {/* 연령 박스 */}
        <Box sx={boxStyle('#FFB380', '180px')}>20세 ~ 26세</Box>
      </Box>
    </Box>
  );
};

export default Data;

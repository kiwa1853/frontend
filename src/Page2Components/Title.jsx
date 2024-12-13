import React from 'react';
import { Box, Typography } from '@mui/material';
import dayjs from 'dayjs';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Title = () => {
  // 현재 날짜 가져오기
  const currentDate = dayjs().format('YYYY-MM-DD');  

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',  
        alignItems: 'center',  
        mt: 7,
        ml: 10,
        mr: 10, 
      }}
    >
      {/* 제목 텍스트 */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: '1.8rem', // 글씨 크기
            fontWeight: 'bold', // 강조된 부분 두껍게
            color: '#ff6e0b', // 주황색
          }}
        >
          20대 여성
        </Typography>
        <Typography
          sx={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: '#000',
            ml: 1,
          }}
        >
          이 가장 많이 방문하는
        </Typography>
        <Typography
          sx={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: '#ff6e0b',
            ml: 1,
          }}
        >
          시간
        </Typography>
        <Typography
          sx={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: '#ff6e0b',
            ml: 0.5,
          }}
        >
          •
        </Typography>
      </Box>

      {/* 현재 날짜 텍스트 */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center', // 아이콘과 텍스트를 수평 정렬
          gap: 2,  
        }}
      >
        <CalendarMonthIcon
          sx={{
            fontSize: '1.8rem', // 아이콘 크기 조정
            color: '#000', 
          }}
        />
        <Typography
          sx={{
            fontSize: '1.8rem',
            fontWeight: '1000',
            color: '#000',
          }}
        >
          {currentDate}
        </Typography>
      </Box>
    </Box>
  );
};

export default Title;

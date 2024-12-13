import React from 'react';
import { Box, Typography } from '@mui/material';

const TitleHeader = () => {
  return (
    <div>
      <Box
        sx={{
        display: 'flex', 
          justifyContent: 'center',  
          gap: '7%',  
          borderBottom: '10px solid #E7A276',
        }}
      >
        <Typography sx={{fontSize:'2.5rem',color:'#CCCCCC',fontWeight:'bold'}}>송출 범위 설정</Typography>
        <Typography sx={{fontSize:'2.5rem',color:'#FF6E0B',fontWeight:'bold'}} >데이터기반 결과</Typography>
        <Typography  sx={{fontSize:'2.5rem',color:'#CCCCCC',fontWeight:'bold'}}>데이터 통계</Typography>
      </Box>
    </div>
  );
};

export default TitleHeader;
//
import React from 'react'
import { Typography,Box } from '@mui/material'
const Juso = () => {
  return (
    <div>
         <Typography
        sx={{
          fontSize: '2rem', // 기존 1.5rem * 1.5
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        CAMV9로 부터 추출된 텍스트 데이터 결과보고
      </Typography>
      <Box></Box>
    </div>
  )
}

export default Juso

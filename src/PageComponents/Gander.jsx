import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

const Gander = () => {
  const [selected, setSelected] = useState(null); // 클릭된 버튼 상태 관리

  const toggleSelection = (button) => {
    setSelected((prev) => (prev === button ? null : button));
  };

  return (
    <Box
      sx={{
        mt: "2%",  
        ml: "4%",  
        textAlign: 'left',
      }}
    >
      <Typography
        component="div"
        sx={{
          fontSize: '3rem', // 기존 2rem * 1.5
          fontWeight: 'bold',
        }}
      >
        성별
      </Typography>
      <Box sx={{ mt: 3 }}> {/* 기존 mt: 2 * 1.5 */}
        {/* 여성 버튼 */}
        <Button
          variant="contained"
          onClick={() => toggleSelection('female')}
          sx={{
            background: selected === 'female' ? "#ff6e0b" : "#ffe8dc",
            color: selected === 'female' ? "#ffffff" : "#ffc69f",
            borderRadius: 100,
            fontSize: 52.5, // 기존 35 * 1.5
            width: "208.5px", // 기존 139px * 1.5
            height: "91.5px", // 기존 61px * 1.5
            fontWeight: 'bold',
            boxShadow: 'none',
          }}
        >
          여성
        </Button>

        {/* 남성 버튼 */}
        <Button
          variant="contained"
          onClick={() => toggleSelection('male')}
          sx={{
            ml: 3, // 기존 ml: 2 * 1.5
            background: selected === 'male' ? "#ff6e0b" : "#ffe8dc",
            color: selected === 'male' ? "#ffffff" : "#ffc69f",
            borderRadius: 100,
            fontSize: 52.5, // 기존 35 * 1.5
            width: "208.5px", // 기존 139px * 1.5
            height: "91.5px", // 기존 61px * 1.5
            fontWeight: 'bold',
            boxShadow: 'none',
          }}
        >
          남성
        </Button>
      </Box>
    </Box>
  );
};

export default Gander;

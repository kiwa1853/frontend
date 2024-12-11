import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

const Age = () => {
  const [selected, setSelected] = useState(null); // 클릭된 버튼 상태 관리

  // 버튼 데이터
  const upperAgeGroups = [
    { label: '10대', value: 'teen' },
    { label: '20대', value: 'twenties' },
    { label: '30대', value: 'thirties' },
  ];

  const lowerAgeGroups = [
    { label: '40대', value: 'forties' },
    { label: '50대', value: 'fifties' },
    { label: '60대', value: 'sixties' },
    { label: '70+', value: 'seventies' },
  ];

  const toggleSelection = (value) => {
    setSelected((prev) => (prev === value ? null : value));
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
        연령
      </Typography>
      {/* 위쪽 버튼 */}
      <Box sx={{ mt: 3, display: 'flex', gap: 3 }}>
        {upperAgeGroups.map((group) => (
          <Button
            key={group.value}
            variant="contained"
            onClick={() => toggleSelection(group.value)}
            sx={{
              background: selected === group.value ? "#ff6e0b" : "#ffe8dc",
              color: selected === group.value ? "#ffffff" : "#ffc69f",
              borderRadius: 100,
              fontSize: 52.5, // 기존 35 * 1.5
              width: "208.5px", // 기존 139px * 1.5
              height: "91.5px", // 기존 61px * 1.5
              fontWeight: 'bold',
              boxShadow: 'none',
            }}
          >
            {group.label}
          </Button>
        ))}
      </Box>
      {/* 아래쪽 버튼 */}
      <Box sx={{ mt: 3, display: 'flex', gap: 3 }}>
        {lowerAgeGroups.map((group) => (
          <Button
            key={group.value}
            variant="contained"
            onClick={() => toggleSelection(group.value)}
            sx={{
              background: selected === group.value ? "#ff6e0b" : "#ffe8dc",
              color: selected === group.value ? "#ffffff" : "#ffc69f",
              borderRadius: 100,
              fontSize: 52.5, // 기존 35 * 1.5
              width: "208.5px", // 기존 139px * 1.5
              height: "91.5px", // 기존 61px * 1.5
              fontWeight: 'bold',
              boxShadow: 'none',
            }}
          >
            {group.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Age;

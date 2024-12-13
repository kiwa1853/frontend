import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

const Time = () => {
  const [selected, setSelected] = useState(null);

  const morningTimes = [
    { label: '10:00', value: '10:00' },
    { label: '11:00', value: '11:00' },
    { label: '12:00', value: '12:00' },
    { label: '13:00', value: '13:00' },
    { label: '14:00', value: '14:00' },
    { label: '15:00', value: '15:00' },
    { label: '16:00', value: '16:00' },
  ];

  const afternoonTimes = [
    { label: '17:00', value: '17:00' },
    { label: '18:00', value: '18:00' },
    { label: '19:00', value: '19:00' },
    { label: '20:00', value: '20:00' },
  ];

  const toggleSelection = (value) => {
    setSelected((prev) => (prev === value ? null : value));
  };

  return (
    <Box
      sx={{
        mt: "1.3%",
        ml: "3.5%",
        textAlign: 'left',
      }}
    >
      <Typography
        component="div"
        sx={{
          fontSize: '2.95rem',
          fontWeight: 'bold',
        }}
      >
        시간 선택
      </Typography>
      <Box sx={{ mt: 3, display: 'flex', gap:3.5, flexWrap: 'wrap' }}>
        {morningTimes.map((time) => (
          <Button
            key={time.value}
            variant="contained"
            onClick={() => toggleSelection(time.value)}
            sx={{
              background: selected === time.value ? "#ff6e0b" : "#ffe8dc",
              color: selected === time.value ? "#ffffff" : "#ffc69f",
              borderRadius: 7,
              fontSize: 40.7,
              width: "182.8px",
              height: "78.725px",
              fontWeight: 'bold',
              boxShadow: 'none',
            }}
          >
            {time.label}
          </Button>
        ))}
      </Box>
      <Box sx={{ mt: 3, display: 'flex', gap: 3.5, flexWrap: 'wrap' }}>
        {afternoonTimes.map((time) => (
          <Button
            key={time.value}
            variant="contained"
            onClick={() => toggleSelection(time.value)}
            sx={{
              background: selected === time.value ? "#ff6e0b" : "#ffe8dc",
              color: selected === time.value ? "#ffffff" : "#ffc69f",
              borderRadius: 7,
              fontSize: 40.7,
              width: "182.8px",
              height: "78.725px",
              fontWeight: 'bold',
              boxShadow: 'none',
            }}
          >
            {time.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Time;

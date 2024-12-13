import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

const GanderAndAge = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);

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

  const toggleGenderSelection = (button) => {
    setSelectedGender((prev) => (prev === button ? null : button));
  };

  const toggleAgeSelection = (value) => {
    setSelectedAge((prev) => (prev === value ? null : value));
  };

  return (
    <Box
      sx={{
        mt: "1.95%",
        ml: "3.9%",
        display: 'flex',
        gap: '25%',
        alignItems: 'flex-start',
      }}
    >
      {/* 성별 섹션 */}
      <Box sx={{ textAlign: 'left' }}>
        <Typography
          component="div"
          sx={{
            fontSize: '2.925rem',
            fontWeight: 'bold',
          }}
        >
          성별
        </Typography>
        <Box sx={{ mt: 2.5 }}>
          <Button
            variant="contained"
            onClick={() => toggleGenderSelection('female')}
            sx={{
              background: selectedGender === 'female' ? "#ff6e0b" : "#ffe8dc",
              color: selectedGender === 'female' ? "#ffffff" : "#ffc69f",
              borderRadius: 7,
              fontSize: 40.7, // 기존 50.7에서 감소
              width: "182.8px", // 기존 202.8px에서 감소
              height: "78.725px", // 기존 88.725px에서 감소
              fontWeight: 'bold',
              boxShadow: 'none',
            }}
          >
            여성
          </Button>

          <Button
            variant="contained"
            onClick={() => toggleGenderSelection('male')}
            sx={{
              ml: 5.85,
              background: selectedGender === 'male' ? "#ff6e0b" : "#ffe8dc",
              color: selectedGender === 'male' ? "#ffffff" : "#ffc69f",
              borderRadius: 7,
              fontSize: 40.7,
              width: "182.8px",
              height: "78.725px",
              fontWeight: 'bold',
              boxShadow: 'none',
            }}
          >
            남성
          </Button>
        </Box>
      </Box>

      {/* 연령 섹션 */}
      <Box sx={{ textAlign: 'left' }}>
        <Typography
          component="div"
          sx={{
            fontSize: '2.925rem',
            fontWeight: 'bold',
          }}
        >
          연령
        </Typography>
        <Box sx={{ mt: 2.925, display: 'flex', gap: 2.925 }}>
          {upperAgeGroups.map((group) => (
            <Button
              key={group.value}
              variant="contained"
              onClick={() => toggleAgeSelection(group.value)}
              sx={{
                background: selectedAge === group.value ? "#ff6e0b" : "#ffe8dc",
                color: selectedAge === group.value ? "#ffffff" : "#ffc69f",
                borderRadius: 7,
                fontSize: 40.7,
                width: "182.8px",
                height: "78.725px",
                fontWeight: 'bold',
                boxShadow: 'none',
              }}
            >
              {group.label}
            </Button>
          ))}
        </Box>
        <Box sx={{ mt: 2.925, display: 'flex', gap: 2.925 }}>
          {lowerAgeGroups.map((group) => (
            <Button
              key={group.value}
              variant="contained"
              onClick={() => toggleAgeSelection(group.value)}
              sx={{
                background: selectedAge === group.value ? "#ff6e0b" : "#ffe8dc",
                color: selectedAge === group.value ? "#ffffff" : "#ffc69f",
                borderRadius: 7,
                fontSize: 40.7,
                width: "182.8px",
                height: "78.725px",
                fontWeight: 'bold',
                boxShadow: 'none',
              }}
            >
              {group.label}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default GanderAndAge;

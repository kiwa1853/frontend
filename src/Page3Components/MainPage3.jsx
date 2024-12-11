import React from 'react';
import { Box, Typography } from '@mui/material';

const Main = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: '65vh',
      }}
    >
      {/* 왼쪽 영역 */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          ml: '7%',
        }}
      >
        <img
          src="/img/man.png"
          alt="Man Illustration"
          style={{ maxWidth: '50%', height: 'auto' }}
        />
        <Box
          sx={{
            background: "#3983FF",
            color: "white",
            borderRadius: 10,
            height: 70,
            width: "55%",
            fontWeight: 'bold',
            fontSize: '2.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 2,
          }}
        >
          49%
        </Box>
      </Box>

      {/* 가운데 영역 */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src="/img/team.png"
          alt="Team Illustration"
          style={{ maxWidth: '60%', height: 'auto' }}
        />
        <Typography
          sx={{
            fontSize: '4rem',
            fontWeight: 'bold',
            color: '#FF6E0B',
            mt: 2,
          }}
        >
          4,775명
        </Typography>
        <Typography
          sx={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#FFB887',
          }}
        >
          2024년 11월
        </Typography>
      </Box>

      {/* 오른쪽 영역 */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mr: '7%',
        }}
      >
        <img
          src="/img/woman.png"
          alt="Woman Illustration"
          style={{ maxWidth: '50%', height: 'auto' }}
        />
        <Box
          sx={{
            background: "#FF889C",
            color: "white",
            borderRadius: 10,
            height: 70,
            width: "55%",
            fontWeight: 'bold',
            fontSize: '2.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 2,
          }}
        >
          51%
        </Box>
      </Box>
    </Box>
  );
};

export default Main;

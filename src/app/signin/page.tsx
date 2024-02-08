'use client'

import {useState, useEffect} from 'react';
import { 
  Button,
  Box,
  Divider, 
  Input,
  IconButton,
  OutlinedInput,
  InputLabel,
  FormControl,
  FormHelperText,
  TextField,
  InputAdornment
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <section>
      <div className="grid grid-cols-12 gap-0">
        <div className="col-start-5 col-span-4">
          <Box component="form" className="my-4 border">
            <div>
              <TextField
                required
                fullWidth
                margin="normal"
                label="Email"
                id="email"
                type="email"
              />
            </div>
            <FormControl variant="outlined" margin="normal" fullWidth required>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button variant="contained" fullWidth>Contained</Button>
          </Box>
          <Divider>Or</Divider>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
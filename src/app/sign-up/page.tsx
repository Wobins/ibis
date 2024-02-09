'use client'

import {useState, useEffect} from 'react';
import Link from 'next/link';
import { 
  Stack,
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
  InputAdornment,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleMouseDownConfirmPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <section>
      <div className="grid grid-cols-12 gap-0">
        <div className="col-start-5 col-span-4">
          <div className="text-center">
            <h2>Get started</h2>
            <p>Create a new account</p>
          </div>
          <div>
            <Stack spacing={2}>
              <Button variant="contained" fullWidth>Google</Button>
              <Button variant="contained" fullWidth>Facebook</Button>
              <Button variant="contained" fullWidth>LinkedIn</Button>
            </Stack>
            <Divider>Or</Divider>
            <Box component="form" className="my-4 border">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <TextField
                    required
                    fullWidth
                    margin="normal"
                    label="First name"
                    id="first-name"
                  />
                </div>
                <div className="col-span-6">
                  <TextField
                    required
                    fullWidth
                    margin="normal"
                    label="Last name"
                    id="last-name"
                  />
                </div>
              </div>
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
              <FormControl variant="outlined" margin="normal" fullWidth required>
                <InputLabel htmlFor="outlined-adornment-password">Confirm password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownConfirmPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm password"
                />
              </FormControl>
              <FormControlLabel required control={<Checkbox />} label="Required" />
              <Button variant="contained" fullWidth>Contained</Button>
            </Box>
            <div className="text-center">
              <p>Have an account? <Link href="/sign-in">Sign In Now</Link></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
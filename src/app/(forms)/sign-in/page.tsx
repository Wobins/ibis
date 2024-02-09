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
    <>
      <section>
        <div className="grid grid-cols-12 gap-0">
          <div className="col-start-5 col-span-4">
            <div className="text-center">
              <h2>Welcome back</h2>
              <p>Sign in to your account</p>
            </div>
            <div>
              <Stack spacing={2}>
                <Button variant="contained" fullWidth>Google</Button>
                <Button variant="contained" fullWidth>Facebook</Button>
                <Button variant="contained" fullWidth>LinkedIn</Button>
              </Stack>
              <Divider>Or</Divider>
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
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <div className="">
                  <p><Link href="/sign-up">Forgot password?</Link></p>
                </div>
                <div className="">
                  <p>Don&#39;t have an account? <Link href="/sign-up">Sign Up Now</Link></p>
                </div>
              </Stack>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;
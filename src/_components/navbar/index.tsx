'use client'

import Link from 'next/link'
import { useState } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Stack,
    Button,
    IconButton,
    Avatar,
    Badge
} from '@mui/material';
import { 
    Notifications,
    Menu
} from '@mui/icons-material';

const pages: string[]  = ["bills", "clients", "readings", "contracts"]

const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AppBar position="static" color="warning" className="shadow-lg">
            <Toolbar>
                {
                    isLoggedIn && (
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{
                                display: { md: 'none'}, // Hide from medium screens
                                mr: 2,
                            }}
                        >
                            <Menu />
                        </IconButton>
                    )
                }

                <Typography variant="h6" component={Link} href="/" sx={{ flexGrow: 1, }}>
                    News
                </Typography>
                

                {
                    isLoggedIn ? (
                        <>
                            <Box sx={{ ml: 2, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {
                                    pages.map(page => (
                                        <Button
                                            key={page}
                                            href={`/${page}`}
                                            sx={{ color: 'white', display: 'block' }}
                                        >
                                            {page}
                                        </Button>

                                    ))
                                }
                            </Box>

                            <Stack direction="row" spacing={2}>
                                <IconButton
                                    size="large"
                                    aria-label="show 17 new notifications"
                                    color="inherit"
                                >
                                    <Badge badgeContent={17} color="error">
                                        <Notifications/>
                                    </Badge>
                                </IconButton>
                                <IconButton sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="" />
                                </IconButton>

                            </Stack>
                        </>
                    ) : (
                        <Stack spacing={2} direction="row">
                            <Button 
                                color="success" 
                                variant="outlined"
                                href="/signin"
                                size="large"
                            >
                                Sign in
                            </Button>
                            <Button 
                                color="secondary" 
                                variant="contained" 
                                href="/signup"
                                size="large"
                                sx={{mr: 4, display: { md: "block", xs: "none"}}}
                            >
                                Sign up
                            </Button>
                        </Stack>
                    )
                }
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;

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
    Badge,
    List,
    Divider,
    Drawer,
    ListItem,
    ListItemButton,
    ListItemText,
    MenuItem,
    Menu
} from '@mui/material';
import { 
    Notifications,
} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

const pages: string[]  = ["bills", "clients", "readings", "contracts"];
const settings: string[] = ['Profile', 'Account', 'Dashboard', 'Logout'];
const drawerWidth = 240;

const NavBar = (props: Props) => {
    const { window } = props;
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClickAccountMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseAccountMenu = () => {
        setAnchorEl(null);
    };

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {pages.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} LinkComponent={Link} href={`/${item}`}>
                        <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <AppBar position="static" color="warning" className="shadow-lg">
                <Toolbar>
                    {
                        isLoggedIn && (
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleDrawerToggle}
                                sx={{
                                    display: { md: 'none'}, // Hide from medium screens
                                    mr: 2,
                                }}
                            >
                                <MenuIcon />
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
                                    <Box >
                                        <IconButton
                                            onClick={handleClickAccountMenu}
                                            sx={{ p: 0 }}
                                            aria-controls={open ? 'account-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                        >
                                            <Avatar alt="Remy Sharp" src="" />
                                        </IconButton>
                                        <Menu
                                            anchorEl={anchorEl}
                                            id="account-menu"
                                            open={open}
                                            onClose={handleCloseAccountMenu}
                                            onClick={handleCloseAccountMenu}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >
                                            {settings.map((setting) => (
                                                <MenuItem key={setting} onClick={handleCloseAccountMenu}>
                                                    <Typography textAlign="center">{setting}</Typography>
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </Box>

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
            {
                isLoggedIn && (
                    <nav>
                        <Drawer
                            container={container}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: { xs: 'block'},
                                // display: { xs: 'block', sm: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </nav>
                )
            }
        </>
    );
}

export default NavBar;

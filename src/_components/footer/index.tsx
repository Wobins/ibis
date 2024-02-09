'use client'

import Link from 'next/link'
import {Typography} from '@mui/material';
import './styles.css'

const Footer = () => {
    return (
        <footer className='footer mt-3'>
            <Typography variant="body2" color="text.secondary" align="center" className='m-0 py-3'>
                {'Copyright © '}
                <Link color="inherit" href="https://github.com/Wobins" target="_blank">
                    Ange Wobinwo
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </footer>
    );
}

export default Footer;
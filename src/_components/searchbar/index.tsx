'use client'

import { InputBase } from '@mui/material';
import { 
    styled, 
    alpha 
} from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        // backgroundColor: "alpha(theme.palette.common.white, 0.15)",
        backgroundColor: "#23f212",
        // '&:hover': {
        //   backgroundColor: alpha(theme.palette.common.white, 0.25),
        // },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '20%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: '20%',
        },
    }));
      
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));
      
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
            width: '20ch',
            },
        },
    }));
      
    return (
        // <Search>
        //     <SearchIconWrapper>
        //         <SearchIcon />
        //     </SearchIconWrapper>
        //     <StyledInputBase
        //         placeholder="Search…"
        //         inputProps={{ 'aria-label': 'search' }}
        //     />
        // </Search>

        <form className="group relative">
            <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
            </svg>
            <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Filter projects..." />
        </form>
    )
}

export default SearchBar
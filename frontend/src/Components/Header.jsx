import React from 'react'
import { AppBar, Toolbar, Typography, Box, Button, Tabs, Tab } from "@mui/material";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from '../store';
const Header = () => {
    const dispath = useDispatch()
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const [value, setValue] = useState()
    return (
        <AppBar position="sticky" sx={{ background: "linear-gradient(90deg, rgba(8,62,152,1) 2%, rgba(9,30,121,1) 36%, rgba(4,132,196,1) 73%, rgba(0,212,255,1) 100%)" }}>
            <Toolbar>
                <Typography variant="h4">Blog App</Typography>
                {isLoggedIn && <Box display="flex" marginLeft="auto" marginRight="auto">
                    <Tabs textColor="inherit" value={value} onChange={(e, val) => setValue(val)}>
                        <Tab LinkComponent={Link} to="/blogs" label="All Blog" /> 
                        <Tab LinkComponent={Link} to="/myblogs" label="My Blogs" />
                        <Tab LinkComponent={Link} to="/blogs/add" label="Add Blogs" />
                    </Tabs>
                </Box>}
                <Box display="flex" marginLeft="auto">
                    {!isLoggedIn && <><Button
                        LinkComponent={Link} to="/auth"
                        sx={{ margin: 1, borderRadius: 10 }} color="warning" variant="contained">
                        Login
                    </Button>
                        <Button
                            LinkComponent={Link} to="/auth"
                            sx={{ margin: 1, borderRadius: 10 }} color="warning" variant="contained">
                            Sign-Up
                    </Button></>}
                    {isLoggedIn && <Button
                        onClick={() => dispath(authActions.logout())} LinkComponent={Link} to="/auth"
                        sx={{ margin: 1, borderRadius: 10 }} color="warning" variant="contained">
                        Logout
                    </Button>}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
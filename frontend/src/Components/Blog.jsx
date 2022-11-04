import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom'

const Blog = ({ title, description, imageUrl, userName, isUser, id }) => {
    const navigate = useNavigate();
    const handleEdit = (e) => {
        navigate(`/myBlogs/${id}`)
    }
    return (
        <div>
            <Card sx={{
                width: '40%', margin: 'auto', marginTop: 2, padding: 2, boxShadow: "0px 0px 20px #ccc", ":hover": {
                    boxShadow: "-10px 10px 20px #000"
                }
            }}>
                {isUser && (
                    <Box display={"flex"}>
                        <IconButton onClick={handleEdit} sx={{marginLeft:'auto'}}><EditIcon /></IconButton>
                        <IconButton onClick={handleEdit}><DeleteIcon /></IconButton>
                    </Box>
                )}
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                            {userName}
                        </Avatar>
                    }
                    title={title}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={imageUrl}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        <b>{userName}</b> {": "} {description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Blog
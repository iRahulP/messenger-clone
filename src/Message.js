import React, { forwardRef } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './Message.css';
import Typography from '@material-ui/core/Typography';


const Message = forwardRef(({message, username}, ref) => {
    const isUser = username === message.username;
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
            <CardContent>
                <Typography 
                    color='textPrimary'
                    variant='h5'
                    component='h5'
                >
                    {!isUser && `${message.username || 'Unknown User'}: `} {message.message}
                </Typography>
            </CardContent>
            </Card>       
        </div>
    )
    })

export default Message

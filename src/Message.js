import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './Message.css';
import Typography from '@material-ui/core/Typography';


function Message({ message, username }) {
    const isUser = username === message.username;

    return (
        <div className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message_userCard" : "message_guestCard"}>
            <CardContent>
                <Typography 
                    color='secondary'
                    variant='h5'
                    component='h5'
                >
                    {message.username}: {message.message}
                </Typography>
            </CardContent>
            </Card>       
        </div>
    )
}

export default Message

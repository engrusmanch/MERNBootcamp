import React from 'react';
import { makeStyles } from '@mui/styles';
import {
    Avatar,
    Box,
    Grid,
    Paper,
    TextField,
    IconButton,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        
    },
    conversationContainer: {
        height: '80vh',
        overflowY: 'auto',
    },
    messageContainer: {
        marginBottom: theme.spacing(1),
        alignItems: 'flex-end',

    },
    outgoingMessageContainer: {
        height: "auto",
        display: 'flex',
        justifyContent: 'flex-end',
    },
    incomingMessageContainer: {
        height: "auto",
        display: 'flex',
        justifyContent: 'flex-start',
    },
    avatar: {
        marginRight: theme.spacing(1),
    },
    messageContent: {
        padding: theme.spacing(1),
        borderRadius: '8px',
    },

    name:{
        fontSize:"14px",
        marginBottom:"5px",
        color:"#1D9745"
    },
    outgoingMessageContent: {
        backgroundColor: '#E8F2FE',
        color: '#0E1114',
        borderRadius:"16px 16px 0 16px"

    },
    incomingMessageContent: {
        backgroundColor: '#EEF1F4',
        borderRadius:"16px 16px 16px 0"

    },
    messageTime: {
        fontSize: '0.8rem',
        marginTop: theme.spacing(1),
        color:"#616C76"
    },
    inputContainer: {
        // marginTop: "50px",
        display: 'flex',
        alignItems: 'center',
    },
    inputField: {
        flex: 1,
        marginRight: theme.spacing(1),
    },
}));

export  function Conversation () {
    const classes = useStyles();

    // Mock conversation data
    const conversation = [
        {
            id: 1,
            name: 'John',
            message: 'Hello!',
            time: '10:30 AM',
            isOutgoing: true,
            isOnline: true,
        },
        {
            id: 2,
            name: 'Jane',
            message: 'Hi there!',
            time: '10:31 AM',
            isOutgoing: false,
            isOnline: false,
        },
        // Add more messages here
    ];

    return (
        <div className={classes.root}>
            <Grid container direction="column" justifyContent="flex-end" spacing={2}>
                <Grid item>
                    <Box className={classes.conversationContainer}>
                        {conversation.map((message) => (
                            <div
                                key={message.id}
                                className={
                                    message.isOutgoing
                                        ? classes.outgoingMessageContainer
                                        : classes.incomingMessageContainer
                                }
                            >
                                <Grid sx={{"display":"flex", "alignItems":"center"}}>
                                    <Grid item >
                                        <Avatar
                                            className={classes.avatar}
                                            alt={message.name}
                                            src={`https://i.pravatar.cc/150?img=2`}
                                        // src={`avatar-url/${message.name}.jpg`}
                                        />
                                        <Box className={classes.badge} />
                                    </Grid>
                                    <Grid item xs>
                                        
                                        <div className={classes.name}>{message.name}</div>
                                        <Box
                                            className={`${classes.messageContent} ${message.isOutgoing
                                                    ? classes.outgoingMessageContent
                                                    : classes.incomingMessageContent
                                                }`}
                                                
                                        >
                                            <div>{message.message}</div>
                                        </Box>
                                        <div className={classes.messageTime} >{message.time}</div>

                                    </Grid>
                                </Grid>
                            </div>
                        ))}
                    </Box>
                </Grid>

                <Grid item xs={12} >
                    <div className={classes.inputContainer}>
                        <TextField
                            className={classes.inputField}
                            label="Type your message"
                            variant="outlined"
                            size="small"
                            fullWidth
                        />

                        <IconButton>
                            <SendIcon />
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
    
};


import {
    Avatar,
    Box,
    Button,
    Divider,
    Drawer,
    FormControlLabel,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Switch,
    Typography,
  } from "@mui/material";
  import { makeStyles } from "@mui/styles";
  import userAvatar from "../assets/Photo.png";
import { ClosedCaptioning, Cross, X } from "@phosphor-icons/react";
import { XCircle } from "phosphor-react";
import React from "react";
  
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 280,
    flexShrink: 0,
  },
  listItemText: {
    width: '100px',
    flexWrap:true,
    whiteSpace: 'wrap',
    textOverflow: 'ellipsis' 
},
  drawerPaper: {
    width: 280,
    backgroundColor: '#FFFFFF',
    borderLeft: '1px solid #CDD5DE',
    boxShadow:
      '0px 0px 4px rgba(2, 17, 37, 0.08), -2px 0px 8px rgba(2, 17, 37, 0.08), -6px 0px 16px rgba(2, 17, 37, 0.04)',
    borderRadius: '16px 0px 0px 0px',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px 24px 0',
    gap: '16px',
    marginBottom:"10px"
  },
  drawerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '16px 24px 24px',
    gap: '16px',
  },
}));

export function UserDrawer({ open, onClose, selectedItem }) {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={true}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={userAvatar} sx={{borderRadius:"999px"}} />
          <Box sx={{ ml: 2 }}>
            <Typography sx={{fonWeight:'bold'}}>User Name</Typography>
            
          </Box>
        </Box>
        <Button onClick={onClose}>
          <X size={25} />
        </Button>
      </div>
      <Divider />
      <div className={classes.drawerContent}>
        <List>
          <ListItem >
            <ListItemText className={classes.listItemText}
                            primary="Username"
                            secondary={
                                <React.Fragment>
                                    <Typography component="span" variant="body2" color="#616C76"   sx={{ overflow: 'hidden',  textOverflow: 'ellipsis',width: '60%',}}>
                                        Jhon Doe
                                    </Typography>
                                </React.Fragment>
                            }
                        />
          </ListItem>
          <ListItem >
          <ListItemText className={classes.listItemText}
                            primary="Bio"
                            secondary={
                                <React.Fragment>
                                    <Typography component="span" variant="body2" color="#616C76"   sx={{ overflow: 'hidden',  textOverflow: 'ellipsis',width: '60%',}}>
                                        I love hiking
                                    </Typography>
                                </React.Fragment>
                            }
                        />
          </ListItem>
        </List>
        <Divider />
        
      </div>
      <Divider />
      <div className={classes.drawerContent}>
        <List>
          <ListItem>
            <ListItemText primary="Allow Notifications" sx={{fontWeight:"600"}}/>
            <FormControlLabel
              control={<Switch />}
              label=""
              sx={{ ml: 'auto' }}
            />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Block User" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Clear History" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Delete Conversation" />
          </ListItem>
        </List>
        <Divider />
        
      </div>
    </Drawer>
  );
}

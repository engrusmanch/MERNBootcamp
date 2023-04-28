import { Avatar, Box, Grid } from "@mui/material";
import Logo from "../assets/Logo.svg";
import userAvatar from "../assets/Photo.png";
import { DotsThree, DotsThreeVertical, Gear } from "@phosphor-icons/react";
import { useState } from "react";
import { UserDrawer } from "./drawer";

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  function handleClickOnDrawer(){
    setIsDrawerOpen(true);
  }
  function handleCloseDrawer() {
    setIsDrawerOpen(false);
  }
  const [selectedItem, setSelectedItem] = useState(null); // add selectedItem state variable

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 70,
          backgroundColor: "lightgray", // named color
       
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={6} md={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={Logo} style={{ height: "32px", marginRight: "10px" }} />
              <span style={{ fontSize: "20px" }}>E-Message</span>
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <span style={{ fontSize: "14px" }}>Last seen: 10 </span>
              <span style={{ fontSize: "14px" }}>minutes ago</span>
            </Box>
          </Grid>
          <Grid item xs={3} md={2}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Gear size={25} />
              <DotsThreeVertical size={25} onClick={handleClickOnDrawer}/>
              <Avatar src={userAvatar} />
            </Box>
          </Grid>
         
        </Grid>
      </Box>
      
{isDrawerOpen&&<UserDrawer open={isDrawerOpen} onClose={handleCloseDrawer} selectedItem={selectedItem} />
}
    </>
  );
}

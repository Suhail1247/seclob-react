import React, { useState } from "react";
import {  Box, Grid, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Options from "./Options";
import { RiDashboardFill } from "react-icons/ri";
import logoInDash from "../../assets/LogoInDash.png";
import avatar from "../../assets/avatar.png";
import { LuBarChart2 } from "react-icons/lu";
import { HiOutlineTicket } from "react-icons/hi";
import { MdOutlineArticle } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import Upload from "./Upload/Upload";
import { Stack } from "@mui/system";
function Dashboard(props) {
    const [anchorEl, setAnchorEl] = useState(null); 
  const open = Boolean(anchorEl);

  const handleClick = (event) => { 
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        height: "auto",
        width: "100%",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={2} >
            <Box
              sx={{
                height: "auto",
                pt: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // Center content horizontally
              }}
            >
              <Box
                display="flex"
                sx={{
                  mt: 2,
                  mb: 2,
                }}
              >
                <img
                  src={logoInDash}
                  style={{ width: "2.5vw", height: "2.5vw" }}
                  alt=""
                />
                <Typography
                  sx={{ fontFamily: "Nunito", fontSize: "1.4vw", ml: ".4vw" }}
                >
                  Base
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                height: "auto",
              }}
            >
              <Typography sx={{ ml: 2, mt: 2 }}>
                <Options
                  img={
                    <RiDashboardFill
                      style={{
                        color:
                          props.title === "Dashboard"
                            ? "rgba(96, 91, 255, 1)"
                            : "rgba(154, 154, 169, 1)",
                      }}
                    />
                  }
                  title="Dashboard"
                  selected={props.title}
                />
              </Typography>
              <Typography sx={{ ml: 2, mt: 2 }}>
                <Options
                  img={
                    <LuBarChart2
                      style={{
                        color:
                          props.title === "Upload"
                            ? "rgba(96, 91, 255, 1)"
                            : "rgba(154, 154, 169, 1)",
                      }}
                    />
                  }
                  title="Upload"
                  selected={props.title}
                />
              </Typography>
              <Typography sx={{ ml: 2, mt: 2 }}>
                <Options
                  img={
                    <HiOutlineTicket
                      style={{
                        color:
                          props.title === "Invoice"
                            ? "rgba(96, 91, 255, 1)"
                            : "rgba(154, 154, 169, 1)",
                      }}
                    />
                  }
                  title="Invoice"
                  selected={props.title}
                />
              </Typography>
              <Typography sx={{ ml: 2, mt: 2 }}>
                <Options
                  img={
                    <MdOutlineArticle
                      style={{
                        color:
                          props.title === "Schedule"
                            ? "rgba(96, 91, 255, 1)"
                            : "rgba(154, 154, 169, 1)",
                      }}
                    />
                  }
                  title="Schedule"
                  selected={props.title}
                />
              </Typography>
              <Typography sx={{ ml: 2, mt: 2 }}>
                <Options
                  img={
                    <FaCalendarAlt
                      style={{
                        color:
                          props.title === "Calendar"
                            ? "rgba(96, 91, 255, 1)"
                            : "rgba(154, 154, 169, 1)",
                      }}
                    />
                  }
                  title="Calendar"
                  selected={props.title}
                />
              </Typography>
              <Typography sx={{ ml: 2, mt: 2 }}>
                <Options
                  img={
                    <IoNotificationsSharp
                      style={{
                        color:
                          props.title === "Notification"
                            ? "rgba(96, 91, 255, 1)"
                            : "rgba(154, 154, 169, 1)",
                      }}
                    />
                  }
                  title="Notification"
                  selected={props.title}
                />
              </Typography>
              <Typography sx={{ ml: 2, mt: 2 }}>
                <Options
                  img={
                    <IoSettingsSharp
                      style={{
                        color:
                          props.title === "Settings"
                            ? "rgba(96, 91, 255, 1)"
                            : "rgba(154, 154, 169, 1)",
                      }}
                    />
                  }
                  title="Settings"
                  selected={props.title}
                />
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={10}>
          <Box
  sx={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', // Center content vertically
    paddingRight: 2,
  }}
>
  <Box sx={{  ml: 1 }}>
    <h3>{props.navText}</h3>
  </Box>
  <Stack direction="row"  >
    <IoNotificationsSharp style={{ fontSize: '2vw' ,marginTop:'2vh', cursor:"pointer"}} />
    <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{  width: "3vw", height: '3vw'}} src={avatar} />
          </IconButton>
        </Tooltip>
   
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}

        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>   
  </Stack>
</Box>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {props.dashboard && <>{props.title}</>}
              {props.upload && (
                <>
                  <Upload />
                </>
              )}
              {props.invoice && <>invoice</>}
              {props.schedule && <>schedule</>}
              {props.calendar && <>calendar</>}
              {props.notification && <>notification</>}
              {props.settings && <>settings</>}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;

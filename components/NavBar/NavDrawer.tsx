import React from "react";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import Image from "next/image";
import Logo from "../../public/Logos/VerifyFoxLogo.svg";
import { NavLinks } from "@/shared/interfaces/NavLinks";
import { stringAvatar } from "@/shared/functions/stringAvatar";

interface Props {
  drawerItems: Array<NavLinks>;
  handleDrawerToggle: any;
}
export const NavDrawer = ({ drawerItems, handleDrawerToggle }: Props) => {
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>

      <List>
        {drawerItems.map((item: NavLinks) => {
          return (
            <ListItem key={item.name} disablePadding>
              {item.goto ? (
                <ListItemButton
                  href={item.goto}
                  sx={{ color: "var(--accentlight)" }}
                >
                  <ListItemAvatar>{item.icon}</ListItemAvatar>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              ) : (
                <>
                  <ListItemAvatar>{item.icon}</ListItemAvatar>
                  <ListItemText primary={item.name} />
                </>
              )}
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

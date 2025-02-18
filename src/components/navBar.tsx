import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import LogoIcon from "./logo";

interface navItem {
  name: string;
  link: string;
}

const navItems: navItem[] = [
  { name: "About", link: "#about" },
  { name: "Pricing", link: "#pricing" },
  { name: "Contact", link: "#contact" },
];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", color: "primary.main" }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} href={item.link}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ mb: 2 }}
        href="/login"
      >
        Bestiary Portal
      </Button>
    </Box>
  );

  const container = window !== undefined ? () => document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: "linear-gradient(to top, #ffffffba, #fffffffa)",
          boxShadow: "0 1em 4em 1em #0001",
          backdropFilter: "blur(0.25em)",
        }}
      >
        <Toolbar
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              height: "100%",
              maxWidth: "lg",
            }}
          >
            <LogoIcon />
          </Box>

          <IconButton
            color="secondary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.name}
                size="large"
                href={item.link}
                color="secondary"
                sx={{ pt: 2.25, pb: 2.25 }}
              >
                {item.name}
              </Button>
            ))}
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/login"
              sx={{ ml: 2 }}
            >
              Bestiary Portal
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          anchor="top"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

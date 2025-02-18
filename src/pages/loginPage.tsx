import {
  Box,
  BoxProps,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import SVGImage from "../../public/furelic_aprx_logo_white.svg";

import { styled } from "@mui/material";
import MuiCard from "@mui/material/Card";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  textAlign: "left",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
}));

function LoginCard() {
  return (
    <Card sx={{ flex: 2, maxWidth: "20em" }} variant="outlined">
      <Typography variant="h4">Bestiary sign in</Typography>
      <FormLabel htmlFor="email" sx={{ marginBottom: -2 }}>
        Email
      </FormLabel>
      <TextField
        id="email"
        type="email"
        name="email"
        placeholder="your@email.com"
        autoComplete="email"
        autoFocus
        fullWidth
        variant="outlined"
        size="small"
      />
      <FormLabel htmlFor="password" sx={{ marginBottom: -2 }}>
        Password
      </FormLabel>
      <TextField
        name="password"
        placeholder="••••••"
        type="password"
        id="password"
        autoComplete="current-password"
        autoFocus
        fullWidth
        variant="outlined"
        size="small"
      />
      <Link>Forgot your password?</Link>
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button fullWidth variant="contained" color="secondary" size="large">
        Sign in
      </Button>
    </Card>
  );
}

function FurelicLogo(props: BoxProps) {
  return (
    <Box {...props}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "30em",
          mr: 2,
          ml: 2,
          mb: { md: 10, sm: 2, xs: 2 },
          // minWidth: "10em",
        }}
      >
        <img src={SVGImage} alt="Description" width={"100%"} />
      </Box>
    </Box>
  );
}

function LoginPage() {
  return (
    <div className="login-page-root">
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            minHeight: "80vh",
            gap: { xs: 6, sm: 12 },
            p: 2,
            mx: "auto",
          }}
        >
          {" "}
          <FurelicLogo
            sx={{
              display: { md: "flex", sm: "none", xs: "none" },
              flex: 3,

              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <LoginCard />
        </Box>
      </Container>
    </div>
  );
}

export default LoginPage;

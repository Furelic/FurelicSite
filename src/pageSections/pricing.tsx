import { Container, Typography } from "@mui/material";

export default function Pricing() {
  return (
    <Container id="pricing" sx={{ scrollMarginTop: "64px" }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        Pricing
      </Typography>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis
        aliquam consectetur. Nulla in blandit mi. Vestibulum vitae ex felis.
        Nullam suscipit mi sed nibh imperdiet, non dictum leo pellentesque.
        Aliquam dignissim est eget metus tempor, vel ornare libero pellentesque.
        Quisque vitae neque arcu.
      </span>
    </Container>
  );
}

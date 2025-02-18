import { Card, CardContent, Container, Grid, Typography } from "@mui/material";

interface PricingCardInfo {
  title: string;
  price: string;
  description: string;
}

function PricingCard({ title, price, description }: PricingCardInfo) {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            color: "text.primary",
            mb: 0.5,
          }}
        >
          {title}
        </Typography>
        <Typography variant="h3" component="p" color="secondary" sx={{ mb: 1 }}>
          {price}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          paragraph
          sx={{ mb: 0 }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function Pricing() {
  return (
    <Container id="pricing" sx={{ scrollMarginTop: "64px" }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        Pricing
      </Typography>
      <span>Simple, transparent pricing tailored to your needs.</span>
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
        {/* Onboarding Pricing Card */}
        <Grid item xs={12} sm={6} md={4}>
          <PricingCard
            title="One-Time Onboarding"
            price="$20/unit"
            description="We’ll digitize your physical records (or transfer digital records) and set up your Furelic account."
          />
        </Grid>

        {/* Monthly Maintenance Pricing Card */}
        <Grid item xs={12} sm={6} md={4}>
          <PricingCard
            title="Monthly Maintenance"
            price="$5/unit"
            description="Ongoing access to Furelic’s platform, including automated
                tracking, tenant notifications, and manager tools."
          />
        </Grid>
      </Grid>
    </Container>
  );
}

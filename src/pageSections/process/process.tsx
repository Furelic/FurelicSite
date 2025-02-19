import { useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
  Button,
  Container,
  Card,
} from "@mui/material";

import { steps } from "./stepper.content";

export default function VerticalStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [, setIsImageVisible] = useState(true);

  // Function to handle step change
  const handleStep = (step: number) => {
    setIsImageVisible(false); // Fade out the current image
    setTimeout(() => {
      setActiveStep(step);
      setIsImageVisible(true); // Fade in the new image
    }, 250); // Match the duration of the CSS transition
  };

  return (
    <Box sx={{ backgroundColor: "#EEE8", py: 8 }}>
      <Container id="process" sx={{ scrollMarginTop: "64px" }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
          How it works
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            gap: "3em",
          }}
        >
          <Box
            sx={{
              flex: 2,
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              display: { md: "flex", sm: "none", xs: "none" },
            }}
          >
            <Box
              sx={{ display: "flex", flex: 1, justifyContent: "center", mb: 4 }}
            >
              <Card
                sx={{
                  width: "100%",
                  backgroundImage: `url(${steps[activeStep].imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  overflow: "hidden",
                }}
              ></Card>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "1em",
                mt: 2,
              }}
            >
              <Button
                sx={{ flex: 1, fontWeight: "bold" }}
                size="large"
                variant="outlined"
                disabled={activeStep === 0}
                onClick={() => handleStep(activeStep - 1)}
              >
                &lt; Back
              </Button>
              <Button
                sx={{ flex: 1, fontWeight: "bold" }}
                size="large"
                variant="contained"
                disabled={activeStep === steps.length - 1}
                onClick={() => handleStep(activeStep + 1)}
              >
                Next &gt;
              </Button>
            </Box>
          </Box>
          <Card sx={{ flex: 3, p: 3 }}>
            <Stepper orientation="vertical" activeStep={activeStep}>
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Step key={step.label}>
                    <StepLabel
                      icon={<IconComponent />}
                      sx={{
                        cursor: "pointer",
                        color: "primary.main",
                        transition: "transform 0.3s ease, color 0.3s ease",
                        "&:hover": {
                          transform: "translateX(-0.5em)",
                        },
                      }}
                      onClick={() => handleStep(index)}
                    >
                      <Typography
                        variant="h6"
                        sx={{ cursor: "pointer", fontWeight: "bold" }}
                      >
                        {step.label}
                      </Typography>
                    </StepLabel>
                    <StepContent>
                      <Typography variant="body1" sx={{ mt: 1 }}>
                        {step.bullets.map((bullet) => (
                          <Typography
                            key={bullet.label}
                            variant="body1"
                            sx={{ mt: 1 }}
                          >
                            <strong>{bullet.label}</strong>
                            <br />
                            <Typography
                              variant="body1"
                              color="textSecondary"
                              sx={{ ml: 2 }}
                            >
                              {bullet.description}
                            </Typography>
                          </Typography>
                        ))}
                      </Typography>
                    </StepContent>
                  </Step>
                );
              })}
            </Stepper>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}

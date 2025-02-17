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
} from "@mui/material";
import {
  Person as PersonIcon,
  Notifications as NotificationsIcon,
  CheckCircle as CheckCircleIcon,
  SupervisorAccount as SupervisorAccountIcon,
  Pets as PetsIcon,
} from "@mui/icons-material";
import StickyNote2RoundedIcon from "@mui/icons-material/StickyNote2Rounded";
import FindInPageRoundedIcon from "@mui/icons-material/FindInPageRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";

// Add CSS for the animation
const styles = `
  .fade-in-out {
    transition: opacity 0.5s ease-in-out;
  }
  .fade-in-out.enter {
    opacity: 0;
  }
  .fade-in-out.enter-active {
    opacity: 1;
  }
  .fade-in-out.exit {
    opacity: 1;
  }
  .fade-in-out.exit-active {
    opacity: 0;
  }
`;

const steps = [
  {
    label: "Onboarding",
    description:
      "We at Furelic will work with you to transfer records from your files (physical or digital) to our own. We then create an account for each of your residents.",
    icon: <PeopleRoundedIcon />,
    imageUrl: "../../green.png",
  },
  {
    label: "Tenant Info Submission",
    description: "Tenants get notified to fill out their info.",
    icon: <StickyNote2RoundedIcon />,
    imageUrl: "../../orange.png",
  },
  {
    label: "Furelic Checking",
    description:
      "We look over submissions to ensure they meet your requirements.",
    icon: <FindInPageRoundedIcon />,
    imageUrl: "../../purple.png",
  },
  {
    label: "Manager Checking",
    description:
      "Property managers from your team can look over all applications to make sure nothing's out of place.",
    icon: <FactCheckRoundedIcon />,
    imageUrl: "../../orange.png",
  },
  {
    label: "Maintenance",
    description:
      "We track vaccination records to notify you if anything goes out of date. Tenants can change their records and resubmit applications as pet situations change. Property managers can add notes about tenant pet situations.",
    icon: <SettingsSuggestRoundedIcon />,
    imageUrl: "../../green.png",
  },
];

export default function VerticalStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [isImageVisible, setIsImageVisible] = useState(true);

  // Function to handle step change
  const handleStep = (step: number) => {
    setIsImageVisible(false); // Fade out the current image
    setTimeout(() => {
      setActiveStep(step);
      setIsImageVisible(true); // Fade in the new image
    }, 250); // Match the duration of the CSS transition
  };

  return (
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
            justifyContent: "center",
            alignContent: "center",
            display: { md: "block", sm: "none", xs: "none" },
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <img
              src={steps[activeStep].imageUrl}
              alt={steps[activeStep].label}
              className={`fade-in-out ${
                isImageVisible ? "enter-active" : "exit-active"
              }`}
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
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
              disabled={activeStep === 0}
              onClick={() => handleStep(activeStep - 1)}
            >
              &lt; Back
            </Button>
            <Button
              variant="contained"
              disabled={activeStep === steps.length - 1}
              onClick={() => handleStep(activeStep + 1)}
            >
              Next &gt;
            </Button>
          </Box>
        </Box>
        <Stepper
          orientation="vertical"
          activeStep={activeStep}
          sx={{ flex: 3 }}
        >
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                icon={step.icon}
                sx={{ cursor: "pointer", color: "primary.main" }}
                onClick={() => handleStep(index)}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {step.label}
                </Typography>
              </StepLabel>
              <StepContent>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  {step.description}
                </Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Container>
  );
}

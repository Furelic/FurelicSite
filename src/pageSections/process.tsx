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
import StickyNote2RoundedIcon from "@mui/icons-material/StickyNote2Rounded";
import FindInPageRoundedIcon from "@mui/icons-material/FindInPageRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";

const steps = [
  {
    label: "Onboarding",
    description:
      "We start by working closely with your team to transfer all existing pet records—whether physical or digital—into Furelic’s secure system. Our experts digitize and organize your data, ensuring a smooth transition. Once completed, we create individual accounts for each of your residents, making it easy for them to submit and update their pet information.",
    icon: <PeopleRoundedIcon />,
    imageUrl: "../../green.png",
  },
  {
    label: "Tenant Info Submission",
    description:
      "Tenants are notified to fill out their pet information through a simple, user-friendly interface. They can upload vaccination records, pet licenses, and other required documents directly to their account. This eliminates the need for paper forms and manual follow-ups.",
    icon: <StickyNote2RoundedIcon />,
    imageUrl: "../../orange.png",
  },
  {
    label: "Furelic Checking",
    description:
      "Our platform automatically reviews each submission to ensure it meets your property’s specific requirements. We verify vaccination records, licenses, and other documentation through third-party services, flagging any discrepancies or missing information for your team to review.",
    icon: <FindInPageRoundedIcon />,
    imageUrl: "../../purple.png",
  },
  {
    label: "Manager Checking",
    description:
      "Your property management team can easily review all tenant submissions through Furelic’s dashboard. We provide a clear overview of each application, making it simple to spot and address any issues. This ensures compliance and reduces the risk of errors.",
    icon: <FactCheckRoundedIcon />,
    imageUrl: "../../orange.png",
  },
  {
    label: "Maintenance",
    description:
      "Furelic doesn’t stop at onboarding. We continuously track vaccination records and other time-sensitive documents, sending automatic reminders to tenants and property managers when updates are needed. Tenants can easily update their records, and property managers can add notes or flag specific pet situations for future reference.",
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

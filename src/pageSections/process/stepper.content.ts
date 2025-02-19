import StickyNote2RoundedIcon from "@mui/icons-material/StickyNote2Rounded";
import FindInPageRoundedIcon from "@mui/icons-material/FindInPageRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";

export interface bullet {
  label: string;
  description: string;
}

export interface Step {
  label: string;
  bullets: bullet[];
  icon: React.ComponentType;
  imageUrl: string;
}

export const steps: Step[] = [
  {
    label: "Onboarding",
    bullets: [
      {
        label: "Seamless Record Transfer",
        description:
          "We work with your team to migrate all existing pet records, whether physical or digital, into Furelic’s secure system.",
      },
      {
        label: "Data Digitization & Organization",
        description:
          " Our experts ensure a smooth transition by digitizing and organizing everything for easy access.",
      },
      {
        label: "Resident Accounts Setup",
        description:
          "Once complete, we create individual accounts for each resident, allowing them to submit and update pet information effortlessly.",
      },
    ],
    icon: PeopleRoundedIcon,
    imageUrl: "../../step/step_files.jpg",
  },
  {
    label: "Tenant Submissions",
    bullets: [
      {
        label: "Tenant Notification",
        description:
          "Residents receive a prompt to submit their pet information through a simple, user-friendly interface.",
      },
      {
        label: "Easy Document Upload",
        description:
          "They can upload vaccination records, pet licenses, and other required documents directly to their account.",
      },
      {
        label: "No More Paperwork Hassles",
        description:
          "This eliminates the need for paper forms and manual follow-ups.",
      },
    ],
    icon: StickyNote2RoundedIcon,
    imageUrl: "../../step/step_owner.jpg",
  },
  {
    label: "Furelic-Approved Screening",
    bullets: [
      {
        label: "Automated Compliance Check",
        description:
          "Furelic ensures every pet submission meets your property’s specific requirements.",
      },
      {
        label: "Verified & Secure",
        description:
          "We cross-check vaccination records, licenses, and other documents so you don’t have to.",
      },
      {
        label: "No Loose Ends",
        description:
          "Any discrepancies or missing information are flagged for your team to review.",
      },
    ],
    icon: FindInPageRoundedIcon,
    imageUrl: "../../step/step_work.jpg",
  },
  {
    label: "Manager Review",
    bullets: [
      {
        label: "Quick Submission Checks",
        description:
          "Easily access and review all tenant-submitted pet records in one place.",
      },
      {
        label: "Instant Issue Alerts",
        description:
          "Flagged discrepancies or missing documents are clearly highlighted for quick action.",
      },
      {
        label: "Streamlined Approvals",
        description:
          "Approve compliant pets with a click, keeping everything organized and hassle-free.",
      },
    ],
    icon: FactCheckRoundedIcon,
    imageUrl: "../../step/step_manager.jpg",
  },
  {
    label: "Ongoing Pet Oversight",
    bullets: [
      {
        label: "Continuous Tracking",
        description:
          "Stay up to date with vaccination records and other time-sensitive documents.",
      },
      {
        label: "Easy Updates & Notes",
        description:
          "Tenants and property managers receive alerts when updates are needed, reducing manual",
      },
      {
        label: "Easy Updates & Notes",
        description:
          "Tenants can quickly upload new records, while managers can add notes or flag specific pet situations for future reference.",
      },
    ],
    icon: SettingsSuggestRoundedIcon,
    imageUrl: "../../step/step_house.jpg",
  },
];
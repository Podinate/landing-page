import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  DesktopComputerIcon,
  CubeIcon,
  TruckIcon,
  ServerIcon,
  CloudIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Complete containerisation solution",
  desc: "Podinate empowers developers to build, run, and manage applications using containers. It takes the guess work out of deploying and managing applications in Kubernetes.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Simple Building Blocks",
      desc: "Podinate provides a streamlined set of services on top of Kubernetes.",
      icon: <CubeIcon />,
    },
    {
      title: "Built In Package Manager",
      desc: "Build once, deploy anywhere. Ship to the world.",
      icon: <TruckIcon />,
    },
    {
      title: "Easy Development Workflow",
      desc: "Run an entire Podinate cluster on your development machine. Easy dev/prod parity.",
      icon: <DesktopComputerIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Need something specific?",
  desc: "The Podinate team is here to help you with your specific needs. We can help you with custom development, training, and support.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Cloud Deployment",
      desc: "Podinate can be deployed to any cloud.",
      icon: <ServerIcon />,
    },
    {
      title: "Cloud Consultation",
      desc: "Help with your entire journey in the cloud or on premise.",
      icon: <CloudIcon />,
    },
    {
      title: "Continuous Integration and Deployment",
      desc: "We can integrate Podinate into your existing CI/CD pipeline.",
      icon: <EmojiHappyIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };

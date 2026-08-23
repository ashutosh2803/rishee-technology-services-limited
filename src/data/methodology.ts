export interface MethodologyStage {
  number: string;
  title: string;
  description: string;
}

export const METHODOLOGY_STAGES: MethodologyStage[] = [
  {
    number: "01",
    title: "Network Security Assessment",
    description:
      "Identifying weak points in your network infrastructure and providing solutions to secure your digital assets.",
  },
  {
    number: "02",
    title: "Penetration Testing",
    description:
      "Conducting simulated cyber-attacks to evaluate the effectiveness of your current defences and identifying potential breach points.",
  },
  {
    number: "03",
    title: "Data Protection Analysis",
    description:
      "Evaluating your data handling processes to ensure sensitive information remains secure.",
  },
  {
    number: "04",
    title: "Compliance Evaluation",
    description:
      "Assessing your compliance with industry regulations and recommending measures to meet requirements.",
  },
  {
    number: "05",
    title: "Employee Awareness Training",
    description:
      "Educating your staff about cyber security best practices, turning them into your first line of defence.",
  },
];

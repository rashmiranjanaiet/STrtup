import { RoleDashboard } from "@/components/RoleDashboard";

export default function CollegeDashboardPage() {
  return (
    <RoleDashboard
      role="college"
      title="College Dashboard"
      subtitle="Monitor student participation, performance metrics, and innovation output."
      cards={[
        {
          title: "Registered Students",
          value: "1,340",
          details: "Active student members from your institution in current cycle.",
        },
        {
          title: "Projects Submitted",
          value: "286",
          details: "Project submissions across ideation and advanced implementation levels.",
        },
        {
          title: "Mentor Sessions",
          value: "96",
          details: "Completed mentor engagements this quarter.",
        },
        {
          title: "Performance Rank",
          value: "Top 12",
          details: "Your institution rank among participating Odisha colleges.",
        },
      ]}
    />
  );
}

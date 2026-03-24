import { RoleDashboard } from "@/components/RoleDashboard";

export default function StudentDashboardPage() {
  return (
    <RoleDashboard
      role="student"
      title="Student Dashboard"
      subtitle="Track your profile, projects, AI tool usage, and sponsorship status."
      cards={[
        {
          title: "Profile Completion",
          value: "82%",
          details: "Update skills and portfolio links to improve sponsor matching.",
        },
        {
          title: "Projects in Progress",
          value: "4",
          details: "Two projects are currently under mentor review.",
        },
        {
          title: "AI Tool Credits",
          value: "1,250",
          details: "Credits available for ideation, coding, and report generation.",
        },
        {
          title: "Sponsorship Status",
          value: "2 Eligible",
          details: "Two projects currently qualify for funding round shortlisting.",
        },
      ]}
    />
  );
}

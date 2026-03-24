import { RoleDashboard } from "@/components/RoleDashboard";

export default function SponsorDashboardPage() {
  return (
    <RoleDashboard
      role="sponsor"
      title="Sponsor Dashboard"
      subtitle="Access student talent streams, hiring pipeline quality, and collaboration outcomes."
      cards={[
        {
          title: "Student Access",
          value: "5,200",
          details: "Students currently visible in your sponsor discovery funnel.",
        },
        {
          title: "Hiring Pipeline",
          value: "148",
          details: "Candidates shortlisted through project-based evaluation.",
        },
        {
          title: "Sponsored Challenges",
          value: "11",
          details: "Active problem statements running with mentor and campus support.",
        },
        {
          title: "ROI Growth",
          value: "+31%",
          details: "Estimated ROI based on hires, brand visibility, and event outcomes.",
        },
      ]}
    />
  );
}

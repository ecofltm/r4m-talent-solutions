import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JobSingleHero from '../components/Jobs/JobSingleHero';
import JobSingleView from '../components/Jobs/JobSingleView';
import AboutCTA from '../components/About/AboutCTA';
import Footer from '../components/Footer';

const SAMPLE_JOBS_LOOKUP = {
  "1": {
    id: 1,
    title: "Sample Job 1",
    category: "Logistics & Operations",
    location: "Taguig City, Metro Manila",
    type: "Permanent",
    specialism: "Human Resources / Logistics",
    focus: "Administrative Services & Recruitment Operations",
    industry: "Recruitment Consultancy",
    salary: "Negotiable / Competitive",
    workplaceType: "Hybrid",
    experienceLevel: "Entry Level / Mid",
    reference: "R4M-8645",
    posted: "24 September 2026",
    consultant: "Name",
    contactEmail: "name@r4mtalentsolutions.com",
    aboutRole: "To offer a candidate concierge service to support the Recruitment Partners in the end-to-end permanent recruitment process.",
    responsibilities: [
      "Working with the Recruitment Partner to ensure the job details in the client's system are correct and completed.",
      "Ensuring all the necessary approvals for the roles have been gained.",
      "Releasing the roles through the system to the relevant channels and specialist sourcing teams as advised by the Recruitment Partner.",
      "Managing candidate dispositions in the Client's recruitment system.",
      "Updating the system with candidate feedback as advised by the Recruitment Partner following review of the shortlist.",
      "Interview scheduling and room bookings within SLA timeframes. Ensuring the hiring manager has a copy of the CV, calendar invite, and room booked for any interviews.",
      "Ensuring all interview notes from the HR interview are stored appropriately and recording all feedback in the Client's recruitment system.",
      "Completing offer letter and any system approvals required in conjunction with the Recruitment Coordinator.",
      "Acting as a key point of contact to liaise with the key delivery teams and the Onboarding Team, ensuring seamless hand-offs and focusing on candidate experience.",
      "Ensuring all candidate contact reflects the Client's brand and values.",
      "Maintaining all central inboxes and helplines as required and that all queries are responded to within SLA.",
      "Gaining a strong understanding of the RWO Remit within the client and working as an active team player in achieving objectives and exceeding expectations."
    ],
    whoYouAre: [
      "Minimum 1 year of experience in recruitment coordination preferred.",
      "Demonstrated hands-on experience using an Applicant Tracking System (ATS).",
      "Proven experience managing multiple recruitment requests concurrently with defined turnaround times.",
      "Service and delivery focused with very professional attitude essential.",
      "Excellent and professional written and verbal communication skills essential.",
      "Prioritising effectively is an essential skill.",
      "Ability to work to tight deadlines is an essential skill.",
      "Experience of working in a client/customer care environment highly desirable.",
      "Excellent team player. Must also be people orientated.",
      "Organised and methodical with a strong attention to detail.",
      "Highly responsive with excellent ability to absorb information quickly."
    ],
    benefits: [
      "A unique opportunity to drive projects such as Employer Branding, Talent pipelining, and Recruitment Innovation.",
      "A track record of high performance and an ability to deliver excellent results consistently. In return for your hard work, offered a competitive salary and benefits package.",
      "Private medical insurance (HMO coverage).",
      "A fantastic training and development programme.",
      "Volunteer time off and employee wellbeing programmes.",
      "The opportunity to partake / qualify for company incentive weekends.",
      "Plenty of opportunities to progress your career, both locally and internationally."
    ]
  },
  "2": {
    id: 2,
    title: "Sample Job 2",
    category: "Technology & Digital",
    location: "Makati City, Metro Manila",
    type: "Permanent",
    specialism: "Software Engineering",
    focus: "Cloud Architecture & Web Development",
    industry: "Technology & Digital",
    salary: "Negotiable / Competitive",
    workplaceType: "Hybrid",
    experienceLevel: "Mid Level",
    reference: "R4M-8646",
    posted: "23 September 2026",
    consultant: "R4M Tech Sourcing Team",
    contactEmail: "careers@r4mtalentsolutions.com",
    aboutRole: "Develop high-performance enterprise applications and digital microservices for growing digital clients.",
    responsibilities: [
      "Architect and deploy web applications using modern JavaScript frameworks and cloud solutions.",
      "Collaborate with product designers and engineering teams to deliver responsive interfaces.",
      "Ensure application performance, code quality, and security standards.",
      "Participate in agile sprint planning, code reviews, and technical documentation."
    ],
    whoYouAre: [
      "3+ years hands-on experience with React, Node.js, and relational databases.",
      "Solid understanding of REST APIs and microservice architecture.",
      "Strong analytical thinking and proactive problem-solving skills."
    ],
    benefits: [
      "Competitive salary package with annual performance incentives.",
      "Comprehensive medical coverage (HMO) from day 1.",
      "Flexible hybrid work environment."
    ]
  }
};

export default function JobSinglePage() {
  const { id } = useParams();
  const job = SAMPLE_JOBS_LOOKUP[id] || SAMPLE_JOBS_LOOKUP["1"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <main>
        <JobSingleHero jobTitle={job.title} />
        <JobSingleView job={job} />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}

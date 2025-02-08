"use client"; // ✅ Ensure it's a client component

import { useEffect, useState } from "react";
import { JobCard } from "@/components/job-card";

export function JobList() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch("/api/jobs"); // ✅ Adjust URL to match API
        if (!res.ok) throw new Error("Failed to fetch jobs");
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to load jobs.");
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  if (loading) return <div className="text-white">Loading jobs...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (jobs.length === 0)
    return <div className="text-gray-500">No jobs available.</div>;

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          Recommended Jobs
          <span className="ml-2 text-sm font-normal text-gray-400">
            {jobs.length}
          </span>
        </h2>
        <select className="rounded bg-[#1A202C] px-3 py-1 text-sm text-gray-400">
          <option>Last updated</option>
          <option>Most relevant</option>
          <option>Highest salary</option>
        </select>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job: any) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </div>
  );
}

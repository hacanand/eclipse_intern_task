import { JobCard } from "@/components/job-card";

async function getJobs() {
  const res = await fetch("http://localhost:3000/api/jobs");
  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }
  return res.json();
}

export async function JobList() {
  const jobs = await getJobs();

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
        {jobs.map((job:any) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </div>
  );
}

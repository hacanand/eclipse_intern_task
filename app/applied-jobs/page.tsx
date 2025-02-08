"use client"

import { useJobs } from "@/contexts/JobContext"
import { JobCard } from "@/components/job-card"

export default function AppliedJobs() {
  const { appliedJobs } = useJobs()

  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="mb-6 text-2xl font-bold text-white">Applied Jobs</h1>
      {appliedJobs.length === 0 ? (
        <p className="text-center text-gray-400">You haven't applied to any jobs yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {appliedJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      )}
    </div>
  )
}


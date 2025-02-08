"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useJobs } from "@/contexts/JobContext"
import { JobCard } from "@/components/job-card"

export default function JobDetails() {
  const { id } = useParams()
  const { getJobById, applyToJob } = useJobs()
  const job = getJobById(id as string)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null as File | null,
    coverLetter: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    applyToJob(id as string, formData)
    alert("Application submitted successfully!")
  }

  if (!job) {
    return <div className="text-center text-white">Job not found</div>
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8">
        <JobCard {...job} />
      </div>
      <div className="rounded-xl bg-[#1A202C] p-6">
        <h2 className="mb-6 text-2xl font-bold text-white">Apply for {job.title}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-white">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 bg-[#2D3748] text-white"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 bg-[#2D3748] text-white"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-white">
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 bg-[#2D3748] text-white"
            />
          </div>
          <div>
            <Label htmlFor="resume" className="text-white">
              Resume
            </Label>
            <Input
              id="resume"
              name="resume"
              type="file"
              onChange={handleFileChange}
              required
              className="mt-1 bg-[#2D3748] text-white"
            />
          </div>
          <div>
            <Label htmlFor="coverLetter" className="text-white">
              Cover Letter
            </Label>
            <Textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              rows={4}
              className="mt-1 bg-[#2D3748] text-white"
            />
          </div>
          <Button type="submit" className="w-full bg-[#38A169] text-white hover:bg-[#2F855A]">
            Submit Application
          </Button>
        </form>
      </div>
    </div>
  )
}


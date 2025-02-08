"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface Job {
  id: string
  company: {
    name: string
    logo: string
    bgColor: string
  }
  title: string
  rating: number
  reviews: number
  location: string
  tags: string[]
  salary: {
    amount: number
    period: string
  }
}

interface ApplicationData {
  name: string
  email: string
  phone: string
  resume: File | null
  coverLetter: string
}

interface JobContextType {
  jobs: Job[]
  appliedJobs: Job[]
  getJobById: (id: string) => Job | undefined
  applyToJob: (id: string, applicationData: ApplicationData) => void
}

const JobContext = createContext<JobContextType | undefined>(undefined)

export function JobProvider({ children }: { children: React.ReactNode }) {
  const [jobs, setJobs] = useState<Job[]>([])
  const [appliedJobs, setAppliedJobs] = useState<Job[]>([])

  useEffect(() => {
    // Fetch jobs from an API or load from a data source
    const fetchJobs = async () => {
      // Replace this with actual API call
      const response = await fetch("/api/jobs")
      const data = await response.json()
      setJobs(data)
    }

    fetchJobs()

    // Load applied jobs from localStorage
    const storedAppliedJobs = localStorage.getItem("appliedJobs")
    if (storedAppliedJobs) {
      setAppliedJobs(JSON.parse(storedAppliedJobs))
    }
  }, [])

  const getJobById = (id: string) => jobs.find((job) => job.id === id)

  const applyToJob = (id: string, applicationData: ApplicationData) => {
    const job = getJobById(id)
    if (job) {
      const updatedAppliedJobs = [...appliedJobs, job]
      setAppliedJobs(updatedAppliedJobs)

      // Save to localStorage
      localStorage.setItem("appliedJobs", JSON.stringify(updatedAppliedJobs))

      // Here you would typically send the application data to your backend
      console.log(`Applied to job ${id}`, applicationData)
    }
  }

  return <JobContext.Provider value={{ jobs, appliedJobs, getJobById, applyToJob }}>{children}</JobContext.Provider>
}

export function useJobs() {
  const context = useContext(JobContext)
  if (context === undefined) {
    throw new Error("useJobs must be used within a JobProvider")
  }
  return context
}


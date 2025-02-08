"use client"

import { useState } from "react"
import { Search, MapPin, Briefcase, Calendar } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export function SearchFilters() {
  const [salaryRange, setSalaryRange] = useState([600])

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
        <Select>
          <SelectTrigger className="h-10 bg-gray-800 pl-10 text-white">
            <SelectValue placeholder="Designer" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="designer">Designer</SelectItem>
            <SelectItem value="developer">Developer</SelectItem>
            <SelectItem value="manager">Manager</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="relative flex-1">
        <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
        <Select>
          <SelectTrigger className="h-10 bg-gray-800 pl-10 text-white">
            <SelectValue placeholder="Work Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="remote">Remote</SelectItem>
            <SelectItem value="onsite">On-site</SelectItem>
            <SelectItem value="hybrid">Hybrid</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="relative flex-1">
        <Briefcase className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
        <Select>
          <SelectTrigger className="h-10 bg-gray-800 pl-10 text-white">
            <SelectValue placeholder="Experience" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="entry">Entry Level</SelectItem>
            <SelectItem value="mid">Mid Level</SelectItem>
            <SelectItem value="senior">Senior Level</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="relative flex-1">
        <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
        <Select>
          <SelectTrigger className="h-10 bg-gray-800 pl-10 text-white">
            <SelectValue placeholder="Per month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="month">Per month</SelectItem>
            <SelectItem value="year">Per year</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex-1 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Salary Range</span>
          <span className="text-white">${salaryRange[0]}-$1,200</span>
        </div>
        <Slider defaultValue={[600]} max={1200} min={600} step={100} onValueChange={setSalaryRange} className="py-2" />
      </div>
    </div>
  )
}


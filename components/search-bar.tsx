"use client"

import { useState, useEffect } from "react"
import { Search, MapPin, Briefcase, Calendar } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export function SearchBar() {
  const [salaryRange, setSalaryRange] = useState([600])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex  flex-wrap gap-4">
      <div className="relative flex-1 min-w-[200px]">
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
        {mounted && (
          <Select>
            <SelectTrigger className="h-10 w-full rounded-xl bg-[#1A202C] pl-10 text-white">
              <SelectValue placeholder="Designer" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="designer" className="rounded-xl">
                Designer
              </SelectItem>
              <SelectItem value="developer" className="rounded-xl">
                Developer
              </SelectItem>
              <SelectItem value="manager" className="rounded-xl">
                Manager
              </SelectItem>
            </SelectContent>
          </Select>
        )}
      </div>
      <div className="relative flex-1 min-w-[200px]">
        <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
        {mounted && (
          <Select>
            <SelectTrigger className="h-10 w-full rounded-xl bg-[#1A202C] pl-10 text-white">
              <SelectValue placeholder="Work Location" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="remote" className="rounded-xl">
                Remote
              </SelectItem>
              <SelectItem value="onsite" className="rounded-xl">
                On-site
              </SelectItem>
              <SelectItem value="hybrid" className="rounded-xl">
                Hybrid
              </SelectItem>
            </SelectContent>
          </Select>
        )}
      </div>
      <div className="relative flex-1 min-w-[200px]">
        <Briefcase className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
        {mounted && (
          <Select>
            <SelectTrigger className="h-10 w-full rounded-xl bg-[#1A202C] pl-10 text-white">
              <SelectValue placeholder="Experience" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="entry" className="rounded-xl">
                Entry Level
              </SelectItem>
              <SelectItem value="mid" className="rounded-xl">
                Mid Level
              </SelectItem>
              <SelectItem value="senior" className="rounded-xl">
                Senior Level
              </SelectItem>
            </SelectContent>
          </Select>
        )}
      </div>
      <div className="relative flex-1 min-w-[200px]">
        <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
        {mounted && (
          <Select>
            <SelectTrigger className="h-10 w-full rounded-xl bg-[#1A202C] pl-10 text-white">
              <SelectValue placeholder="Per month" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="month" className="rounded-xl">
                Per month
              </SelectItem>
              <SelectItem value="year" className="rounded-xl">
                Per year
              </SelectItem>
            </SelectContent>
          </Select>
        )}
      </div>
      <div className="w-full lg:w-64">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Salary Range</span>
          <span className="text-white">${salaryRange[0]}-$1,200</span>
        </div>
        <Slider
          defaultValue={[600]}
          max={1200}
          min={600}
          step={100}
          onValueChange={setSalaryRange}
          className="mt-2"
        />
      </div>
    </div>
  );
}


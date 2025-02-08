"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { UpdateCard } from "@/components/update-card"

export function JobFilters() {
  return (
    <div className="space-y-6">
      <UpdateCard />
      <div>
        <h2 className="mb-4 text-xl font-semibold text-white">Filters</h2>
        <div className="space-y-4">
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-200">Working schedule</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Checkbox id="full-time" defaultChecked />
                <Label htmlFor="full-time" className="ml-2 text-sm text-gray-300">
                  Full Time
                </Label>
              </div>
              <div className="flex items-center">
                <Checkbox id="internship" />
                <Label htmlFor="internship" className="ml-2 text-sm text-gray-300">
                  Internship
                </Label>
              </div>
              <div className="flex items-center">
                <Checkbox id="freelance" defaultChecked />
                <Label htmlFor="freelance" className="ml-2 text-sm text-gray-300">
                  Freelance
                </Label>
              </div>
              <div className="flex items-center">
                <Checkbox id="contractual" />
                <Label htmlFor="contractual" className="ml-2 text-sm text-gray-300">
                  Contractual
                </Label>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-200">Employment type</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Checkbox id="full-day" defaultChecked />
                <Label htmlFor="full-day" className="ml-2 text-sm text-gray-300">
                  Full day
                </Label>
              </div>
              <div className="flex items-center">
                <Checkbox id="flexible-schedule" />
                <Label htmlFor="flexible-schedule" className="ml-2 text-sm text-gray-300">
                  Flexible schedule
                </Label>
              </div>
              <div className="flex items-center">
                <Checkbox id="distant-work" defaultChecked />
                <Label htmlFor="distant-work" className="ml-2 text-sm text-gray-300">
                  Distant work
                </Label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
 
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {Input} from "@/components/ui/input"

export default function Profile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    bio: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (e.g., update profile)
    console.log("Form submitted:", formData)
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-6 text-2xl font-bold text-white">Update Your Profile</h1>
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
            className="mt-1 bg-gray-800 text-white"
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
            className="mt-1 bg-gray-800 text-white"
          />
        </div>
        <div>
          <Label htmlFor="location" className="text-white">
            Location
          </Label>
          <Input
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 bg-gray-800 text-white"
          />
        </div>
        <div>
          <Label htmlFor="bio" className="text-white">
            Bio
          </Label>
          <Textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="mt-1 bg-gray-800 text-white"
            rows={4}
          />
        </div>
        <Button type="submit" className="bg-[#38A169] text-white hover:bg-[#2F855A]">
          Update Profile
        </Button>
      </form>
    </div>
  )
}


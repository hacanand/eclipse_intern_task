import { NextResponse } from "next/server"

const jobs = [
  {
    id: "1",
    company: {
      name: "Google",
      logo: "https://www.google.com/favicon.ico",
      bgColor: "bg-[#FFF8E7]",
    },
    title: "Senior Product Manager",
    rating: 4,
    reviews: 42,
    location: "California, CA",
    tags: ["Full Time", "Senior Level", "Remote"],
    salary: {
      amount: 2.5,
      period: "Monthly",
    },
  },
  {
    id: "2",
    company: {
      name: "Twitter",
      logo: "https://abs.twimg.com/favicons/twitter.ico",
      bgColor: "bg-[#EBF8FF]",
    },
    title: "Front End Developer",
    rating: 3,
    reviews: 27,
    location: "New York, NY",
    tags: ["Part Time", "Mid Level", "On Site"],
    salary: {
      amount: 1.5,
      period: "Monthly",
    },
  },
  {
    id: "3",
    company: {
      name: "Spotify",
      logo: "https://www.spotify.com/favicon.ico",
      bgColor: "bg-[#F0FFF4]",
    },
    title: "Quality Assurance Engineer",
    rating: 4,
    reviews: 42,
    location: "Rome, IT",
    tags: ["Full Time", "On Site"],
    salary: {
      amount: 1.5,
      period: "Monthly",
    },
  },
]

export async function GET() {
  return NextResponse.json(jobs)
}


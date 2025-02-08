import Image from "next/image"
import Link from "next/link"
import { Bookmark, Star, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface JobCardProps {
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

export function JobCard({ id, company, title, rating, reviews, location, tags, salary }: JobCardProps) {
  return (
    <div className={cn("relative rounded-xl p-6", company.bgColor)}>
      <button className="absolute right-4 top-4 text-gray-600 hover:text-gray-900">
        <Bookmark className="h-5 w-5" />
      </button>
      <div className="mb-4 flex items-center gap-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white">
          <Image
            src={company.logo || "/placeholder.svg"}
            alt={company.name}
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn("h-4 w-4", i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300")}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">({reviews} Reviews)</span>
          </div>
        </div>
      </div>
      <div className="mb-4 flex items-center gap-2 text-gray-600">
        <MapPin className="h-4 w-4" />
        <span className="text-sm">{location}</span>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="bg-white/50 text-gray-700">
            {tag}
          </Badge>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-lg font-semibold text-gray-900">${salary.amount}k</span>
          <span className="text-sm text-gray-600">/{salary.period}</span>
        </div>
        <Link href={`/jobs/${id}`}>
          <Button className="bg-[#38A169] rounded text-white hover:bg-[#2F855A]">View Details</Button>
        </Link>
      </div>
    </div>
  )
}


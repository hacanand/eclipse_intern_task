import { Button } from "@/components/ui/button"
import { Fingerprint } from "lucide-react"

export function UpdateCard() {
  return (
    <div className="rounded-xl bg-[#1A202C] p-6 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full bg-white p-4">
          <Fingerprint className="h-8 w-8 text-[#1A202C]" />
        </div>
      </div>
      <h2 className="mb-2 text-xl font-bold text-white">Update your data !</h2>
      <p className="mb-4 text-sm text-gray-400">Update your data and find the best opportunities</p>
      <Button className="w-full bg-[#38A169] text-white hover:bg-[#2F855A]">Update your data</Button>
    </div>
  )
}


import { useState } from "react"
import { Search } from "lucide-react"
import { UserNav } from "@/components/dashboard/user-nav"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function BlogHeader() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Blog Posts</h2>
        <p className="text-white/80">Browse our latest articles and insights</p>
      </div>
      <div className="flex items-center space-x-3">
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-300" />
          <Input
            type="search"
            placeholder="Search articles..."
            className="w-full pl-8 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-white focus:outline-none bg-white text-gray-700 md:w-[200px] lg:w-[300px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select defaultValue="newest">
          <SelectTrigger className="w-[180px] bg-white text-gray-700 shadow-md hover:bg-gray-100">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
            <SelectItem value="popular">Most Popular</SelectItem>
          </SelectContent>
        </Select>
        <UserNav />
      </div>
    </div>
  )
}

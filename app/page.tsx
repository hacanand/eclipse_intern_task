import { JobFilters } from "@/components/job-filters";
import { JobList } from "@/components/job-list";
import { SearchBar } from "@/components/search-bar";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar />
      <div className="mt-8 flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 flex-shrink-0">
          <JobFilters />
        </aside>
        <main className="flex-1">
          <JobList />
        </main>
      </div>
    </div>
  );
}

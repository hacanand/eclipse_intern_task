
# Eclipse Job Dashboard

Eclipse is a modern job board application built with Next.js, React, and Tailwind CSS. It provides a sleek, user-friendly interface for job seekers to find and apply for jobs, and for employers to post job listings.

![Eclipse Job Dashboard](https://placeholder.com/job-dashboard-screenshot.png)

## Features

- Responsive design for desktop and mobile devices
- Dark mode support
- Job search functionality with filters
- Job listing cards with company information
- Detailed job view pages
- Job application system
- User profile management
- Applied jobs tracking

## Tech Stack

- [Next.js 13](https://nextjs.org/) with App Router
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Lucide React](https://lucide.dev/) for icons
- [Formik](https://formik.org/) for form handling
- [Yup](https://github.com/jquense/yup) for form validation

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/eclipse-job-dashboard.git
   ```

2. Install dependencies:
   ```
   cd eclipse-job-dashboard
   pnpm install
   ```

3. Run the development server:
   ```
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `app/`: Next.js 13 app directory containing pages and API routes
- `components/`: Reusable React components
- `contexts/`: React context providers
- `lib/`: Utility functions and helpers
- `public/`: Static assets

## Key Components

### Header

The header component provides navigation and user controls.

```jsx
<Header />
```

![Header Component](https://placeholder.com/header-component.png)

### SearchBar

The search bar allows users to filter jobs based on various criteria.

```jsx
<SearchBar />
```

![Search Bar Component](https://placeholder.com/search-bar-component.png)

### JobCard

Job cards display key information about each job listing.

```jsx
<JobCard
  id="1"
  company={{
    name: "Google",
    logo: "https://www.google.com/favicon.ico",
    bgColor: "bg-[#FFF8E7]",
  }}
  title="Senior Product Manager"
  rating={4}
  reviews={42}
  location="California, CA"
  tags={["Full Time", "Senior Level", "Remote"]}
  salary={{
    amount: 2.5,
    period: "Monthly",
  }}
/>
```

![Job Card Component](https://placeholder.com/job-card-component.png)

### JobList

The job list component renders a grid of JobCard components.

```jsx
<JobList />
```

![Job List Component](https://placeholder.com/job-list-component.png)

### JobFilters

The job filters component allows users to refine their job search.

```jsx
<JobFilters />
```

![Job Filters Component](https://placeholder.com/job-filters-component.png)

## Pages

### Home Page (/)

The home page displays the search bar, job filters, and a list of job listings.

### Job Details Page (/jobs/[id])

This page shows detailed information about a specific job and allows users to apply.

### Apply for Job Page (/jobs/[id]/apply)

Users can fill out an application form for a specific job on this page.

### Applied Jobs Page (/applied-jobs)

This page displays a list of jobs that the user has applied for.

### Profile Page (/profile)

Users can view and edit their profile information on this page.

## State Management

The application uses React Context for state management. The `JobContext` provides access to job data and application functions throughout the app.

## Styling

The project uses Tailwind CSS for styling, with custom theme colors defined in the `tailwind.config.js` file. The dark mode is implemented using the `next-themes` package.

## API Routes

The project includes a simple API route for fetching job data:

- `GET /api/jobs`: Returns a list of job listings

In a production environment, you would replace this with calls to your backend API.

## Deployment

This project can be easily deployed on [Vercel](https://vercel.com/), the platform created by the makers of Next.js.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

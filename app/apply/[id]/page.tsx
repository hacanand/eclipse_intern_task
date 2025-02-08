"use client"

import { useRouter } from "next/navigation"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useJobs } from "@/contexts/JobContext"

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  resume: Yup.mixed().required("Resume is required"),
  coverLetter: Yup.string().required("Cover letter is required"),
})

export default function ApplyJob({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { getJobById, applyToJob } = useJobs()
  const job = getJobById(params.id)

  if (!job) {
    return <div className="text-center text-white">Job not found</div>
  }

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
  }

  const handleSubmit = (
    values: typeof initialValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    applyToJob(params.id, values)
    setSubmitting(false)
    router.push("/applied-jobs")
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-6 text-2xl font-bold text-white">Apply for {job.title}</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting, setFieldValue }) => (
          <Form className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-white">
                Name
              </Label>
              <Field as={Input} id="name" name="name" className="mt-1 bg-[#1A202C] text-white" />
              <ErrorMessage name="name" component="div" className="mt-1 text-sm text-[#e53e3e]" />
            </div>
            <div>
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Field as={Input} id="email" name="email" type="email" className="mt-1 bg-[#1A202C] text-white" />
              <ErrorMessage name="email" component="div" className="mt-1 text-sm text-[#e53e3e]" />
            </div>
            <div>
              <Label htmlFor="phone" className="text-white">
                Phone
              </Label>
              <Field as={Input} id="phone" name="phone" type="tel" className="mt-1 bg-[#1A202C] text-white" />
              <ErrorMessage name="phone" component="div" className="mt-1 text-sm text-[#e53e3e]" />
            </div>
            <div>
              <Label htmlFor="resume" className="text-white">
                Resume
              </Label>
              <Input
                id="resume"
                name="resume"
                type="file"
                className="mt-1 bg-[#1A202C] text-white"
                onChange={(event) => {
                  setFieldValue("resume", event.currentTarget.files?.[0])
                }}
              />
              <ErrorMessage name="resume" component="div" className="mt-1 text-sm text-[#e53e3e]" />
            </div>
            <div>
              <Label htmlFor="coverLetter" className="text-white">
                Cover Letter
              </Label>
              <Field
                as={Textarea}
                id="coverLetter"
                name="coverLetter"
                rows={4}
                className="mt-1 bg-[#1A202C] text-white"
              />
              <ErrorMessage name="coverLetter" component="div" className="mt-1 text-sm text-[#e53e3e]" />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full bg-[#38A169] text-white hover:bg-[#2F855A]">
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}


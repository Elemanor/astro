import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, Phone, Mail, MapPin } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  service: z.string().min(1, {
    message: "Please select a service.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactFormSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission here
    console.log(values)
    alert("Thank you for your inquiry! We'll contact you within 2 hours.")
    form.reset()
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">Get Started</span>
          <h2 className="text-4xl font-bold mt-2">Request Your Free Inspection</h2>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            Fill out the form below or call us directly. We respond within 2 hours during business hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Get in touch with us directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:4375450067" className="text-blue-600 hover:underline">
                      (437) 545-0067
                    </a>
                    <p className="text-sm text-gray-600">24/7 Emergency Service</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:info@dryspacewaterproofing.ca" className="text-blue-600 hover:underline">
                      info@dryspacewaterproofing.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold">Service Area</p>
                    <p className="text-sm text-gray-600">
                      Toronto, Mississauga, Brampton, Vaughan, Richmond Hill, and all of GTA
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-600 text-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Emergency Service?</h3>
                <p className="mb-4">Water damage can't wait. We're available 24/7 for emergencies.</p>
                <Button asChild variant="secondary" className="w-full">
                  <a href="tel:4375450067">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now for Immediate Help
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Free Inspection Request</CardTitle>
              <CardDescription>
                Fill out the form below and we'll contact you within 2 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Smith" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(416) 555-0123" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Needed</FormLabel>
                        <FormControl>
                          <select 
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            {...field}
                          >
                            <option value="">Select a service...</option>
                            <option value="waterproofing">Basement Waterproofing</option>
                            <option value="underpinning">Basement Underpinning</option>
                            <option value="foundation">Foundation Repair</option>
                            <option value="crack">Crack Repair</option>
                            <option value="emergency">Emergency Service</option>
                            <option value="other">Other / Not Sure</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Describe Your Issue</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please describe your basement or foundation issue..."
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Include details like: when the problem started, severity, any water damage, etc.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Inspection Request
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
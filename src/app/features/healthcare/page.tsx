"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useState } from "react"

export default function HealthcarePage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const healthcareServices = [
    {
      id: "telemedicine",
      title: "Telemedicine",
      description: "24/7 virtual consultations with licensed healthcare professionals",
      icon: "📱",
      features: ["Video consultations", "Prescription delivery", "Follow-up care", "Emergency support"]
    },
    {
      id: "preventive",
      title: "Preventive Care",
      description: "Comprehensive wellness programs and health screenings",
      icon: "🛡️",
      features: ["Annual checkups", "Vaccinations", "Health screenings", "Wellness coaching"]
    },
    {
      id: "emergency",
      title: "Emergency Services",
      description: "Rapid response emergency medical services and coordination",
      icon: "🚑",
      features: ["24/7 emergency line", "Ambulance dispatch", "Hospital coordination", "Medical evacuation"]
    },
    {
      id: "specialized",
      title: "Specialized Care",
      description: "Access to specialists and advanced medical treatments",
      icon: "🏥",
      features: ["Specialist referrals", "Advanced diagnostics", "Treatment coordination", "Second opinions"]
    }
  ]

  const healthRecords = [
    {
      type: "Medical History",
      lastUpdated: "2024-11-15",
      status: "Complete",
      items: ["Allergies", "Medications", "Past surgeries", "Family history"]
    },
    {
      type: "Vital Signs",
      lastUpdated: "2024-11-10",
      status: "Current",
      items: ["Blood pressure", "Heart rate", "Temperature", "BMI"]
    },
    {
      type: "Lab Results",
      lastUpdated: "2024-10-28",
      status: "Pending",
      items: ["Blood work", "Cholesterol", "Diabetes screening", "Vitamin levels"]
    }
  ]

  const wellnessPrograms = [
    {
      title: "Mental Health Support",
      description: "Comprehensive mental health services and counseling",
      participants: 1247,
      success: "94%",
      features: ["Therapy sessions", "Crisis support", "Wellness workshops", "Peer support groups"]
    },
    {
      title: "Fitness & Nutrition",
      description: "Personalized fitness plans and nutritional guidance",
      participants: 2156,
      success: "87%",
      features: ["Personal trainers", "Meal planning", "Fitness tracking", "Nutrition counseling"]
    },
    {
      title: "Chronic Disease Management",
      description: "Ongoing support for managing chronic conditions",
      participants: 892,
      success: "91%",
      features: ["Disease monitoring", "Medication management", "Lifestyle coaching", "Regular check-ins"]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-foreground mb-6">Healthcare & Wellness</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive healthcare services designed for our network state's citizens.
              From preventive care to emergency services, we ensure your health and wellness are prioritized.
            </p>
            <div className="flex gap-4">
              <Button size="lg">Schedule Consultation</Button>
              <Button size="lg" variant="outline">
                View Health Records
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <TabsRoot value={activeTab} onValueChange={(details) => setActiveTab(details.value)}>
          <TabsList className="mb-12">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="records">Health Records</TabsTrigger>
            <TabsTrigger value="wellness">Wellness Programs</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg w-fit mx-auto mb-3">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <CardTitle className="text-lg">Primary Care</CardTitle>
                  <CardDescription>Comprehensive primary healthcare services</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Routine checkups, preventive care, and chronic disease management
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg w-fit mx-auto mb-3">
                    <span className="text-2xl">🩺</span>
                  </div>
                  <CardTitle className="text-lg">Specialized Care</CardTitle>
                  <CardDescription>Expert medical specialists and treatments</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Access to specialists across all medical disciplines
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg w-fit mx-auto mb-3">
                    <span className="text-2xl">🏃‍♂️</span>
                  </div>
                  <CardTitle className="text-lg">Wellness Programs</CardTitle>
                  <CardDescription>Holistic health and wellness initiatives</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Mental health, fitness, nutrition, and lifestyle programs
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg w-fit mx-auto mb-3">
                    <span className="text-2xl">🚑</span>
                  </div>
                  <CardTitle className="text-lg">Emergency Care</CardTitle>
                  <CardDescription>24/7 emergency medical services</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Rapid response emergency care and medical coordination
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Healthcare Philosophy</CardTitle>
                  <CardDescription>Our approach to citizen health and wellness</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Preventive First</h4>
                      <p className="text-sm text-muted-foreground">We prioritize prevention and early intervention to maintain optimal health.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Accessible Care</h4>
                      <p className="text-sm text-muted-foreground">Healthcare should be accessible to all citizens regardless of location or circumstances.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Holistic Wellness</h4>
                      <p className="text-sm text-muted-foreground">We address physical, mental, and emotional health as interconnected aspects of wellness.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Healthcare Statistics</CardTitle>
                  <CardDescription>Current healthcare system metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Citizens Covered</span>
                    <span className="font-semibold">2,847</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Avg. Response Time</span>
                    <span className="font-semibold">8 minutes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Satisfaction Rate</span>
                    <span className="font-semibold">96%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Preventive Care Rate</span>
                    <span className="font-semibold">89%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="services">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Healthcare Services</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive healthcare services tailored to meet the diverse needs of our citizens,
                  from routine care to specialized treatments.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {healthcareServices.map((service) => (
                  <Card key={service.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="text-3xl">{service.icon}</div>
                        <div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                          <CardDescription>{service.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <h4 className="font-semibold">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full mt-4" variant="outline">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Service Access</CardTitle>
                  <CardDescription>How to access healthcare services</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg w-fit mx-auto mb-3">
                        <span className="text-2xl">📱</span>
                      </div>
                      <h4 className="font-semibold mb-2">Mobile App</h4>
                      <p className="text-sm text-muted-foreground">Schedule appointments and access services through our mobile app</p>
                    </div>
                    <div className="text-center">
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg w-fit mx-auto mb-3">
                        <span className="text-2xl">🏥</span>
                      </div>
                      <h4 className="font-semibold mb-2">Local Clinics</h4>
                      <p className="text-sm text-muted-foreground">Visit our network of local healthcare facilities</p>
                    </div>
                    <div className="text-center">
                      <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg w-fit mx-auto mb-3">
                        <span className="text-2xl">🏠</span>
                      </div>
                      <h4 className="font-semibold mb-2">Home Visits</h4>
                      <p className="text-sm text-muted-foreground">Healthcare services delivered to your location</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="records">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Health Records</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Secure, comprehensive health records accessible anytime, anywhere.
                  Your medical history, test results, and treatment plans in one centralized location.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {healthRecords.map((record, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-lg">{record.type}</CardTitle>
                        <Badge variant={record.status === 'Complete' ? 'default' : record.status === 'Current' ? 'secondary' : 'outline'}>
                          {record.status}
                        </Badge>
                      </div>
                      <CardDescription>Last updated: {record.lastUpdated}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Includes:</h4>
                        <ul className="space-y-1">
                          {record.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                        <Button variant="outline" size="sm" className="w-full mt-3">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Data Security</CardTitle>
                    <CardDescription>How we protect your health information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">End-to-End Encryption</h4>
                        <p className="text-sm text-muted-foreground">All health data is encrypted in transit and at rest</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Blockchain Security</h4>
                        <p className="text-sm text-muted-foreground">Health records are secured using blockchain technology</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Access Control</h4>
                        <p className="text-sm text-muted-foreground">You control who can access your health information</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Record Management</CardTitle>
                    <CardDescription>Tools for managing your health data</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full">Download Records</Button>
                    <Button variant="outline" className="w-full">Share with Provider</Button>
                    <Button variant="outline" className="w-full">Update Information</Button>
                    <Button variant="outline" className="w-full">Privacy Settings</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="wellness">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Wellness Programs</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive wellness programs designed to promote healthy living,
                  prevent disease, and improve quality of life for all citizens.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {wellnessPrograms.map((program, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <CardDescription>{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Participants</span>
                          <span className="font-semibold">{program.participants.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Success Rate</span>
                          <Badge variant="secondary">{program.success}</Badge>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Program Features:</h4>
                          <ul className="space-y-1">
                            {program.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                                <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button className="w-full mt-4">Join Program</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Wellness Benefits</CardTitle>
                  <CardDescription>Why participate in our wellness programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg w-fit mx-auto mb-3">
                        <span className="text-2xl">💪</span>
                      </div>
                      <h4 className="font-semibold mb-2">Better Health</h4>
                      <p className="text-sm text-muted-foreground">Improved physical and mental health outcomes</p>
                    </div>
                    <div className="text-center">
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg w-fit mx-auto mb-3">
                        <span className="text-2xl">💰</span>
                      </div>
                      <h4 className="font-semibold mb-2">Cost Savings</h4>
                      <p className="text-sm text-muted-foreground">Reduced healthcare costs through prevention</p>
                    </div>
                    <div className="text-center">
                      <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg w-fit mx-auto mb-3">
                        <span className="text-2xl">👥</span>
                      </div>
                      <h4 className="font-semibold mb-2">Community</h4>
                      <p className="text-sm text-muted-foreground">Connect with others on similar wellness journeys</p>
                    </div>
                    <div className="text-center">
                      <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg w-fit mx-auto mb-3">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <h4 className="font-semibold mb-2">Personalized</h4>
                      <p className="text-sm text-muted-foreground">Tailored programs based on your health needs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </TabsRoot>
      </div>
    </div>
  )
}

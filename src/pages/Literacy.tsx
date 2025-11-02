import { Smartphone, Calendar, FileText, CreditCard, Wifi, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const tutorials = [
  {
    icon: Smartphone,
    title: "Using Health Apps",
    level: "Beginner",
    duration: "10 min",
    description: "Learn how to download and use health-related mobile applications",
    steps: ["Finding apps on Play Store", "Creating an account", "Navigating the interface", "Basic features"],
  },
  {
    icon: Calendar,
    title: "Booking Appointments Online",
    level: "Beginner",
    duration: "8 min",
    description: "Step-by-step guide to book doctor appointments using websites and apps",
    steps: ["Finding hospitals online", "Selecting a doctor", "Choosing time slots", "Confirming booking"],
  },
  {
    icon: FileText,
    title: "Reading Digital Prescriptions",
    level: "Beginner",
    duration: "6 min",
    description: "Understanding digital prescriptions and medical documents",
    steps: ["Accessing prescriptions", "Understanding symbols", "Medicine names", "Dosage instructions"],
  },
  {
    icon: CreditCard,
    title: "Online Payment for Healthcare",
    level: "Intermediate",
    duration: "12 min",
    description: "Safe methods to pay for consultations and medicines online",
    steps: ["Payment methods", "Security tips", "Completing transactions", "Getting receipts"],
  },
  {
    icon: Wifi,
    title: "Using Telemedicine Services",
    level: "Intermediate",
    duration: "15 min",
    description: "How to prepare for and attend video consultations with doctors",
    steps: ["Setting up video call", "Testing audio/video", "During consultation", "Follow-up care"],
  },
  {
    icon: Shield,
    title: "Digital Health Privacy",
    level: "Intermediate",
    duration: "10 min",
    description: "Protecting your personal health information online",
    steps: ["Password security", "Sharing information", "Spotting scams", "Safe practices"],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "bg-green-500";
    case "Intermediate":
      return "bg-orange-500";
    case "Advanced":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

const Literacy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-gradient-to-br from-accent/10 to-primary/10 py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold text-foreground">Digital Health Literacy</h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Master digital health tools with our easy-to-follow tutorials. Start from basics and progress at your own pace.
          </p>
        </div>
      </section>

      {/* Progress Banner */}
      <section className="border-b border-border bg-muted py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Your Learning Progress</p>
              <p className="text-2xl font-bold text-foreground">0 of 6 tutorials completed</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-green-500 text-green-700">
                Beginner: 3 lessons
              </Badge>
              <Badge variant="outline" className="border-orange-500 text-orange-700">
                Intermediate: 3 lessons
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tutorials.map((tutorial, index) => {
              const IconComponent = tutorial.icon;
              return (
                <Card
                  key={index}
                  className="group cursor-pointer overflow-hidden border-2 border-border transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-soft"
                >
                  <CardHeader>
                    <div className="mb-3 flex items-center justify-between">
                      <Badge className={`${getLevelColor(tutorial.level)} text-white`}>
                        {tutorial.level}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{tutorial.duration}</span>
                    </div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-xl bg-gradient-hero p-3 shadow-md">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{tutorial.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">{tutorial.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground">What you'll learn:</p>
                      <ul className="space-y-1">
                        {tutorial.steps.map((step, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                              {i + 1}
                            </div>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Need Help?</h2>
            <p className="mb-6 text-muted-foreground">
              Our tutorials include voice guidance and can be paused anytime. You can also access them offline once downloaded.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Badge variant="outline" className="py-2 text-sm">
                🎧 Audio guidance available
              </Badge>
              <Badge variant="outline" className="py-2 text-sm">
                📱 Works offline
              </Badge>
              <Badge variant="outline" className="py-2 text-sm">
                🌐 Multiple languages
              </Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Literacy;

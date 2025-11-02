import { useState } from "react";
import { MapPin, Phone, Search, Video, MessageSquare, Hospital, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const nearbyFacilities = [
  {
    name: "Community Health Center",
    type: "Primary Care",
    distance: "2.3 km",
    phone: "1800-XXX-XXXX",
    hours: "24/7 Emergency",
    services: ["General Medicine", "Emergency Care", "Lab Tests"],
  },
  {
    name: "District Hospital",
    type: "Multi-specialty",
    distance: "8.5 km",
    phone: "1800-YYY-YYYY",
    hours: "24/7",
    services: ["Surgery", "ICU", "Maternity", "Pediatrics"],
  },
  {
    name: "Rural Health Clinic",
    type: "Primary Care",
    distance: "5.1 km",
    phone: "1800-ZZZ-ZZZZ",
    hours: "8 AM - 6 PM",
    services: ["Basic Care", "Vaccination", "First Aid"],
  },
];

const Healthcare = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-gradient-to-br from-secondary/10 to-primary/10 py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold text-foreground">Find Healthcare</h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Locate nearby hospitals and clinics, or connect with doctors through teleconsultation
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="border-b border-border bg-card py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for hospitals, clinics, or doctors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="default">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Teleconsultation Options */}
      <section className="border-b border-border py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Teleconsultation Services</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-2 border-primary/20 transition-all hover:border-primary hover:shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Video className="h-6 w-6 text-primary" />
                  </div>
                  Video Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Connect with doctors via video call for detailed consultations
                </p>
                <Button variant="default" className="w-full">
                  Start Video Call
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 transition-all hover:border-secondary hover:shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="rounded-lg bg-secondary/10 p-2">
                    <MessageSquare className="h-6 w-6 text-secondary" />
                  </div>
                  Chat Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Chat with healthcare professionals for quick advice
                </p>
                <Button variant="secondary" className="w-full">
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nearby Facilities */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Nearby Healthcare Facilities</h2>
          <div className="space-y-4">
            {nearbyFacilities.map((facility, index) => (
              <Card key={index} className="border-2 border-border transition-all hover:border-primary hover:shadow-card">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="mb-2 flex items-start gap-3">
                        <div className="rounded-lg bg-accent/10 p-2">
                          <Hospital className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{facility.name}</h3>
                          <p className="text-sm text-muted-foreground">{facility.type}</p>
                        </div>
                      </div>
                      <div className="ml-14 space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{facility.distance} away</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{facility.hours}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {facility.services.map((service, i) => (
                            <span
                              key={i}
                              className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 md:flex-col">
                      <Button variant="outline" size="sm" className="flex-1 md:flex-none">
                        <Phone className="mr-2 h-4 w-4" />
                        Call
                      </Button>
                      <Button variant="soft" size="sm" className="flex-1 md:flex-none">
                        <MapPin className="mr-2 h-4 w-4" />
                        Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;

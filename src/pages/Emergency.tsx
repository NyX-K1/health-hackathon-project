import { Phone, MapPin, Ambulance, AlertCircle, Hospital, Pill } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const emergencyNumbers = [
  { name: "Ambulance", number: "108", icon: Ambulance, color: "bg-red-500" },
  { name: "National Emergency", number: "112", icon: AlertCircle, color: "bg-orange-500" },
  { name: "Women Helpline", number: "1091", icon: Phone, color: "bg-purple-500" },
  { name: "Child Helpline", number: "1098", icon: Phone, color: "bg-blue-500" },
];

const nearbyEmergency = [
  {
    name: "District Hospital Emergency",
    type: "24/7 Emergency Room",
    distance: "8.5 km",
    phone: "1800-XXX-XXXX",
    icon: Hospital,
  },
  {
    name: "Community Health Center",
    type: "Primary Emergency Care",
    distance: "2.3 km",
    phone: "1800-YYY-YYYY",
    icon: Hospital,
  },
  {
    name: "24/7 Pharmacy",
    type: "Emergency Medicines",
    distance: "3.1 km",
    phone: "1800-ZZZ-ZZZZ",
    icon: Pill,
  },
];

const Emergency = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-gradient-to-br from-destructive/10 to-orange-500/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-10 w-10 text-destructive" />
            <div>
              <h1 className="text-4xl font-bold text-foreground">Emergency Resources</h1>
              <p className="mt-2 text-lg text-muted-foreground">Quick access to emergency contacts and nearby facilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Numbers */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Emergency Helpline Numbers</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {emergencyNumbers.map((emergency, index) => {
              const IconComponent = emergency.icon;
              return (
                <Card
                  key={index}
                  className="group cursor-pointer overflow-hidden border-2 border-border transition-all duration-300 hover:scale-105 hover:border-destructive hover:shadow-soft"
                >
                  <CardContent className="p-6">
                    <div className={`mb-4 inline-flex rounded-xl ${emergency.color} p-3 shadow-md`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-foreground">{emergency.name}</h3>
                    <div className="mb-4 text-3xl font-bold text-destructive">{emergency.number}</div>
                    <Button variant="destructive" className="w-full" size="lg">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nearby Emergency Facilities */}
      <section className="border-t border-border bg-muted py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Nearby Emergency Facilities</h2>
          <div className="space-y-4">
            {nearbyEmergency.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <Card key={index} className="border-2 border-border transition-all hover:border-destructive hover:shadow-card">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <div className="mb-2 flex items-start gap-3">
                          <div className="rounded-lg bg-destructive/10 p-2">
                            <IconComponent className="h-6 w-6 text-destructive" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground">{facility.name}</h3>
                            <p className="text-sm text-muted-foreground">{facility.type}</p>
                          </div>
                        </div>
                        <div className="ml-14 space-y-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span className="font-semibold">{facility.distance} away</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone className="h-4 w-4" />
                            <span>{facility.phone}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 md:flex-col">
                        <Button variant="destructive" size="lg" className="flex-1 md:flex-none">
                          <Phone className="mr-2 h-4 w-4" />
                          Emergency Call
                        </Button>
                        <Button variant="outline" size="lg" className="flex-1 md:flex-none">
                          <MapPin className="mr-2 h-4 w-4" />
                          Get Directions
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* First Aid Tips */}
      <section className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Basic First Aid Tips</h2>
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-primary" />
                  While Waiting for Emergency Help
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Stay calm and keep the patient comfortable</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Do not move the patient if there's a serious injury</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Stop any bleeding by applying gentle pressure</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Keep the patient warm with a blanket</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Note down what happened and when it occurred</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Emergency;

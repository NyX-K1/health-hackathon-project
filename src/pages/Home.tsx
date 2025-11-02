import { Link } from "react-router-dom";
import { Heart, BookOpen, MapPin, Users, Smartphone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/rural-healthcare.jpg";
import communityImage from "@/assets/healthcare-clinic.jpg";
import elderImage from "@/assets/mobile-clinic.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl">
                Healthcare Shouldn't Depend on Distance
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl max-w-xl">
                A simple app that helps people in rural areas access health information, learn about digital health tools, and find nearby healthcare services—even on slow internet.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-xl shadow-medium hover:shadow-strong transition-all">
                  <Link to="/education">Explore Health Topics</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl">
                  <Link to="/healthcare">Find Healthcare</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img 
                src={heroImage} 
                alt="Healthcare worker helping rural community" 
                className="rounded-2xl shadow-strong w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              The Reality We're Facing
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In many rural areas, the nearest hospital is hours away. Simple questions like "Is this fever serious?" or "When should my child get vaccinated?" go unanswered. 
              Many people don't know how to book appointments online or understand their prescriptions. Access to healthcare shouldn't be this hard.
            </p>
            <div className="pt-4">
              <blockquote className="italic text-xl text-primary font-medium border-l-4 border-primary pl-6">
                "No one should lack healthcare because of distance."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={communityImage} 
                alt="Community learning together" 
                className="rounded-2xl shadow-medium w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                How We're Solving This
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                HealthConnect brings essential health information and services to your phone. We've designed everything to work on slow internet, 
                use simple language, and be accessible to everyone—even those who aren't tech-savvy.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                  <p className="text-muted-foreground">Easy-to-understand health guides on hygiene, nutrition, and common diseases</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                  <p className="text-muted-foreground">Step-by-step tutorials on using digital health tools</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                  <p className="text-muted-foreground">Find nearby hospitals and connect with doctors remotely</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              What You Can Do Here
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple tools designed for real people facing real challenges.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary hover:shadow-medium transition-all duration-300 rounded-xl">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold">Health Education</h3>
                <p className="text-muted-foreground">
                  Learn about hygiene, vaccinations, nutrition, and preventing common diseases in simple, visual guides.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary hover:shadow-medium transition-all duration-300 rounded-xl">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-semibold">Digital Literacy</h3>
                <p className="text-muted-foreground">
                  Easy tutorials on booking appointments online, reading digital prescriptions, and using health apps.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary hover:shadow-medium transition-all duration-300 rounded-xl">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-accent-foreground/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold">Find Healthcare</h3>
                <p className="text-muted-foreground">
                  Locate nearby hospitals, clinics, and pharmacies. Connect with doctors through chat or video.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary hover:shadow-medium transition-all duration-300 rounded-xl">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-semibold">Emergency Help</h3>
                <p className="text-muted-foreground">
                  Quick access to emergency numbers and nearby emergency facilities when every second counts.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary hover:shadow-medium transition-all duration-300 rounded-xl">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold">Offline Access</h3>
                <p className="text-muted-foreground">
                  Once you've opened any section, the information saves on your device and works without internet.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary hover:shadow-medium transition-all duration-300 rounded-xl">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-accent-foreground/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold">Voice Support</h3>
                <p className="text-muted-foreground">
                  Use voice search and navigation for those who find typing difficult or are still learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              The Difference We Hope to Make
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Every person who learns to check symptoms online, every family that finds a nearby clinic, every elderly person who books their first telemedicine appointment—that's progress. 
              Small steps toward making healthcare accessible to everyone, everywhere.
            </p>
            <div className="grid gap-8 md:grid-cols-3 pt-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold font-heading">10,000+</div>
                <div className="text-white/80">People we aim to reach</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold font-heading">50+</div>
                <div className="text-white/80">Villages we want to serve</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold font-heading">24/7</div>
                <div className="text-white/80">Access to health info</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Why We Built This
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We're a small team of students who've seen family members struggle to access basic healthcare. Whether it was a grandmother who couldn't read her prescription or a cousin who had to travel 50 kilometers for a simple checkup—we've all experienced the gap.
                </p>
                <p>
                  During a college hackathon, we decided to stop talking about the problem and actually do something. We're not healthcare experts or professional developers—just people who believe technology should make life easier, not harder.
                </p>
                <p className="font-medium text-foreground">
                  This is our small attempt to bridge that gap. To make healthcare feel a little less distant for people who need it most.
                </p>
              </div>
            </div>
            <div>
              <img 
                src={elderImage} 
                alt="Elderly person using smartphone for healthcare" 
                className="rounded-2xl shadow-medium w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Our Vision for the Future
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We imagine a world where your location doesn't determine your access to healthcare. Where a farmer in a remote village can video-call a doctor as easily as someone in a city. 
              Where health literacy isn't a privilege, but a right everyone can exercise from their phone.
            </p>
            <p className="text-lg text-foreground font-medium pt-4">
              One app, one village, one person at a time—we're working toward that future.
            </p>
            <div className="pt-8">
              <Button asChild size="lg" className="rounded-xl shadow-medium hover:shadow-strong transition-all">
                <Link to="/education">Start Learning Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
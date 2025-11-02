import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  gradient?: string;
}

const FeatureCard = ({ icon: Icon, title, description, link, gradient }: FeatureCardProps) => {
  return (
    <Card className="group overflow-hidden border-2 border-border bg-card shadow-card transition-all duration-300 hover:scale-105 hover:shadow-soft">
      <CardContent className="p-6">
        <div className={`mb-4 inline-flex rounded-xl p-3 ${gradient || "bg-gradient-hero"}`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-foreground">{title}</h3>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <Link to={link}>
          <Button variant="outline" size="sm" className="w-full">
            Learn More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;

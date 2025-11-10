import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";

interface PillarCardProps {
  name: string;
  arabic: string;
  description: string;
  link: string;
}

const PillarCard = ({ name, arabic, description, link }: PillarCardProps) => {
  return (
    <Link to={link} className="group">
      <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-accent bg-card">
        <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
          <div className="text-5xl font-amiri text-accent group-hover:scale-110 transition-transform duration-300">
            {arabic}
          </div>
          <h3 className="text-2xl font-amiri font-bold text-primary">{name}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PillarCard;

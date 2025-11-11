import Layout from "@/components/Layout";
import PillarCard from "@/components/PillarCard";
import heroImage from "@/assets/islamic-hero.jpg";

const Index = () => {
  const pillars = [
    {
      name: "Shahada",
      arabic: "ٱلشَّهَادَة",
      description: "The Declaration of Faith, affirming the oneness of God and the prophethood of Muhammad.",
      link: "/shahada",
    },
    {
      name: "Salah",
      arabic: "صَلَاة",
      description: "The ritual prayers performed five times a day, fostering constant mindfulness of God.",
      link: "/salah",
    },
    {
      name: "Zakat",
      arabic: "زَكَاة",
      description: "The obligatory charity, purifying wealth and supporting the most vulnerable in society.",
      link: "/zakat",
    },
    {
      name: "Ramadan",
      arabic: "رَمَضَان",
      description: "The fasting during the month of Ramadan, cultivating discipline, gratitude, and empathy.",
      link: "/ramadan",
    },
    {
      name: "Hajj",
      arabic: "حَجّ",
      description: "The pilgrimage to Mecca, a journey every able Muslim must make once in their lifetime.",
      link: "/hajj",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Islamic geometric patterns" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-background/90" />
        </div>
        <div className="relative z-10 text-center px-4 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">
            The Five Pillars of Islam
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light">
            Exploring the Framework of a Muslim's Life
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-islamic-pattern">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-lg md:text-xl leading-relaxed text-center text-foreground">
            In Islam, faith is not merely a belief held in the heart, but a dynamic force expressed through action. 
            The Five Pillars of Islam are the core beliefs and practices that unite all Muslims worldwide, forming 
            the spiritual foundation and framework for a life devoted to God (Allah). They balance personal devotion 
            with social responsibility, connecting the person to the community and the Divine.
          </p>
        </div>
      </section>

      {/* Five Pillars Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {pillars.map((pillar) => (
              <PillarCard key={pillar.name} {...pillar} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

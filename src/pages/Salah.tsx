import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const Salah = () => {
  return (
    <Layout>
      {/* Header Banner */}
      <section className="bg-primary text-primary-foreground py-20 islamic-pattern">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-accent">Salah</h1>
          <div className="text-5xl md:text-7xl font-amiri text-foreground">
            صَلَاة
          </div>
        </div>
      </section>

      {/* Core Quote Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">The Five Daily Prayers</h2>
          <Card className="border-2 border-accent">
            <CardContent className="p-8 md:p-12 space-y-6">
              <p className="text-xl md:text-2xl text-center text-foreground leading-relaxed">
                Muslims perform ritual prayers five times daily: at dawn (Fajr), midday (Dhuhr), afternoon (Asr), 
                sunset (Maghrib), and night (Isha). Each prayer time serves as a spiritual anchor throughout the day.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Two Column Section */}
      <section className="py-16 bg-islamic-pattern">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Zahir */}
            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-accent">The Physical Act</h3>
                <p className="text-lg leading-relaxed text-foreground">
                  Salah involves a sequence of physical postures including standing, bowing, prostrating, and 
                  sitting, accompanied by recitations from the Quran and supplications. Muslims face the Kaaba 
                  in Mecca during prayer, symbolizing unity and direction. The act requires ritual purity through 
                  ablution (wudu), emphasizing cleanliness and preparation for communion with the Divine.
                </p>
              </CardContent>
            </Card>

            {/* Right Column - Batin */}
            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-accent">The Spiritual Dimension</h3>
                <p className="text-lg leading-relaxed text-foreground">
                  Prayer is a moment of direct connection between the believer and God, a time to step away from 
                  worldly concerns and remember the greater purpose of existence. The five daily prayers create a 
                  rhythm of remembrance, preventing the heart from becoming heedless. Through Salah, believers 
                  cultivate mindfulness, gratitude, humility, and discipline—qualities that extend beyond the 
                  prayer mat into all aspects of life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-2 border-accent overflow-hidden">
            <CardContent className="p-0">
              <img 
                src={`${import.meta.env.BASE_URL}photos/IMG_6952.jpeg`}
                alt="Muslims performing Salah - Islamic Prayer"
                className="w-full h-full object-cover aspect-[16/9]"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Symbolism Section */}
      <section className="py-16 bg-islamic-pattern">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-2 border-primary">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-6 text-center text-primary">Unity in Diversity</h3>
              <p className="text-lg leading-relaxed text-foreground">
                Across the globe, Muslims pray in unison at the same times, facing the same direction. This 
                synchronized act of worship creates a powerful sense of global community and shared purpose. 
                Whether in a grand mosque or a quiet room, alone or in congregation, the prayer connects each 
                individual to the entire Muslim world, transcending geographical, linguistic, and cultural boundaries.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Salah;

import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const Ramadan = () => {
  return (
    <Layout>
      {/* Header Banner */}
      <section className="bg-primary text-primary-foreground py-20 islamic-pattern">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">Ramadan</h1>
          <div className="text-5xl md:text-7xl font-amiri text-accent">
            رمضان
          </div>
          <p className="text-2xl mt-6 text-primary-foreground/90">The Sacred Month of Fasting</p>
        </div>
      </section>

      {/* Core Quote Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">The Sacred Month</h2>
          <Card className="border-2 border-accent">
            <CardContent className="p-8 md:p-12 space-y-6">
              <p className="text-xl md:text-2xl text-center text-foreground leading-relaxed">
                Ramadan commemorates the month when Muhammad received his first revelation from God. During this 
                blessed month, Muslims fast from dawn to sunset, abstaining from food, drink, and other physical 
                needs to redirect their focus toward spiritual growth and devotion.
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
                <h3 className="text-2xl font-bold mb-6 text-accent">The Physical Practice</h3>
                <p className="text-lg leading-relaxed text-foreground mb-4">
                  Fasting takes place from the first light of dawn (Fajr) until sunset (Maghrib). Muslims wake 
                  before dawn for a pre-fast meal (Suhoor) and break their fast at sunset with dates and water, 
                  followed by the Iftar meal. Throughout the day, believers abstain from:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>Food and drink</li>
                  <li>Smoking and other physical indulgences</li>
                  <li>Marital relations during daylight hours</li>
                  <li>Gossip, anger, and negative behavior</li>
                </ul>
              </CardContent>
            </Card>

            {/* Right Column - Batin */}
            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-accent">The Spiritual Journey</h3>
                <p className="text-lg leading-relaxed text-foreground">
                  Ramadan is much more than physical abstinence—it is a comprehensive spiritual exercise. The fast:
                </p>
                <ul className="list-disc list-inside space-y-3 text-foreground mt-4">
                  <li><strong>Develops sympathy for the poor</strong> by experiencing hunger and thirst</li>
                  <li><strong>Cultivates discipline</strong> and strengthens willpower</li>
                  <li><strong>Signals piety</strong> and commitment to God</li>
                  <li><strong>Reorients the mind</strong> away from worldly distractions</li>
                  <li><strong>Demonstrates prioritization of spirit over flesh</strong></li>
                </ul>
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
              <div className="aspect-[16/9] bg-muted flex items-center justify-center">
                <p className="text-muted-foreground italic">Image placeholder: Ramadan/Iftar scene</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Symbolism Section */}
      <section className="py-16 bg-islamic-pattern">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-2 border-primary">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-6 text-center text-primary">A Month of Transformation</h3>
              <p className="text-lg leading-relaxed text-foreground">
                Ramadan is a time of heightened devotion, increased charity, and community bonding. Muslims engage 
                in extra prayers (Tarawih), read the entire Quran, and strengthen family and social ties through 
                shared Iftar meals. The month concludes with Eid al-Fitr, a joyous celebration marking the end of 
                fasting. Through Ramadan, believers emerge with renewed faith, greater self-control, and a deeper 
                appreciation for God's blessings and the struggles of those less fortunate.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Ramadan;

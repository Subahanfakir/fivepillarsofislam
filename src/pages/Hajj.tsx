import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const Hajj = () => {
  return (
    <Layout>
      {/* Header Banner */}
      <section className="bg-primary text-primary-foreground py-20 islamic-pattern">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-accent">Hajj</h1>
          <div className="text-5xl md:text-7xl font-amiri text-foreground">
            حَجّ
          </div>
          <p className="text-2xl mt-6 text-accent">The Pilgrimage to Mecca</p>
        </div>
      </section>

      {/* Core Quote Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">The Sacred Journey</h2>
          <Card className="border-2 border-accent">
            <CardContent className="p-8 md:p-12 space-y-6">
              <p className="text-xl md:text-2xl text-center text-foreground leading-relaxed">
                The annual Islamic pilgrimage to the Ka'aba in Mecca, situated in Islam's most important mosque—
                Al-Masjid Al-Haram (The Sacred Mosque). All Muslims are expected to perform the Hajj at least 
                once in their life if they are physically and financially capable.
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
                <h3 className="text-2xl font-bold mb-6 text-accent">The Rituals</h3>
                <p className="text-lg leading-relaxed text-foreground mb-4">
                  Hajj takes place during the Islamic month of Dhul-Hijjah and involves a series of sacred rituals:
                </p>
                <ul className="list-disc list-inside space-y-3 text-foreground">
                  <li><strong>Ihram:</strong> Pilgrims enter a state of purity, wearing simple white garments</li>
                  <li><strong>Tawaf:</strong> Circumambulating the Ka'aba seven times</li>
                  <li><strong>Sa'i:</strong> Walking between the hills of Safa and Marwah</li>
                  <li><strong>Standing at Arafat:</strong> The climax of Hajj, a day of prayer and reflection</li>
                  <li><strong>Symbolic stoning of the devil</strong> at Mina</li>
                  <li><strong>Animal sacrifice</strong> commemorating Abraham's willingness to sacrifice his son</li>
                </ul>
              </CardContent>
            </Card>

            {/* Right Column - Batin */}
            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-accent">The Spiritual Transformation</h3>
                <p className="text-lg leading-relaxed text-foreground">
                  Hajj is a profound journey of submission, equality, and renewal. The simple white garments 
                  eliminate all markers of social status, wealth, and nationality—before God, all are equal. 
                  The pilgrimage traces the footsteps of Prophet Abraham, his wife Hagar, and their son Ishmael, 
                  connecting pilgrims to thousands of years of monotheistic tradition. It is a time for seeking 
                  forgiveness, making supplications, and experiencing the overwhelming unity of the global Muslim 
                  community. Many pilgrims describe Hajj as a life-changing experience that deepens their faith 
                  and commitment to living a righteous life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Malcolm X Quote Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-2 border-accent bg-card">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-8 text-center text-primary">A Witness to Unity</h3>
              <blockquote className="text-lg leading-relaxed text-foreground italic border-l-4 border-accent pl-6">
                <p className="mb-4">
                  "There were tens of thousands of pilgrims, from all over the world. They were of all colors, 
                  from blue-eyed blonds to black-skinned Africans. But we were all participating in the same 
                  ritual, displaying a spirit of unity and brotherhood that my experiences in America had led 
                  me to believe never could exist between the white and non-white."
                </p>
                <footer className="text-right mt-6 not-italic font-semibold text-accent">
                  — Malcolm X, after performing Hajj in 1964
                </footer>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Video and Image Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-3xl font-bold text-center mb-8 text-primary">Experience the Hajj</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Video */}
            <div className="aspect-video rounded-lg overflow-hidden border-2 border-accent">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/0RPmioCCVpI"
                title="Hajj Experience"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            
            {/* Image */}
            <Card className="border-2 border-primary overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="/photos/Muslim-performing-Hajj-in-Makkah-Credits-Denison-Forum.png" 
                  alt="Muslims performing Hajj in Makkah"
                  className="w-full h-full object-cover aspect-video"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Symbolism Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-2 border-primary">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-6 text-center text-primary">The Ultimate Expression of Faith</h3>
              <p className="text-lg leading-relaxed text-foreground">
                The Hajj represents the pinnacle of Islamic practice, combining all elements of faith into one 
                transformative journey. It embodies submission to God, remembrance of prophetic history, physical 
                sacrifice, communal solidarity, and spiritual rebirth. For many Muslims, completing the Hajj is 
                the fulfillment of a lifelong dream and a profound demonstration of devotion that marks a turning 
                point in their spiritual journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Hajj;

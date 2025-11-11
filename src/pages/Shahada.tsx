import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const Shahada = () => {
  return (
    <Layout>
      {/* Header Banner */}
      <section className="bg-primary text-primary-foreground py-20 islamic-pattern">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-accent">Shahada</h1>
          <div className="text-5xl md:text-7xl font-amiri text-foreground">
            ٱلشَّهَادَة
          </div>
        </div>
      </section>

      {/* Core Quote Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">The Declaration</h2>
          <Card className="border-2 border-accent">
            <CardContent className="p-8 md:p-12 space-y-6">
              <p className="text-3xl md:text-4xl text-center font-amiri leading-relaxed text-primary">
                أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ ٱللَّٰهِ
              </p>
              <p className="text-xl md:text-2xl text-center text-muted-foreground italic">
                "I bear witness that there is no god but God, and I bear witness that Muhammad is the Messenger of God."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Video and Image Section */}
      <section className="py-16 bg-islamic-pattern">
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-3xl font-bold text-center mb-8 text-primary">Listen to the Shahada</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Video */}
            <div className="aspect-video rounded-lg overflow-hidden border-2 border-accent">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/YHwLYn2WJ0E"
                title="Shahada Recitation"
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
                  src="/photos/shahada-declaration-faith-islam-first-pillar.jpg" 
                  alt="Shahada - The Islamic Declaration of Faith"
                  className="w-full h-full object-cover aspect-video"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Two Column Section */}
      <section className="py-16 bg-islamic-pattern">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Zahir */}
            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-accent">The Act of Witnessing</h3>
                <p className="text-lg leading-relaxed text-foreground">
                  This is the most fundamental statement of Islamic belief. To become a Muslim, a person must 
                  recite this phrase with sincere faith and understanding. It is also whispered into the ear of 
                  a newborn baby and is the ultimate goal of a Muslim's final words before death.
                </p>
              </CardContent>
            </Card>

            {/* Right Column - Batin */}
            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-accent">The Meaning Within</h3>
                <p className="text-lg leading-relaxed text-foreground">
                  The Shahada is far more than words. The first half establishes the core principle of Tawhid, 
                  the absolute oneness and unity of God. It rejects all false idols, including wealth, power, 
                  and ego. The second half affirms that Muhammad is the final guide to understanding God's will. 
                  Together, they reorient a person's entire life, making God the central focus and the Prophet's 
                  teachings the practical example.
                </p>
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
              <h3 className="text-3xl font-bold mb-6 text-center text-primary">A Symbol of Unity</h3>
              <p className="text-lg leading-relaxed text-foreground">
                The Shahada is often found inscribed on Islamic flags, coins, and architecture. Its pervasive 
                presence is a constant reminder of the core belief that unites over a billion people across 
                diverse cultures and languages into a single global community, the Ummah.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Shahada;

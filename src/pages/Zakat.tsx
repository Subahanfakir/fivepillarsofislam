import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const Zakat = () => {
  return (
    <Layout>
      {/* Header Banner */}
      <section className="bg-primary text-primary-foreground py-20 islamic-pattern">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-accent">Zakat</h1>
          <div className="text-5xl md:text-7xl font-amiri text-foreground">
            زَكَاة
          </div>
        </div>
      </section>

      {/* Core Quote Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">The Obligation of Charity</h2>
          <Card className="border-2 border-accent">
            <CardContent className="p-8 md:p-12 space-y-6">
              <p className="text-xl md:text-2xl text-center text-foreground leading-relaxed">
                Muslims are encouraged to donate a certain percentage of their property and belongings—typically 
                2.5%—to support those in need. This mandatory act of charity is not optional but a fundamental 
                obligation for those who have the means.
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
                <h3 className="text-2xl font-bold mb-6 text-accent">The Act of Giving</h3>
                <p className="text-lg leading-relaxed text-foreground">
                  Zakat is calculated as a fixed percentage (usually 2.5%) of one's accumulated wealth and assets 
                  that have been held for a full lunar year. It is distributed to specific categories of recipients 
                  including the poor, the needy, those in debt, and those working to spread Islam. This systematic 
                  approach ensures that wealth circulates within society rather than accumulating in the hands of 
                  a few.
                </p>
              </CardContent>
            </Card>

            {/* Right Column - Batin */}
            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-accent">The Purification of Wealth</h3>
                <p className="text-lg leading-relaxed text-foreground">
                  The word "Zakat" derives from the Arabic root meaning "to purify" or "to grow." By giving Zakat, 
                  believers purify their remaining wealth and acknowledge that all possessions ultimately belong to 
                  God. It reflects generosity to the poor, creates empathy across social classes, and serves as a 
                  practical means to more equally distribute resources across society. Zakat transforms wealth from 
                  a potential source of greed into a vehicle for compassion and justice.
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
                src={`${import.meta.env.BASE_URL}photos/muslim-people-giving-zakat-illustration_591903-354.jpeg`}
                alt="Zakat - Islamic Charity and Giving"
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
              <h3 className="text-3xl font-bold mb-6 text-center text-primary">A Pillar of Social Justice</h3>
              <p className="text-lg leading-relaxed text-foreground">
                Zakat represents Islam's commitment to social welfare and economic justice. It is not mere charity 
                left to individual discretion, but a structured obligation that addresses systemic poverty and 
                inequality. Through Zakat, Islam establishes a society where the fortunate have a duty to support 
                the less fortunate, fostering solidarity, reducing disparity, and building a community rooted in 
                mutual care and responsibility.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Zakat;

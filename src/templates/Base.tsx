import Demo from '../demo/Demo';
import { Integrations } from '../integrations/Integrations';
import { Meta } from '../layout/Meta';
import { Quicklook } from '../quicklook/Quicklook';
import { Showcase } from '../showcase/Showcase';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';

const Base = () => (
  <div className="antialiased bg-background-100 text-background-200">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Demo />
    <Showcase />
    <Quicklook />
    <Integrations />
    <Banner />
    <Footer />
  </div>
);

export { Base };

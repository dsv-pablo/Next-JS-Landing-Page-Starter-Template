import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="80% das empresas do Brasil quebram antes de alcançar a escala."
      subtitle="inove e saia na frente!"
      button={
        <Link href="/">
          <Button>Contate a Lu Tech</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };

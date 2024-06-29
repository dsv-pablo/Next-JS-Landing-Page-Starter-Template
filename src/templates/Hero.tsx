import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-primary-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">Quem somos</Link>
        </li>
        <li>
          <Link href="/">Perguntas</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Tecnologia e inovação a favor do\n'}
            <span className="text-primary-500">seu negócio</span>
          </>
        }
        description="Escale seu empreendimento com soluções de software personalizadas."
        button={
          <Link href="https://wa.me/5524992682323">
            <Button xl>🚀 Alavancar meu Negócio</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };

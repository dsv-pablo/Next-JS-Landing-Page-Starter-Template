import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section title="Como a Lu Tech vai ajudar a alavancar seu negócio ?">
    <VerticalFeatureRow
      title="Soluções Baseadas em Dados"
      description="Utilizando de maneira estratégica os dados do seu negócio para produzir soluções personalizadas melhorar seu Product-Market Fit (Alinhamento Produto-Mercado)."
      image="/assets/images/feature.svg"
      imageAlt="A imagem mostra uma ilustração de um documento saindo da tela de um computador, o globo terrestre a direita e um cliente com um carrinho de compras a esquerda."
    />
    <VerticalFeatureRow
      title="Aumente sua Receita"
      description="Agregando maior valor ao seu empreendimento utilizando as soluções de software que a Lu Tech cria especificamente para o nicho e contexto do seu negócio, seja ele tradicional ou digital."
      image="/assets/images/feature2.svg"
      imageAlt="A imagem mostra um gráfico de barras crescente, com ilustrações de notas de dinheiro na base se sobrepondo. Ela também mostra uma menina correndo sobre o gráfico como se ele fosse uma escada e no último degrau há uma moeda de ouro."
      reverse
    />
    <VerticalFeatureRow
      title="Aumente o Engajamento dos Colaboradores"
      description="Criando ferramentas personalizadas para otimizar processos internos que demandam muito tempo e energia dos seus colaboradores."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };

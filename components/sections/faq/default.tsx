import Link from "next/link";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Perguntas e Respostas",
  items = [
    {
      question:
        "Por que centralizar a gestão de tráfego é essencial para escalar?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Em um cenário de anúncios cada vez mais competitivo, perder tempo alternando entre abas do Google e da Meta significa perder dinheiro. Uma visão unificada permite identificar rapidamente qual canal está performando melhor e ajustar o orçamento em tempo real para maximizar o ROI.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Nossa plataforma ajuda você a agir rápido, sem se perder na complexidade das ferramentas nativas.
          </p>
        </>
      ),
    },
    {
      question: "Por que usar nossa plataforma em vez de planilhas de acompanhamento?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            Enquanto planilhas dependem de exportações manuais e estão sujeitas a erros humanos, nossa plataforma oferece dados via API em tempo real.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            Além de economizar horas de trabalho operacional, eliminamos o atraso na leitura dos dados, permitindo que você tome decisões baseadas no que está acontecendo agora, não no que aconteceu ontem.
          </p>
        </>
      ),
    },
    {
      question:
        "Como a plataforma se diferencia de outros dashboards de métricas?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Diferente de visualizadores de dados genéricos, fomos criados por quem entende a rotina de um gestor. Focamos em atribuição e clareza: não entregamos apenas números, mas insights sobre a jornada do cliente entre Meta e Google.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Nossa interface é otimizada para performance, carregando dados de forma instantânea.
          </p>
        </>
      ),
    },
    {
      question: 'O que significa dizer que "o controle dos dados é seu"?',
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Seguimos rigorosamente a LGPD e garantimos que você tenha total transparência sobre a origem e o processamento das informações.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Não armazenamos senhas de acesso direto; utilizamos tokens de autenticação seguros. Você tem a liberdade de conectar e desconectar suas contas a qualquer momento, mantendo a soberania total sobre sua estratégia de marketing.
          </p>
        </>
      ),
    },
    {
      question: "A plataforma oferece suporte para rastreamento via UTM?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[580px]">
          Sim, a organização via UTM é o coração do nosso sistema. Automatizamos a parametrização para garantir que cada clique seja rastreado corretamente, permitindo que você veja exatamente qual anúncio, conjunto ou campanha gerou a conversão final dentro do seu funil.
        </p>
      ),
    },
    {
      question: "Posso testar a ferramenta antes de assinar?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Acreditamos tanto na eficiência da nossa solução que oferecemos um período de demonstração completo.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Você pode conectar suas contas, visualizar seus primeiros dashboards e sentir a diferença na sua operação diária antes de qualquer compromisso financeiro.
          </p>
        </>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}

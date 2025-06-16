import React, { useState } from 'react';
import { 
  Heart, 
  Star, 
  CheckCircle, 
  TrendingUp, 
  Clock, 
  Gift, 
  Users, 
  Zap,
  DollarSign,
  BookOpen,
  Video,
  Download,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-rose-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                CrochêPro
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Transforme seu Hobby
              </span>
              <br />
              <span className="text-gray-800">em Renda Extra</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Aprenda a técnicas secretas para criar peças de crochê irresistíveis 
              e ganhar <strong className="text-rose-600">R$ 2.000 a R$ 5.000</strong> por mês trabalhando em casa
            </p>
            
            <div className="flex justify-center mb-12">
              <button 
                onClick={scrollToPricing}
                className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                🎯 Quero Minha Renda Extra
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-rose-500" />
                <span className="font-semibold">+2.847 alunas</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold">4.9/5 estrelas</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span className="font-semibold">93% de sucesso</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Por que Milhares de Mulheres Escolheram o Crochê?
            </h2>
            <p className="text-xl text-gray-600">
              Método testado e aprovado por milhares de artesãs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Método Exclusivo</h3>
              <p className="text-gray-600 leading-relaxed">
                Técnicas profissionais que ninguém ensina. Aprenda os segredos das artesãs que mais vendem.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Resultados Rápidos</h3>
              <p className="text-gray-600 leading-relaxed">
                Venda suas primeiras peças em 7 dias. Método prático que gera resultados desde o primeiro módulo.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Renda Garantida</h3>
              <p className="text-gray-600 leading-relaxed">
                Sistema completo de vendas online. Do produto à entrega, tudo explicado passo a passo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Histórias de Sucesso Reais
            </h2>
            <p className="text-xl text-gray-600">
              Veja como outras mães transformaram suas vidas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Em 3 meses consegui uma renda de R$ 3.200. Agora sustento minha família com o crochê!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Maria Silva</p>
                  <p className="text-sm text-gray-500">São Paulo, SP</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Nunca imaginei que poderia ganhar R$ 4.500 por mês trabalhando de casa. Método incrível!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Ana Costa</p>
                  <p className="text-sm text-gray-500">Rio de Janeiro, RJ</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Comecei do zero e hoje tenho minha própria marca. Faturamento mensal de R$ 8.000!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  C
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Carla Santos</p>
                  <p className="text-sm text-gray-500">Belo Horizonte, MG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Escolha Seu Plano
            </h2>
            <p className="text-xl text-gray-600">
              Investimento que se paga em menos de 1 semana
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plano Básico */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl border-2 border-gray-200 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Plano Básico</h3>
                <div className="text-4xl font-bold text-gray-800 mb-1">
                  R$ 19<span className="text-2xl">,90</span>
                </div>
                <p className="text-gray-600">Pagamento único</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">5 módulos completos</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">30 videoaulas práticas</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">E-book com 50 receitas</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Suporte por WhatsApp</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Garantia de 7 dias</span>
                </li>
              </ul>

              <a 
                href="https://app.astrocheckout.com/checkout/MXMBX3NAKZYX7C?product=150038"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                Começar com Básico
              </a>
            </div>

            {/* Plano Premium */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-3xl border-2 border-rose-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  🔥 MAIS POPULAR
                </span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Plano Premium</h3>
                <div className="text-4xl font-bold text-rose-600 mb-1">
                  R$ 29<span className="text-2xl">,90</span>
                </div>
                <p className="text-gray-600">Pagamento único</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-500" />
                  <span className="text-gray-700"><strong>Tudo do Básico +</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-500" />
                  <span className="text-gray-700">3 módulos bônus exclusivos</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-500" />
                  <span className="text-gray-700">Kit iniciante por R$ 0</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-500" />
                  <span className="text-gray-700">Mentoria em grupo</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-500" />
                  <span className="text-gray-700">Templates de vendas</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-500" />
                  <span className="text-gray-700">Garantia de 15 dias</span>
                </li>
              </ul>

              <a 
                href="https://app.astrocheckout.com/checkout/MXMBX3NAKZYX7C?product=150039"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                Quero o Premium 🚀
              </a>
            </div>
          </div>

          {/* Urgency Banner */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">Oferta por tempo limitado - Apenas hoje!</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Dúvidas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Respostas para as principais dúvidas
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Preciso ter experiência com crochê?",
                answer: "Não! O método é pensado para iniciantes. Começamos do zero e você aprende passo a passo."
              },
              {
                question: "Em quanto tempo vou conseguir vender?",
                answer: "A maioria das nossas alunas fazem a primeira venda em 7 dias. Algumas conseguem até antes!"
              },
              {
                question: "Quanto posso ganhar por mês?",
                answer: "Depende da sua dedicação. Nossas alunas ganham entre R$ 2.000 a R$ 8.000 por mês."
              },
              {
                question: "Como funciona a garantia?",
                answer: "Se não ficar satisfeita, devolvemos 100% do seu dinheiro em até 7 dias (básico) ou 15 dias (premium)."
              },
              {
                question: "Vou ter suporte?",
                answer: "Sim! Temos suporte via WhatsApp e no plano premium você tem acesso à mentoria em grupo."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-800">{item.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-rose-500 via-pink-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sua Nova Vida Começa Hoje!
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Não perca mais tempo sonhando. Milhares de mulheres já transformaram suas vidas.
              <br />
              <strong>Agora é a sua vez!</strong>
            </p>
            
            <div className="flex justify-center">
              <button 
                onClick={scrollToPricing}
                className="bg-white text-rose-600 px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                🎯 Sim, Quero Minha Renda Extra
              </button>
            </div>

            <div className="mt-8 flex justify-center items-center gap-6 text-sm opacity-75">
              <span>✅ Pagamento Seguro</span>
              <span>✅ Acesso Imediato</span>
              <span>✅ Garantia Total</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="w-8 h-8 text-rose-500" />
            <span className="text-2xl font-bold">CrochêPro</span>
          </div>
          <p className="text-gray-400 mb-4">
            Transformando vidas através do crochê desde 2020
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
          </div>
          <div className="mt-8 text-xs text-gray-500">
            © 2024 CrochêPro. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

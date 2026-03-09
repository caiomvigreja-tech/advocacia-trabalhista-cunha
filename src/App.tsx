/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Scale, 
  MousePointerClick, 
  CheckCircle2, 
  Clock, 
  Baby, 
  Heart, 
  Home, 
  Wallet, 
  MessageCircle,
  Instagram,
  Phone,
  ArrowRight,
  Info,
  Award,
  Users,
  Menu,
  X,
  Gavel,
  Calculator,
  ClipboardCheck,
  Calendar,
  Gift,
  Sun,
  Image as ImageIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const App = () => {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    p1: '',
    p2: '',
    p3: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for dígito
    if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos
    
    // Aplicação da máscara (XX) XXXXX-XXXX
    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (value.length > 5) {
      value = value.replace(/^(\d{2})(\d{4,5})(\d{0,4}).*/, "($1) $2-$3");
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else if (value.length > 0) {
      value = value.replace(/^(\d*)/, "($1");
    }
    
    setFormData({ ...formData, whatsapp: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      // Simulação de captura parcial de lead
      console.log("Lead capturado (Etapa 1):", { nome: formData.nome, whatsapp: formData.whatsapp });
      setStep(2);
    } else {
      setSubmitted(true);
    }
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const inputClass = "w-full px-6 py-4 bg-white border border-brand-accent/40 rounded-2xl focus:ring-2 focus:ring-brand-secondary/10 focus:border-brand-secondary outline-none transition-all text-brand-primary placeholder:text-slate-500 font-normal text-base shadow-sm";
  const labelClass = "block text-sm font-bold text-brand-primary mb-3 ml-1";

  const PlaceholderImage = ({ label, className = "" }: { label: string, className?: string }) => (
    <div className={`w-full h-full bg-brand-bg border border-brand-accent flex flex-col items-center justify-center text-brand-secondary p-6 text-center transition-colors hover:bg-white ${className}`}>
      <ImageIcon size={48} strokeWidth={1} className="mb-4 opacity-40" />
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] leading-tight opacity-70 font-sans">
        [Espaço para: {label}]
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-slate-800 overflow-x-hidden">
      {/* Header Profissional */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <div className="bg-brand-primary p-2.5 rounded-sm shadow-lg shadow-brand-primary/20">
              <Gavel className="text-brand-accent" size={22} />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-none text-brand-primary tracking-tight font-serif uppercase">
                Dr. Filipe Cunha 
                <span className="text-xs opacity-60 font-sans ml-2 tracking-normal font-light">OAB/RJ 221.727</span>
              </h1>
            </div>
          </motion.div>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center gap-10">
            {['direitos', 'simulacao', 'sobre', 'garantia'].map((item, i) => (
              <motion.button 
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollToSection(item)} 
                className="text-[12px] font-bold uppercase tracking-[0.15em] text-brand-primary/80 hover:text-brand-primary transition-colors relative group"
              >
                {item === 'direitos' ? 'Seus Direitos' : item === 'simulacao' ? 'Análise' : item === 'sobre' ? 'O Advogado' : 'Segurança'}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-secondary transition-all group-hover:w-full"></span>
              </motion.button>
            ))}
            
            <motion.a 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              href="https://wa.me/5521973508920" 
              className="bg-brand-primary text-white px-7 py-3 rounded-sm text-[11px] font-bold uppercase tracking-widest hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/10 flex items-center gap-3"
            >
              <MessageCircle size={14} className="text-brand-secondary" /> Falar com um advogado
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-brand-primary p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl overflow-hidden border-t border-brand-accent"
            >
              <div className="p-8 flex flex-col gap-6">
                <button onClick={() => scrollToSection('direitos')} className="text-left text-xs font-bold uppercase tracking-widest text-slate-600">Seus Direitos</button>
                <button onClick={() => scrollToSection('simulacao')} className="text-left text-xs font-bold uppercase tracking-widest text-slate-600">Análise</button>
                <button onClick={() => scrollToSection('sobre')} className="text-left text-xs font-bold uppercase tracking-widest text-slate-600">O Advogado</button>
                <button onClick={() => scrollToSection('garantia')} className="text-left text-xs font-bold uppercase tracking-widest text-slate-600">Segurança</button>
                <a href="https://wa.me/5521973508920" className="bg-brand-primary text-white p-4 rounded-sm text-center text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3">
                  <MessageCircle size={16} className="text-brand-secondary" /> Falar com um advogado
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* BLOCO 1 - HERO */}
      <section id="inicio" className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-brand-accent/20 -z-10 hidden lg:block"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 space-y-10 lg:sticky lg:top-32"
          >
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-light text-brand-primary leading-[1.1] tracking-tight font-serif">
                Fui demitida grávida. <br/>
                <span className="font-bold text-brand-secondary">Quais são meus direitos?</span>
              </h2>
              <p className="text-xl text-brand-primary/80 font-normal leading-relaxed max-w-2xl">
                Muitas gestantes demitidas têm direito a mais de <span className="text-brand-primary font-bold">R$ 30.000 de indenização</span> — e nem sabem disso. Responda algumas perguntas e nossa equipe entra em contato para explicar sua situação.
              </p>
              <p className="text-base text-slate-600 font-medium italic mt-4">
                (muitas mulheres são demitidas sem saber desse direito).
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5"
          >
            {!submitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="bg-white rounded-2xl shadow-[0_30px_100px_rgba(27,36,48,0.12)] border border-brand-accent/30 overflow-hidden relative transition-all duration-500 hover:shadow-[0_40px_120px_rgba(27,36,48,0.18)]"
              >
                {/* ZONA ESTÁTICA - Cabeçalho com fundo sutil */}
                <div className="bg-slate-50/80 border-b border-brand-accent/20 p-8">
                  <h3 className="text-xl font-serif text-brand-primary font-bold tracking-tight">Inicie sua Análise</h3>
                  <p className="text-sm text-slate-500 mt-1">Sua resposta é sigilosa e segura</p>
                  
                  {/* Barra de Progresso Unificada */}
                  <div className="mt-8 space-y-4">
                    <div className="flex w-full gap-2 h-1.5">
                      <div className={`flex-1 rounded-full transition-all duration-500 ${step >= 1 ? 'bg-brand-secondary' : 'bg-brand-accent/30'}`}></div>
                      <div className={`flex-1 rounded-full transition-all duration-500 ${step >= 2 ? 'bg-brand-secondary' : 'bg-brand-accent/30'}`}></div>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest leading-relaxed">
                      <span className="text-brand-secondary">Passo {step} de 2</span>
                      <span className="text-slate-400 mx-2">|</span>
                      <span className="text-slate-600 font-semibold">{step === 1 ? 'Seus dados de contato' : 'Detalhes do seu caso'}</span>
                    </p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="p-8 md:p-10">
                  <AnimatePresence mode="wait">
                    {step === 1 ? (
                      <motion.div 
                        key="step1"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className={labelClass}>Qual é o seu nome?</label>
                          <input 
                            type="text" 
                            placeholder="Ex: Maria Souza" 
                            className={inputClass}
                            required
                            value={formData.nome}
                            onChange={(e) => setFormData({...formData, nome: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className={labelClass}>
                            Seu WhatsApp <span className="text-sm font-normal text-slate-500 ml-1">— vamos te chamar por lá</span>
                          </label>
                          <input 
                            type="tel" 
                            placeholder="(11) 90000-0000" 
                            className={inputClass}
                            required
                            value={formData.whatsapp}
                            onChange={handlePhoneChange}
                          />
                        </div>
                        
                        <div className="pt-4 border-t border-brand-accent/20">
                          <p className="text-xs text-slate-500 leading-relaxed text-center">
                            Análise sigilosa e gratuita realizada por um especialista.
                          </p>
                        </div>
                        
                        <motion.button 
                          whileHover={{ scale: 1.01, translateY: -2 }}
                          whileTap={{ scale: 0.99 }}
                          type="submit" 
                          className="w-full bg-brand-primary hover:bg-brand-primary/95 text-white font-bold py-4 rounded-sm transition-all shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] group"
                        >
                          Quero saber meus direitos
                          <ArrowRight size={14} className="text-brand-secondary group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="step2"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className={labelClass}>Como foi sua saída da empresa?</label>
                          <select 
                            className={inputClass} 
                            required
                            value={formData.p1}
                            onChange={(e) => setFormData({...formData, p1: e.target.value})}
                          >
                            <option value="">Selecione...</option>
                            <option value="dispensada">Fui demitida pela empresa</option>
                            <option value="pressionada">Fui pressionada a pedir demissão</option>
                            <option value="pedido">Pedi demissão por conta própria</option>
                          </select>
                        </div>

                        <div>
                          <label className={labelClass}>Quando soube da gravidez?</label>
                          <select 
                            className={inputClass} 
                            required
                            value={formData.p2}
                            onChange={(e) => setFormData({...formData, p2: e.target.value})}
                          >
                            <option value="">Selecione...</option>
                            <option value="antes">Já sabia que estava grávida</option>
                            <option value="depois">Descobri após a demissão</option>
                          </select>
                        </div>

                        <div>
                          <label className={labelClass}>Tempo após demissão?</label>
                          <select 
                            className={inputClass} 
                            required
                            value={formData.p3}
                            onChange={(e) => setFormData({...formData, p3: e.target.value})}
                          >
                            <option value="">Selecione...</option>
                            <option value="3m">Até 3 meses</option>
                            <option value="1y">De 3 meses a 1 ano</option>
                            <option value="2y">De 1 a 2 anos</option>
                            <option value="over2y">Mais de 2 anos</option>
                          </select>
                        </div>

                        <div className="flex gap-2 pt-2">
                          <motion.button 
                            whileHover={{ backgroundColor: 'rgba(27, 36, 48, 0.02)' }}
                            type="button" 
                            onClick={() => setStep(1)}
                            className="w-1/3 border border-brand-accent text-brand-primary/60 hover:text-brand-primary py-4 rounded-sm transition-all text-xs font-bold uppercase tracking-widest"
                          >
                            Voltar
                          </motion.button>
                          <motion.button 
                            whileHover={{ scale: 1.01, translateY: -2 }}
                            whileTap={{ scale: 0.99 }}
                            type="submit" 
                            className="w-2/3 bg-brand-primary hover:bg-brand-primary/95 text-white font-bold py-4 rounded-sm transition-all shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] group"
                          >
                            Enviar para Análise <ArrowRight size={14} className="text-brand-secondary group-hover:translate-x-1 transition-transform" />
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="pt-2">
                    <p className="text-center text-xs text-brand-secondary/80 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                      <ShieldCheck size={14} /> 100% Seguro e Sigiloso
                    </p>
                  </div>
                </form>
              </motion.div>
            ) : (

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-12 rounded-sm text-center space-y-8 shadow-2xl border border-brand-accent"
              >
                <div className="bg-brand-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-brand-primary/20">
                  <CheckCircle2 className="text-brand-secondary" size={40} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-brand-primary uppercase tracking-tighter font-serif">Obrigado, {formData.nome.split(' ')[0]}!</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">Nossa equipe entrará em contato via WhatsApp <strong>{formData.whatsapp}</strong> nas próximas horas para realizar o atendimento prioritário.</p>
                </div>
                <button onClick={() => setSubmitted(false)} className="text-xs font-bold uppercase tracking-widest text-brand-secondary border-b border-brand-accent pb-1">Refazer Perguntas</button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* BARRA DE CREDIBILIDADE */}
      <section className="bg-brand-primary py-16 px-6 relative overflow-hidden">
        {/* Elemento decorativo sutil de fundo */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-secondary/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-secondary/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              { 
                icon: <ShieldCheck className="text-brand-secondary" size={32} strokeWidth={1.5} />, 
                title: "Segurança Total", 
                sub: "Não solicitamos qualquer pagamento antecipado." 
              },
              { 
                icon: <Award className="text-brand-secondary" size={32} strokeWidth={1.5} />, 
                title: "Mais de 10 anos de atuação", 
                sub: "Experiência comprovada em causas trabalhistas." 
              },
              { 
                icon: <Scale className="text-brand-secondary" size={32} strokeWidth={1.5} />, 
                title: "Expert em Indenizações", 
                sub: "Foco total na proteção dos direitos da gestante." 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center space-y-4 group"
              >
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-brand-secondary/50 transition-colors duration-500 mb-2">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 40 })}
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-serif text-white font-bold tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-sm text-brand-accent/60 font-medium leading-relaxed max-w-[260px] mx-auto">
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BLOCO 2 - QUEBRA DE OBJEÇÕES */}
      <section id="direitos" className="py-24 md:py-32 px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-brand-secondary">Entenda os seus direitos.</h4>
          <h2 className="text-4xl md:text-6xl font-light text-brand-primary tracking-tight leading-[1.1] font-serif italic">
            As principais dúvidas <br/> 
            <span className="font-bold not-italic underline decoration-brand-secondary decoration-4 underline-offset-8">após a demissão:</span>
          </h2>
        </div>
        
        <div className="space-y-32">
          {[
            {
              title: "A empresa disse que não sabia da minha gravidez.",
              text: "Isso não muda nada. O Supremo Tribunal Federal já decidiu: o desconhecimento da gravidez pelo empregador não elimina o seu direito. A proteção nasce com a gravidez — não com o aviso.",
              img: "Empresa não sabia da gravidez"
            },
            {
              title: "Eu assinei a rescisão. Já perdi meus direitos?",
              text: "Não necessariamente. A estabilidade da gestante é garantida pela Constituição Federal — e um documento assinado sem o pleno conhecimento da situação não apaga um direito constitucional.",
              img: "Documento assinado"
            },
            {
              title: "Descobri a gravidez depois de ser demitida. Ainda conta?",
              text: "Sim. O que importa é que a gravidez já existia na data da demissão — não a data em que você descobriu. Exames médicos conseguem confirmar isso com precisão.",
              img: "Descoberta da gravidez"
            },
            {
              title: "Tenho que voltar a trabalhar para ter direito?",
              text: "Não. Você pode escolher entre retornar ao emprego ou receber uma indenização substitutiva — que cobre salários, 13º, férias, FGTS e outros direitos de todo o período de estabilidade.",
              img: "Voltar a trabalhar"
            }
          ].map((item, idx) => (
            <div key={idx} className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                viewport={{ once: true }}
                className={`space-y-8 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <div className="space-y-4">
                  <div className="text-6xl font-black text-brand-accent/20 font-serif leading-none">0{idx + 1}</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tight font-serif leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-xl font-normal leading-relaxed">
                  {item.text}
                </p>
              </motion.div>

              <motion.div 
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                className={`flex justify-center ${idx % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="bg-white rounded-3xl w-full max-w-lg aspect-[4/3] overflow-hidden relative shadow-[0_40px_100px_rgba(27,36,48,0.12)] border border-brand-accent/30 p-4">
                   <PlaceholderImage label={item.img} className="rounded-2xl" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* BLOCO 3 - EXEMPLO ILUSTRATIVO (CONFORMIDADE OAB - DARK MODE) */}
      <section id="simulacao" className="bg-brand-primary py-24 md:py-32 px-6 scroll-mt-20 relative overflow-hidden">
        {/* Elemento de brilho sutil no fundo */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-brand-secondary">Entenda seu Direito</h4>
            <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight font-serif italic">Exemplo <span className="font-bold not-italic underline decoration-brand-secondary decoration-4 underline-offset-8">Ilustrativo</span></h2>
            <p className="text-brand-accent/60 font-medium text-lg leading-relaxed max-w-2xl mx-auto">
              Veja o quanto uma gestante demitida no começo da gestão pode receber de indenização.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden relative"
          >
            {/* Elemento decorativo de 'perfuração' de folha no topo */}
            <div className="absolute top-0 left-0 w-full h-8 flex justify-center gap-4 py-2 opacity-10">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-3 h-3 rounded-full bg-brand-primary"></div>
              ))}
            </div>

            <div className="p-10 md:p-16 space-y-8 font-mono text-brand-primary">
              <div className="flex justify-between items-end border-b-2 border-brand-primary/10 pb-6">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary">Demonstração de Verbas</p>
                  <h3 className="text-xl font-bold font-serif italic">Extrato de Direitos</h3>
                </div>
                <div className="text-right">
                  <div className="bg-slate-50 px-3 py-1 rounded inline-block border border-slate-200">
                    <p className="text-[9px] uppercase font-bold text-slate-400 leading-none mb-1">Salário de Referência</p>
                    <p className="text-sm font-bold text-brand-primary leading-none">R$ 2.000,00</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-4">
                {[
                  { label: 'Indenização Estabilidade', value: '+ R$ 24.000,00', note: '12 salários x R$ 2.000 (Lei)' },
                  { label: '13º Salário Integral', value: '+ R$ 2.000,00', note: '13º integral do período' },
                  { label: 'Férias + ⅓ Constitutional', value: '+ R$ 2.667,00', note: 'R$ 2.000 + ⅓ proporcional' },
                  { label: 'FGTS + Multa (40%)', value: '+ R$ 3.200,00', note: 'Depósitos + multa indenizatória' },
                ].map((item, i) => (
                  <div key={i} className="space-y-1 group">
                    <div className="flex justify-between items-center text-slate-800">
                      <span className="text-xs md:text-sm font-bold uppercase tracking-tight">{item.label}</span>
                      <span className="text-sm md:text-lg font-bold">{item.value}</span>
                    </div>
                    <p className="text-[10px] text-slate-400 italic text-left">{item.note}</p>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t-2 border-brand-primary font-serif">
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <span className="text-lg md:text-2xl font-bold italic block">Total Estimado da Causa:</span>
                    <span className="text-[10px] text-brand-secondary font-bold uppercase tracking-widest leading-none">Cálculo Base: Estabilidade de 12 Meses</span>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl md:text-5xl font-black text-brand-primary underline decoration-double decoration-brand-secondary">R$ 31.867,00</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decoração de 'Carimbo' sutil */}
            <div className="absolute bottom-8 right-8 rotate-12 opacity-5 pointer-events-none border-4 border-brand-secondary p-4 rounded-xl">
               <p className="text-2xl font-bold uppercase text-brand-secondary tracking-tighter">ANÁLISE JURÍDICA</p>
            </div>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-3xl p-10 md:p-12 text-center shadow-2xl space-y-10"
          >
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
                <span className="text-xl font-medium text-brand-primary">Somando as verbas acima:</span>
                <div className="flex flex-col md:flex-row items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-bold font-serif text-brand-primary tracking-tighter">R$ 31.867,00</span>
                </div>
              </div>
              <p className="text-slate-400 text-xs italic max-w-lg mx-auto leading-relaxed">
                * valor ilustrativo calculado com base no período de estabilidade (art. 10, II, "b", ADCT). O valor real depende das circunstâncias de cada caso.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-8 border-t border-slate-100">
              <p className="text-slate-600 text-sm md:text-left max-w-xs leading-relaxed font-medium">
                Preencha o formulário e nossa equipe entra em contato para entender a sua situação.
              </p>
              <button 
                onClick={() => scrollToSection('inicio')} 
                className="w-full md:w-auto bg-brand-primary hover:bg-brand-primary/95 text-white px-12 py-6 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] shadow-2xl group flex items-center justify-center gap-4 transition-all hover:-translate-y-1"
              >
                Quero saber meus direitos
                <ArrowRight size={20} className="text-brand-secondary group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <div className="text-center">
             <p className="text-[11px] text-brand-accent/40 max-w-2xl mx-auto leading-relaxed italic uppercase tracking-widest font-bold">
              A análise individual por um advogado é indispensável para determinar os valores devidos.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCO NOVO - URGÊNCIA/TEMPO */}
      <section className="py-24 px-6 bg-white overflow-hidden relative border-b border-brand-accent">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-brand-secondary font-bold uppercase tracking-[0.4em] text-xs">
                  <Clock size={16} />
                  O tempo é importante
                </div>
                <h2 className="text-4xl md:text-6xl font-light text-brand-primary leading-[1.1] tracking-tight font-serif italic">
                  Cada dia conta para a <br/>
                  <span className="font-bold border-b-4 border-brand-secondary pb-2">sua segurança.</span>
                </h2>
              </div>
              
              <p className="text-xl text-brand-primary/80 font-normal leading-relaxed">
                Existe um prazo legal para exercer esses direitos — e cada dia que passa é um dia a menos para agir. <span className="font-bold text-brand-primary">Não porque é uma frase de efeito.</span> Porque é o que diz a lei.
              </p>

              <div className="relative p-10 bg-slate-50 border-l-4 border-brand-secondary rounded-2xl shadow-sm group">
                <p className="text-xl text-brand-primary font-medium italic leading-relaxed">
                  "Se você foi demitida grávida, a única coisa que pode custar caro é não buscar informação."
                </p>
                <div className="absolute top-6 right-10 text-brand-accent/20 group-hover:text-brand-secondary/20 transition-colors">
                  <Info size={48} strokeWidth={1} />
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('inicio')}
                className="bg-brand-primary text-white px-12 py-6 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] shadow-[0_20px_50px_rgba(27,36,48,0.25)] flex items-center gap-4 group w-full md:w-auto justify-center"
              >
                Garantir meu direito agora
                <ArrowRight size={18} className="text-brand-secondary group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-10 bg-brand-secondary/5 rounded-full blur-3xl -z-10"></div>
              <div className="bg-white p-6 border border-brand-accent/40 shadow-[0_40px_120px_rgba(27,36,48,0.1)] rounded-2xl">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                   <PlaceholderImage label="Imagem simbólica: Ampulheta elegante ou Relógio clássico em ambiente minimalista" className="h-full" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BLOCO 4 - QUEM É FILIPE CUNHA */}
      <section id="sobre" className="py-32 px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-brand-accent/30 -z-10 rounded-sm group-hover:bg-brand-accent/50 transition-colors"></div>
            <div className="relative rounded-sm shadow-2xl w-full overflow-hidden aspect-[4/5] border border-brand-accent p-4 bg-white">
               <PlaceholderImage label="Foto Profissional: Filipe Cunha em seu escritório" />
            </div>
          </motion.div>
          <div className="space-y-10">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-brand-secondary">Especialista Jurídico</h4>
              <h2 className="text-4xl md:text-6xl font-light text-brand-primary tracking-tight leading-[1.1] font-serif">
                Sou Filipe Cunha. <br/>
                <span className="font-bold underline decoration-brand-secondary decoration-4 underline-offset-8">OAB/RJ 221.727</span>
              </h2>
            </div>
            
            <div className="text-lg text-slate-600 font-normal leading-relaxed space-y-6">
              <p>Com mais de uma década de experiência especializada no Direito do Trabalho, fundei este escritório com a missão de trazer justiça e segurança para mulheres em seu momento mais especial e vulnerável.</p>
              <p>Escolhi me dedicar à defesa de gestantes porque vi mulheres chegando convictas de que haviam perdido tudo ao assinar uma rescisão. Minha abordagem combina o rigor técnico com o acolhimento humano necessário para cada caso.</p>
              <p>Entendo o que significa querer proteger uma família — e é com esse compromisso que conduzo cada processo pessoalmente.</p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                { i: <Award />, t: 'Especialista Gestante' },
                { i: <Clock />, t: '10+ Anos de Carreira' },
                { i: <ShieldCheck />, t: 'Delegado OAB/RJ' },
                { i: <Users />, t: 'Equipe Especializada' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 text-brand-primary">
                  <div className="text-brand-secondary">{item.i}</div>
                  <span className="text-[10px] font-bold uppercase tracking-widest">{item.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 5 - GARANTIA */}
      <section id="garantia" className="py-24 md:py-32 px-6 scroll-mt-20">
        <motion.div 
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white border border-brand-accent/40 rounded-3xl p-12 md:p-24 text-center shadow-[0_40px_120px_rgba(27,36,48,0.12)] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-brand-primary"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full border border-brand-accent/40 shadow-xl">
             <ShieldCheck size={56} className="text-brand-secondary" />
          </div>
          
          <div className="space-y-10 pt-10">
            <h2 className="text-4xl md:text-5xl font-light text-brand-primary tracking-tight font-serif italic">Risco Zero. <br/><span className="font-bold not-italic">Sem custo inicial.</span></h2>
            <p className="text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              Trabalhamos exclusivamente com <strong className="text-brand-primary font-bold decoration-brand-secondary underline-offset-4 decoration-2">honorários de êxito</strong> — você só paga ao final, se e quando receber o valor da sua causa.
            </p>
            
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-brand-primary rounded-2xl text-white text-xs font-bold uppercase tracking-[0.2em] shadow-xl">
              <ShieldCheck size={18} className="text-brand-secondary" />
              Nunca pedimos pagamentos antecipados.
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-primary text-white pt-24 pb-12 px-6 border-t border-brand-primary/90">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-5 space-y-8">
               <div className="flex items-center gap-3">
                <div className="bg-brand-secondary p-2.5 rounded-sm">
                  <Gavel className="text-brand-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl tracking-tighter uppercase leading-none font-serif">FILIPE CUNHA</h3>
                  <p className="text-[10px] font-bold text-brand-secondary tracking-[0.3em] uppercase mt-1">Advocacia</p>
                </div>
              </div>
              <p className="text-brand-accent/60 font-light leading-relaxed text-sm max-w-sm">
                Escritório focado na defesa especializada da mulher gestante no mercado de trabalho. Ética, técnica e acolhimento em todo o Brasil.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-3 border border-brand-secondary/20 rounded-sm text-brand-secondary hover:text-white hover:border-brand-secondary transition-all"><Instagram size={18} /></a>
                <a href="#" className="p-3 border border-brand-secondary/20 rounded-sm text-brand-secondary hover:text-white hover:border-brand-secondary transition-all"><MessageCircle size={18} /></a>
              </div>
            </div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h6 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-secondary">Canais Diretos</h6>
                <ul className="space-y-4 text-brand-accent/80 text-sm font-light">
                  <li className="flex items-center gap-3 font-medium text-lg">(21) 97350-8920</li>
                  <li className="flex items-center gap-3 opacity-60">@filipecunha.adv</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h6 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-secondary">Atendimento</h6>
                <p className="text-brand-accent/60 text-sm font-light leading-relaxed italic">
                  Atendemos em regime 100% digital, garantindo agilidade e suporte em tempo real para gestantes em qualquer localidade.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-brand-secondary/20 text-center space-y-8">
            <p className="text-xs text-brand-accent/60 max-w-2xl mx-auto leading-relaxed uppercase tracking-widest font-bold">
              Site Informativo Jurídico · Em conformidade com o Código de Ética e Disciplina da OAB.
            </p>
            <p className="text-[11px] text-brand-secondary uppercase tracking-[0.5em] font-medium">
              © {new Date().getFullYear()} FILIPE CUNHA ADVOCACIA · RIO DE JANEIRO
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

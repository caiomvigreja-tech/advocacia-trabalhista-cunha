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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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

  const inputClass = "w-full px-4 py-3 bg-white border border-brand-accent rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none transition-all text-slate-700 placeholder:text-slate-400 font-light";
  const labelClass = "block text-xs font-bold text-brand-primary uppercase tracking-widest mb-2 ml-1";

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
              <h1 className="font-bold text-lg leading-none text-brand-primary tracking-tight font-serif">FILIPE CUNHA</h1>
              <p className="text-[9px] font-bold text-brand-secondary tracking-[0.3em] uppercase leading-none mt-1.5 border-t border-brand-accent pt-1.5">Advocacia</p>
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
                className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-primary/70 hover:text-brand-primary transition-colors relative group"
              >
                {item === 'direitos' ? 'Seus Direitos' : item === 'simulacao' ? 'Simulação' : item === 'sobre' ? 'O Advogado' : 'Segurança'}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-secondary transition-all group-hover:w-full"></span>
              </motion.button>
            ))}
            
            <motion.a 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              href="https://wa.me/5521973508920" 
              className="bg-brand-primary text-white px-7 py-3 rounded-sm text-[11px] font-bold uppercase tracking-widest hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/10 flex items-center gap-3"
            >
              <MessageCircle size={14} className="text-brand-secondary" /> Agendar Análise
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
                <button onClick={() => scrollToSection('simulacao')} className="text-left text-xs font-bold uppercase tracking-widest text-slate-600">Simulação</button>
                <button onClick={() => scrollToSection('sobre')} className="text-left text-xs font-bold uppercase tracking-widest text-slate-600">O Advogado</button>
                <button onClick={() => scrollToSection('garantia')} className="text-left text-xs font-bold uppercase tracking-widest text-slate-600">Segurança</button>
                <a href="https://wa.me/5521973508920" className="bg-brand-primary text-white p-4 rounded-sm text-center text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3">
                  <MessageCircle size={16} className="text-brand-secondary" /> WhatsApp
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
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/40 rounded-full border border-brand-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary">Direito Trabalhista Especializado</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-light text-brand-primary leading-[1.1] tracking-tight font-serif">
                Fui demitida grávida. <br/>
                <span className="font-bold underline decoration-brand-secondary decoration-4 underline-offset-8 italic">Ainda tenho direitos?</span>
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed max-w-xl">
                A indenização por estabilidade gestante pode incluir salários, FGTS, 13º e férias — valores que somados podem ultrapassar <strong className="text-brand-primary font-bold">30 mil reais</strong> — e que muitas mulheres nem imaginam ter direito.
              </p>
            </div>
            
            <div className="hidden lg:block relative max-w-lg aspect-video rounded-sm overflow-hidden shadow-2xl border-white border-[12px]">
              <PlaceholderImage label="Mulher grávida com expressão de preocupação/reflexão" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5"
          >
            {!submitted ? (
              <div className="bg-white p-8 md:p-10 rounded-sm shadow-[0_20px_50px_rgba(92,14,40,0.05)] border border-brand-accent relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-secondary"></div>
                <h3 className="text-xl font-bold text-brand-primary mb-8 tracking-tight uppercase tracking-widest text-xs">Análise de Estabilidade</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-5">
                    <div>
                      <label className={labelClass}>Nome Completo</label>
                      <input 
                        type="text" 
                        placeholder="Ex: Maria Silva" 
                        className={inputClass}
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>WhatsApp com DDD</label>
                      <input 
                        type="tel" 
                        placeholder="(00) 00000-0000" 
                        className={inputClass}
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Como foi sua saída da empresa?</label>
                    <select 
                      className={inputClass} 
                      required
                      value={formData.p1}
                      onChange={(e) => setFormData({...formData, p1: e.target.value})}
                    >
                      <option value="">Selecione uma opção...</option>
                      <option value="dispensada">Fui demitida pela empresa</option>
                      <option value="pressionada">Fui pressionada a pedir demissão</option>
                      <option value="pedido">Pedi demissão por conta própria</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Quando você soube da gravidez?</label>
                    <select 
                      className={inputClass} 
                      required
                      value={formData.p2}
                      onChange={(e) => setFormData({...formData, p2: e.target.value})}
                    >
                      <option value="">Selecione uma opção...</option>
                      <option value="antes">Já sabia que estava grávida</option>
                      <option value="depois">Descobri após a demissão</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Há quanto tempo foi demitida?</label>
                    <select 
                      className={inputClass} 
                      required
                      value={formData.p3}
                      onChange={(e) => setFormData({...formData, p3: e.target.value})}
                    >
                      <option value="">Selecione o tempo aproximado...</option>
                      <option value="3m">Até 3 meses</option>
                      <option value="1y">De 3 meses a 1 ano</option>
                      <option value="2y">De 1 a 2 anos</option>
                      <option value="over2y">Mais de 2 anos</option>
                    </select>
                  </div>

                  <div className="bg-brand-accent/20 p-4 rounded-lg flex gap-3 border border-brand-accent">
                    <Info className="text-brand-secondary shrink-0" size={18} />
                    <p className="text-[11px] text-brand-primary leading-tight italic">
                      Quanto antes você buscar orientação, mais segurança você terá para ter o seu direito garantido.
                    </p>
                  </div>

                  <button type="submit" className="w-full bg-brand-primary hover:bg-brand-primary/95 text-white font-bold py-5 rounded-sm transition-all shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em]">
                    Analisar meu caso agora <ArrowRight size={16} className="text-brand-secondary" />
                  </button>
                  <p className="text-center text-[10px] text-brand-secondary uppercase tracking-widest font-bold">Privacidade e Sigilo Garantidos</p>
                </form>
              </div>
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
                  <p className="text-slate-500 font-light">Nossa equipe entrará em contato via WhatsApp <strong>{formData.whatsapp}</strong> nas próximas horas para realizar o atendimento prioritário.</p>
                </div>
                <button onClick={() => setSubmitted(false)} className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary border-b border-brand-accent pb-1">Refazer Perguntas</button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* BARRA DE CREDIBILIDADE */}
      <section className="bg-brand-primary py-20 px-6 text-white overflow-hidden border-y border-brand-primary/90">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:divide-x divide-brand-secondary/30">
          <div className="space-y-3">
            <p className="text-2xl font-light font-serif">Segurança Total</p>
            <p className="text-[10px] text-brand-accent opacity-60 uppercase tracking-widest font-bold leading-relaxed px-4">NÃO SOLICITAMOS PAGAMENTOS ANTECIPADOS OU VIA PIX.</p>
          </div>
          <div className="space-y-3">
            <p className="text-2xl font-light font-serif">+10 anos de atuação</p>
            <p className="text-[10px] text-brand-accent opacity-60 uppercase tracking-widest font-bold leading-relaxed px-4">EXPERIÊNCIA EM CAUSAS TRABALHISTAS.</p>
          </div>
          <div className="space-y-3">
            <p className="text-2xl font-light font-serif">Expert em Indenizações</p>
            <p className="text-[10px] text-brand-accent opacity-60 uppercase tracking-widest font-bold leading-relaxed px-4">FOCO NA PROTEÇÃO DA GESTANTE</p>
          </div>
        </div>
      </section>

      {/* BLOCO 2 - QUEBRA DE OBJEÇÕES */}
      <section id="direitos" className="py-32 px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center mb-20 space-y-4">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-brand-secondary">Conhecimento Protege</h4>
          <h2 className="text-3xl md:text-5xl font-light text-brand-primary tracking-tight leading-tight font-serif">O que você precisa saber antes de <br/> <span className="font-bold underline decoration-brand-secondary">aceitar a demissão</span></h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-10">
            {[
              {
                title: 'O desconhecimento da empresa não importa',
                text: 'O STF já decidiu: a proteção nasce com a gravidez. Se você não sabia ou se a empresa não sabia, o seu direito à indenização permanece intacto.'
              },
              {
                title: 'Assinar a rescisão não anula seu direito',
                text: 'A estabilidade gestante é um direito constitucional. Nenhum documento assinado sob pressão pode apagar o que a Constituição Federal garante.'
              },
              {
                title: 'A indenização substitutiva é sua escolha',
                text: 'Você não é obrigada a retornar a um ambiente de trabalho que te dispensou. A lei permite receber o valor total em dinheiro.'
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                viewport={{ once: true }}
                className="group flex gap-8"
              >
                <div className="text-5xl font-black text-brand-accent group-hover:text-brand-secondary transition-colors duration-500 leading-none font-serif">0{idx + 1}</div>
                <div className="space-y-3">
                  <h5 className="text-lg font-bold text-brand-primary tracking-tight font-serif">{item.title}</h5>
                  <p className="text-slate-500 font-light leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="bg-white rounded-sm w-full max-w-md aspect-[3/4] overflow-hidden relative shadow-2xl border border-brand-accent p-4">
               <PlaceholderImage label="Mulher lendo documentos com atenção em ambiente calmo" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* BLOCO 3 - SIMULAÇÃO DE CASO */}
      <section id="simulacao" className="bg-brand-accent/10 py-32 px-6 scroll-mt-20 border-y border-brand-accent">
        <div className="max-w-5xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-brand-secondary">Exemplo Prático</h4>
            <h2 className="text-3xl md:text-5xl font-light text-brand-primary tracking-tight font-serif">Cálculo Estimado de <span className="font-bold underline decoration-brand-secondary">Indenização</span></h2>
            <p className="text-slate-500 font-light">Projeção baseada em um salário de R$ 2.000,00 reais mensais</p>
          </div>

          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="bg-white rounded-sm shadow-sm overflow-hidden border border-brand-accent"
          >
            <div className="p-8 md:p-12 space-y-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { d: 'Salários', v: 'R$ 24.000', s: '12 meses' },
                  { d: '13º Salário', v: 'R$ 2.000', s: 'Proporcional' },
                  { d: 'Férias + 1/3', v: 'R$ 2.667', s: 'Proporcional' },
                  { d: 'FGTS (Multa)', v: 'R$ 3.200', s: '8% + 40%' },
                ].map((item, i) => (
                  <div key={i} className="text-center space-y-2">
                    <p className="text-[10px] font-bold text-brand-secondary uppercase tracking-widest">{item.d}</p>
                    <p className="text-2xl font-light text-brand-primary font-serif">{item.v}</p>
                    <p className="text-[10px] italic text-brand-secondary/60">{item.s}</p>
                  </div>
                ))}
              </div>

              <div className="bg-brand-primary p-10 flex flex-col md:flex-row justify-between items-center gap-8 rounded-sm shadow-2xl shadow-brand-primary/20">
                <div className="text-center md:text-left">
                  <p className="text-brand-secondary text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Total Estimado</p>
                  <p className="text-white text-5xl font-bold tracking-tighter font-serif">R$ 31.867,00</p>
                </div>
                <button onClick={() => scrollToSection('inicio')} className="bg-brand-secondary hover:bg-brand-secondary/90 text-white px-10 py-5 rounded-sm font-bold text-xs uppercase tracking-widest transition-all shadow-xl">
                  Analisar Meu Direito
                </button>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { icon: <Baby size={22}/>, text: 'Enxoval Pago' },
                { icon: <Home size={22}/>, text: 'Licença Tranquila' },
                { icon: <Wallet size={22}/>, text: 'Reserva Financeira' },
                { icon: <Heart size={22}/>, text: 'Paz para o Bebê' },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5 }}
                  className="bg-white border border-brand-accent p-6 flex flex-col items-center gap-4 group hover:border-brand-secondary transition-all"
                >
                  <div className="text-brand-secondary group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">{item.text}</span>
                </motion.div>
              ))}
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
              <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-brand-secondary">Especialista Jurídico</h4>
              <h2 className="text-4xl md:text-5xl font-light text-brand-primary tracking-tight font-serif">Sou Filipe Cunha. <br/><span className="font-bold underline decoration-brand-secondary">OAB/RJ 221.727</span></h2>
            </div>
            
            <div className="text-lg text-slate-500 font-light leading-relaxed space-y-6">
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
      <section id="garantia" className="bg-white py-32 px-6 scroll-mt-20">
        <motion.div 
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-brand-bg border border-brand-accent rounded-sm p-12 md:p-20 text-center shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-brand-primary"></div>
          <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full border border-brand-accent shadow-sm">
             <ShieldCheck size={48} className="text-brand-secondary" />
          </div>
          
          <div className="space-y-8 pt-10">
            <h2 className="text-3xl font-light text-brand-primary tracking-tight font-serif">Risco Zero. <br/><span className="font-bold">Sem custo inicial.</span></h2>
            <p className="text-xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
              Trabalhamos exclusivamente com <strong className="text-brand-primary font-bold underline decoration-brand-secondary">honorários de êxito</strong> — você só paga ao final, se e quando receber o valor da sua causa.
            </p>
            
            <div className="bg-brand-primary p-5 rounded-sm text-brand-accent text-xs font-bold uppercase tracking-[0.2em] flex gap-3 items-center justify-center max-w-md mx-auto">
              <span>⚠️</span>
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
            <p className="text-[10px] text-brand-accent/40 max-w-2xl mx-auto leading-relaxed uppercase tracking-widest font-bold">
              Site Informativo Jurídico · Em conformidade com o Código de Ética e Disciplina da OAB.
            </p>
            <p className="text-[9px] text-brand-secondary uppercase tracking-[0.5em] font-medium">
              © {new Date().getFullYear()} FILIPE CUNHA ADVOCACIA · RIO DE JANEIRO
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

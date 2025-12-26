"use client";
import { useEffect, useRef, useState } from "react";
import {
    Instagram, Mail, ArrowRight, Camera, Coffee, ShoppingBag,
    Music, ShieldCheck, Twitter, X, Play, MapPin
} from "lucide-react";

export default function Home() {
    // --- REFS PARA OPTIMIZACIÓN (Performance nativa) ---
    const cursorRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const navBgRef = useRef<HTMLDivElement>(null);
    const socialProofRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDialogElement>(null);
    const [modalContent, setModalContent] = useState({ name: '', role: '', img: '' });

    // Datos simulados para la notificación en vivo
    const fakeProofData = [
        { name: "Sofía acaba de reservar.", time: "Hace 2 min", img: "https://randomuser.me/api/portraits/women/44.jpg" },
        { name: "Camila se unió desde MX.", time: "Hace 5 min", img: "https://randomuser.me/api/portraits/women/12.jpg" },
        { name: "Luisa adquirió su entrada.", time: "Hace 10 min", img: "https://randomuser.me/api/portraits/women/65.jpg" },
        { name: "Ana María confirmó.", time: "Hace 1 min", img: "https://randomuser.me/api/portraits/women/33.jpg" }
    ];

    useEffect(() => {
        // 1. LÓGICA DEL CURSOR (Sin React State para evitar lag en mousemove)
        const moveCursor = (e: MouseEvent) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
            }
        };

        // Efecto Hover Magnético en enlaces, botones y tarjetas
        const addHoverEffect = () => {
            const triggers = document.querySelectorAll('a, button, .hover-trigger');
            triggers.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    if (cursorRef.current) {
                        cursorRef.current.style.width = '60px';
                        cursorRef.current.style.height = '60px';
                        cursorRef.current.style.backgroundColor = '#fff'; // Inversión visual con mix-blend-mode
                    }
                });
                el.addEventListener('mouseleave', () => {
                    if (cursorRef.current) {
                        cursorRef.current.style.width = '16px';
                        cursorRef.current.style.height = '16px';
                        cursorRef.current.style.backgroundColor = '#C5A67C'; // Gold original
                    }
                });
            });
        };

        // 2. LÓGICA DE SCROLL (Parallax + Nav Inteligente + Reveal)
        let lastScroll = 0;
        const layers = document.querySelectorAll('.parallax-layer') as NodeListOf<HTMLElement>;

        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Parallax: Mueve las capas SVG a diferentes velocidades
            requestAnimationFrame(() => {
                layers.forEach(layer => {
                    const speed = parseFloat(layer.getAttribute('data-speed') || '0');
                    layer.style.transform = `translateY(-${scrollY * speed}px)`;
                });
            });

            // Smart Nav: Se esconde al bajar, aparece al subir con efecto vidrio
            if (navRef.current && navBgRef.current) {
                if (scrollY > lastScroll && scrollY > 100) {
                    navRef.current.style.transform = 'translateY(-100%)';
                } else {
                    navRef.current.style.transform = 'translateY(0)';
                }

                if (scrollY > 50) {
                    navBgRef.current.classList.remove('opacity-0');
                } else {
                    navBgRef.current.classList.add('opacity-0');
                }
            }

            lastScroll = scrollY;
        };

        // 3. REVEAL OBSERVER (Aparición estilo Apple)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        // Inicialización después del montaje
        setTimeout(() => {
            document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
            addHoverEffect();
        }, 100);

        // 4. SOCIAL PROOF LOOP
        let proofIndex = 0;
        const proofInterval = setInterval(() => {
            if(!socialProofRef.current) return;

            const data = fakeProofData[proofIndex];
            const imgEl = document.getElementById('sp-img') as HTMLImageElement;
            const textEl = document.getElementById('sp-text');
            const timeEl = document.getElementById('sp-time');

            if(imgEl && textEl && timeEl) {
                imgEl.src = data.img;
                textEl.innerText = data.name;
                timeEl.innerText = data.time;
            }

            // Animar entrada
            socialProofRef.current.classList.remove('toast-exit');
            socialProofRef.current.classList.add('toast-active');

            // Animar salida después de 5s
            setTimeout(() => {
                if(socialProofRef.current) {
                    socialProofRef.current.classList.remove('toast-active');
                    socialProofRef.current.classList.add('toast-exit');
                }
            }, 5000);

            proofIndex = (proofIndex + 1) % fakeProofData.length;
        }, 8000); // Cada 8 segundos

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("scroll", handleScroll);
            clearInterval(proofInterval);
        };
    }, []);

    // Modal Functions
    const openModal = (name: string, role: string, img: string) => {
        setModalContent({ name, role, img });
        modalRef.current?.showModal();
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modalRef.current?.close();
        document.body.style.overflow = '';
    };

    return (
        <main className="relative bg-noise bg-sand-50 text-earth-900 font-sans selection:bg-earth-900 selection:text-sand-50">

            {/* 1. CURSOR PERSONALIZADO */}
            <div
                ref={cursorRef}
                id="custom-cursor"
                className="fixed top-0 left-0 w-4 h-4 bg-gold-500 rounded-full -translate-x-1/2 -translate-y-1/2 hidden md:block pointer-events-none z-[9999]"
            />

            {/* 2. NOTIFICACIÓN FLOTANTE */}
            <div
                ref={socialProofRef}
                id="social-proof"
                className="fixed bottom-6 left-6 z-40 bg-white/90 backdrop-blur border border-earth-100 p-4 rounded-xl shadow-2xl flex items-center gap-4 transition-all duration-700 toast-exit max-w-[300px]"
            >
                <div className="relative">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-sand-200">
                        <img id="sp-img" src={fakeProofData[0].img} className="w-full h-full object-cover" alt="User" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-white"></div>
                </div>
                <div>
                    <p id="sp-text" className="text-xs font-medium text-earth-900 leading-tight">{fakeProofData[0].name}</p>
                    <p id="sp-time" className="text-[10px] text-earth-500 font-mono mt-0.5">{fakeProofData[0].time}</p>
                </div>
            </div>

            {/* 3. NAVEGACIÓN INTELIGENTE */}
            <nav ref={navRef} className="fixed top-0 w-full z-50 transition-all duration-500 transform translate-y-0">
                <div ref={navBgRef} className="absolute inset-0 bg-sand-50/80 backdrop-blur-md border-b border-earth-900/5 opacity-0 transition-opacity duration-500"></div>
                <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between relative z-10">
                    <div className="font-serif text-3xl tracking-tighter text-earth-900 hover-trigger cursor-pointer mix-blend-multiply">CEC.</div>
                    <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide">
                        {['Speakers', 'Experiencia', 'Galería'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-earth-600 transition-colors hover-trigger relative group">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-earth-900 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <a href="#registro" className="hover-trigger bg-earth-900 text-sand-50 px-6 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-earth-800 hover:scale-105 shadow-lg shadow-earth-900/10 hover:text-white">
                            Reservar Cupo
                        </a>
                    </div>
                </div>
            </nav>

            {/* 4. HERO SECTION (Parallax Dunas) */}
            <header className="h-[110vh] flex flex-col items-center justify-center relative overflow-hidden bg-sand-100">
                <div className="relative z-20 text-center px-4 -mt-32 mix-blend-multiply parallax-layer" data-speed="0.2">
                    <div className="inline-flex items-center gap-3 mb-6 animate-fade-in-up">
                        <span className="w-12 h-[1px] bg-earth-600"></span>
                        <p className="text-earth-600 text-xs tracking-[0.3em] uppercase font-semibold">Conferencia 2025</p>
                        <span className="w-12 h-[1px] bg-earth-600"></span>
                    </div>

                    <h1 className="font-serif text-[13vw] md:text-[8rem] leading-[0.85] text-earth-900 tracking-tighter mb-4 reveal-item">
                        Cuando estoy <br />
                        <span className="italic font-light text-earth-600 relative inline-block">
              contigo
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-gold-500 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
            </span>
                    </h1>

                    <p className="text-earth-800/60 text-lg md:text-xl font-light tracking-wide max-w-md mx-auto reveal-item" style={{ transitionDelay: '100ms' }}>
                        Un refugio intencional para el alma en medio del ruido cotidiano.
                    </p>
                </div>

                {/* Capas SVG Animadas */}
                <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-10">
                    {/* Duna Fondo */}
                    <div className="absolute bottom-0 w-full parallax-layer origin-bottom" data-speed="0.1">
                        <svg className="w-full h-[50vh]" viewBox="0 0 1440 320" preserveAspectRatio="none">
                            <path fill="#D5C4B4" fillOpacity="0.6" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,160C1248,139,1344,150,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                        </svg>
                    </div>
                    {/* Duna Media */}
                    <div className="absolute bottom-0 w-full parallax-layer origin-bottom" data-speed="0.25">
                        <svg className="w-full h-[40vh]" viewBox="0 0 1440 320" preserveAspectRatio="none">
                            <path fill="#8C705F" fillOpacity="0.8" d="M0,256L60,240C120,224,240,192,360,192C480,192,600,224,720,240C840,256,960,256,1080,229.3C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                        </svg>
                    </div>
                    {/* Duna Frente */}
                    <div className="absolute -bottom-1 w-full parallax-layer origin-bottom" data-speed="0.4">
                        <svg className="w-full h-[30vh]" viewBox="0 0 1440 320" preserveAspectRatio="none">
                            <path fill="#2E221E" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                        </svg>
                    </div>
                </div>
            </header>

            {/* 5. COUNTDOWN SECTION */}
            <section className="relative z-30 -mt-24 px-6 reveal-item">
                <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-full shadow-2xl flex justify-around items-center text-center">
                    {[{v:23, l:'Días'}, {v:8, l:'Horas'}, {v:45, l:'Min'}, {v:12, l:'Seg'}].map((t, i) => (
                        <div key={i}>
                            <span className="block font-serif text-3xl md:text-5xl text-earth-900">{t.v}</span>
                            <span className="text-[10px] uppercase tracking-widest text-earth-600">{t.l}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. SPEAKERS SECTION */}
            <section id="speakers" className="py-32 bg-sand-50 relative z-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal-item">
                        <div className="space-y-4 max-w-lg">
                    <span className="text-earth-500 font-bold text-xs tracking-widest uppercase flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span> Invitadas
                    </span>
                            <h2 className="font-serif text-5xl md:text-6xl text-earth-900">Voces que <span className="italic text-earth-500">resuenan</span></h2>
                        </div>
                        <p className="text-earth-800/60 max-w-xs mt-6 md:mt-0 font-light border-l border-earth-200 pl-6">
                            Mujeres seleccionadas no por su fama, sino por la profundidad de su mensaje.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Speaker 1 */}
                        <div className="group relative cursor-pointer hover-trigger reveal-item" onClick={() => openModal('Elena Vasquez', 'Autora Best-Seller', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800')}>
                            <div className="aspect-[3/4] overflow-hidden rounded-2xl relative shadow-lg">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter grayscale group-hover:grayscale-0" alt="Elena" />
                                <div className="absolute inset-0 bg-earth-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Play className="text-white w-12 h-12" />
                                </div>
                            </div>
                            <div className="mt-6 space-y-1">
                                <h3 className="font-serif text-2xl text-earth-900">Elena Vasquez</h3>
                                <p className="text-xs uppercase tracking-widest text-earth-400">Autora</p>
                            </div>
                        </div>
                        {/* Speaker 2 */}
                        <div className="group relative cursor-pointer hover-trigger reveal-item" style={{transitionDelay: '100ms'}} onClick={() => openModal('Sofia M. Ruiz', 'Psicóloga Clínica', 'https://images.unsplash.com/photo-1590650046871-92c887180603?q=80&w=800')}>
                            <div className="aspect-[3/4] overflow-hidden rounded-2xl relative shadow-lg md:mt-12">
                                <img src="https://images.unsplash.com/photo-1590650046871-92c887180603?q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter grayscale group-hover:grayscale-0" alt="Sofia" />
                                <div className="absolute inset-0 bg-earth-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Play className="text-white w-12 h-12" />
                                </div>
                            </div>
                            <div className="mt-6 space-y-1">
                                <h3 className="font-serif text-2xl text-earth-900">Sofia M. Ruiz</h3>
                                <p className="text-xs uppercase tracking-widest text-earth-400">Psicóloga</p>
                            </div>
                        </div>
                        {/* Speaker 3 */}
                        <div className="group relative cursor-pointer hover-trigger reveal-item" style={{transitionDelay: '200ms'}} onClick={() => openModal('CEC Worship', 'Colectivo Musical', 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800')}>
                            <div className="aspect-[3/4] overflow-hidden rounded-2xl relative shadow-lg">
                                <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter grayscale group-hover:grayscale-0" alt="Banda" />
                                <div className="absolute inset-0 bg-earth-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Play className="text-white w-12 h-12" />
                                </div>
                            </div>
                            <div className="mt-6 space-y-1">
                                <h3 className="font-serif text-2xl text-earth-900">CEC Worship</h3>
                                <p className="text-xs uppercase tracking-widest text-earth-400">Música</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. GALLERY BENTO */}
            <section id="galeria" className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="font-serif text-4xl text-center mb-16 reveal-item">Memorias del <span className="italic text-earth-500">Encuentro</span></h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-4 h-[800px] md:h-[600px]">
                        {/* Large Item */}
                        <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-3xl reveal-item hover-trigger">
                            <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Worship" />
                            <div className="absolute inset-0 bg-earth-900/20 group-hover:bg-transparent transition-colors"></div>
                            <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium border border-white/10">Worship Night</span>
                            </div>
                        </div>

                        {/* Vertical Item */}
                        <div className="col-span-1 row-span-2 relative overflow-hidden rounded-3xl reveal-item hover-trigger" style={{transitionDelay: '100ms'}}>
                            <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter sepia-[0.3]" alt="Coffee" />
                        </div>

                        {/* Small Items */}
                        <div className="col-span-1 row-span-1 bg-earth-900 rounded-3xl flex flex-col items-center justify-center text-sand-50 reveal-item p-6 text-center hover-trigger" style={{transitionDelay: '200ms'}}>
                            <p className="font-serif text-2xl italic mb-2">"Inolvidable"</p>
                            <span className="text-xs uppercase tracking-widest opacity-50">CEC 2024</span>
                        </div>

                        <div className="col-span-1 row-span-1 relative overflow-hidden rounded-3xl reveal-item hover-trigger" style={{transitionDelay: '300ms'}}>
                            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale" alt="Friends" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. EXPERIENCIA */}
            <section id="experiencia" className="py-24 bg-earth-900 text-sand-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-earth-800/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {icon: Camera, title: "Photo Spots", desc: "Sets diseñados por artistas."},
                            {icon: Coffee, title: "Barista Coffee", desc: "Lattes ilimitados de especialidad."},
                            {icon: ShoppingBag, title: "Welcome Kit", desc: "Tote bag y journal de regalo."},
                            {icon: Music, title: "Acústicos", desc: "Sesiones íntimas en el jardín."}
                        ].map((item, i) => (
                            <div key={i} className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 reveal-item hover-trigger" style={{transitionDelay: `${i*100}ms`}}>
                                <div className="w-12 h-12 rounded-full bg-sand-50/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-5 h-5 text-sand-50" />
                                </div>
                                <h4 className="font-serif text-xl mb-3">{item.title}</h4>
                                <p className="text-sm text-sand-200/60 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. UBICACIÓN */}
            <section className="py-0 flex flex-col md:flex-row min-h-[500px]">
                <div className="md:w-1/2 bg-sand-200 flex flex-col justify-center p-16 md:p-24 relative overflow-hidden reveal-item">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#543D32 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    <div className="relative z-10 space-y-6">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-earth-800">
                    <MapPin className="w-4 h-4" /> La Sede
                </span>
                        <h2 className="font-serif text-5xl text-earth-900">Salón Ambar <br /> Rossell Palace</h2>
                        <div className="w-12 h-1 bg-earth-800"></div>
                        <div className="space-y-1 text-earth-800/80">
                            <p className="font-medium">Av. La Reforma 12-34, Zona 9</p>
                            <p className="text-sm">Guatemala City</p>
                        </div>
                        <div className="pt-4">
                            <a href="#" className="inline-block border-b border-earth-800 pb-1 text-sm font-medium hover:text-earth-600 transition-colors hover-trigger">Ver en Google Maps</a>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 bg-earth-400 relative group overflow-hidden">
                    <div className="absolute inset-0 grayscale contrast-[0.9] brightness-[0.9] sepia-[0.2]">
                        <img src="https://images.unsplash.com/photo-1596136614488-75618797b5e4?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Interior" />
                    </div>
                </div>
            </section>

            {/* 10. CTA FINAL & FOOTER */}
            <section id="registro" className="py-32 bg-sand-100 text-center reveal-item">
                <h2 className="font-serif text-6xl tracking-tighter mb-8 text-earth-900">Tu silla está lista</h2>
                <button className="bg-earth-900 text-sand-50 px-10 py-5 rounded-full font-bold uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] flex items-center gap-4 text-sm shadow-2xl mx-auto hover-trigger hover:bg-earth-800">
                    Adquirir Ticket • Q125 <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center justify-center gap-6 mt-12 opacity-50">
                    <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /><span className="text-xs uppercase tracking-widest font-medium">Pago Seguro</span></div>
                </div>
            </section>

            <footer className="bg-earth-900 text-sand-300 py-20 text-center border-t border-white/5">
                <div className="flex justify-center gap-8 mb-8">
                    <Instagram className="hover:text-white transition-colors hover-trigger cursor-pointer" />
                    <Twitter className="hover:text-white transition-colors hover-trigger cursor-pointer" />
                    <Mail className="hover:text-white transition-colors hover-trigger cursor-pointer" />
                </div>
                <p className="text-[10px] tracking-[0.3em] opacity-30 uppercase">Designed for Purpose • 2025</p>
            </footer>

            {/* MODAL SPEAKER */}
            <dialog ref={modalRef} onClick={(e) => { if (e.target === modalRef.current) closeModal(); }} className="bg-transparent p-0 m-auto backdrop:bg-earth-900/40 w-full max-w-4xl rounded-3xl shadow-2xl outline-none">
                <div className="bg-sand-50 grid md:grid-cols-2 rounded-3xl overflow-hidden relative">
                    <button onClick={closeModal} className="absolute top-4 right-4 z-50 bg-white/50 hover:bg-white backdrop-blur p-2 rounded-full transition-colors hover-trigger">
                        <X className="w-6 h-6 text-earth-900" />
                    </button>
                    <div className="relative bg-earth-200 min-h-[400px]">
                        <img src={modalContent.img} className="w-full h-full object-cover" alt="Speaker" />
                    </div>
                    <div className="p-10 md:p-14 flex flex-col justify-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-earth-500 mb-2">Speaker</p>
                        <h2 className="font-serif text-4xl text-earth-900 mb-6">{modalContent.name}</h2>
                        <p className="text-earth-800/70 font-light leading-relaxed mb-8">{modalContent.role} — Una voz autorizada en su campo con un mensaje transformador para esta generación.</p>
                        <button className="w-fit border border-earth-900/20 px-6 py-2 rounded-full text-sm font-medium hover:bg-earth-900 hover:text-white transition-colors hover-trigger">Ver Perfil Completo</button>
                    </div>
                </div>
            </dialog>

        </main>
    );
}
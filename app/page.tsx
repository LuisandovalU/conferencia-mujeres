"use client";
import {
    ArrowDownRight, Sparkles, Coffee, Music, Mic,
    ShoppingBag, Camera, Users, ArrowLeft, ArrowRight,
    Quote, ChevronDown, ShieldCheck, Ticket, Check,
    Instagram, Facebook
} from "lucide-react";

export default function Home() {
    return (
        <main className="relative bg-sand-50 text-earth-900 font-sans selection:bg-earth-300 selection:text-earth-900">

            {/* Textura de ruido global */}
            <div className="fixed inset-0 bg-noise opacity-60 pointer-events-none z-[60] mix-blend-multiply"></div>

            {/* Navegación */}
            <nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-sand-50/80 border-b border-earth-900/5">
                <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                    <a href="#" className="font-serif text-2xl tracking-tighter text-earth-900 hover:opacity-70 transition-opacity">CEC<span className="text-coffee-light">.</span></a>

                    <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-earth-800/80">
                        <a href="#concepto" className="hover:text-earth-600 transition-colors">Concepto</a>
                        <a href="#experiencia" className="hover:text-earth-600 transition-colors">Experiencia</a>
                        <a href="#ubicacion" className="hover:text-earth-600 transition-colors">Ubicación</a>
                    </div>

                    <a href="#registro" className="hidden md:inline-flex bg-earth-900 text-sand-50 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 hover:bg-earth-800 hover:shadow-lg hover:shadow-earth-900/10 hover:-translate-y-0.5">
                        Reservar
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="min-h-screen flex flex-col pt-20 relative overflow-hidden justify-center items-center">
                {/* Elementos decorativos de fondo */}
                <div className="absolute top-1/4 -left-20 w-64 h-64 bg-earth-300/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-earth-400/20 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-8 -mt-20">
                    {/* Pill button con fecha */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-earth-900/10 bg-white/30 backdrop-blur-sm animate-fade-up">
                        <span className="w-1.5 h-1.5 rounded-full bg-coffee-light animate-pulse"></span>
                        <span className="text-xs tracking-wide text-earth-600 font-medium">Nov 23 • 3:30 PM</span>
                    </div>

                    <h1 className="font-serif text-6xl md:text-8xl lg:text-[9.5rem] leading-[0.85] text-earth-900 tracking-tighter text-balance animate-fade-up [animation-delay:100ms]">
                        Cuando estoy <br />
                        <span className="italic text-coffee-light relative inline-block">
                            contigo
                            <svg className="absolute w-full h-3 -bottom-1 md:-bottom-4 left-0 text-beige-300 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
                        </span>
                    </h1>

                    <p className="text-earth-800/70 md:text-xl text-lg font-light tracking-wide max-w-lg mx-auto animate-fade-up [animation-delay:200ms]">
                        conferencia de mujeres 2025
                    </p>

                    {/* Indicador de scroll */}
                    <div className="pt-12 animate-fade-up [animation-delay:400ms]">
                        <div className="inline-flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                            <span className="text-xs text-earth-600">Scroll</span>
                            <div className="animate-bounce">
                                <ArrowDownRight className="text-earth-600" width={20} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Montañas SVG en 4 capas con efecto parallax */}
                <div className="w-full absolute bottom-0 left-0 pointer-events-none z-0">
                    <svg className="w-full h-auto min-h-[200px]" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Capa 1 - Montaña más lejana */}
                        <path fill="#E6DDD3" fillOpacity="0.3" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                        {/* Capa 2 */}
                        <path fill="#D6C7B5" fillOpacity="0.4" d="M0,256L48,245.3C96,235,192,213,288,202.7C384,192,480,192,576,208C672,224,768,256,864,261.3C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                        {/* Capa 3 */}
                        <path fill="#A68A76" fillOpacity="0.5" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,234.7C672,256,768,288,864,277.3C960,267,1056,213,1152,202.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                        {/* Capa 4 - Montaña más cercana */}
                        <path fill="#8C705F" fillOpacity="0.6" d="M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,208C672,192,768,192,864,208C960,224,1056,256,1152,261.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </header>

            {/* Concepto Split */}
            <section id="concepto" className="py-24 bg-white relative">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 order-2 md:order-1">
                        <div className="inline-flex items-center gap-3">
                            <span className="h-[1px] w-12 bg-earth-400"></span>
                            <span className="text-coffee-light font-semibold text-xs tracking-widest uppercase">Manifiesto</span>
                        </div>
                        <h2 className="font-serif text-5xl md:text-6xl text-earth-900 leading-[1.1]">
                            Despojar el ruido,<br />encontrar <span className="italic text-coffee-light">la paz</span>
                        </h2>
                        <div className="space-y-6 text-earth-800/70 font-light text-lg leading-relaxed">
                            <p>Vivimos saturadas de información y expectativas. "Cuando estoy contigo" no es una conferencia para hacer más, sino un espacio para ser. </p>
                            <p>Diseñamos cada momento —desde la música hasta el café— para crear una atmósfera donde puedas bajar la guardia y respirar profundo.</p>
                        </div>
                        <div className="pt-4">
                            <a href="#experiencia" className="inline-flex items-center gap-2 text-earth-900 font-medium border-b border-earth-300 hover:border-earth-900 transition-colors pb-1">
                                Descubre la experiencia <ArrowDownRight width={18} />
                            </a>
                        </div>
                    </div>

                    <div className="relative order-1 md:order-2 h-[550px] w-full group">
                        {/* Imagen Principal */}
                        <div className="absolute inset-0 mask-arch overflow-hidden shadow-2xl z-10 bg-sand-200">
                            <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105" alt="Visión" />
                        </div>
                        {/* Elemento Decorativo Flotante */}
                        <div className="absolute -bottom-6 -left-6 z-20 bg-sand-50 p-6 rounded-full shadow-xl animate-spin-slow hidden md:block border border-earth-100">
                            <svg className="w-28 h-28 text-earth-900" viewBox="0 0 100 100">
                                <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent"></path>
                                <text className="text-[10px] font-bold uppercase tracking-[0.2em] fill-current">
                                    <textPath xlinkHref="#curve">Renovación • Espiritual • Pausa •</textPath>
                                </text>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Sparkles className="text-earth-500 w-6 h-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Speakers Cards */}
            <section id="speakers" className="py-24 bg-sand-50 relative">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <span className="text-earth-500 font-semibold text-xs tracking-widest uppercase mb-2 block">Invitadas 2025</span>
                            <h2 className="font-serif text-5xl text-earth-900">Voces que <span className="italic text-earth-500">inspiran</span></h2>
                        </div>
                        <p className="text-earth-800/60 max-w-md text-sm leading-relaxed text-right md:text-left">
                            Mujeres que han caminado por el desierto y han encontrado manantiales. Sus historias te desafiarán.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Speaker 1 */}
                        <div className="group relative">
                            <div className="aspect-[3/4] overflow-hidden rounded-t-[100px] rounded-b-2xl mb-6 relative">
                                <div className="absolute inset-0 bg-earth-900/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" alt="Speaker" />
                            </div>
                            <div className="text-center">
                                <h3 className="font-serif text-2xl text-earth-900">Elena Vasquez</h3>
                                <p className="text-earth-500 italic font-serif mb-2">"Restaurando el Altar"</p>
                                <div className="w-full h-[1px] bg-earth-200 mx-auto my-4 max-w-[50px]"></div>
                                <p className="text-xs text-earth-800/60 font-medium uppercase tracking-wider">Autora & Conferencista</p>
                            </div>
                        </div>

                        {/* Speaker 2 (Featured) */}
                        <div className="group relative md:-mt-12">
                            <div className="aspect-[3/4] overflow-hidden rounded-t-[100px] rounded-b-2xl mb-6 relative shadow-xl">
                                <div className="absolute inset-0 bg-earth-900/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" alt="Speaker" />
                                <div className="absolute top-4 right-4 bg-sand-50/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-earth-900 z-20">Keynote</div>
                            </div>
                            <div className="text-center">
                                <h3 className="font-serif text-2xl text-earth-900">Sofia M. Ruiz</h3>
                                <p className="text-earth-500 italic font-serif mb-2">"Identidad en el Desierto"</p>
                                <div className="w-full h-[1px] bg-earth-200 mx-auto my-4 max-w-[50px]"></div>
                                <p className="text-xs text-earth-800/60 font-medium uppercase tracking-wider">Psicóloga Clínica</p>
                            </div>
                        </div>

                        {/* Speaker 3 */}
                        <div className="group relative">
                            <div className="aspect-[3/4] overflow-hidden rounded-t-[100px] rounded-b-2xl mb-6 relative">
                                <div className="absolute inset-0 bg-earth-900/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                                <img src="https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" alt="Speaker" />
                            </div>
                            <div className="text-center">
                                <h3 className="font-serif text-2xl text-earth-900">Banda CEC</h3>
                                <p className="text-earth-500 italic font-serif mb-2">Worship Experience</p>
                                <div className="w-full h-[1px] bg-earth-200 mx-auto my-4 max-w-[50px]"></div>
                                <p className="text-xs text-earth-800/60 font-medium uppercase tracking-wider">Colectivo Musical</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Agenda / Cronograma */}
            <section id="agenda" className="py-24 bg-white border-y border-earth-100">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-earth-500 font-semibold text-xs tracking-widest uppercase">Itinerario</span>
                        <h2 className="font-serif text-4xl text-earth-900 mt-2">Sábado 15 de Noviembre</h2>
                    </div>

                    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-earth-200 before:to-transparent">

                        {/* Item 1 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-earth-200 bg-sand-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <Coffee className="text-earth-600 w-4 h-4" />
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-sand-50 p-6 rounded-2xl border border-earth-100 hover:border-earth-300 transition-colors">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="font-serif text-xl text-earth-900">Registro & Café</span>
                                    <span className="text-xs font-bold text-earth-500 bg-earth-100/50 px-2 py-1 rounded">08:00 AM</span>
                                </div>
                                <p className="text-earth-800/60 text-sm">Recoge tu Welcome Kit y disfruta de un café de especialidad antes de iniciar.</p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-earth-200 bg-sand-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <Music className="text-earth-600 w-4 h-4" />
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-sand-50 p-6 rounded-2xl border border-earth-100 hover:border-earth-300 transition-colors">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="font-serif text-xl text-earth-900">Sesión 1: Apertura</span>
                                    <span className="text-xs font-bold text-earth-500 bg-earth-100/50 px-2 py-1 rounded">09:30 AM</span>
                                </div>
                                <p className="text-earth-800/60 text-sm">Adoración con Banda CEC y mensaje de bienvenida.</p>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-earth-200 bg-sand-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <Mic className="text-earth-600 w-4 h-4" />
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-sand-50 p-6 rounded-2xl border border-earth-100 hover:border-earth-300 transition-colors">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="font-serif text-xl text-earth-900">Plenaria Principal</span>
                                    <span className="text-xs font-bold text-earth-500 bg-earth-100/50 px-2 py-1 rounded">11:00 AM</span>
                                </div>
                                <p className="text-earth-800/60 text-sm">Elena Vasquez: "Restaurando el Altar".</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Experiencia Bento Grid Refinado */}
            <section id="experiencia" className="py-24 bg-coffee-dark text-sand-50 relative overflow-hidden">
                {/* SVG Decorativo Fondo */}
                <div className="absolute top-0 right-0 opacity-10 pointer-events-none w-full h-full">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                        <path d="M0 100 C 30 20 60 20 100 100 Z" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
                    </svg>
                </div>

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="mb-12 text-center md:text-left">
                        <span className="text-sand-300 font-medium text-xs tracking-widest uppercase">The Vibe</span>
                        <h3 className="font-serif text-4xl lg:text-5xl text-sand-50 mt-2">Estética y <span className="italic text-sand-300">Corazón</span></h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">

                        {/* Card Grande 1: Kit */}
                        <div className="md:col-span-2 md:row-span-2 bg-coffee-darker/50 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:bg-coffee-darker transition-colors duration-500">
                            <div className="absolute top-8 right-8 text-sand-300 opacity-50 group-hover:opacity-100 transition-opacity">
                                <ShoppingBag width={32} />
                            </div>
                            <div className="relative z-10 h-full flex flex-col justify-end">
                                <h4 className="font-serif text-3xl mb-2 text-sand-50">Welcome Kit</h4>
                                <p className="text-sand-200/80 font-light">Tote bag exclusiva, journal de oración personalizado y regalos curados de nuestros sponsors. Diseñado para usarse todo el año.</p>
                                <div className="mt-6 w-full h-48 rounded-xl overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity">
                                    <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Kit" />
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Coffee */}
                        <div className="md:col-span-2 md:row-span-1 bg-sand-100/5 border border-white/10 rounded-3xl p-6 flex items-center justify-between group hover:bg-white/10 transition-colors">
                            <div className="space-y-2">
                                <h4 className="font-serif text-2xl text-sand-50">Specialty Coffee</h4>
                                <p className="text-sm text-sand-200/70">Baristas ilimitados. Lattes con arte.</p>
                            </div>
                            <Coffee className="text-sand-300 group-hover:scale-110 transition-transform" width={40} />
                        </div>

                        {/* Card 3: Photo */}
                        <div className="md:col-span-1 md:row-span-1 bg-sand-100/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-center items-center text-center group hover:bg-white/10 transition-colors">
                            <div className="bg-white/10 p-4 rounded-full mb-4 text-sand-50">
                                <Camera width={24} />
                            </div>
                            <h4 className="font-serif text-xl text-sand-50">Photo Spots</h4>
                            <p className="text-xs text-sand-200/70 mt-2">#CoquetteVibes</p>
                        </div>

                        {/* Card 4: Connection */}
                        <div className="md:col-span-1 md:row-span-1 bg-coffee-medium border border-white/10 rounded-3xl p-6 flex flex-col justify-between group overflow-hidden">
                            <div className="absolute inset-0 bg-coffee-dark/20 mix-blend-overlay"></div>
                            <Users className="text-sand-100 relative z-10" width={24} />
                            <div className="relative z-10">
                                <h4 className="font-serif text-xl text-sand-50">Community</h4>
                                <p className="text-xs text-sand-100/80 mt-1">Conecta con amigas.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Testimonios Scroll Horizontal */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 mb-10 flex justify-between items-end">
                    <div>
                        <span className="text-earth-500 font-semibold text-xs tracking-widest uppercase">Testimonios</span>
                        <h2 className="font-serif text-4xl text-earth-900 mt-2">Lo que dicen <span className="italic text-earth-500">ellas</span></h2>
                    </div>
                    {/* Controles visuales */}
                    <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full border border-earth-200 flex items-center justify-center text-earth-400"><ArrowLeft width={16} /></div>
                        <div className="w-8 h-8 rounded-full bg-earth-900 text-sand-50 flex items-center justify-center"><ArrowRight width={16} /></div>
                    </div>
                </div>

                <div className="flex overflow-x-auto gap-6 px-6 pb-10 no-scrollbar snap-x snap-mandatory max-w-[1600px] mx-auto">
                    {/* Testimonio 1 */}
                    <div className="min-w-[320px] md:min-w-[400px] bg-sand-50 p-8 rounded-2xl border border-earth-100 snap-center hover:border-earth-300 transition-colors">
                        <div className="text-earth-300 mb-4"><Quote width={24} /></div>
                        <p className="text-earth-800/80 font-light italic mb-6 leading-relaxed text-lg">"Fue un fin de semana que marcó un antes y un después en mi relación con Dios. Los detalles, el café, todo increíblemente cuidado."</p>
                        <div className="flex items-center gap-3">
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-10 h-10 rounded-full object-cover grayscale" alt="Ana" />
                            <div>
                                <p className="font-serif text-earth-900 text-sm">Ana Lucía</p>
                                <p className="text-[10px] uppercase tracking-wider text-earth-500">Asistente 2024</p>
                            </div>
                        </div>
                    </div>
                    {/* Testimonio 2 */}
                    <div className="min-w-[320px] md:min-w-[400px] bg-sand-50 p-8 rounded-2xl border border-earth-100 snap-center hover:border-earth-300 transition-colors">
                        <div className="text-earth-300 mb-4"><Quote width={24} /></div>
                        <p className="text-earth-800/80 font-light italic mb-6 leading-relaxed text-lg">"Fui sola porque soy nueva en la ciudad y salí con un grupo de amigas precioso. El ambiente es acogedor y nada religioso."</p>
                        <div className="flex items-center gap-3">
                            <img src="https://randomuser.me/api/portraits/women/28.jpg" className="w-10 h-10 rounded-full object-cover grayscale" alt="Mariana" />
                            <div>
                                <p className="font-serif text-earth-900 text-sm">Mariana G.</p>
                                <p className="text-[10px] uppercase tracking-wider text-earth-500">Estudiante</p>
                            </div>
                        </div>
                    </div>
                    {/* Testimonio 3 */}
                    <div className="min-w-[320px] md:min-w-[400px] bg-sand-50 p-8 rounded-2xl border border-earth-100 snap-center hover:border-earth-300 transition-colors">
                        <div className="text-earth-300 mb-4"><Quote width={24} /></div>
                        <p className="text-earth-800/80 font-light italic mb-6 leading-relaxed text-lg">"Necesitaba este respiro. Salí con el corazón lleno y nuevas fuerzas. ¡Ya tengo mi entrada para este año!"</p>
                        <div className="flex items-center gap-3">
                            <img src="https://randomuser.me/api/portraits/women/65.jpg" className="w-10 h-10 rounded-full object-cover grayscale" alt="Carla" />
                            <div>
                                <p className="font-serif text-earth-900 text-sm">Carla Méndez</p>
                                <p className="text-[10px] uppercase tracking-wider text-earth-500">Emprendedora</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section id="faq" className="py-24 bg-sand-50">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="font-serif text-4xl text-center text-earth-900 mb-12">Preguntas Frecuentes</h2>

                    <div className="space-y-4">
                        <details className="group bg-white rounded-xl border border-earth-100 overflow-hidden transition-all duration-300 hover:shadow-md open:shadow-md">
                            <summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-earth-900 select-none">
                                ¿Cuál es el código de vestimenta?
                                <span className="transition-transform duration-300 group-open:rotate-180 text-earth-400"><ChevronDown /></span>
                            </summary>
                            <div className="px-6 pb-6 text-earth-800/70 text-sm leading-relaxed border-t border-dashed border-earth-100 pt-4">
                                El estilo es "Smart Casual" o "Coquette Casual" en tonos tierra/neutros. Queremos que te sientas cómoda pero arreglada para la ocasión. ¡Habrá muchos spots para fotos!
                            </div>
                        </details>

                        <details className="group bg-white rounded-xl border border-earth-100 overflow-hidden transition-all duration-300 hover:shadow-md open:shadow-md">
                            <summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-earth-900 select-none">
                                ¿Habrá cuidado de niños?
                                <span className="transition-transform duration-300 group-open:rotate-180 text-earth-400"><ChevronDown /></span>
                            </summary>
                            <div className="px-6 pb-6 text-earth-800/70 text-sm leading-relaxed border-t border-dashed border-earth-100 pt-4">
                                Este evento está diseñado para tu descanso total, por lo que no contaremos con área de niños. Es un tiempo exclusivamente para ti.
                            </div>
                        </details>

                        <details className="group bg-white rounded-xl border border-earth-100 overflow-hidden transition-all duration-300 hover:shadow-md open:shadow-md">
                            <summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-earth-900 select-none">
                                ¿Qué incluye el ticket?
                                <span className="transition-transform duration-300 group-open:rotate-180 text-earth-400"><ChevronDown /></span>
                            </summary>
                            <div className="px-6 pb-6 text-earth-800/70 text-sm leading-relaxed border-t border-dashed border-earth-100 pt-4">
                                Acceso a todas las conferencias y talleres, Welcome Kit (Tote bag + Journal), Coffee Break ilimitado y acceso a la experiencia de adoración.
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            {/* Pricing / Registration */}
            <section id="registro" className="py-24 bg-white relative overflow-hidden">
                {/* Fondo radial sutil */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sand-100 via-white to-white"></div>

                <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2 space-y-6 text-center md:text-left">
                        <h2 className="font-serif text-6xl text-earth-900 tracking-tighter">Tu lugar<br />te espera</h2>
                        <p className="text-lg text-earth-800/70 font-light max-w-md mx-auto md:mx-0">
                            No dejes pasar esta oportunidad de renovación. El cupo es limitado para mantener la intimidad del evento.
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-8 opacity-60 grayscale mt-8">
                            <div className="flex items-center gap-2"><ShieldCheck /> Pago Seguro</div>
                            <div className="flex items-center gap-2"><Ticket /> Ticket Digital</div>
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full">
                        <div className="relative max-w-sm mx-auto group">
                            {/* Efecto de sombra difuminada detrás del ticket */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-earth-300 to-earth-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                            {/* Ticket Card */}
                            <div className="relative bg-sand-50 border border-sand-200 rounded-[1.8rem] p-8 md:p-10 shadow-2xl">
                                {/* Perforaciones decorativas (círculos laterales) */}
                                <div className="absolute top-1/2 -left-3 w-6 h-6 bg-white rounded-full"></div>
                                <div className="absolute top-1/2 -right-3 w-6 h-6 bg-white rounded-full"></div>

                                <div className="flex justify-between items-start mb-8 border-b border-dashed border-earth-300 pb-8">
                                    <div>
                                        <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-earth-500 mb-2">Pase General</span>
                                        <span className="font-serif text-4xl text-earth-900">Acceso Total</span>
                                        <ul className="mt-4 space-y-2 text-sm text-earth-600">
                                            <li className="flex items-center gap-2"><Check className="text-earth-400" /> Conferencias</li>
                                            <li className="flex items-center gap-2"><Check className="text-earth-400" /> Welcome Kit</li>
                                            <li className="flex items-center gap-2"><Check className="text-earth-400" /> Coffee Break</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex items-end justify-between mb-6">
                                    <span className="text-sm text-earth-500 font-medium">Precio final</span>
                                    <span className="font-serif text-5xl text-earth-900">Q125</span>
                                </div>

                                <button className="w-full bg-earth-900 text-sand-50 py-4 rounded-xl font-medium tracking-wide hover:bg-earth-800 transition-all duration-300 shadow-lg shadow-earth-900/20 flex items-center justify-center gap-2 group/btn relative overflow-hidden">
                                    <div className="absolute inset-0 w-full h-full bg-white/10 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
                                    COMPRAR AHORA <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" width={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-coffee-darker text-sand-200 pt-20 pb-28 md:pb-10 border-t border-white/5">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                        <div className="space-y-4">
                            <p className="font-serif text-4xl text-sand-50">Cuando estoy contigo</p>
                            <p className="text-sand-200/60 font-light max-w-xs">Conferencia de Mujeres 2025. <br />Un evento para el alma.</p>
                        </div>
                        <div className="flex gap-12 text-sm">
                            <div className="flex flex-col gap-4">
                                <span className="font-bold text-sand-50 uppercase tracking-widest text-xs">Evento</span>
                                <a href="#speakers" className="hover:text-white transition-colors">Speakers</a>
                                <a href="#agenda" className="hover:text-white transition-colors">Agenda</a>
                                <a href="#faq" className="hover:text-white transition-colors">Ayuda</a>
                            </div>
                            <div className="flex flex-col gap-4">
                                <span className="font-bold text-sand-50 uppercase tracking-widest text-xs">Social</span>
                                <a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Instagram /> Instagram</a>
                                <a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Facebook /> Facebook</a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-40">
                        <p>© 2025 Iglesia CEC. Todos los derechos reservados.</p>
                        <div className="flex gap-4">
                            <a href="#">Privacidad</a>
                            <a href="#">Términos</a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Botón Flotante Móvil Mejorado */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:hidden z-40">
                <a href="#registro" className="flex items-center justify-between px-6 py-4 bg-earth-900/90 backdrop-blur-md text-sand-50 rounded-full shadow-2xl border border-white/10 group">
                    <span className="font-serif text-lg">Inscribirme</span>
                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full group-hover:bg-white/20 transition-colors">
                        Q125 <ArrowRight />
                    </span>
                </a>
            </div>

        </main>
    );
}
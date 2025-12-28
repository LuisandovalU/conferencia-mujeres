import { ArrowDown } from "lucide-react"

export function HeroSection() {
    return (
        <header className="min-h-screen flex flex-col overflow-hidden pt-20 relative items-center justify-center">
            <div className="z-10 -mt-20 text-center max-w-5xl mr-auto ml-auto pr-4 pl-4 relative space-y-4">
                {/* Top Label */}
                <p className="font-serif italic text-coffee-light text-xl md:text-2xl animate-fade-up">
                    conferencia de mujeres 2025
                </p>

                {/* Main Title */}
                <h1 className="flex flex-col items-center justify-center font-serif text-coffee-dark leading-[0.9] tracking-tight animate-fade-up [animation-delay:100ms]">
                    <span className="text-[5rem] md:text-[8rem] lg:text-[10rem]">Cuando estoy</span>
                    <span className="text-[5rem] md:text-[8rem] lg:text-[10rem] italic text-coffee-light -mt-2 md:-mt-6">
            contigo
          </span>
                </h1>

                {/* Subtitle */}
                <p className="text-coffee-dark/60 md:text-xl animate-fade-up [animation-delay:200ms] text-lg font-light tracking-wide mt-6">
                    Salmo 73: 25-26
                </p>

                {/* Pill Button / Date */}
                <div className="pt-8 animate-fade-up [animation-delay:300ms]">
                    <div className="inline-flex items-center bg-coffee-dark text-beige-100 px-8 py-3 rounded-full shadow-lg shadow-coffee-dark/10 hover:scale-105 transition-transform duration-300 cursor-default">
                        <span className="text-xs font-bold tracking-widest uppercase">Nov 23 • 3:30 PM</span>
                    </div>
                </div>
            </div>

            {/* Mountains / Waves Layer */}
            <div className="absolute bottom-0 left-0 w-full leading-[0] z-0">
                <svg
                    className="w-full h-auto min-h-[200px] md:min-h-[350px]"
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    {/* Layer 4 (Furthest/Lightest) */}
                    <path
                        fill="#BCA89A"
                        fillOpacity="0.4"
                        d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />

                    {/* Layer 3 */}
                    <path
                        fill="#8F7766"
                        fillOpacity="0.6"
                        d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />

                    {/* Layer 2 */}
                    <path
                        fill="#6B5648"
                        fillOpacity="0.8"
                        d="M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,213.3C672,203,768,213,864,229.3C960,245,1056,267,1152,272C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />

                    {/* Layer 1 (Closest/Darkest) */}
                    <path
                        fill="#4A3B32"
                        fillOpacity="1"
                        d="M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,250.7C672,267,768,277,864,266.7C960,256,1056,224,1152,218.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </svg>
            </div>

            {/* Arrow Down Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-beige-100 opacity-60 animate-bounce">
                <ArrowDown className="w-6 h-6" />
            </div>
        </header>
    )
}

import React from 'react';
import { Button } from './ui/button';
import { Phone, CheckCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex items-center min-h-screen">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        <div 
          className="absolute inset-0 opacity-5" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />
        
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          <iframe 
            className="absolute inset-0 w-full h-full object-cover"
            style={{ 
              opacity: 0.2, 
              pointerEvents: 'none', 
              transform: 'scale(1.5)',
              display: 'block',
              zIndex: 0
            }}
            src="https://www.youtube.com/embed/qKqYcDX7QuQ?autoplay=1&mute=1&controls=0&loop=1&playlist=qKqYcDX7QuQ&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&playsinline=1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Professional basement waterproofing"
          />
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/50 to-transparent sm:from-white sm:via-white/90 sm:to-white/60" style={{ zIndex: 1 }} />
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent sm:from-white/30" style={{ zIndex: 1 }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
              {/* Left Column - Hero Text */}
              <div className="order-2 lg:order-1">
                <div className="mb-6 sm:mb-8 hidden xs:block">
                  <span className="inline-block text-primary text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                    Foundation Protection Excellence
                  </span>
                </div>
                
                <h1 className="font-montserrat font-light text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.9] mb-6 sm:mb-8">
                  Your Home's<br/>
                  <span className="font-bold relative">
                    Foundation
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50" />
                  </span>
                  <br className="hidden sm:block"/>
                  <span className="sm:hidden"> Safety</span>
                  <span className="hidden sm:inline"> Deserves Certainty</span>
                </h1>
                
                <p className="font-open-sans font-light text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-prose">
                  <span className="hidden sm:inline">Every crack tells a story of risk. Every drop of water threatens value.</span>
                  <span className="sm:hidden">Stop water damage before it starts.</span>
                  <span className="block mt-2 text-gray-900 font-semibold">Permanent solutions, not temporary fixes.</span>
                </p>
                
                {/* Trust Indicators - Desktop */}
                <div className="hidden sm:grid grid-cols-2 gap-x-8 gap-y-4 my-8">
                  {[
                    'Licensed & Insured',
                    'Same Day Service',
                    'Lifetime Warranty',
                    '0% Financing'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                {/* Mobile Trust Bar */}
                <div className="sm:hidden my-6 -mx-4 px-4 overflow-x-auto scrollbar-hide">
                  <div className="flex gap-4 w-max">
                    {['Licensed', 'Same Day', 'Warranty', 'Financing'].map((item) => (
                      <div key={item} className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full whitespace-nowrap">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="font-semibold">
                    Get Free Assessment
                  </Button>
                  <Button size="lg" variant="outline" className="font-semibold">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
                
                {/* Stats */}
                <div className="text-center sm:text-left">
                  <p className="text-sm text-gray-600 mb-3 font-medium">Why choose DrySpace?</p>
                  <div className="grid grid-cols-3 gap-6 max-w-md">
                    <div>
                      <div className="text-2xl sm:text-3xl font-light text-primary mb-1">12,847</div>
                      <div className="text-xs sm:text-sm text-gray-600 font-light">Homes Protected</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-light text-primary mb-1">4.9★</div>
                      <div className="text-xs sm:text-sm text-gray-600 font-light">Google Rating</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-light text-primary mb-1">&lt;2hr</div>
                      <div className="text-xs sm:text-sm text-gray-600 font-light">Response Time</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Video (Hidden on mobile) */}
              <div className="hidden sm:block order-1 lg:order-2">
                <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
                  <div className="relative pb-[56.25%] bg-black">
                    <iframe 
                      src="https://www.youtube.com/embed/qKqYcDX7QuQ?rel=0&modestbranding=1&start=10" 
                      title="DrySpace Waterproofing Process"
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <div className="bg-gray-900 px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-medium text-sm sm:text-base">See Our 4-Hour Foundation Repair Process</p>
                        <p className="text-gray-400 text-xs sm:text-sm">Watch how we fix foundation issues permanently</p>
                      </div>
                      <span className="text-gray-500 text-xs sm:text-sm">2:47</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
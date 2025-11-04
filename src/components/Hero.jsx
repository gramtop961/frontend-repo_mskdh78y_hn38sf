import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 sm:pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            AI solutions that turn complexity into clarity
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl">
            Caturaga helps teams automate workflows, deploy AI copilots, and modernize operations—fast. Designed for scale, security, and real business impact.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-white font-semibold shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Contact Us
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-gray-900 font-semibold border border-gray-200 hover:bg-gray-50">
              Explore Services
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            Trusted by innovators building with AI, automation, and data.
          </div>
        </div>
      </div>
    </section>
  );
}

import { Bot, Zap, Layers, Shield, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Solutions',
    desc:
      'Design, fine-tune, and deploy AI copilots and agents tailored to your workflows. From retrieval-augmented generation to secure on-prem deployments, we deliver measurable outcomes.',
  },
  {
    icon: Zap,
    title: 'Business Automation',
    desc:
      'Eliminate manual busywork with robust automations across tools you already use. We orchestrate processes end-to-end with reliability, observability, and human-in-the-loop controls.',
  },
  {
    icon: Layers,
    title: 'Digital Transformation',
    desc:
      'Modernize legacy systems and data pipelines. We refactor, integrate, and harden your stack with cloud-native patterns that reduce cost and unlock speed.',
  },
];

const strengths = [
  { title: 'AI-Powered', desc: 'State-of-the-art models and tooling tuned for your domain.' },
  { title: 'Fast Implementation', desc: 'Pilot in weeks, production in months—not years.' },
  { title: 'Cost-Effective', desc: 'Automations that pay for themselves through efficiency.' },
  { title: 'Scalable Solutions', desc: 'Architected for growth, security, and compliance.' },
];

export default function Services() {
  return (
    <section id="services" className="relative">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-indigo-50 via-white to-white"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            What we do
          </h2>
          <p className="mt-4 text-gray-600">
            Practical, secure, and scalable technology—delivered with clarity.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-indigo-600/10 text-indigo-600 grid place-items-center mb-4">
                <Icon />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{desc}</p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-indigo-600 font-medium">
                Learn more <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        <div id="why" className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          {strengths.map((s) => (
            <div key={s.title} className="rounded-2xl border border-gray-200 bg-white p-6">
              <h4 className="text-base font-semibold text-gray-900">{s.title}</h4>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

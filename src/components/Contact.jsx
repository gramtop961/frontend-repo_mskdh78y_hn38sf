import { useState } from 'react';
import { Star, Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

const testimonials = [
  {
    name: 'Amira S.',
    company: 'Helios Labs',
    quote:
      'Caturaga delivered an agentic workflow that cut our handling time by 42%. The rollout was fast and secure.'
  },
  {
    name: 'David K.',
    company: 'Northline Group',
    quote:
      'Their automation layer paid for itself within the first quarter. Outstanding team and communication.'
  },
  {
    name: 'Priya R.',
    company: 'Datastack.io',
    quote:
      'We modernized two critical services without downtime. Rock-solid engineering and documentation.'
  },
];

export default function Contact() {
  const [status, setStatus] = useState('');
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I\'m Caturaga\'s assistant. How can I help you today?' },
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks! We\'ll be in touch within 1 business day.');
    (e.target).reset();
  }

  function sendChat(e) {
    e.preventDefault();
    const content = chatInput.trim();
    if (!content) return;
    const userMsg = { role: 'user', text: content };
    setMessages((m) => [...m, userMsg]);
    setChatInput('');
    // Simple on-device reply to simulate AI assistant
    setTimeout(() => {
      const reply = {
        role: 'bot',
        text:
          'Thanks for reaching out! Share a bit about your goals (e.g., AI agent, automation, modernization) and a timeline—our team will follow up shortly.'
      };
      setMessages((m) => [...m, reply]);
    }, 500);
  }

  return (
    <section id="about" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold text-gray-900">About Caturaga</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Our mission is to make advanced AI and automation feel effortless. We believe technology should amplify human capability—not replace it. With a focus on clarity, speed, and security, we deliver solutions that create immediate value while laying a foundation for long-term growth.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['Integrity', 'Impact', 'Partnership'].map((v) => (
                <div key={v} className="rounded-xl border border-gray-200 bg-white p-4">
                  <div className="flex items-center gap-2 text-gray-900 font-semibold">
                    <Star className="text-amber-500" size={18} /> {v}
                  </div>
                  <p className="mt-2 text-sm text-gray-600">We measure success by the outcomes you achieve, together.</p>
                </div>
              ))}
            </div>

            <div id="testimonials" className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900">What clients say</h3>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((t) => (
                  <figure key={t.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-1 text-amber-500 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={16} fill="#f59e0b" className="text-amber-500" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 text-sm leading-relaxed">“{t.quote}”</blockquote>
                    <figcaption className="mt-4 text-sm font-semibold text-gray-900">
                      {t.name} <span className="text-gray-500 font-normal">• {t.company}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>

          <div id="contact" className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">Let’s build something great</h3>
              <p className="mt-2 text-gray-600 text-sm">Tell us about your goals. We\'ll respond promptly with next steps.</p>

              <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input required type="text" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input required type="email" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea required rows={4} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="What would you like to achieve?" />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 w-full justify-center rounded-full bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700">
                  <Send size={16} /> Send message
                </button>
                {status && <p className="text-green-700 text-sm">{status}</p>}
              </form>

              <div className="mt-6 space-y-3 text-sm text-gray-700">
                <div className="flex items-center gap-2"><Phone size={16} className="text-gray-500" /> +1 (555) 010-8000</div>
                <div className="flex items-center gap-2"><Mail size={16} className="text-gray-500" /> hello@caturaga.com</div>
                <div className="flex items-center gap-2"><MapPin size={16} className="text-gray-500" /> Remote • Global</div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-20 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
            <div>© {new Date().getFullYear()} Caturaga. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900">Terms of Service</a>
              <div className="flex items-center gap-3">
                <a aria-label="Twitter" href="#" className="h-8 w-8 grid place-items-center rounded-full border border-gray-300 hover:bg-gray-50">𝕏</a>
                <a aria-label="LinkedIn" href="#" className="h-8 w-8 grid place-items-center rounded-full border border-gray-300 hover:bg-gray-50">in</a>
                <a aria-label="GitHub" href="#" className="h-8 w-8 grid place-items-center rounded-full border border-gray-300 hover:bg-gray-50">GH</a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Floating chat widget */}
      <button
        aria-label="Open chat"
        onClick={() => setChatOpen((v) => !v)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 flex items-center justify-center"
      >
        <MessageCircle />
      </button>

      {chatOpen && (
        <div className="fixed bottom-24 right-6 w-80 max-w-[90vw] rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50">
            <div className="text-sm font-semibold text-gray-900">Caturaga Assistant</div>
            <div className="text-xs text-gray-600">Ask us anything—typically responds instantly</div>
          </div>
          <div className="max-h-80 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((m, idx) => (
              <div key={idx} className={m.role === 'bot' ? 'text-gray-800' : 'text-gray-900'}>
                <span className="font-semibold">{m.role === 'bot' ? 'Assistant' : 'You'}: </span>
                <span>{m.text}</span>
              </div>
            ))}
          </div>
          <form onSubmit={sendChat} className="flex items-center gap-2 p-3 border-t border-gray-200">
            <input
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 rounded-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-3 py-2 text-white text-sm font-medium hover:bg-indigo-700">
              Send
            </button>
          </form>
        </div>
      )}
    </section>
  );
}

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    countryCode: '+971',
    contact: '',
    nationality: '',
    email: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name) return;
    
    setStatus('submitting');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/runriot2026@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            Name: formData.name,
            Gender: formData.gender,
            Contact: `${formData.countryCode} ${formData.contact}`,
            Nationality: formData.nationality,
            Email: formData.email,
            _subject: "New RUN RIOT Join Request",
            _template: "table" // Uses a nice table layout in the email
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', gender: '', countryCode: '+971', contact: '', nationality: '', email: '' });
        
        // Reset after 4 seconds
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('idle');
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus('idle');
      alert("Something went wrong. Please check your connection and try again.");
    }
  };

  return (
    <section id="cta" className="section-padding relative overflow-hidden flex flex-col items-center justify-center w-full" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-riot-black via-riot-dark to-riot-black" />
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-riot-red/10 rounded-full blur-[200px]" />
      </div>

      <div className="w-full max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex flex-col items-center"
        >
          <h2 className="font-syne text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight leading-[0.85] mb-6">
            JOIN THE{' '}
            <span className="text-gradient glow-text">MOVEMENT</span>
          </h2>

          <p className="text-riot-light-gray text-base md:text-lg max-w-lg mx-auto mb-14 md:mb-16 leading-relaxed text-center">
            Ready to feel alive? Join the fastest-growing fitness community in the UAE.
            Be part of something bigger than yourself.
          </p>

          <form 
            className="flex flex-col gap-6 w-full max-w-md mx-auto text-left"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name" 
                className="px-6 h-[56px] bg-riot-black/50 border border-riot-white/10 rounded-xl text-riot-white placeholder:text-riot-light-gray focus:outline-none focus:border-riot-red transition-colors flex-1 text-sm glass"
                required
                disabled={status !== 'idle'}
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="px-6 h-[56px] bg-riot-black/50 border border-riot-white/10 rounded-xl text-riot-light-gray focus:outline-none focus:border-riot-red transition-colors text-sm glass appearance-none min-w-[120px] cursor-pointer"
                required
                disabled={status !== 'idle'}
              >
                <option value="" disabled>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex bg-riot-black/50 border border-riot-white/10 rounded-xl transition-colors focus-within:border-riot-red glass flex-1 h-[56px] items-center overflow-hidden">
                <input 
                  type="text" 
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  placeholder="+971"
                  className="w-20 h-full px-4 bg-transparent text-riot-white focus:outline-none text-sm text-center border-r border-riot-white/10"
                  required
                  disabled={status !== 'idle'}
                />
                <input 
                  type="tel" 
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Contact Number" 
                  className="px-4 h-full w-full bg-transparent text-riot-white placeholder:text-riot-light-gray focus:outline-none text-sm rounded-r-xl"
                  required
                  disabled={status !== 'idle'}
                />
              </div>
              <input 
                type="text" 
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                placeholder="Nationality" 
                className="px-6 h-[56px] bg-riot-black/50 border border-riot-white/10 rounded-xl text-riot-white placeholder:text-riot-light-gray focus:outline-none focus:border-riot-red transition-colors flex-1 text-sm glass"
                required
                disabled={status !== 'idle'}
              />
            </div>

            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address" 
              className="px-6 h-[56px] bg-riot-black/50 border border-riot-white/10 rounded-xl text-riot-white placeholder:text-riot-light-gray focus:outline-none focus:border-riot-red transition-colors w-full text-sm glass"
              required
              disabled={status !== 'idle'}
            />

            <button 
              type="submit" 
              disabled={status !== 'idle'}
              className={`px-8 h-[56px] mt-2 font-semibold rounded-xl transition-all duration-300 text-sm tracking-wider uppercase shrink-0 w-full flex items-center justify-center
                ${status === 'success' ? 'bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.4)]' : 
                  status === 'submitting' ? 'bg-riot-red/50 text-white/50 cursor-not-allowed' : 
                  'bg-riot-red text-white hover:bg-riot-orange hover:scale-[1.02] glow-red'}`}
            >
              {status === 'success' ? 'Request Sent!' : status === 'submitting' ? 'Please Wait...' : 'Join Us'}
            </button>
          </form>
          
          {status === 'success' && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 text-sm mt-6 tracking-wider"
            >
              Your request was submitted successfully! We'll be in touch.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

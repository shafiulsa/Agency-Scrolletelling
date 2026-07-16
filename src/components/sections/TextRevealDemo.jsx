import { useState } from "react";
import { TextReveal } from "../ui/TextReveal";

export const TextRevealDemo = ({ onClose }) => {
  const [inputText, setInputText] = useState("Hello Creative World!");
  const [duration, setDuration] = useState(0.55);
  const [delay, setDelay] = useState(0.1);
  const [blockColor, setBlockColor] = useState("#ccff00");
  const [triggerKey, setTriggerKey] = useState(0); // Used to force-remount and replay the interactive demo

  const handleReplay = () => {
    setTriggerKey((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#0D1734] text-[#F8FAFC] font-sans selection:bg-[#ccff00] selection:text-[#0D1734] overflow-x-hidden relative">
      {/* Abstract Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#ccff00]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[150px]" />
        <div className="absolute top-[40%] right-[10%] w-[300px] h-[300px] bg-[#ccff00]/3 rounded-full blur-[100px]" />
      </div>

      {/* Demo Header / Navigation */}
      <header className="relative z-10 max-w-6xl mx-auto px-6 py-6 flex justify-between items-center border-b border-slate-800/80 backdrop-blur-md bg-[#0D1734]/30">
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-[#ccff00] animate-pulse" />
          <span className="font-bold tracking-widest text-sm uppercase">Text Reveal Lab</span>
        </div>
        <button
          onClick={onClose}
          className="px-4 py-2 border border-slate-700 hover:border-[#ccff00] hover:text-[#ccff00] rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 bg-[#0D1734]/50 backdrop-blur-sm cursor-pointer"
        >
          &larr; Back to 3D Experience
        </button>
      </header>

      {/* HERO SECTION (Autoplay on Mount) */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="mb-4">
          <TextReveal
            trigger="mount"
            delay={0.1}
            duration={0.4}
           
            className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#ccff00] uppercase"
          >
            Core Animation Engine
          </TextReveal>
        </div>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
          <TextReveal
            trigger="mount"
            delay={0.3}
            duration={0.65}
           
            className="block"
          >
            Aesthetic Motion
          </TextReveal>
          <br />
          <TextReveal
            trigger="mount"
            delay={0.6}
            duration={0.65}
           
            className="block mt-2"
          >
            Driven by GSAP
          </TextReveal>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-8">
          <TextReveal
            trigger="mount"
            delay={1.0}
            duration={0.7}
            textColor="#94a3b8"
           
          >
            A smooth, high-fidelity element-mask reveal component optimized for React. Made with GSAP timelines, hardware-accelerated scales, and custom ease curves.
          </TextReveal>
        </p>
      </section>

      {/* INTERACTIVE PLAYGROUND */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        <div className="bg-[#0b132b]/80 border border-slate-800/80 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 text-slate-100 flex items-center gap-2">
            <span className="text-[#ccff00] font-mono">01/</span> Playground Builder
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Controls */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Reveal Text
                </label>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="w-full bg-[#0D1734] border border-slate-800 hover:border-slate-700 focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] rounded-xl px-4 py-3 text-sm text-[#F8FAFC] placeholder-slate-600 outline-none transition-all duration-200"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Duration (s)
                  </label>
                  <input
                    type="number"
                    min="0.1"
                    max="3.0"
                    step="0.05"
                    value={duration}
                    onChange={(e) => setDuration(parseFloat(e.target.value) || 0.1)}
                    className="w-full bg-[#0D1734] border border-slate-800 focus:border-[#ccff00] rounded-xl px-4 py-2.5 text-sm text-[#F8FAFC] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Delay (s)
                  </label>
                  <input
                    type="number"
                    min="0.0"
                    max="5.0"
                    step="0.05"
                    value={delay}
                    onChange={(e) => setDelay(parseFloat(e.target.value) || 0)}
                    className="w-full bg-[#0D1734] border border-slate-800 focus:border-[#ccff00] rounded-xl px-4 py-2.5 text-sm text-[#F8FAFC] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 font-medium">
                  Block Reveal Color
                </label>
                <div className="flex gap-3">
                  {[
                    { hex: "#ccff00", label: "Neon Lime" },
                    { hex: "#38bdf8", label: "Sky Blue" },
                    { hex: "#f43f5e", label: "Rose" },
                    { hex: "#10b981", label: "Emerald" },
                    { hex: "#a855f7", label: "Purple" }
                  ].map((color) => (
                    <button
                      key={color.hex}
                      onClick={() => setBlockColor(color.hex)}
                      className={`h-8 w-8 rounded-full border transition-all duration-200 cursor-pointer ${
                        blockColor === color.hex ? "border-[#ccff00] scale-110 ring-2 ring-[#ccff00]/20" : "border-transparent opacity-80 hover:opacity-100"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.label}
                    />
                  ))}
                  <input
                    type="color"
                    value={blockColor}
                    onChange={(e) => setBlockColor(e.target.value)}
                    className="h-8 w-8 bg-transparent border-0 cursor-pointer p-0"
                    title="Custom Color"
                  />
                </div>
              </div>

              <button
                onClick={handleReplay}
                className="w-full py-3 bg-[#ccff00] hover:bg-[#b5e000] text-[#0D1734] font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#ccff00]/10"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 15H19c0 .414-.336.75-.75.75H17.25a.75.75 0 01-.75-.75v-1.5a.75.75 0 01.75-.75h2.21m-6.42 5H19" />
                </svg>
                Trigger Animation
              </button>
            </div>

            {/* Interactive Live Preview Box */}
            <div className="lg:col-span-7 h-64 bg-[#0D1734] border border-slate-800 rounded-xl flex items-center justify-center p-6 relative overflow-hidden shadow-inner">
              <div className="absolute top-3 left-4 text-slate-500 font-mono text-[10px] uppercase tracking-wider">
                Live Preview Output
              </div>
              <div className="text-center">
                <TextReveal
                  key={triggerKey} // Changing key resets and replays the GSAP timeline
                  trigger="mount"
                  delay={delay}
                  duration={duration}
                  blockColor={blockColor}
                  className="text-2xl md:text-4xl font-extrabold tracking-tight"
                >
                  {inputText || "Type something..."}
                </TextReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCROLL-TRIGGERED SHOWCASE SECTION */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <TextReveal
            trigger="scroll"
           
            className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#ccff00] uppercase mb-4"
          >
            Scroll Down to View Reveal Triggering
          </TextReveal>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-100">
            Scroll Trigger Demo
          </h2>
          <div className="w-12 h-1 bg-[#ccff00] mx-auto mt-4" />
        </div>

        {/* Staggered Vertical List */}
        <div className="space-y-24 max-w-2xl mx-auto">
          {/* Card 1 */}
          <div className="flex flex-col gap-3">
            <span className="text-slate-500 font-mono text-xs">SECTION 01 // MODERNISM</span>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100">
              <TextReveal trigger="scroll">
                Fluid Interface Layouts
              </TextReveal>
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              <TextReveal trigger="scroll" delay={0.15} textColor="#94a3b8">
                As the viewport scrolls, these individual blocks detect when they enter the camera frustum or display window, firing one-time reveal timelines with precision easing.
              </TextReveal>
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-3">
            <span className="text-slate-500 font-mono text-xs">SECTION 02 // PERFORMANCE</span>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100">
              <TextReveal trigger="scroll">
                Optimal Paint Cycle Rendering
              </TextReveal>
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              <TextReveal trigger="scroll" delay={0.15} textColor="#94a3b8">
                By setting initial CSS opacity states and using GSAP's performant transform engines, the animations render at a locked 60/120fps with zero layout thrashing.
              </TextReveal>
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col gap-3">
            <span className="text-slate-500 font-mono text-xs">SECTION 03 // ADAPTABILITY</span>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100">
              <TextReveal trigger="scroll" blockColor="#38bdf8">
                Adaptive Color Profiles
              </TextReveal>
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              <TextReveal trigger="scroll" blockColor="#38bdf8" delay={0.15} textColor="#94a3b8">
                You can feed the component arbitrary colors for the reveal block. Here, we reveal the text using a sky blue block overlay to match custom theme directives.
              </TextReveal>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="relative z-10 bg-[#0b132b]/40 border-t border-slate-800/80 py-16 text-center">
        <div className="max-w-md mx-auto px-6">
          <h4 className="text-xl font-bold mb-4">
            <TextReveal trigger="scroll">
              Ready to build?
            </TextReveal>
          </h4>
          <p className="text-slate-400 text-sm mb-6">
            <TextReveal trigger="scroll" delay={0.2} textColor="#94a3b8">
              Click the back button to view the 3D portfolio experience or start integrating this custom TextReveal component in other sections.
            </TextReveal>
          </p>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-[#ccff00] hover:bg-[#b5e000] text-[#0D1734] font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 transform active:scale-95 cursor-pointer shadow-lg shadow-[#ccff00]/5"
          >
            Return to Portfolio
          </button>
        </div>
      </footer>
    </div>
  );
};

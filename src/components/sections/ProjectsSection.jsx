import { config } from "../../config";
import { AnnotationPanel } from "../ui/AnnotationPanel";
import { TextReveal } from "../ui/TextReveal";

export const ProjectsSection = () => {
  return (
    <section className="section">
      <div className="w-full flex items-center px-8 md:px-14 gap-8">

        {/* ── LEFT: Gap for 3D model in canvas ── */}
        <div className="flex-1" />

        {/* ── RIGHT: Annotation panel ── */}
        <div className="w-[45%] shrink-0">
          {/* Section heading */}
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-[#ccff00]/50 mb-1 text-right">
            <TextReveal trigger="scroll">Portfolio</TextReveal>
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-8 leading-tight text-right">
            <TextReveal trigger="scroll" delay={0.15}>Projects</TextReveal>
          </p>

          <AnnotationPanel
            categories={config.projectCategories}
            side="right"
            kicker="Project Categories"
          />
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect, useCallback } from 'react';
import {
  Plus,
  X,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Images,
  Mail,
  MapPin,
} from 'lucide-react';
import { BRAND_LOGOS, COPY, DRAWERS, Lang, MediaItem, ProjectItem } from './data/portfolioData';

export default function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [openDrawer, setOpenDrawer] = useState<string | null>('01');
  const [lightbox, setLightbox] = useState<{
    title: string;
    items: MediaItem[];
    index: number;
  } | null>(null);

  const t = COPY[lang];

  const toggleDrawer = (num: string) => {
    setOpenDrawer((prev) => (prev === num ? null : num));
  };

  const handleProjectClick = (project: ProjectItem) => {
    if (project.actionType === 'external' && project.externalUrl) {
      window.open(project.externalUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    if (project.media && project.media.length > 0) {
      setLightbox({
        title: project.title,
        items: project.media,
        index: 0,
      });
    }
  };

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const prevMedia = useCallback(() => {
    setLightbox((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        index: (prev.index - 1 + prev.items.length) % prev.items.length,
      };
    });
  }, []);

  const nextMedia = useCallback(() => {
    setLightbox((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        index: (prev.index + 1) % prev.items.length,
      };
    });
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevMedia();
      if (e.key === 'ArrowRight') nextMedia();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightbox, closeLightbox, prevMedia, nextMedia]);

  return (
    <div className="min-h-screen bg-[#F6F3EC] text-[#0F1E36] font-sans overflow-x-hidden">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 bg-[#F6F3EC]/90 backdrop-blur-md border-b border-[#0F1E36]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2">
          <a href="#" className="flex flex-col leading-none group shrink-0">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F1E36]">
              noco<span className="text-[#D46A38]">noco</span>
            </span>
            <span className="hidden sm:block text-[9px] tracking-[0.22em] uppercase text-[#0F1E36]/60 mt-1">
              Turning Challenges Into Results
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#0F1E36]/80">
            <a href="#methodology" className="hover:text-[#D46A38] transition-colors">
              {t.nav.methodology}
            </a>
            <a href="#capabilities" className="hover:text-[#D46A38] transition-colors">
              {t.nav.capabilities}
            </a>
            <a href="#experience" className="hover:text-[#D46A38] transition-colors">
              {t.nav.experience}
            </a>
            <a href="#contact" className="hover:text-[#D46A38] transition-colors">
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#0F1E36]/5 p-0.5 sm:p-1 rounded-full border border-[#0F1E36]/10 text-[11px] sm:text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 sm:px-2.5 py-1 rounded-full transition-all ${
                  lang === 'en'
                    ? 'bg-[#0F1E36] text-[#F6F3EC]'
                    : 'text-[#0F1E36]/60 hover:text-[#0F1E36]'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('es')}
                className={`px-2 sm:px-2.5 py-1 rounded-full transition-all ${
                  lang === 'es'
                    ? 'bg-[#0F1E36] text-[#F6F3EC]'
                    : 'text-[#0F1E36]/60 hover:text-[#0F1E36]'
                }`}
              >
                ES
              </button>
            </div>

            <a
              href="#contact"
              className="squircle-pill bg-[#0F1E36] text-[#F6F3EC] hover:bg-[#D46A38] transition-colors px-3.5 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium whitespace-nowrap"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 pt-10 pb-8 md:pt-16 md:pb-10">
        <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#D46A38] mb-3 sm:mb-4">
          {t.hero.eyebrow}
        </p>
        <h1 className="text-[32px] sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#0F1E36] max-w-4xl leading-[1.12]">
          {t.hero.headline}
        </h1>
        <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-[#0F1E36]/75 max-w-2xl leading-relaxed font-normal">
          {t.hero.subheadline}
        </p>
        <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <a
            href="#capabilities"
            className="squircle-pill bg-[#0F1E36] text-[#F6F3EC] hover:bg-[#D46A38] transition-colors px-7 py-3.5 text-sm font-medium inline-flex items-center justify-center gap-2"
          >
            {t.hero.primaryCta}
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="squircle-pill border border-[#0F1E36]/20 text-[#0F1E36] hover:border-[#0F1E36] transition-colors px-7 py-3.5 text-sm font-medium text-center"
          >
            {t.hero.secondaryCta}
          </a>
        </div>
      </section>

      {/* Selected Brand Experience Marquee */}
      <section id="experience" className="max-w-6xl mx-auto px-5 sm:px-6 pb-8">
        <div className="border-t border-b border-[#0F1E36]/12 py-5 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-4">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#D46A38]">
              {t.experience.eyebrow}
            </p>
            <p className="text-xs text-[#0F1E36]/60">{t.experience.caption}</p>
          </div>

          <div
            className="marquee-wrapper relative w-full overflow-hidden"
            style={{
              maskImage:
                'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            }}
          >
            <div className="flex w-max animate-marquee items-center gap-10 sm:gap-16 py-2">
              {[...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, idx) => (
                <div
                  key={`${logo.name}-${idx}`}
                  className="h-10 sm:h-12 flex items-center justify-center shrink-0"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    style={{ height: `${logo.height ?? 32}px` }}
                    className="w-auto object-contain grayscale contrast-125 mix-blend-multiply opacity-85 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="max-w-6xl mx-auto px-5 sm:px-6 pt-3 pb-10">
        <div>
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#D46A38] mb-2">
            {t.methodology.eyebrow}
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0F1E36] mb-6 sm:mb-7">
            {t.methodology.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {t.methodology.steps.map((step) => (
              <div
                key={step.num}
                className="squircle-card bg-white/60 border border-[#0F1E36]/10 p-6 sm:p-7"
              >
                <span className="text-xs font-semibold tracking-widest text-[#D46A38]">
                  {step.num}
                </span>
                <h3 className="text-lg font-semibold text-[#0F1E36] mt-1.5 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#0F1E36]/70 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities & 4 Interactive Drawers (Dark Navy Squircle Container) */}
      <section id="capabilities" className="max-w-6xl mx-auto px-3 sm:px-6 pb-10">
        <div className="squircle-panel bg-[#0F1E36] text-[#F6F3EC] px-4 py-10 sm:px-12 sm:py-14 shadow-xl">
          <div className="max-w-2xl mb-8 sm:mb-10 px-1 sm:px-0">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#D46A38] mb-2.5 sm:mb-3">
              {t.capabilities.eyebrow}
            </p>
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#F6F3EC]">
              {t.capabilities.title}
            </h2>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-[#F6F3EC]/70 leading-relaxed">
              {t.capabilities.subtitle}
            </p>
          </div>

          <div className="divide-y divide-[#F6F3EC]/12 border-t border-b border-[#F6F3EC]/12">
            {DRAWERS.map((drawer) => {
              const isOpen = openDrawer === drawer.number;
              return (
                <div key={drawer.number} className="py-6 sm:py-8">
                  <button
                    type="button"
                    onClick={() => toggleDrawer(drawer.number)}
                    aria-expanded={isOpen}
                    className="w-full text-left flex items-start sm:items-center justify-between gap-3 sm:gap-4 group px-1 sm:px-0"
                  >
                    <div className="flex items-baseline gap-3 sm:gap-6">
                      <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#D46A38] shrink-0">
                        {drawer.number}.
                      </span>
                      <div>
                        <h3
                          className={`text-lg sm:text-2xl font-medium tracking-tight transition-colors ${
                            isOpen
                              ? 'text-[#D46A38]'
                              : 'text-[#F6F3EC] group-hover:text-[#D46A38]'
                          }`}
                        >
                          {drawer.title[lang]}
                        </h3>
                        <p className="mt-1.5 text-xs sm:text-sm text-[#F6F3EC]/70 max-w-2xl leading-relaxed">
                          {drawer.summary[lang]}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#D46A38] text-[#F6F3EC] rotate-45'
                          : 'bg-[#F6F3EC]/10 text-[#F6F3EC] group-hover:bg-[#D46A38]'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>

                  {/* Drawer Content */}
                  {isOpen && (
                    <div className="mt-6 sm:mt-8 pl-0 sm:pl-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      {drawer.projects.map((project) => {
                        const badgeText =
                          project.actionType === 'external'
                            ? t.capabilities.badges.external
                            : project.actionType === 'video'
                            ? t.capabilities.badges.video
                            : `${t.capabilities.badges.lightbox} (${project.media?.length ?? 1})`;

                        return (
                          <article
                            key={project.id}
                            onClick={() => handleProjectClick(project)}
                            className="squircle-card bg-[#162846] border border-[#F6F3EC]/10 hover:border-[#D46A38]/60 transition-all p-4 sm:p-6 flex flex-col justify-between cursor-pointer group"
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-2">
                                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-[#D46A38]">
                                  {project.tag[lang]}
                                </span>
                              </div>
                              <h4 className="text-base sm:text-lg font-semibold text-[#F6F3EC] group-hover:text-[#D46A38] transition-colors">
                                {project.title}
                              </h4>
                              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#F6F3EC]/70 leading-relaxed">
                                {project.description[lang]}
                              </p>
                            </div>

                            {/* Clean Preview Frame (Eager Loading for Mobile Reliability) */}
                            <div className="mt-4 sm:mt-5">
                              <div
                                className={`squircle-thumb relative w-full aspect-[16/10] overflow-hidden border border-[#F6F3EC]/10 ${
                                  project.coverFit === 'contain'
                                    ? 'bg-[#F6F3EC] p-6 sm:p-8 flex items-center justify-center'
                                    : 'bg-[#0B1628]'
                                }`}
                              >
                                <img
                                  src={project.coverSrc}
                                  alt={project.title}
                                  className={`w-full h-full transition-transform duration-500 group-hover:scale-[1.03] ${
                                    project.coverFit === 'contain'
                                      ? 'object-contain max-h-20 sm:max-h-24'
                                      : `object-cover ${project.coverFocal ?? 'object-top'}`
                                  }`}
                                />
                              </div>

                              {/* Subtle Action Footer */}
                              <div className="mt-3 sm:mt-3.5 flex items-center justify-between text-xs font-medium text-[#F6F3EC]/75 group-hover:text-[#D46A38] transition-colors">
                                <span className="inline-flex items-center gap-1.5">
                                  {project.actionType === 'external' && (
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                  )}
                                  {project.actionType === 'video' && (
                                    <Play className="w-3.5 h-3.5 fill-current" />
                                  )}
                                  {project.actionType === 'lightbox' && (
                                    <Images className="w-3.5 h-3.5" />
                                  )}
                                  {badgeText}
                                </span>
                                <span className="opacity-60 group-hover:opacity-100 transition-opacity">
                                  ↗
                                </span>
                              </div>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section (Terracotta Squircle Box) */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 sm:pb-16">
        <div className="squircle-card bg-[#D46A38] text-[#F6F3EC] p-6 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 shadow-lg">
          <div className="max-w-xl">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#F6F3EC]/85 mb-2.5 sm:mb-3">
              {t.contact.eyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#F6F3EC]">
              {t.contact.title}
            </h2>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-[#F6F3EC]/90 leading-relaxed">
              {t.contact.subtitle}
            </p>
            <div className="mt-4 sm:mt-5 flex items-center gap-2 text-xs font-medium text-[#F6F3EC]/85">
              <MapPin className="w-3.5 h-3.5 text-[#F6F3EC] shrink-0" />
              <span>{t.contact.location}</span>
            </div>
          </div>

          <div className="shrink-0">
            <a
              href={`mailto:${t.contact.emailLabel}`}
              className="squircle-pill bg-[#0F1E36] text-[#F6F3EC] hover:bg-[#0F1E36]/90 transition-colors px-6 py-3.5 sm:px-7 sm:py-4 text-sm font-medium inline-flex items-center justify-center gap-2.5 shadow-md w-full sm:w-auto"
            >
              <Mail className="w-4 h-4" />
              {t.contact.emailLabel}
            </a>
          </div>
        </div>

        <footer className="mt-8 sm:mt-10 pt-6 border-t border-[#0F1E36]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#0F1E36]/55 gap-2">
          <span>{t.footer.rights}</span>
          <span>noconoco.es</span>
        </footer>
      </section>

      {/* True Dark-Backdrop Lightbox (YouTube & Full Uncropped Media) */}
      {lightbox && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-[#08101E]/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl flex flex-col items-center"
          >
            {/* Top Bar */}
            <div className="w-full flex items-center justify-between text-[#F6F3EC] mb-3 sm:mb-4 px-1 gap-3">
              <div>
                <h3 className="text-sm sm:text-lg font-semibold">{lightbox.title}</h3>
                <p className="text-[11px] sm:text-xs text-[#F6F3EC]/70">
                  {lightbox.items[lightbox.index].caption[lang]}
                </p>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F6F3EC]/10 hover:bg-[#D46A38] text-[#F6F3EC] flex items-center justify-center shrink-0 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media Stage + External Navigation Buttons */}
            <div className="w-full flex items-center justify-center gap-2 sm:gap-5">
              {lightbox.items.length > 1 && (
                <button
                  type="button"
                  onClick={prevMedia}
                  aria-label="Previous"
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#F6F3EC]/12 hover:bg-[#D46A38] text-[#F6F3EC] flex items-center justify-center shrink-0 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}

              <div className="squircle-thumb bg-[#0B1628] border border-[#F6F3EC]/15 overflow-hidden flex items-center justify-center max-h-[75vh] w-full">
                {lightbox.items[lightbox.index].type === 'video' ? (
                  <div className="w-full aspect-video max-h-[75vh]">
                    <iframe
                      src={lightbox.items[lightbox.index].src}
                      title={lightbox.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>
                ) : (
                  <img
                    src={lightbox.items[lightbox.index].src}
                    alt={lightbox.items[lightbox.index].caption[lang]}
                    className="max-h-[75vh] w-auto max-w-full object-contain"
                  />
                )}
              </div>

              {lightbox.items.length > 1 && (
                <button
                  type="button"
                  onClick={nextMedia}
                  aria-label="Next"
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#F6F3EC]/12 hover:bg-[#D46A38] text-[#F6F3EC] flex items-center justify-center shrink-0 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Counter Pill */}
            {lightbox.items.length > 1 && (
              <div className="mt-3 sm:mt-4 px-3.5 py-1 rounded-full bg-[#F6F3EC]/10 text-xs font-medium text-[#F6F3EC]/80">
                {lightbox.index + 1} / {lightbox.items.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

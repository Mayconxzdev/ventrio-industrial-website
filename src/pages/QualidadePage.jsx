import React from 'react';
import { useTranslation } from 'react-i18next';
import Breadcrumb from '../components/Breadcrumb.jsx';
import InnerPageHero from '../components/InnerPageHero.jsx';
import { QUALITY, COMPANY } from '../data/company.js';
import { ShieldCheck, Target, Eye, Heart } from 'lucide-react';
import { localizeCompany, localizeQuality } from '../i18n/localizedData.js';

export default function QualidadePage({ navigateTo }) {
    const { t, i18n } = useTranslation();
    const company = localizeCompany(COMPANY, i18n.language);
    const quality = localizeQuality(QUALITY, i18n.language);

    return (
        <div>
            <Breadcrumb navigateTo={navigateTo} items={[{ label: t('nav.qualidade') }]} />

            <InnerPageHero
                badge={t('qualityPage.hero.badge')}
                title={t('qualityPage.hero.title')}
                titleHighlight={t('qualityPage.hero.titleHighlight')}
                subtitle={t('qualityPage.hero.subtitle')}
            />

            <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">

                {/* Certificados — Destaque visual */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                    {company.certifications.map((cert) => (
                        <div
                            key={cert.name}
                            className="bg-theme-surface border border-theme p-8 flex gap-6 items-start hover:border-brand-main/20 transition-all"
                        >
                            <div className="w-10 h-10 border border-brand-main/30 flex items-center justify-center shrink-0 mt-0.5 bg-brand-main/5">
                                <ShieldCheck className="text-brand-main" size={18} />
                            </div>
                            <div>
                                <h3 className="text-theme-primary font-black text-sm tracking-tight mb-1">{cert.name}</h3>
                                <p className="text-theme-muted text-xs leading-relaxed">{cert.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Escopo SGQ */}
                <div className="border-l-2 border-brand-main/40 pl-8 py-2 mb-16">
                    <p className="text-[11px] font-black text-theme-muted uppercase tracking-[0.35em] mb-3">{t('qualityPage.scope')}</p>
                    <p className="text-theme-secondary text-base font-normal leading-relaxed italic max-w-3xl">
                        "{quality.scope}"
                    </p>
                </div>

                {/* Missão / Visão / Valores */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
                    <div className="bg-theme-surface border border-theme p-8 hover:border-brand-sub/20 transition-all">
                        <div className="flex items-center gap-2.5 mb-5">
                            <Target className="text-brand-sub" size={18} />
                            <p className="text-theme-primary font-bold text-xs uppercase tracking-widest">{t('qualityPage.mission')}</p>
                        </div>
                        <p className="text-theme-secondary text-sm leading-relaxed">{quality.mission}</p>
                    </div>

                    <div className="bg-theme-surface border border-theme p-8 hover:border-brand-main/20 transition-all">
                        <div className="flex items-center gap-2.5 mb-5">
                            <Eye className="text-brand-main" size={18} />
                            <p className="text-theme-primary font-bold text-xs uppercase tracking-widest">{t('qualityPage.vision')}</p>
                        </div>
                        <ul className="space-y-3">
                            {quality.vision.map((v, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-theme-secondary text-xs leading-relaxed">
                                    <span className="text-brand-main shrink-0 mt-0.5">·</span>
                                    {v}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-theme-surface border border-theme p-8 hover:border-brand-sub/20 transition-all">
                        <div className="flex items-center gap-2.5 mb-5">
                            <Heart className="text-brand-sub" size={18} />
                            <p className="text-theme-primary font-bold text-xs uppercase tracking-widest">{t('qualityPage.values')}</p>
                        </div>
                        <ul className="space-y-3">
                            {quality.values.map((v, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-theme-secondary text-xs leading-relaxed">
                                    <ShieldCheck size={11} className="text-brand-main mt-0.5 shrink-0" />
                                    {v}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Política e Objetivos */}
                <div className="mb-16">
                    <p className="text-[11px] font-black text-theme-muted uppercase tracking-[0.35em] mb-8 flex items-center gap-3">
                        <span className="w-6 h-px bg-brand-sub" />
                        {t('qualityPage.policy')}
                    </p>
                    <div className="space-y-3">
                        {[quality.mission, ...quality.vision].map((item, i) => (
                            <div key={i} className="flex items-start gap-5 py-4 border-b border-theme">
                                <span className="text-brand-main text-xs font-black shrink-0 w-5 opacity-60">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <p className="text-theme-secondary text-sm leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Documentos certificados */}
                <div className="bg-theme-surface border border-theme p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
                    <div className="flex items-center gap-4">
                        <img
                            src="/assets/img/iso_selo.png"
                            alt="Selo ISO 9001:2015"
                            className="h-16 object-contain opacity-70"
                            loading="lazy"
                        />
                        <div>
                            <p className="text-theme-primary font-bold text-xs uppercase tracking-widest">ISO 9001:2015</p>
                            <p className="text-theme-muted text-[11px] mt-0.5">{t('qualityPage.qms')}</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <span className="text-[11px] text-brand-main font-black uppercase tracking-widest">
                            Documentos sob consulta
                        </span>
                        <span className="text-[11px] text-theme-muted font-bold uppercase tracking-widest">
                            Solicite à equipe comercial
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}

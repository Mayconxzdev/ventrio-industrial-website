import React from 'react';
import { useTranslation } from 'react-i18next';
import Breadcrumb from '../components/Breadcrumb.jsx';

export default function EticaPage({ navigateTo }) {
    const { t } = useTranslation();
    const sections = t('ethicsPage.sections', { returnObjects: true }) || [];

    return (
        <div>
            <Breadcrumb navigateTo={navigateTo} items={[{ label: t('nav.etica') }]} />

            <div className="max-w-4xl mx-auto px-4 py-20">
                <div className="mb-14">
                    <span className="text-[10px] text-brand-sub font-black uppercase tracking-widest mb-3 block">
                        {t('ethicsPage.eyebrow')}
                    </span>
                    <h1 className="text-5xl font-black text-theme-primary uppercase tracking-tighter leading-none">
                        {t('ethicsPage.title')} <span className="text-brand-main">{t('ethicsPage.titleHighlight')}</span>
                    </h1>
                </div>

                <div className="space-y-12">
                    {sections.map((section, i) => (
                        <div key={i} className="bg-theme-surface border border-theme p-10">
                            <h2 className="text-xs font-black text-brand-main uppercase tracking-[0.2em] mb-8 pb-4 border-b border-theme">
                                {section.title}
                            </h2>
                            <ul className="space-y-5">
                                {section.items && section.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-4 text-theme-secondary text-sm font-medium leading-relaxed">
                                        <span className="text-brand-sub font-black shrink-0">{j + 1}.</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            {section.contact && (
                                <div className="mt-6 pt-5 border-t border-theme">
                                    <p className="text-theme-muted text-xs font-medium">
                                        {t('ethicsPage.contactChannel')}{' '}
                                        <a href={`mailto:${section.contact}`} className="text-brand-main hover:underline font-bold">
                                            {section.contact}
                                        </a>
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Assinatura */}
                <div className="mt-14 text-right border-t border-theme pt-10">
                    <p className="text-theme-muted text-sm font-medium">{t('privacyPage.signature')}</p>
                    <p className="text-theme-primary text-sm font-black mt-2">Vent Rio Equipamentos LTDA</p>
                    <p className="text-theme-muted text-xs mt-1">Wilson Silveira — {t('ethicsPage.administrator')}</p>
                </div>
            </div>
        </div>
    );
}

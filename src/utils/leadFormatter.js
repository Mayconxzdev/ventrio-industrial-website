import { humanizeAnswer, LABELS } from './productIntelligence.js';

export const WHATSAPP_NUMBER = '5521964480102';

export const LEAD_EMAILS = {
    general: 'ventrio@ventrio.ind.br',
    sales: 'vendas-ex@ventrio.ind.br',
    rental: 'loc@ventrio.ind.br',
};

const CONTACT_KEYS = ['name', 'company', 'email', 'phone', 'city'];
const TECHNICAL_KEYS = ['procurement', 'need', 'area', 'application', 'urgency', 'notes'];

function cleanSubjectPart(value) {
    return String(value || '')
        .replace(/\s+/g, ' ')
        .replace(/[<>]/g, '')
        .trim()
        .slice(0, 70);
}

function answerLines(answers = {}, keys = []) {
    return keys
        .map((key) => [key, answers[key]])
        .filter(([, value]) => value)
        .map(([key, value]) => `${LABELS[key] || key}: ${humanizeAnswer(key, value)}`);
}

function quoteLines(items = []) {
    return items.map((item, index) => {
        const quantity = item.quantity ? ` (${item.quantity} un.)` : '';
        const mode = item.intent ? ` - ${humanizeAnswer('procurement', item.intent)}` : '';
        const notes = item.notes ? `\n   ObservaÃ§Ãµes do item: ${item.notes}` : '';
        return `${index + 1}. ${item.name}${quantity}${mode}${notes}`;
    });
}

export function getLeadRecipient({ answers = {}, quoteItems = [] } = {}) {
    if (answers.procurement === 'locacao' || quoteItems.some((item) => item.intent === 'locacao')) {
        return LEAD_EMAILS.rental;
    }

    if (answers.procurement === 'compra' || quoteItems.some((item) => item.intent === 'compra')) {
        return LEAD_EMAILS.sales;
    }

    return LEAD_EMAILS.general;
}

export function getLeadSubject({ answers = {}, quoteItems = [] } = {}) {
    const prefix = '[Site Vent Rio]';
    const details = [answers.company, answers.name, answers.city]
        .map(cleanSubjectPart)
        .filter(Boolean);
    const suffix = details.length ? ` - ${details.join(' - ')}` : '';
    let type = 'Contato geral';

    if (answers.procurement === 'locacao' || quoteItems.some((item) => item.intent === 'locacao')) {
        type = 'LocaÃ§Ã£o';
        return `${prefix} ${type}${suffix}`;
    }

    if (answers.procurement === 'compra' || quoteItems.some((item) => item.intent === 'compra')) {
        type = 'Compra';
        return `${prefix} ${type}${suffix}`;
    }

    return `${prefix} ${type}${suffix}`;
}

export function formatEmailLead({
    source = 'Site Vent Rio',
    answers = {},
    quoteItems = [],
} = {}) {
    const lines = [
        'SolicitaÃ§Ã£o recebida pelo site da Vent Rio.',
        '',
        `Origem: ${source}`,
        `Destino sugerido: ${getLeadRecipient({ answers, quoteItems })}`,
        `Assunto sugerido: ${getLeadSubject({ answers, quoteItems })}`,
    ];

    const contact = answerLines(answers, CONTACT_KEYS);
    if (contact.length) {
        lines.push('', 'Dados para retorno:', ...contact);
    }

    const technical = answerLines(answers, TECHNICAL_KEYS);
    if (technical.length) {
        lines.push('', 'Dados tÃ©cnicos informados:', ...technical);
    }

    if (quoteItems.length) {
        lines.push('', 'Produtos selecionados pelo cliente:', ...quoteLines(quoteItems));
    } else {
        lines.push('', 'Produtos selecionados pelo cliente: nenhum produto selecionado na lista.');
    }

    lines.push('', 'Retornar ao cliente pelo e-mail e/ou telefone informados acima.');
    return lines.join('\n');
}

export function formatTechnicalWhatsAppMessage({ source = 'Site Vent Rio', answers = {} } = {}) {
    const lines = [
        'OlÃ¡, vim pelo site da Vent Rio e tenho uma dÃºvida tÃ©cnica.',
        '',
        `Origem: ${source}`,
    ];

    const contact = answerLines(answers, CONTACT_KEYS);
    if (contact.length) {
        lines.push('', 'Contato para retorno:', ...contact);
    }

    const technical = answerLines(answers, TECHNICAL_KEYS.filter((key) => key !== 'procurement'));
    if (technical.length) {
        lines.push('', 'Contexto tÃ©cnico:', ...technical);
    }

    lines.push('', 'Podem me orientar tecnicamente sobre a melhor soluÃ§Ã£o?');
    return lines.join('\n');
}

export function createWhatsAppUrl(message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}


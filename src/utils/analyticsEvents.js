export function trackEvent(eventName, payload = {}) {
    if (typeof window === 'undefined') return;
    if (!/(\.|^)ventrio\.ind\.br$/i.test(window.location.hostname)) return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: eventName,
        ...payload,
    });
}


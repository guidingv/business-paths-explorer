
import { useState, useEffect } from 'react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookiePreferences | null>(null);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookie-consent');
    if (savedConsent) {
      const preferences = JSON.parse(savedConsent);
      setConsent(preferences);
      setHasConsent(true);
    }
  }, []);

  const updateConsent = (preferences: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setConsent(preferences);
    setHasConsent(true);
  };

  const clearConsent = () => {
    localStorage.removeItem('cookie-consent');
    localStorage.removeItem('cookie-consent-date');
    setConsent(null);
    setHasConsent(false);
  };

  return {
    consent,
    hasConsent,
    updateConsent,
    clearConsent,
    canUseAnalytics: consent?.analytics || false,
    canUseMarketing: consent?.marketing || false,
    canUseFunctional: consent?.functional || false,
  };
};

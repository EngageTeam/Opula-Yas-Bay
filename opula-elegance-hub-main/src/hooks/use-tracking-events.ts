import { useEffect } from 'react';

/**
 * Custom hook to trigger tracking events for various platforms
 */
export const useTrackingEvents = () => {
  /**
   * Trigger lead events for all tracking platforms
   * @param type - The type of lead (e.g., 'form_submission', 'brochure_download')
   */
  const trackLeadEvent = (type: string = 'form_submission') => {
    // Track Spotify lead event
    if (window.spdt) {
      window.spdt('lead', {
        type: type,
        category: 'real_estate',
        event_id: `lead_${type}_${new Date().getTime()}`,
      });
    }

    // Track AdRoll conversion
    if (window.adroll) {
      window.adroll.track('conversion', {
        adroll_conversion_value_in_dollars: 0,
        order_id: `lead_${new Date().getTime()}`,
      });
    }

    // Track Google Ads conversion
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-850022222/conversion',
        value: 1.0,
        currency: 'USD',
        transaction_id: `lead_${new Date().getTime()}`
      });
    }

    // Track LinkedIn conversion
    if (window.lintrk) {
      window.lintrk('track', { conversion_id: 548147 });
    }

    // Track TikTok conversion
    if (window.ttq) {
      window.ttq.track('SubmitForm', {
        content_name: type,
        content_category: 'real_estate',
      });
    }

    // Track Facebook conversion
    if (window.fbq) {
      window.fbq('track', 'Lead');
    }
  };

  /**
   * Track page view events for all platforms
   * @param page - The page being viewed
   */
  const trackPageView = (page: string) => {
    // Track Spotify page view
    if (window.spdt) {
      window.spdt('view', {
        event_id: `page_view_${page}_${new Date().getTime()}`,
      });
    }

    // Track TikTok page view
    if (window.ttq) {
      window.ttq.page();
    }

    // Track Facebook page view
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  };

  return {
    trackLeadEvent,
    trackPageView
  };
};

// Add TypeScript declarations for global tracking objects
declare global {
  interface Window {
    spdt?: (event: string, params: any) => void;
    adroll?: any;
    gtag?: (...args: any[]) => void;
    lintrk?: (event: string, params?: any) => void;
    ttq?: any;
    fbq?: (event: string, name: string, params?: any) => void;
  }
}
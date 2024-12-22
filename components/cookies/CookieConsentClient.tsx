'use client';

import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { setCookie } from 'cookies-next';

declare global {
    interface Window {
        [key: `ga-disable-${string}`]: boolean;
    }
}

interface CookieConsentClientProps {
    analyticsToken?: string;
    accepted?: boolean;
}

export default function CookieConsentClient({ analyticsToken, accepted }: CookieConsentClientProps) {
    useEffect(() => {
        if (analyticsToken && !accepted) {
            window[`ga-disable-${analyticsToken}`] = true; // Prevent tracking initially
            ReactGA.initialize(analyticsToken);
        }

        if (accepted) {
            enableGoogleAnalytics();
        }
    }, [analyticsToken]);

    const handleAccept = () => {
        setCookie('cookiesAccepted', 'true', { maxAge: 365 * 24 * 60 * 60 }); // 1 year
        enableGoogleAnalytics();
        window.location.reload();
    };

    const handleDecline = () => {
        setCookie('cookiesDeclined', 'true', { maxAge: 365 * 24 * 60 * 60 }); // 1 year
        disableGoogleAnalytics();
        window.location.reload();
    };

    const enableGoogleAnalytics = () => {
        if (analyticsToken) {
            window[`ga-disable-${analyticsToken}`] = false;
            ReactGA.send({ hitType: "pageview", page: window.location.pathname });
        }
    };

    const disableGoogleAnalytics = () => {
        if (analyticsToken) {
            window[`ga-disable-${analyticsToken}`] = true;
        }
    };

    return (
        <section className={`fixed bottom-3 rounded-lg left-1/2 -translate-x-1/2 right-0 w-fit bg-background border border-white/5 text-white p-4 flex justify-between items-center z-50 flex-col gap-y-3 ${accepted ? 'hidden' : 'flex'}`}>
            <p className="text-sm text-light">
                This site uses cookies to improve your experience. By accepting, you allow Google Analytics to track your activity.
            </p>
            <section className="flex gap-x-4">
                <button onClick={handleAccept} className="bg-green-500 text-white px-4 py-2 rounded">
                    Accept
                </button>
                <button onClick={handleDecline} className="bg-red-500 text-white px-4 py-2 rounded">
                    Decline
                </button>
            </section>
        </section>
    );
}
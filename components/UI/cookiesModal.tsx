'use client';

import { useEffect, useState } from 'react';
import ReactGA from "react-ga4";

declare global {
    interface Window {
        [key: `ga-disable-${string}`]: boolean;
    }
}

export default function CookieConsentModal() {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        const token = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TOKEN;

        if (token) {
            window[`ga-disable-${token}`] = true; // Prevent tracking initially
            ReactGA.initialize(token);
        }

        const cookiesAccepted = localStorage.getItem('cookiesAccepted');
        const cookiesDeclined = localStorage.getItem('cookiesDeclined');

        if (cookiesAccepted) {
            setIsOpen(false);
            enableGoogleAnalytics();
        } else if (cookiesDeclined) {
            setIsOpen(false);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setIsOpen(false);
        enableGoogleAnalytics();
    };

    const handleDecline = () => {
        localStorage.setItem('cookiesDeclined', 'true');
        setIsOpen(false);
        disableGoogleAnalytics();
    };

    const enableGoogleAnalytics = () => {
        const token = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TOKEN;
        if (token) {
            window[`ga-disable-${token}`] = false; // Re-enable tracking
            ReactGA.send({ hitType: "pageview", page: window.location.pathname });
        }
    };

    const disableGoogleAnalytics = () => {
        const token = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TOKEN;
        if (token) window[`ga-disable-${token}`] = true;
    };

    if (!isOpen) return null;

    return (
        <section className="fixed bottom-3 rounded-lg left-1/2 -translate-x-1/2 right-0 w-fit bg-background border border-white/5 text-white p-4 flex justify-between items-center z-50 flex-col gap-y-3">
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
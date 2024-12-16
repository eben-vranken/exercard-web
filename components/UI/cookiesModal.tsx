'use client';

import { useEffect, useState } from 'react';
import ReactGA from "react-ga4";

export default function CookieConsentModal() {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        // Check if the user has already accepted or declined cookies
        const cookiesAccepted = localStorage.getItem('cookiesAccepted');
        const cookiesDeclined = localStorage.getItem('cookiesDeclined');

        if (cookiesAccepted) {
            setIsOpen(false); // Hide modal if cookies are accepted
            loadGoogleAnalytics(); // Load GA if cookies were accepted
        } else if (cookiesDeclined) {
            setIsOpen(false); // Hide modal if cookies are declined
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setIsOpen(false);
        loadGoogleAnalytics();
    };

    const handleDecline = () => {
        localStorage.setItem('cookiesDeclined', 'true');
        setIsOpen(false);
    };

    const loadGoogleAnalytics = () => {
        const token = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TOKEN

        if (token) {
            ReactGA.initialize(token);
        }
    };

    if (!isOpen) return null;

    return (
        <section className="fixed bottom-3 rounded-lg left-1/2 -translate-x-1/2 right-0 w-fit bg-gray-800 text-white p-4 flex justify-between items-center z-50 flex-col gap-y-3">
            <p className="text-sm text-light">
                This site uses cookies to improve your experience. By accepting, you allow Google Analytics to track your activity.
            </p>
            <section className="flex gap-x-4">
                <button
                    onClick={handleAccept}
                    className="px-4 py-2 bg-primary text-white rounded hover:opacity-75"
                >
                    Accept
                </button>
                <button
                    onClick={handleDecline}
                    className="px-4 py-2 bg-gray-600 text-white rounded hover:opacity-75"
                >
                    Decline
                </button>
            </section>
        </section>
    );
}

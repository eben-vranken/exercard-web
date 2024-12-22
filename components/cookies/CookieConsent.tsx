import { cookies } from 'next/headers';
import CookieConsentClient from './CookieConsentClient';

export default async function CookieConsent() {
    const cookieStore = await cookies();
    const cookiesAccepted = cookieStore.get('cookiesAccepted');
    const cookiesDeclined = cookieStore.get('cookiesDeclined');

    // If either cookie exists, don't show the modal
    if (cookiesAccepted || cookiesDeclined) {
        return null;
    }

    const analyticsToken = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TOKEN;

    return <CookieConsentClient analyticsToken={analyticsToken} />;
}
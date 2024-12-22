import { cookies } from 'next/headers';
import CookieConsentClient from './CookieConsentClient';

export default async function CookieConsent() {
    const cookieStore = await cookies();
    const cookiesAccepted = cookieStore.get('cookiesAccepted');
    const cookiesDeclined = cookieStore.get('cookiesDeclined');

    if (cookiesDeclined) {
        return null;
    }

    const analyticsToken = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TOKEN;

    return <CookieConsentClient analyticsToken={analyticsToken} accepted={cookiesAccepted != null ? true : false} />;
}
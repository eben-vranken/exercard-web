'use client';

import dynamic from 'next/dynamic';

const CookieConsentModal = dynamic(() => import('@/components/UI/CookiesModal'), { ssr: false });

export default function ClientWrapper() {
    return (
        <>
            <CookieConsentModal />
        </>
    );
}
"use client";

import { PHONE_HREF, PHONE_CONVERSION_ID } from "@/lib/contact";

export default function PhoneLink({ children, placement, ...props }) {
    function trackClick() {
        // Keep the telephone link working even if analytics is blocked.
        try {
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function () {
                window.dataLayer.push(arguments);
            };
            window.gtag("event", "conversion", {
                send_to: PHONE_CONVERSION_ID,
                transport_type: "beacon",
            });
        } catch (_) {
            // Analytics must never interrupt a call.
        }
    }

    return (
        <a {...props} href={PHONE_HREF} data-call-placement={placement} onClick={trackClick}>
            {children}
        </a>
    );
}

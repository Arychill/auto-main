import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "@/components/header";
import Script from "next/script";
import { GOOGLE_ADS_ID } from "@/lib/contact";

export const metadata = {
    title: "Gold Auto Service",
    description: "Прикурить авто в Алматы 24/7",
};

export default function RootLayout({ children }) {
    const analyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
    const validAnalyticsId = /^G-[A-Z0-9]+$/.test(analyticsId || "");
    const googleTagConfig = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GOOGLE_ADS_ID}');
        ${validAnalyticsId ? `gtag('config', '${analyticsId}');` : ""}
    `;

    return (
        <html lang="ru" data-bs-theme="dark">
            <head>
                <meta
                    name="google-site-verification"
                    content="Jlf-KXukVHwC2wEQfXvFD3Ykwsu0buUIUTpfHV_0HMM"
                />
            </head>
            <body>
                <Script id="google-tag-init" strategy="beforeInteractive">
                    {googleTagConfig}
                </Script>
                <Script
                    id="google-tag-loader"
                    src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
                    strategy="afterInteractive"
                />
                <Header />
                <div className="">{children}</div>
            </body>
        </html>
    );
}

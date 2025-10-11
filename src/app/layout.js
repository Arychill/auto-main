import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "@/components/header";
import Script from "next/script";

export const metadata = {
    title: "Gold Auto Service",
    description: "Прикурить авто в Алматы 24/7",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-bs-theme="dark">
            <head>
            
                {/* Google tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17638025195"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-17638025195');
                    `,
                }} />
                

                <meta
                    name="google-site-verification"
                    content="Jlf-KXukVHwC2wEQfXvFD3Ykwsu0buUIUTpfHV_0HMM"
                />
                
                <Script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />
                <Script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                            page_path: window.location.pathname,
                            });
                        `,
                    }}
                />
            </head>
            <body>
                <Header />
                <div className="">{children}</div>
            </body>
        </html>
    );
}

import "~/styles/globals.css";

import {GeistSans} from "geist/font/sans";
import {type Metadata} from "next";
import TanstackProvider from "~/components/tanstack-provider";

export const metadata: Metadata = {
    title: "Salary Tracker",
    description: "The salary tracker app",
    icons: [{rel: "icon", url: "/favicon.ico"}],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${GeistSans.variable}`}>
        <body>
        <TanstackProvider>
            {children}
        </TanstackProvider>
        </body>
        </html>
    );
}

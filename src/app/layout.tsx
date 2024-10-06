import "~/styles/globals.css";

import {GeistSans} from "geist/font/sans";
import {type Metadata} from "next";
import TanstackProvider from "~/components/tanstack-provider";
import {ThemeProvider} from "~/components/theme-provider";
import {ModeToggle} from "~/components/theme-toggle";

export const metadata: Metadata = {
    title: "Salary Tracker",
    description: "The salary tracker app",
    icons: [{rel: "icon", url: "/favicon.ico"}],
};

function TopNav() {
    return (
        <nav className="flex w-full justify-between border-b p-4 text-xl font-semibold text-center">
            <div><span className="text-[hsl(280,100%,70%)]">Salary</span>Tracker</div>
            <ModeToggle/>
        </nav>
    );
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${GeistSans.variable}`}>
        <body className="flex flex-col gap-4">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <TanstackProvider>
                <TopNav/>
                {children}
            </TanstackProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}

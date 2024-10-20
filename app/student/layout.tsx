
import "@/styles/globals.css";
import {  Viewport } from "next";
import clsx from "clsx";
import { Providers } from "../providers";
import { fontSans } from "@/config/fonts";
import Nav from "@/app/student/components/Nav";


export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    

    return (
        <html suppressHydrationWarning lang="en">
            <head />
            <body
                className={clsx(
                    "min-h-screen bg-background text-foreground font-sans antialiased ",
                    fontSans.variable,
                )}
            >
                <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
                    <div className="relative flex flex-col h-screen">
                        {/* Navbar */}
                        <Nav />
                        <div className="flex">
                           

                            {/* Main Content */}
                            <main className="flex-grow p-6">
                                {children}
                            </main>
                        </div>
                        <footer>
                        </footer>
                    </div>
                </Providers>
            </body>
        </html>
    );
}

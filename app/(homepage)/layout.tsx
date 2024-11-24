import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";

export const metadata: Metadata = {
    title: "Ceavex discord app",
    description: "tool to manage your discord servers with bots",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={clsx()}>{children}</body>
        </html>
    );
}

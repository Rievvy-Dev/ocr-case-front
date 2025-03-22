import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.css";
import StyledComponentsRegistry from "@/styles/styled-components-registry";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OCR Case",
  description: "An application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

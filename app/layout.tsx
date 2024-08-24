/* eslint-disable no-undef */
import { Header } from "@/app/Components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quando joga?",
  description: "Este é um projeto de estudo, para atualizar conhecimentos com NextJS, consumo de API, entre outras features",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header.Root>
          <Header.Logo />
          <Header.MenuRoot />
        </Header.Root>
        {children}
      </body>
    </html>
  );
}

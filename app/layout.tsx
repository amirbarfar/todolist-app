import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "برنامه روزانه یا 12",
  description: "بیا و کارهاتو و برنامه ریزی هاتو به ما بسپر و تو از وقتت نهایت استفاده رو ببر :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        {children}
        <Toaster/>
      </body>
    </html>
  );
}

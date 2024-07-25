import { manrope } from "@/services/utils";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.scss";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "OCR App",
  description: "Nền tảng cung cấp dịch vụ OCR trực cấp siêu cấp vipro",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={manrope.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

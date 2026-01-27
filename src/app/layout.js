import "./globals.css";
import {inriaSans} from './fonts';
import { Toaster } from "sonner";

export const metadata = {
  title: "RH Study Abroad",
  description: "A platform for studying abroad resources and information.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${inriaSans.className} `}>
        {children}
              <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}

import "./globals.css";
import {inriaSans} from './fonts';


export const metadata = {
  title: "RH STUDY ABROAD",
  description: "A platform for studying abroad resources and information.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${inriaSans.className} `}>
        {children}
      </body>
    </html>
  );
}

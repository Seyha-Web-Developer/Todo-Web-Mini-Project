import "./globals.css";


export const metadata = {
  title: "Todo",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-SFProDisplay">
        {children}
      </body>
    </html>
  );
}

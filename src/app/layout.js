import "./globals.css";

export const metadata = {
  title: "Todo List App",
  description: "simple fullstack todo list application.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-gray-100 h-screen"
      >
        {children}
      </body>
    </html>
  );
}

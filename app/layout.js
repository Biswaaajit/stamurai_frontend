import { Toaster } from "react-hot-toast";
import StoreProvider from "./_lib/StoreProvider";
import "./globals.css";
export const metadata = {
  title: "Taskify",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-screen">
        <StoreProvider>{children}</StoreProvider>
        <Toaster
          position="top-center"
          gutter={12}
          toastOptions={{
            success: {
              duration: 2000,
              style: {
                background: "rgba(7, 97, 37, 0.628)",
                color: "white",
              },
            },
            error: {
              duration: 4000,
              style: {
                background: "rgba(97, 7, 7, 0.705)",
                color: "white",
              },
            },
          }}
        />
      </body>
    </html>
  );
}

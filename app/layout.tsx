import './globals.css'
import localFont from "@next/font/local";

const clash_display = localFont({
  variable: "--font-clash_display",
  src: [
    { path: "./fonts/ClashDisplay-Light.woff2", weight: "300" },
    { path: "./fonts/ClashDisplay-Regular.woff2", weight: "400" },
    { path: "./fonts/ClashDisplay-Medium.woff2", weight: "500" },
  ],
  display: "swap",
  fallback: ["system-ui", "arial"],
});

const epilogue = localFont({
  variable: "--font-epilogue",
  src: [
    { path: "./fonts/Epilogue-Light.woff2", weight: "300" },
    { path: "./fonts/Epilogue-Regular.woff2", weight: "400" },
    { path: "./fonts/Epilogue-Italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/Epilogue-Medium.woff2", weight: "500" },
    { path: "./fonts/Epilogue-Bold.woff2", weight: "700" },
  ],
  display: "swap",
  fallback: ["system-ui", "arial"],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${epilogue.variable} ${clash_display.variable} font-epilogue relative`}>
        {children}
      </body>
    </html>
  );
}

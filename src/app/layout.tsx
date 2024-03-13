//Root layout example
import { Metadata } from "next"


export const metadata: Metadata = {
  title: {
    absolute: "", //Absolute title for the page, template will be ignored
    default: "Next JS Learning", //Default title for pages that dont have title
    template: "%s | Next JS Learning" //Template for pages that have title, %s gives a suffix
  },
  description: "This is a sample project to learn Next JS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={{backgroundColor: "lightblue"}}>
          <p>Header</p>
        </header>

        {children}

        <footer style={{backgroundColor: "lightgreen"}}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  )
}

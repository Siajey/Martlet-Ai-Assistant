//css golbal file and custom font for the applciation
import '@/styles/globals.css'
import '@/styles/fonts.css'

//context data import
import { AppWrapper } from '@/context'

export const metadata = {
  title: 'Lexa Team',
  description: 'a professional dashboard to control your business',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  )
}




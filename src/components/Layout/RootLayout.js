"use client";
import { Inter } from 'next/font/google'
import i18nConfig from '../../../i18nConfig';
import { NextIntlClientProvider } from "next-intl";
const inter = Inter({ subsets: ['latin'] })
import language from "../../language";
import Header from '@/components/section/Header';
import Footer from '../section/Footer/Footer';
import Register from '../section/Register';

export default function RootLayout(props) {
    const { children, _params } = props;
  const locale = i18nConfig.defaultLocale;

  let messages;
  try {
    messages = language[locale];
    if (messages === undefined) {
      messages = language[i18nConfig.defaultLocale];
    }
  } catch (error) { }

  return (
    <html lang={locale}>
    <body className='relative'>
        <NextIntlClientProvider locale={locale} messages={messages} timeZone="America/Mexico_City">
        <Header></Header>
        <div className={inter.className}>{children}</div>
        <Footer />
        <Register/>
        </NextIntlClientProvider>
    </body>
    </html>
  )
}

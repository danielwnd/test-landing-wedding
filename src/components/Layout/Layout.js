"use client";
import { Inter } from 'next/font/google'
import i18nConfig from '../../../i18nConfig';
import { NextIntlClientProvider } from "next-intl";
const inter = Inter({ subsets: ['latin'] })
import language from "../../language";
import Header from '@/components/section/Header';

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
    <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
        <Header></Header>
        <p className='text-white'>texto xz</p>
        <div className={inter.className}>{children}</div>
        </NextIntlClientProvider>
    </body>
    </html>
  )
}

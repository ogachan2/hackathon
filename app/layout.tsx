'use client'
import { FormProvider, useForm } from 'react-hook-form'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

type FormValues = {
  matchdate: string
  matchname: string
  team: string
  place: string
  result: string
  category: string
  formation: string
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const methods = useForm<FormValues>({
    mode: 'onChange',
  })
  return (
    <FormProvider {...methods}>
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
    </FormProvider>
  )
}

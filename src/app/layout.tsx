import styles from "@/Global.module.scss"
export const metadata = {
  title: 'Teuma SME',
  description: 'Consultant à Temps Partagé | Expertise DAF, DRH & Direction Commerciale pour TPE/PME',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={styles.body}>{children}</body>
    </html>
  )
}

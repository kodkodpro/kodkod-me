export type PortfolioLayoutProps = {
  children: React.ReactNode
}

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <div className="prose prose-lg mx-auto pb-32 pt-16">
      {children}
    </div>
  )
}

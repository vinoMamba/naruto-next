import { TopNav } from "@/components/TopNav";

export default function Home() {
  return (
    <main>
      <TopNav />
      <div className="min-h-screen ">
        <div className="max-w[1200px] my-0 mx-auto relative flex h-screen bg-gray">
          <aside className="sticky w[300px] top-100 bg-red h-full">
            guide
          </aside>
          <article className="grow-1 h-full bg-blue">content</article>
        </div>
      </div>
    </main>
  )
}

import Link from "next/link"
import { Avatar, Input } from "antd"
import { Notice } from "./Notice"

export const TopNav = () => {
  return (
    <header
      className="position-sticky top-0 box-b backdrop-blur-24 z-1000"
    >
      <div className="w[1248px] my-0 m-auto px-24">
        <nav className="h[64px] relative flex items-center justify-between">
          <Link href="/home">
            <h1 className='m-0'>
              <p className="text-20 line-height-7 font-bold">Naruto-Blog</p>
              <p className="text-16 mt-8 font-oblique text-#999">Let&#39;s Enjoy Writing</p>
            </h1>
          </Link>
          <div className="flex items-center gap-16">
            <Input prefix={<div className="i-mdi:clipboard-text-search-outline text-#bfbfbf" />} />
            <div className="flex items-center gap-16 cursor-pointer">
              <div className="i-mdi:robot-excited-outline text-#70a597 hover:text-#007267" />
              <Notice />
              <Avatar size={24} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

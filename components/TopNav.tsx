import Link from "next/link"
import { Avatar, Badge, Popover } from "antd"

export const TopNav = () => {
  return (
    <header
      className="position-sticky top-0 box-b backdrop-blur-24"
    >
      <div className="w[1248px] my-0 m-auto px-24">
        <nav className="h[64px] relative flex items-center justify-between">
          <Link href="/home">
            <h1 className='m-0'>
              <p className="text-20 line-height-7 font-bold">Naruto-Blog</p>
              <p className="text-16 mt-8 font-oblique text-#999">Let&#39;s Enjoy Writing</p>
            </h1>
          </Link>
          <div className="flex items-center gap-16 cursor-pointer">
            <div className="i-mdi:robot-excited-outline text-#70a597 hover:text-#007267" />
            <Badge dot>
              <Popover placement="bottomRight" title={"title"} content={"contnet"} trigger="click" arrow={false}>
                <div className="i-mdi:bell-ring text-#bfbfbf hover:text-#999" />
              </Popover>
            </Badge>
            <Avatar size={24} />
          </div>
        </nav>
      </div>
    </header>
  )
}

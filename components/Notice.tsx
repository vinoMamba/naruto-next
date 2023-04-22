import { Badge, Popover, List } from "antd"

const NoticeContent = () => {
  const noticeList = [
    { id: 1, title: '通知1', content: '通知1内容' },
    { id: 2, title: '通知2', content: '通知2内容' },
    { id: 3, title: '通知3', content: '通知3内容' },
  ]
  return (
    <List
      header={<span className="text-#999 text-14">消息通知</span>}
      bordered={false}
      dataSource={noticeList}
      renderItem={item => (
        <List.Item key={item.id}>
          <span className="text-#030303 text-14">{item.title}</span>
          <span className="text-#333 text-14">{item.content}</span>
        </List.Item>
      )}
    />
  )
}

export const Notice = () => {
  return (
    <Badge dot>
      <Popover placement="bottomRight" content={<NoticeContent />} trigger="click" arrow={false}>
        <div className="i-mdi:bell-ring text-#bfbfbf hover:text-#999" />
      </Popover>
    </Badge>
  )
}

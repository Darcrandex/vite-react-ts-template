// 与数据请求相关的全局类型

declare namespace API {
  type ResponseSchema<T = any> = {
    code: number
    msg: string
    data: T
  }

  type TopicListItem = {
    id: string
    title: string
  }
}

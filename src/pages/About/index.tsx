/**
 * @name About
 * @description
 * @author darcrand
 */

export default function About() {
  return (
    <article className='mx-10'>
      <h1 className='text-2xl font-bold'>一个不错的 React 项目模板。</h1>
      <p className='mt-4'>
        最近开始全面使用<code className='code'>Typescript</code>
        作为主要的开发语言。虽然它写起来真的很烦，不过不得不承认其的优点。严格的类型检查确实可以让你在开发期间就能填不少坑。
        于是基于<code className='code'>Typescript</code>
        构建一个项目模板，其包含了常用开发中使用到的工具和库，能满足基本的需求。
      </p>
    </article>
  )
}

/**
 * @name Tailwind
 * @description
 * @author darcrand
 */

export default function Tailwind() {
  return (
    <article className='mx-10'>
      <h1 className='text-2xl font-bold'>一款让你又爱又恨的 css 方案</h1>

      <p className='mt-4'>
        <a className='link' target='_blank' href='https://tailwindcss.com/docs/installation' rel='noreferrer'>
          TailwindCSS
        </a>
        作为最近几年最火的库，值得试试看。一开始我也觉得它写起来很别扭，但后来就真香了。
      </p>

      <div className='-mb-3 mt-10'>
        <div className='not-prose relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/25'>
          <div className='bg-grid-slate-100 dark:bg-grid-slate-700/25 absolute inset-0 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]'></div>
          <div className='relative overflow-auto rounded-xl p-8'>
            <div className='bg-stripes-blue flex justify-center space-x-4 rounded-lg font-mono text-sm font-bold leading-6 text-white'>
              <div className='flex h-14 w-14 items-center justify-center rounded-lg bg-blue-500 shadow-lg'>01</div>
              <div className='flex h-14 w-14 items-center justify-center rounded-lg bg-blue-500 shadow-lg'>02</div>
              <div className='flex h-14 w-14 items-center justify-center rounded-lg bg-blue-500 shadow-lg'>03</div>
            </div>
          </div>
          <div className='pointer-events-none absolute inset-0 rounded-xl border border-black/5 dark:border-white/5'></div>
        </div>
      </div>

      <div className='relative overflow-auto rounded-xl p-8'>
        <div className='grid grid-cols-2 gap-6 text-center text-sm font-semibold text-white sm:grid-cols-4'>
          <div className='flex shrink-0 flex-col items-center'>
            <p className='mb-3 text-center font-mono text-sm font-medium text-slate-500 dark:text-slate-400'>outline</p>
            <button className='rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm outline outline-2 outline-offset-2 outline-indigo-500 dark:border-transparent dark:bg-slate-700 dark:text-slate-200'>
              Button A
            </button>
          </div>
          <div className='flex shrink-0 flex-col items-center'>
            <p className='mb-3 text-center font-mono text-sm font-medium text-slate-500 dark:text-slate-400'>
              outline-dashed
            </p>
            <button className='rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm outline-dashed outline-2 outline-offset-2 outline-indigo-500 dark:border-transparent dark:bg-slate-700 dark:text-slate-200'>
              Button B
            </button>
          </div>
          <div className='flex shrink-0 flex-col items-center'>
            <p className='mb-3 text-center font-mono text-sm font-medium text-slate-500 dark:text-slate-400'>
              outline-dotted
            </p>
            <button className='rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm outline-dotted outline-2 outline-offset-2 outline-indigo-500 dark:border-transparent dark:bg-slate-700 dark:text-slate-200'>
              Button C
            </button>
          </div>
          <div className='flex shrink-0 flex-col items-center'>
            <p className='mb-3 text-center font-mono text-sm font-medium text-slate-500 dark:text-slate-400'>
              outline-double
            </p>
            <button className='outline-3 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm outline-double outline-offset-2 outline-indigo-500 dark:border-transparent dark:bg-slate-700 dark:text-slate-200'>
              Button D
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

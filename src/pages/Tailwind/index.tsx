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

      <div className='mt-10 -mb-3'>
        <div className='not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25'>
          <div className='absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]'></div>
          <div className='relative rounded-xl overflow-auto p-8'>
            <div className='flex justify-center space-x-4 font-mono text-white text-sm font-bold leading-6 bg-stripes-blue rounded-lg'>
              <div className='w-14 h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg'>01</div>
              <div className='w-14 h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg'>02</div>
              <div className='w-14 h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg'>03</div>
            </div>
          </div>
          <div className='absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5'></div>
        </div>
      </div>

      <div className='relative rounded-xl overflow-auto p-8'>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 text-white text-sm font-semibold text-center'>
          <div className='flex flex-col items-center shrink-0'>
            <p className='font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400'>outline</p>
            <button className='px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm outline outline-2 outline-offset-2 outline-indigo-500 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent'>
              Button A
            </button>
          </div>
          <div className='flex flex-col items-center shrink-0'>
            <p className='font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400'>
              outline-dashed
            </p>
            <button className='px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm outline-dashed outline-2 outline-offset-2 outline-indigo-500 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent'>
              Button B
            </button>
          </div>
          <div className='flex flex-col items-center shrink-0'>
            <p className='font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400'>
              outline-dotted
            </p>
            <button className='px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm outline-dotted outline-2 outline-offset-2 outline-indigo-500 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent'>
              Button C
            </button>
          </div>
          <div className='flex flex-col items-center shrink-0'>
            <p className='font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400'>
              outline-double
            </p>
            <button className='px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm outline-double outline-3 outline-offset-2 outline-indigo-500 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent'>
              Button D
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

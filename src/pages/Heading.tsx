/**
 * @name Heading
 * @description
 * @author darcrand
 */

export default function Heading() {
  return (
    <section className='flex flex-col justify-center h-screen'>
      <h1 className='w-full text-center text-gray-700 font-extrabold text-8xl leading-normal'>
        <span className='inline-block mr-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-sky-300'>
          React
        </span>
        <span>Template Typescript</span>
      </h1>

      <p className='mt-6 text-gray-500 text-center text-lg'>A lightweight project template, small but complete.</p>
    </section>
  )
}

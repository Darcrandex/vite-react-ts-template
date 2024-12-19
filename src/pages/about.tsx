import { Link } from 'react-router'

export default function About() {
  return (
    <>
      <p className='text-center'>
        <Link
          className='underline transition-all hover:text-primary'
          target='_blank'
          to='https://github.com/Darcrandex/vite-react-ts-template'
        >
          vite-react-ts-template
        </Link>
      </p>

      <p className='mt-2 text-center'>
        <span>make by</span>
        <Link
          className='mx-2 underline transition-all hover:text-primary'
          target='_blank'
          to='https://github.com/Darcrandex'
        >
          @darcrand
        </Link>
        <span>with ❤️</span>
      </p>
    </>
  )
}

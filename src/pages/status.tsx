import { sleep } from '@/utils/common'
import { LoadingOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { useMutation } from '@tanstack/react-query'
import { atom, useAtom } from 'jotai'

const stateAtom = atom(0)

function useCounter() {
  return useAtom(stateAtom)
}

function CounterView() {
  const [counter, setCounter] = useCounter()
  const { mutateAsync: decrementAsync, isPending } = useMutation({
    mutationFn: async () => {
      await sleep(2000)
      setCounter((c) => c - 1)
    },
  })

  return (
    <div className='flex items-center justify-center'>
      <button
        type='button'
        className='text-white'
        onClick={() => decrementAsync()}
        disabled={isPending}
      >
        {isPending ? <LoadingOutlined /> : <MinusOutlined />}
      </button>

      <span className='w-28 text-center'>{counter}</span>

      <button
        type='button'
        className='text-white'
        onClick={() => setCounter((c) => c + 1)}
      >
        <PlusOutlined />
      </button>
    </div>
  )
}

export default function Status() {
  return (
    <>
      <p className='mb-4 text-center'>global status with Jotai</p>
      <CounterView />
    </>
  )
}

/**
 * @name ScrollView
 * @description 二次封装的滚动容器
 * @author darcrand
 */

import clsx from 'clsx'
import { PropsWithChildren } from 'react'
import { useScroll } from './use-scroll'

import './styles.css'

export type ScrollViewProps = PropsWithChildren<{ className?: string; trackHideDelay?: number }>

export default function ScrollView(props: ScrollViewProps) {
  const { elRef, isScrolling } = useScroll()
  return (
    <>
      <section ref={elRef} className={clsx(isScrolling ? '' : 'scrollbar_scroll--end', props.className)}>
        {props.children}
      </section>
    </>
  )
}

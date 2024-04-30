import './index.css'
import { ReactNode, forwardRef, useCallback, useEffect, useImperativeHandle, useRef } from "react"

  export type Props = {
    width?: string,
    children: ReactNode
  }
  export interface NoiticeRef {
    pause: () => void,
    play: () => void
  }
  const NoticeBar = forwardRef<NoiticeRef,Props>((props, ref)=>{
    const {
      width = "100%"
    } = props
    const pos = useRef(0)// 初始化位置
    // const [isPause, setIsPause] = useState(false)
    const isPause = useRef(false)
    const barWrapRef = useRef<HTMLDivElement>(null);
    const animate = useCallback(()=> {
      const wrapWidth: number = barWrapRef.current?.offsetWidth as number
      if(!isPause.current) pos.current-=0.5
      // 移动元素
      if( barWrapRef.current!==null){
        barWrapRef.current.style.transform = 'translateX(' + pos.current + 'px)';
      }
      // 检查是否到达目标位置
      if (Math.abs(pos.current) < Math.abs(wrapWidth/2)) {
        requestAnimationFrame(animate); // 继续请求下一帧动画
      }else{
        pos.current = 0
        requestAnimationFrame(animate); // 继续请求下一帧动画
      }
    },[])
    const pause = useCallback(()=>{
      isPause.current = true
    },[])
    const play = useCallback(()=>{
      isPause.current = false
    },[])
    useImperativeHandle(
      ref,
      () => ({ pause, play })
    );
    useEffect(()=>{
      requestAnimationFrame(animate);
    }, [])
    return (
      <>
      <div className="scroll" style={{'width': width}}>
        <div className="bar-wrap" ref={barWrapRef}>
            {props.children}
            {props.children}
        </div>
      </div>
      </>
    )
  })
  
  export default NoticeBar

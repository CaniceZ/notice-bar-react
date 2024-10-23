import './index.css'
import { ReactNode, forwardRef, useCallback, useEffect, useImperativeHandle, useRef } from "react"
  type FlexDirection = "column" | "row"
  export type Props = {
    height?: string,
    width?: string,
    direction?: FlexDirection
    children: ReactNode
  }
  export interface NoiticeRef {
    pause: () => void,
    play: () => void
  }
  const NoticeBar = forwardRef<NoiticeRef,Props>((props, ref)=>{
    const {
      width = "100%",
      height = "170px",
      direction = "row"
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
    const columnAnimate = useCallback(()=> {
      const wrapHeight: number = barWrapRef.current?.offsetHeight as number
      if(!isPause.current) pos.current-=0.5
      // 移动元素
      if( barWrapRef.current!==null){
        barWrapRef.current.style.transform = 'translatey(' + pos.current + 'px)';
      }
      // 检查是否到达目标位置
      if (Math.abs(pos.current) < Math.abs(wrapHeight/2)) {
        requestAnimationFrame(columnAnimate); // 继续请求下一帧动画
      }else{
        pos.current = 0
        requestAnimationFrame(columnAnimate); // 继续请求下一帧动画
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
      if(direction == "row"){
        requestAnimationFrame(animate);
      }
      if(direction == "column"){
        requestAnimationFrame(columnAnimate);
      }
    }, [])
    return (
      <>
      <div className="scroll" style={{'height': direction == 'column'? height:'auto','width': width}}>
        <div className="bar-wrap" style={{ 'flexDirection': direction }} ref={barWrapRef}>
            {props.children}
            {props.children}
        </div>
      </div>
      </>
    )
  })
  
  export default NoticeBar

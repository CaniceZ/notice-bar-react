
import { useRef } from 'react';
import './App.css'
import NoticeBar from './components'
// import NoticeBar from '../'
import { NoiticeRef } from './components/notice-bar'
// import { NoiticeRef } from 'notice-bar-react/dist/components/notice-bar'


function App() {
  const adNotice = useRef<NoiticeRef>(null);
  return (
    <>
      <div className="container">
        <NoticeBar>
        <div className="item-wrap">
          <span className="item-notice">177****2331已开通</span>
          <span className="item-notice">189****5822已开通</span>
          <span className="item-notice">189****2913已开通</span>
          <span className="item-notice">177****0955已开通</span>
        </div>
        </NoticeBar>
        <h2>自定义宽度：</h2>
        <NoticeBar width="500px">
          <div className="item-wrap">
            <span className="item-notice">177****2331已开通</span>
            <span className="item-notice">189****5822已开通</span>
            <span className="item-notice">189****2913已开通</span>
            <span className="item-notice">177****0955已开通</span>
          </div>
        </NoticeBar>
        <h2>暂停&开始事件：</h2>
        <NoticeBar ref={adNotice}>
          <div className="item-wrap" onMouseOver={()=>adNotice.current?.pause()} onMouseLeave={()=>adNotice.current?.play()}>
            <span className="item-notice">177****2331已开通</span>
            <span className="item-notice">189****5822已开通</span>
            <span className="item-notice">189****2913已开通</span>
            <span className="item-notice">177****0955已开通</span>
          </div>
        </NoticeBar>
      </div>
    </>
  )
}

export default App

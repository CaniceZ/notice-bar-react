# 安装
```sh
npm install notice-bar-react
```
# 使用
```js
import NoticeBar from 'notice-bar-react'

<NoticeBar>
    <div className="item-wrap">
        <span className="item-notice">177****2331已开通</span>
        <span className="item-notice">189****5822已开通</span>
        <span className="item-notice">189****2913已开通</span>
        <span className="item-notice">177****0955已开通</span>
    </div>
</NoticeBar>
```
```css
    .item-wrap{
        display: flex;
        height: 30px;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        flex-wrap: nowrap;
        color: #fff;
    }
    .item-notice{
        padding: 0 20px;
        background: rgba(0,0,0,.5);
        border-radius: 15px;
        margin-right: 15px;
    }
```
## 主要功能
支持自定义宽度
```js
    <NoticeBar width="500px"/>
```
支持暂停&开始
```js
    import { NoiticeRef } from 'notice-bar-react/dist/components/notice-bar'
    const adNotice = useRef<NoiticeRef>(null);
    <NoticeBar ref={adNotice}>
        <div className="item-wrap" onMouseOver={()=>adNotice.current?.pause()} onMouseLeave={()=>adNotice.current?.play()}>
        <span className="item-notice">177****2331已开通</span>
        <span className="item-notice">189****5822已开通</span>
        <span className="item-notice">189****2913已开通</span>
        <span className="item-notice">177****0955已开通</span>
        </div>
    </NoticeBar>
```
## 示例
![示例gif](https://github.com/CaniceZ/notice-bar-react/tree/main/src/assets/demo.gif)

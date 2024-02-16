錨功能(anchor)
=========================
### 簡說
當範圍到達某個定位，就固定住位置。
### 演示
[線上觀看](http://startail007.github.io/reactjs_anchor/v0/index.html)
### 設置
|設置|默認值|描述|
|---|---|---|
|offsetTop|`0`|上方鎖住的位置|
|offsetBottom|`0`|下方鎖住的位置|
|zIndex|`""`|固定後zIndex的位置|
|className|`""`|風格|
### 默認風格
該組件會自動嵌入了一些必要的風格。
```css
.Anchor{
    position: relative;
    display: block;
    width: 100px;
    height: 100px;
}
.Anchor > .box{
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #a5a5a5;
}
.Anchor,.Anchor > .box,.Anchor > .box.activeTop,.Anchor > .box.activeBottom{    
    width: 100px;
    height: 100px;
}
```
### 設定參考
```javascript
<Anchor offsetTop = {80} offsetBottom = {100} className = "Anchor03">第三個</Anchor>
```
### 許可
MIT

var getPosition = function(el) {
  var Rect = el.getBoundingClientRect();
  return {x:Rect.left + window.scrollX,y:Rect.top + window.scrollY};
}


var Anchor = React.createClass({displayName: "Anchor",
    getInitialState: function() {
        return {
            TopBool:this.props.offsetTop!=undefined,
            lockTop:false,
            offsetTop:this.props.offsetTop==undefined?0:this.props.offsetTop,
            BottomBool:this.props.offsetBottom!=undefined,
            lockBottom:false,
            offsetBottom:this.props.offsetBottom==undefined?0:this.props.offsetBottom,
            className:this.props.className || "",
            zIndex:this.props.zIndex || ""
        };
    },
    componentWillMount: function () {        
        this.min=null;
        this.max=null;
    },
    componentWillUnmount: function () {
         window.removeEventListener("scroll", this.update);
    },    
    componentDidMount: function () {
        this.r = this.refs.box.getBoundingClientRect();
        this.min = window.scrollY+this.r.top-this.state.offsetTop;
        this.max = window.scrollY+this.r.top+this.state.offsetBottom - window.innerHeight;
        this.update();
        window.addEventListener("scroll", this.update);
    },
    update:function(){
        if(this.min!=null){  
            //console.log(window.scrollY)
            if(this.state.TopBool && window.scrollY>this.min){
                this.setState({lockTop:true,lockBottom:false})
            }else if(this.state.BottomBool && window.scrollY<this.max){                
                this.setState({lockTop:false,lockBottom:true})
            }else {
                this.setState({lockTop:false,lockBottom:false})
            }
        }
    },
    componentWillUnmount:function(){
    },
    componentDidUpdate: function(prevProps, prevState){        
    },      
    render: function() {   
        var BoxStyle = {};
        var BoxClass = "box"
        if(this.state.lockTop){
            //console.log("aaa")
            BoxStyle = {position:'fixed',top:this.state.offsetTop,zIndex:this.state.zIndex};
            BoxClass += " activeTop";
        }else if(this.state.lockBottom){
            //console.log("aaa")
            BoxStyle = {position:'fixed',top:window.innerHeight - this.state.offsetBottom,zIndex:this.state.zIndex};
            BoxClass += " activeBottom";
        }
        var text = " " + (this.state.lockTop?("左上角固定在上方" + this.state.offsetTop):(this.state.lockBottom?("左上角固定在下方" + this.state.offsetBottom):""))
        return (
                React.createElement("div", {ref: "anchor", className: "Anchor " + this.state.className}, 
                    React.createElement("div", {ref: "box", className: BoxClass, style: BoxStyle}, 
                        this.props.children, 
                        text
                    )
                ) 
        );
    }
});
ReactDOM.render(
    React.createElement(Anchor, {offsetTop: 0, className: "Anchor01"}, "第一個"),
    document.getElementById('example01')
);
ReactDOM.render(
    React.createElement(Anchor, {offsetTop: 40, className: "Anchor02"}, "第二個"),
    document.getElementById('example02')
);
ReactDOM.render(
    React.createElement(Anchor, {offsetTop: 80, offsetBottom: 100, className: "Anchor03"}, "第三個"),
    document.getElementById('example03')
);

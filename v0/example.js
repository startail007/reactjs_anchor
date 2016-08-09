var getPosition = function(el) {
  var Rect = el.getBoundingClientRect();
  return {x:Rect.left + window.scrollX,y:Rect.top + window.scrollY};
}


var Anchor = React.createClass({
    getInitialState: function() {
        return {lock:false,min:null,offset:10};
    },
    componentWillMount: function () {
        /*setInterval(function(){
            var r = this.refs.anchor.getBoundingClientRect();
            //console.log(window.scrollY);
            if(r.top<=0){
                this.setState({lock:true})
            }else{
                //console.log("aaa",r.top,window.scrollY)
                this.setState({lock:false})
            }
        }.bind(this),1000/30);*/
        
        //setTimeout(function(){
            
            //console.log(r,window.scrollY,window.scrollY+r.top);
        //}.bind(this),1000/30);
        
        
    },
    componentDidMount: function () {
        var r = this.refs.anchor.getBoundingClientRect();
        this.setState({min:window.scrollY+r.top-this.state.offset});
        setInterval(function(){
            if(this.state.min!=null){                
                if(window.scrollY>this.state.min){
                    this.setState({lock:true})
                }else{
                    this.setState({lock:false})
                }
            }
        }.bind(this),1000/30);
    },
    componentWillUnmount:function(){
    },
    componentDidUpdate: function(prevProps, prevState){        
    },      
    render: function() {   
        var AnchorStyle = {};
        if(this.state.lock){
            //console.log("aaa")
            AnchorStyle = {position:'fixed',top:this.state.offset}
        }
        return (
                <div ref = "anchor" className = "Anchor" style={AnchorStyle}>                      
                </div> 
        );
    }
});
ReactDOM.render(
    <Anchor />,
    document.getElementById('example01')
);

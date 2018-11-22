document.onLoad = function () {
var BTN = React.createClass({
    render: function() {
      var children = this.props.children;
      var color = this.props.color;
      return {
        type: 'button',
        props: {
          className: 'button button-' + color,
          children: {
            type: 'b',
            props: {
              children: children
            }
          }
        }
      };
    }
  });
  ReactDOM.render({ 
    type: BTN, 
    props: { 
      color: 'red', 
      children: 'Ok'  
    } 
  } ,document.createElement('slideshow'));
};
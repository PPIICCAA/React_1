function Welcome() {
    return <h1>Hello</h1>;

  }
class Slider extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "David"
        }
    }

    render(){
          return (
            <div>
                <h1>hola</h1>
            </div>
          );
    };
};
ReactDOM.render( Welcome, document.getElementById("slider"));
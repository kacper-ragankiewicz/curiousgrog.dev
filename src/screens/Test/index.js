import React from 'react';


class Test extends React.Component {

    render() {
    return(
        <h1>Hello</h1>
    )
    }
}
export default Test;

// import React from 'react';

// class Test2 extends React.Component {

//     constructor() {
//         super()
//         this.state = {
//             message: 'Welcome visiter'
//         }
//     }

//     object = {
//         aka: function() {
//             return <span>Hello</span>
//         },
//     }

//     changeMessage() {
//         this.setState({message: "thx"})
//     }

//     render() {
//     return (
//         <div>
//             {/* <h1> Hello {this.props.name} and a.k.k {this.object.aka()}</h1> */}
//             <h1>{this.state.message}</h1>
//             <button onClick={() => this.setState({message: "thx"})}>Subscribe</button>
//         </div>
//         )
//     }
// }
// export default Test2;
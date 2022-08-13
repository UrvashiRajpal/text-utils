import React from 'react'

export default function About(props) {
//   const [myStyle, setStyle]= useState({
//     color: 'black',
//     backgroundColor: 'white'
//   })  

  let myStyle ={
    color: props.mode==='dark'? 'white': '#042743',
    backgroundColor: props.mode==='dark'? 'rgb(36 74 104)': 'white',
  }
//   const [btnText, setText] = useState("Enable Dark Mode")

//   const toggleStyle = ()=>{
//     if(myStyle.color==='black'){
//         setStyle({
//             color:'white',
//             backgroundColor:'black',
//             border: '1px solid white'

//         })
//         setText('Enable Light Mode')
//     }
//     else{
//         setStyle({
//             color:'black',
//             backgroundColor:'white',
//             border: '1px solid black'

//         })
//         setText('Enable Dark Mode')

//     }
//     }
  
  return (
    <div className='container'>
        <h1 className='my-3' style={{color: props.mode==='dark'? 'white': 'black'}}>About Us</h1>
        <div className="accordion" id="accordionExample" >
        <div className="card" style={myStyle}>
            <div className="card-header" id="headingOne">
            <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left" type="button" style={myStyle} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Collapsible Group Item #1
                </button>
            </h2>
            </div>

            <div id="collapseOne" className="collapse show" style={myStyle} aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body">
                Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
            </div>
            </div>
        </div>
        <div className="card" style={myStyle}>
            <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Collapsible Group Item #2
                </button>
            </h2>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" style={myStyle} data-parent="#accordionExample">
            <div className="card-body">
                Some placeholder content for the second accordion panel. This panel is hidden by default.
            </div>
            </div>
        </div>
        <div className="card" style={myStyle}>
            <div className="card-header" id="headingThree">
            <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" type="button" style={myStyle} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Collapsible Group Item #3
                </button>
            </h2>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" style={myStyle} data-parent="#accordionExample">
            <div className="card-body">
                And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
            </div>
            </div>
        </div>
        </div>
        {/* <div className="container my-3">
        <button type="button" onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
        </div> */}
    </div>
  )
}

import React from 'react'
import './header.less'

// let Header=React.createClass({
//     render(){
//         return (
//             <div className='row header-component'>
//                 <img src='/static/images/logo.png' width='40' className="-col-auto"/>
//                 <h1 className="caption">Tin-Tin Music Player Build By React</h1>
//             </div>
//         )
//     }
// })

class Header extends React.Component{
    render(){
        return (
            <div className='row header-component'>
                <img src='/static/images/logo.png' width='40' className="-col-auto"/>
                <h1 className="caption">Tin-Tin Music Player</h1>
            </div>
        )
    }
}

export default Header;
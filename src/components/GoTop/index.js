import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
    state={
        flag:false
    }
   
    componentDidMount() {
        window.addEventListener('scroll', this.handleScrollx)

    }
    handleScrollx = () => {
        if (window.pageYOffset >= 30) { 
            this.setState({flag:true})
        } else {
            this.setState({flag:false})
          
        }
    }
    gotop = () => {

        cancelAnimationFrame(null);
        const length = window.pageYOffset;
        console.log(length);
        let a = requestAnimationFrame(function fn() {
            const oTop = document.body.scrollTop || document.documentElement.scrollTop;
            if (oTop > 0) {
                document.documentElement.scrollTop = oTop - length / 20;
                requestAnimationFrame(fn);
            } else {
                cancelAnimationFrame(a);
            }
        })



    }
    render() {
        return (
            <div style={{display:this.state.flag?'block':'none'}} className="GoTop"  onClick={this.gotop}>
            </div>
        )
    }
}

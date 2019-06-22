import React, { Component } from 'react';
import './Carousel.css';




class Carousel extends Component {
    state= {
        currentIndex: 0,
    };

    currentInterval = 0;


    componentWillMount() {
       this.beginTimer();
    }


    render(){
        const images = this.props.data
        .map((imageUrl, i) => (
            <div 
            key={i}   
            className="slide" 
            style={{
                transform: `translateX(-${this.state.currentIndex}00%)`
            }}
            >
                <img  src={imageUrl} alt={`${i+1}`} />
            </div>
        ));


const dots = this.props.data
            .map((_, i) => (
                <span key={i} className={`dots ${i == this.state.currentIndex  ?  'highlighted' : ''}`}></span>
            ));



         return(
             <div className="my-carousel">
                 <button className="previous" onClick={this.prevImage}>&laquo;</button>

                 <button className="next" onClick={this.nextImage}>&raquo;</button>


                 {images}


                <div className="dot-container">
                   {dots}
                </div>

             </div>
         );


    }

beginTimer (){
    this.currentInterval = setInterval(this.nextImage, 5000)
};


restartTimer(){
    clearInterval(this.currentInterval);
    this.beginTimer(false);
}




nextImage=(event) => {
    if(event) {
        this.restartTimer();
    }
    this.setState({
        currentIndex: (this.state.currentIndex + 1) % this.props.data.length
    })
};


prevImage=(event) => {
    if(event) {
        this.restartTimer();
    }
    const nextIndex = this.state.currentIndex - 1;

    this.setState({ 
        currentIndex: nextIndex >= 0 ? nextIndex : this.props.data.length + nextIndex,
    })
};

}



export default Carousel;
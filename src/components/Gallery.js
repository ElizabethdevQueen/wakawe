import React, { Component } from 'react';
import '../Gallery.css';
import '../App.css';



class Gallery extends Component {

    state = {
        count: 1,
        anim: false
    }

    arrowLeftHandler = () => {
        let newCount = this.state.count + 1;
        this.setState({
            count: newCount,
            anim: true
        })
        this.timer();

        if (this.state.count === 9) {
            this.setState({
                count: 1
            })
        }
        console.log(this.state.count);
    }
    arrowRightHandler = () => {
        let newCount = this.state.count - 1;
        this.setState({
            count: newCount,
            anim: true
        })
        this.timer();

        if (this.state.count === 1) {
            this.setState({
                count: 9
            })
        }
        console.log(this.state.count);
    }
    componentDidMount() {
        this.intervalClear = this.timer();
    }
    timer = () => {
        setTimeout(() => {
            this.setState({
                anim: false
            })
        }, 300)
    }
    componentWillUnmount() {
        clearInterval(this.intervalClear);
    }

    render() {
        return (
        <div>
            <div className='mainslide'>
                <div className={this.state.anim ? 'newPixs images' : 'images'}>
                    <img src={`./images/book-${this.state.count}.jpg`} alt="" />
                </div>
                <div className="btns">
                    <i onClick={this.arrowLeftHandler} className="fas fa-chevron-left"></i>
                    <i onClick={this.arrowRightHandler} className="fas fa-chevron-right"></i>
                </div>
            </div>

            
                <div class="container">
                    <h2 >OUR GALLERY</h2>
                
                    <div class="row">
                        <div class="col-md-4">
                            <div class="thumbnail">
                                <a href="https://cdn.lifehack.org/wp-content/uploads/2019/07/the-subtle-art-of-not-giving-a-f.jpg" >
                                    <img src="https://cdn.lifehack.org/wp-content/uploads/2019/07/the-subtle-art-of-not-giving-a-f.jpg" alt="Lights" style={{ width: '100%' }} />
                                        <div class="caption">
                                        <p style={{ fontSize: 'large', fontWeight: 'bolder', marginTop: '40px' }}>THE SUBTLE ART OF NOT GIVING A F*CK</p>
                                        </div>
                                </a>
                            </div>
                        </div>
                            <div class="col-md-4">
                                <div class="thumbnail">
                                <a href="https://cdn.everydaypower.com/wp-content/uploads/2018/04/how-successful-people-think.jpg" >
                                    <img src="https://cdn.everydaypower.com/wp-content/uploads/2018/04/how-successful-people-think.jpg" alt="Nature" style={{ width: '100%' }} />
                                            <div class="caption">
                                        <p style={{ fontSize: 'large', fontWeight: 'bolder', marginTop: '40px' }}>HOW SUCCESSFUL PEOPLE THINK</p>
                                            </div>
                                    </a>
                                </div>
                            </div>
                                <div class="col-md-4">
                                    <div class="thumbnail">
                                <a href="https://cdn.everydaypower.com/wp-content/uploads/2014/11/Screen-Shot-2015-06-21-at-12.55.30-PM.gif" >
                                    <img src="https://cdn.everydaypower.com/wp-content/uploads/2014/11/Screen-Shot-2015-06-21-at-12.55.30-PM.gif" alt="Lights" style={{ width: '100%' }} />
                                                <div class="caption">
                                                    <p style={{ fontSize: 'large', fontWeight: 'bolder', marginTop: '40px'}}>THE MAGIC OF THINKING BIG</p>
                                                </div>
                                        </a>
                                    </div>
                                </div>
                                    <div class="col-md-4">
                                        <div class="thumbnail">
                                <a href="https://images-na.ssl-images-amazon.com/images/I/51gum8HSitL._SX331_BO1,204,203,200_.jpg" >
                                    <img src="https://images-na.ssl-images-amazon.com/images/I/51gum8HSitL._SX331_BO1,204,203,200_.jpg" alt="Nature" style={{width: '100%' }} />
                                                    <div class="caption">
                                        <p style={{ fontSize: 'large', fontWeight: 'bolder', marginTop: '40px' }}>THE BOOK ON BUSINESS</p>
                                                    </div>
        </a>
      </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="thumbnail">
                                <a href="https://eloquentjavascript.net/img/cover.jpg" >
                                    <img src="https://eloquentjavascript.net/img/cover.jpg" alt="javascript" style={{ width: '100%' }} />
                                                        <div class="caption">
                                        <p style={{ fontSize: 'large', fontWeight: 'bolder', marginTop: '40px' }}>ELOQUENT JAVASCRIPT</p>
                                                        </div>
        </a>
      </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="thumbnail">
                                <a href="https://i2.wp.com/www.programmer-books.com/wp-content/uploads/2018/11/HTML-A-Beginners-Guide-5th-Edition.jpg?fit=404%2C500&ssl=1" >
                                    <img src="https://i2.wp.com/www.programmer-books.com/wp-content/uploads/2018/11/HTML-A-Beginners-Guide-5th-Edition.jpg?fit=404%2C500&ssl=1" alt="Lights" style={{ width: '100%' }} />
                                        <div class="caption">
                                        <p style={{ fontSize: 'large', fontWeight: 'bolder', marginTop: '40px' }}>HTML BEGINNER'S GUIDE</p>
                                        </div>
                                            </a>
                                        </div>
                                                </div>
                                            </div>
                                        </div>
            </div>
        );
    }
}

export default Gallery;
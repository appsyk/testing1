import './greenfair/css/style.css';
import './greenfair/css/isotope/style.css';
import './greenfair/css/animate.min.css';
import './greenfair/css/bootstrap.min.css';
import './greenfair/css/carousel.css';
import './greenfair/css/font-awesome.min.css';
import './greenfair/css/responsive.css';
import './LoginStyle/style.css';
import React from 'react';
import firebase from './Reserve/Firebase';

import { BrowserRouter, Route, NavLink } from 'react-router-dom';

//import ScriptTag from 'react-script-tag';
import App from './mapBox/App';
//import Header from './NavBar/Header';
//import Test from './Test';
//import Login from './LoginStyle/App';


class Temp extends React.Component {

    state = { user: null };

    componentDidMount() {
        this.authListener();
    }

    authListener = () => {
        firebase.auth().onAuthStateChanged((user) => {

            if (user) {
                this.setState({ user });
                localStorage.setItem('user', user.uid);
            } else {
                this.setState({ user: null });
                localStorage.removeItem('user');
            }
        });
    }


    logout = () => {
        firebase.auth().signOut();
    }

    onBooking = () => {
        if (this.state.user) {
            return <div> <a href="/reserve-ur-place"></a></div>;
        }
        else {
            return <div> <a href="/login"></a></div>;
        }
    }


    renderHelper() {

        console.log(100, this.state.user);

        return (
            <div>

                {/* ); */}


                <section id="slider">

                    <div id="carousel-example-generic" className="carousel slide carousel-fade" data-ride="carousel" data-interval="8000">
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            {/* <li data-target="#carousel-example-generic" data-slide-to="2"></li> */}
                        </ol>

                        <div className="carousel-inner" role="listbox" >
                            <div className="item active">
                                <div className="slider_overlay">
                                    {/* <img src="https://images.wallpaperscraft.com/image/parking_underground_marking_118795_1920x1080.jpg" alt="..."></img> */}
                                    <img src="http://newschool.co.il/wp-content/uploads/2018/11/pexels-photo-408503-1500x630.jpeg" alt="slider" style={{ height: '30%' }} ></img>
                                    <div className="carousel-caption">
                                        <div className="slider_text">
                                            <h3>Smart Park</h3>
                                            <h2>Search for Parking</h2>
                                            <p>Now you can search here and get parking place immadiately.</p>
                                            {/* <a href={Test.js} className="custom_btn">Read  More</a> */}


                                            <div>
                                                <NavLink to='/search-maps'>
                                                    <button className="btn btn-success custom-btn btn-lg faa-bounce animated" style={{ borderRadius: '19px' }}>
                                                        <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/zoom-search-2-icon.png" alt="srch" height='50px' width='50px' style={{ marginRight: '17px' }} />
                                                        Search for places
                                                    </button>
                                                </NavLink><br /><br /><br />

                                                <div>
                                                    {/* <Route path="/search-maps" exact component={App} /> */}
                                                    {/* Sanju<Route path="/login" exact component={LoginApp} /> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--End of item With Active--> */}
                            <div className="item">
                                <div className="slider_overlay">
                                    <img src="https://images.wallpaperscraft.com/image/bike_street_sidewalk_cars_parking_57304_1920x1080.jpg" alt="..."></img>
                                    <div className="carousel-caption">
                                        <div className="slider_text">
                                            <h3>Smart Park</h3>
                                            <h2>Rent Out Your Parking Places</h2>
                                            <p>You can give your places on rent for parking.</p>
                                            {/* <a href="" className="button">On Rent</a> */}
                                            <div>
                                                <NavLink to='/rent-out-ur-places'>
                                                    <button className="btn btn-light custom-btn btn-lg faa-bounce animated" style={{ borderRadius: '19px' }}>
                                                        <img src="https://cdn1.iconfinder.com/data/icons/travel-40/256/Vacation_Rental-512.png" alt="srch" height='50px' width='50px' style={{ marginRight: '17px' }} />
                                                        Add your space
                                                    </button>
                                                </NavLink><br /><br /><br />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--End of Item--> */}
                            {/* <div className="item">
                                <div className="slider_overlay">
                                    <img src="https://hdwallsource.com/img/2014/5/street-parking-wallpaper-45023-46185-hd-wallpapers.jpg" alt="..."></img>
                                    <div className="carousel-caption">
                                        <div className="slider_text">
                                            <h3>Smart Park</h3>
                                            <h2>Follow traffic rules, save your future</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <div>
                                                <NavLink to='#contact'>
                                                    <button className="button12 faa-bounce animated">
                                                        <img src="https://cdn1.iconfinder.com/data/icons/travel-40/256/Vacation_Rental-512.png" alt="srch" height='50px' width='50px' style={{ marginRight: '17px' }} />
                                                        <b>Add your space</b>
                                                    </button>
                                                </NavLink><br /><br /><br />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <!--End of item--> */}
                        </div>
                        {/* <!--End of Carousel Inner--> */}
                    </div>
                </section>
                {/* <!--end of slider section--> */}

                {/* <!--Start of welcome section--> */}
                <section id="welcome" >
                    <br /><br /><br /><br /><br />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="wel_header">
                                    <h2>welcome to Smart Park</h2>
                                    <p>Our Smart Park Organization is one of the non profit organization near you. Get our services like</p>
                                </div>
                            </div>
                        </div>
                        {/* <!--End of row--> */}
                        <div className="row">
                            <div className="col-md-3">
                                <div className="item">
                                    <div className="single_item">
                                        <div className="item_list">

                                            {this.state.user ?
                                                (<a href="/rent-out-ur-places">
                                                    <div className="welcome_icon">
                                                        <i className=""><img src="https://cdn1.iconfinder.com/data/icons/travel-40/256/Vacation_Rental-512.png" alt="Pic_slider3"></img></i>
                                                    </div>
                                                    <h4>Rent out your places</h4>
                                                </a>) :
                                                (<a href="/login">
                                                    <div className="welcome_icon">
                                                        <i className=""><img src="https://cdn1.iconfinder.com/data/icons/travel-40/256/Vacation_Rental-512.png" alt="Pic_slider3"></img></i>
                                                    </div>
                                                    <h4>Booking</h4>
                                                </a>)}
                                            <p>Lorem ipsum dolor sit amet, eu qui modo expetendis reformidans ex sit set appetere sententiae seo eum in simul homero.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--End of col-md-3--> */}
                            <div className="col-md-6">
                                <div className="item">
                                    <div className="single_item">
                                        <div className="item_list">
                                        <NavLink to='/search-maps'>
                                            <div className="welcome_icon">
                                                <i className="fa fa-globe fa-10x"></i>
                                            </div>
                                            <h4>Google maps</h4>
                                            <p>Lorem ipsum dolor sit amet, eu qui modo expetendis reformidans ex sit set appetere sententiae seo eum in simul homero.</p>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--End of col-md-3--> */}
                            <div className="col-md-3">
                                <div className="item" >
                                    {/* <a href="/search-maps"> */}
                                    <div className="single_item">
                                        <div className="item_list">
                                            {this.state.user ?
                                                (<a href="/reserve-ur-place">
                                                    <div className="welcome_icon">
                                                        <i className=""><img src="https://cdn1.iconfinder.com/data/icons/travel-hand-drawn-icons/64/travel_25-512.png" alt="Pic_slider3"></img></i>
                                                    </div>
                                                    <h4>Booking</h4>
                                                </a>) :
                                                (<a href="/login">
                                                    <div className="welcome_icon">
                                                        <i className=""><img src="https://cdn1.iconfinder.com/data/icons/travel-hand-drawn-icons/64/travel_25-512.png" alt="Pic_slider3"></img></i>
                                                    </div>
                                                    <h4>Booking</h4>
                                                </a>)}

                                            <p>Lorem ipsum dolor sit amet, eu qui modo expetendis reformidans ex sit set appetere sententiae seo eum in simul homero.</p>
                                        </div>
                                    </div>
                                    {/* </a> */}
                                </div>
                            </div>
                            {/* <!--End of col-md-3--> */}
                            {/* <div className="col-md-3">
                                <div className="item">
                                    <div className="single_item">
                                        <div className="item_list">
                                            <div className="welcome_icon">
                                                <i className="fa fa-cog"></i>
                                            </div>
                                            <h4>solar system</h4>
                                            <p>Lorem ipsum dolor sit amet, eu qui modo expetendis reformidans ex sit set appetere sententiae seo eum in simul homero.</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <!--End of col-md-3--> */}
                        </div>
                        {/* <!--End of row--> */}
                    </div>
                    {/* <!--End of container--> */}
                </section>
                {/* <!--end of welcome section--> */}

                {/* <section id="map" style={{ height: '500px' }}>
                    <div >
                        <div>
                            <div>
                                <iframe width="100%" height="520" src="https://www.youtube.com/embed/I4g2UkG6Qs8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <App />
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* <!--Start of volunteer--> */}
                <section id="volunteer" >
                    <div className="container ">
                        <div className="row vol_area">
                            <div className="col-md-8">
                                <div className="volunteer_content">
                                    <h3>Become a <span>Smart</span></h3>
                                    <p>Join to Our Application And be safe with your vehicle.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-md-offset-1">
                                <div className="join_us">
                                    <a href="/login" className="vol_cust_btn">join us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="counter">
                    <div className="counter_img_overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="counter_header">
                                        <h2>OUR achivement</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>


                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="counter_item text-center">
                                        <div className="sigle_counter_item">
                                            <img src="img/tree.png" alt=""></img>
                                            <div className="counter_text">
                                                <span className="counter">1542</span>
                                                <p>tree cut</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="counter_item text-center">
                                        <div className="sigle_counter_item">
                                            <img src="img/hand.png" alt=""></img>
                                            <div className="counter_text">
                                                <span className="counter">1458</span>
                                                <p>animal lost</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="counter_item text-center">
                                        <div className="sigle_counter_item">
                                            <img src="img/tuhnder.png" alt=""></img>
                                            <div className="counter_text">
                                                <span className="counter">9854</span>
                                                <p>blubs collected</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="counter_item text-center">
                                        <div className="sigle_counter_item">
                                            <img src="img/cloud.png" alt=""></img>
                                            <div className="counter_text">
                                                <span className="counter">5412</span>
                                                <p>water level</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section id="event">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="event_header text-center">
                                    <h2>latest event</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-6 zero_mp">
                                        <div className="event_item">
                                            <div className="event_img">
                                                <img src="img/tree_cut_1.jpg" alt=""></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 zero_mp">
                                        <div className="event_item">
                                            <div className="event_text text-center">
                                                <a href=""><h4>One Tree Thousand Hope</h4></a>
                                                <h6>15-16 May in Dhaka</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adip scing elit. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                <a href="" className="event_btn">read more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 zero_mp">
                                        <div className="event_item">
                                            <div className="event_text text-center">
                                                <a href=""><h4>One Tree Thousand Hope</h4></a>
                                                <h6>15-16 May in Dhaka</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adip scing elit. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                <a href="" className="event_btn">read more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 zero_mp">
                                        <div className="event_item">
                                            <div className="event_img">
                                                <img src="img/tree_cut_2.jpg" alt=""></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="event_news">
                                    <div className="event_single_item fix">
                                        <div className="event_news_img floatleft">
                                            <img src="img/tree_cut_3.jpg" alt=""></img>
                                        </div>
                                        <div className="event_news_text">
                                            <a href="#"><h4>Let’s plant 200 tree each...</h4></a>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, veniam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="event_news">
                                    <div className="event_single_item fix">
                                        <div className="event_news_img floatleft">
                                            <img src="img/tree_cut_4.jpg" alt=""></img>
                                        </div>
                                        <div className="event_news_text">
                                            <a href="#"><h4>Keep your house envirome..</h4></a>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, veniam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="event_news">
                                    <div className="event_single_item fix">
                                        <div className="event_news_img floatleft">
                                            <img src="img/tree_cut_3.jpg" alt=""></img>
                                        </div>
                                        <div className="event_news_text">
                                            <a href="#"><h4>Urgent Clothe Needed Needed</h4></a>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, veniam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="event_news">
                                    <div className="event_single_item fix">
                                        <div className="event_news_img floatleft">
                                            <img src="img/tree_cut_4.jpg" alt=""></img>
                                        </div>
                                        <div className="event_news_text">
                                            <a href="#"><h4>One Tree Thousand Hope</h4></a>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, veniam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="event_news">
                                    <div className="event_single_item fix">
                                        <div className="event_news_img floatleft">
                                            <img src="img/tree_cut_3.jpg" alt=""></img>
                                        </div>
                                        <div className="event_news_text">
                                            <a href="#"><h4>One Tree Thousand Hope</h4></a>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, veniam.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
 */}


                {/* <!--Start of testimonial--> */}
                <section id="testimonial">
                    <div className="testimonial_overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="testimonial_header text-center">
                                        <h2>Team Members</h2>
                                        <p>This is our team who takes a great effort to build such excellent Application.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!--End of row--> */}
                            <section id="carousel">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 text-center">
                                            <div className="carousel slide" id="fade-quote-carousel" data-ride="carousel" data-interval="3000">
                                                {/* <!-- Carousel indicators --> */}
                                                <ol className="carousel-indicators">
                                                    <li data-target="#fade-quote-carousel" data-slide-to="0" className="active"></li>
                                                    <li data-target="#fade-quote-carousel" data-slide-to="1"></li>
                                                </ol>
                                                {/* <!-- Carousel items --> */}
                                                <div className="carousel-inner">
                                                    <div className="active item">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="profile-circle">
                                                                    <img src="https://scontent.fbom10-1.fna.fbcdn.net/v/t1.0-9/38454887_2079795725568709_84529242762641408_o.jpg?_nc_cat=103&_nc_ht=scontent.fbom10-1.fna&oh=8f7bc5b16cdf10d50ff33176377847d7&oe=5CB2DED2" alt="Sanjay"></img>
                                                                </div>
                                                                <div className="testimonial_content">
                                                                    <i className="fa fa-quote-left"></i>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                                                </div>
                                                                <div className="testimonial_author">
                                                                    <h5>Sanjay D. Khatal</h5>
                                                                    <p>CEO, Fourder</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="profile-circle">
                                                                    <img src="https://scontent.fbom10-1.fna.fbcdn.net/v/t1.0-9/49339611_943675479175900_8481323038111956992_n.jpg?_nc_cat=104&_nc_ht=scontent.fbom10-1.fna&oh=6ecc8d0165f2a88a2b6eaec3ae8d2aea&oe=5CFF4CC6" alt="Vrushabh"></img>
                                                                </div>
                                                                <div className="testimonial_content">
                                                                    <i className="fa fa-quote-left"></i>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                                                </div>
                                                                <div className="testimonial_author">
                                                                    <h5>Vrushabh B. Patil</h5>
                                                                    <p>CEO, Fourder</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!--End of item with active--> */}
                                                    <div className="item">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="profile-circle">
                                                                    <img src="https://scontent.fbom10-1.fna.fbcdn.net/v/t1.0-9/15871784_390781751270703_8610257851502050117_n.jpg?_nc_cat=105&_nc_ht=scontent.fbom10-1.fna&oh=1219b157eae15068a1745c6f44075bef&oe=5CDE0F09" alt="Suraj" zoom="100%"></img>
                                                                </div>
                                                                <div className="testimonial_content">
                                                                    <i className="fa fa-quote-left"></i>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                                                </div>
                                                                <div className="testimonial_author">
                                                                    <h5>Suraj S. Kadole</h5>
                                                                    <p>CEO, Fourder</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="profile-circle">
                                                                    <img src="https://scontent.fbom10-1.fna.fbcdn.net/v/t1.0-9/19894971_917577431714953_9012173854566277390_n.jpg?_nc_cat=108&_nc_ht=scontent.fbom10-1.fna&oh=a45113db069b9bea08477a4393002d6c&oe=5CDD9067" alt="Dinesh"></img>
                                                                </div>
                                                                <div className="testimonial_content">
                                                                    <i className="fa fa-quote-left"></i>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                                                </div>
                                                                <div className="testimonial_author">
                                                                    <h5>Dinesh R. Kurkute</h5>
                                                                    <p>CEO, Fourder</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!--ENd of item--> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--End of row--> */}
                                </div>
                                {/* <!--End of container--> */}
                            </section>
                            {/* <!--End of carousel--> */}
                        </div>
                    </div>
                    {/* <!--End of container--> */}
                </section>
                {/* <!--end of testimonial--> */}


                {/* 
                <section id="blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="latest_blog text-center">
                                    <h2>latest blog</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo cum libero vitae quos eaque commodi.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="blog_news">
                                    <div className="single_blog_item">
                                        <div className="blog_img">
                                            <img src="img/climate_effect.jpg" alt=""></img>
                                        </div>
                                        <div className="blog_content">
                                            <a href=""><h3>Climate change is affecting bird migration</h3></a>
                                            <div className="expert">
                                                <div className="left-side text-left">
                                                    <p className="left_side">
                                                        <span className="clock"><i className="fa fa-clock-o"></i></span>
                                                        <span className="time">Aug 19, 2016</span>
                                                        <a href=""><span className="admin"><i className="fa fa-user"></i> Admin</span></a>
                                                    </p>
                                                    <p className="right_side text-right">
                                                        <a href=""><span className="right_msg text-right"><i className="fa fa-comments-o"></i></span>
                                                            <span className="count">0</span></a>
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="blog_news_content">Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. consectetur Lorem ipsum dolor sitamet, conse ctetur adipiscing elit. </p>
                                            <a href="" className="blog_link">read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog_news">
                                    <div className="single_blog_item">
                                        <div className="blog_img">
                                            <img src="img/air_pollutuon.jpg" alt=""></img>
                                        </div>
                                        <div className="blog_content">
                                            <a href=""><h3>How to avoid indoor air pollution?</h3></a>
                                            <div className="expert">
                                                <div className="left-side text-left">
                                                    <p className="left_side">
                                                        <span className="clock"><i className="fa fa-clock-o"></i></span>
                                                        <span className="time">Aug 19, 2016</span>
                                                        <a href=""><span className="admin"><i className="fa fa-user"></i> Admin</span></a>
                                                    </p>
                                                    <p className="right_side text-right">
                                                        <a href=""><span className="right_msg text-right"><i className="fa fa-comments-o"></i></span>
                                                            <span className="count">0</span></a>
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="blog_news_content">Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. consectetur Lorem ipsum dolor sitamet, conse ctetur adipiscing elit. </p>
                                            <a href="" className="blog_link">read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog_news">
                                    <div className="single_blog_item">
                                        <div className="blog_img">
                                            <img src="img/threat_bear.jpg" alt=""></img>
                                        </div>
                                        <div className="blog_content">
                                            <a href=""><h3>Threat to Yellowstone’s grizzly bears.</h3></a>
                                            <div className="expert">
                                                <div className="left-side text-left">
                                                    <p className="left_side">
                                                        <span className="clock"><i className="fa fa-clock-o"></i></span>
                                                        <span className="time">Aug 19, 2016</span>
                                                        <a href=""><span className="admin"><i className="fa fa-user"></i> Admin</span></a>
                                                    </p>
                                                    <p className="right_side text-right">
                                                        <a href=""><span className="right_msg text-right"><i className="fa fa-comments-o"></i></span>
                                                            <span className="count">0</span></a>
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="blog_news_content">Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. consectetur Lorem ipsum dolor sitamet, conse ctetur adipiscing elit. </p>
                                            <a href="" className="blog_link">read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}



                {/* <!--Start of Purches--> */}
                {/* <section id="purches">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="purches_title">Buy our wordpress theme</h2>
                            </div>
                            <div className="col-md-2 col-md-offset-4">
                                <a href="" className="purches_btn">purches</a>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <!--End of purches--> */}



                {/* <!--Start of Market--> */}
                <section id="market">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="market_area text-center">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="market_logo">
                                                <a href=""><img src="img/audiojungle.png" alt=""></img></a>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="market_logo">
                                                <a href=""><img src="img/codecanyon.png" alt=""></img></a>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="market_logo">
                                                <a href=""><img src="img/graphicriver.png" alt=""></img></a>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="market_logo">
                                                <a href=""><img src="img/audiojungle.png" alt=""></img></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--End of row--> */}
                                </div>
                                {/* <!--End of market Area--> */}
                            </div>
                            {/* <!--End of col-md-12--> */}
                        </div>
                        {/* <!--End of row--> */}
                    </div>
                    {/* <!--End of container--> */}
                </section>
                {/* <!--End of market--> */}



                {/* <!--Start of contact--> */}
                <section id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="colmd-12">
                                <div className="contact_area text-center">
                                    <h3>get in touch</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                        {/* <!--End of row--> */}
                        <div className="row">
                            <div className="col-md-6">
                                <div className="office">
                                    <div className="title">
                                        <h5>our office info</h5>
                                    </div>
                                    <div className="office_location">
                                        <div className="address">
                                            <i className="fa fa-map-marker"><span>Elephant Road, Dhaka 1205, Bangladesh</span></i>
                                        </div>
                                        <div className="phone">
                                            <i className="fa fa-phone"><span>+ 91 9595949871</span></i>
                                        </div>
                                        <div className="email">
                                            <i className="fa fa-envelope"><span>imatom19@gmail.com</span></i>
                                        </div>
                                        <div id="map">
                                            {/* <App /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="msg">
                                    <div className="msg_title">
                                        <h5>Drop A Message</h5>
                                    </div>
                                    <div className="form_area">
                                        {/* <!-- CONTACT FORM --> */}
                                        <div className="contact-form wow fadeIn animated" data-wow-offset="10" data-wow-duration="1.5s">
                                            <div id="message"></div>
                                            <form action="scripts/contact.php" className="form-horizontal contact-1" role="form" name="contactform" id="contactform">
                                                <div className="form-group">
                                                    <div className="col-sm-6">
                                                        <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <input type="text" className="form-control" name="email" id="email" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-sm-12">
                                                        <input type="subject" className="form-control" id="subject" placeholder="Subject *" />
                                                        <div className="text_area">
                                                            <textarea name="contact-message" id="msg" className="form-control" cols="30" rows="8" placeholder="Message"></textarea>
                                                        </div>
                                                        <button type="submit" className="btn custom-btn" data-loading-text="Loading...">Send</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--End of col-md-6--> */}
                        </div>
                        {/* <!--End of row--> */}
                    </div>
                    {/* <!--End of container--> */}
                </section>
                {/* <!--End of contact--> */}




                {/* <!--Start of footer--> */}
                <section id="footer">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-6">
                                <div className="copyright">
                                    <p>@ 2019 - Design By <span><a href="">&#9798;</a></span></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="designer">
                                    <p>A Design By <a href="#">The A Team</a></p>
                                </div>
                            </div>
                        </div>
                        {/* <!--End of row--> */}
                    </div>
                    {/* <!--End of container--> */}
                </section>
                {/* <!--End of footer--> */}



                {/* <!--Scroll to top--> */}
                <a href="#" id="back-to-top" title="Back to top">&uarr;</a>
                {/* <!--End of Scroll to top--> */}


                {/* <!-- jQuery (necessary for Bootstrap's JavaScript plugins) --> */}
                {/* <!-- <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js'></script>--> */}
                <script src="js/jquery-1.12.3.min.js"></script>

                {/* <!--Counter UP Waypoint--> */}
                <script src="js/waypoints.min.js"></script>
                {/* <!--Counter UP--> */}
                <script src="js/jquery.counterup.min.js"></script>

                {/* <script>
                         //for counter up
                        $('.counter').counterUp({
                            delay: 10,
                        time: 1000
                    });
        </script> */}

                {/* <!--Gmaps--> */}
                {/* <script src="js/gmaps.min.js"></script>
                    <script type="text/javascript">
                        var map;
            $(document).ready(function () {
                            map = new GMaps({
                                el: '#map',
                                lat: 23.6911078,
                                lng: 90.5112799,
                                zoomControl: true,
                                zoomControlOpt: {
                                    style: 'SMALL',
                                    position: 'LEFT_BOTTOM'
                                },
                                panControl: false,
                                streetViewControl: false,
                                mapTypeControl: false,
                                overviewMapControl: false,
                                scrollwheel: false,
                            }),


                        map.addMarker({
                            lat: 23.6911078,
                        lng: 90.5112799,
                        title: 'Office',
                    details: {
                            database_id: 42,
                        author: 'Foysal'
                    },
                    click: function (e) {
                        if (console.log)
                            console.log(e);
                        alert('You clicked in this marker');
                    },
                    mouseover: function (e) {
                        if (console.log)
                            console.log(e);
                    }
                });
            });
        </script> */}
                {/* <!--Google Maps API--> */}
                <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBjxvF9oTfcziZWw--3phPVx1ztAsyhXL4"></script>


                {/* <!--Isotope--> */}
                <script src="js/isotope/min/scripts-min.js"></script>
                <script src="js/isotope/cells-by-row.js"></script>
                <script src="js/isotope/isotope.pkgd.min.js"></script>
                <script src="js/isotope/packery-mode.pkgd.min.js"></script>
                <script src="js/isotope/scripts.js"></script>


                {/* <!--Back To Top--> */}
                <script src="js/backtotop.js"></script>


                {/* <!--JQuery Click to Scroll down with Menu--> */}
                <script src="js/jquery.localScroll.min.js"></script>
                <script src="js/jquery.scrollTo.min.js"></script>
                {/* <!--WOW With Animation--> */}
                <script src="js/wow.min.js"></script>
                {/* <!--WOW Activated--> */}
                <script>
                    new WOW().init();
                    </script>


                {/* <!-- Include all compiled plugins (below), or include individual files as needed --> */}
                <script src="js/bootstrap.min.js"></script>
                {/* <!-- Custom JavaScript--> */}
                <script src="js/main.js"></script>


            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderHelper()}
                {/* {this.renderLoginForm()} */}
            </div>
        );
    }
}

export default Temp;
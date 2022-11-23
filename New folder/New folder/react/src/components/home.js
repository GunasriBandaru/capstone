import React, { Component } from 'react';
import { Router, Switch, Route, Link } from "react-router-dom";
import Menulist from '../menu/menulist';
import './home.css';

class home extends Component {
    render() {
        return (
            <div>
               <div class="bgImage">
                <img width="900px" height="400px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc8kDFwXCTi-gmr-7ad_n27Zg0RzlPOxgNqvag9mhgj2ud7OHZTaXZhmOHE-kSfyJP04w&usqp=CAU" />
                <div class="discountImg">
                    <div class="One">
                        <img width="350" height="200" src="https://media.istockphoto.com/id/1277110293/photo/close-up-of-woman-caring-for-and-watering-house-plants-with-spray.jpg?s=612x612&w=0&k=20&c=H7bAbbL8xFePigxnlmleSJhN4YHtVxm4AbDkckkKZ2A=" />
                    </div>
                    <div class="two">
                    <img width="350" height="200" src="https://media.istockphoto.com/id/1283633103/photo/dont-worry-be-hippie.jpg?s=612x612&w=0&k=20&c=_-jjEYLytrZkH5jqcCsiJWlBUITo-BX9XkzfkqLCihQ=" />   
                    </div>
                    <div class="three">
                    <img width="350" height="200" src="https://media.istockphoto.com/id/1271960572/photo/indoor-houseplants-by-the-window-inside-a-beautiful-new-house-or-flat.jpg?s=612x612&w=0&k=20&c=vuyz1X8HWZAGq6S5AlG6m3I-vAgV6LUCYh4F0e7v_0U=" />
                    </div>
                </div>
            </div>
        <div>          
        <div className="footer">
        <div class="advertizement">
            <img src="https://media.istockphoto.com/id/629863550/photo/living-room-with-decorative-palm.jpg?s=612x612&w=0&k=20&c=QRJ46X6arcMagKFSlP6Xo9N4ZS-ec6NWLgeAx0DUIgE=" width="600px" height="300px" />
        </div>
        <div className="label">
            <img src="https://media.istockphoto.com/id/1219234129/photo/woman-planting-while-maltese-dog-is-besides-her.jpg?s=612x612&w=0&k=20&c=1fmJk9uyUZEL-vNnsKUv-tSwO0MX8cBXLZftyKw3YJM=" width="470px" height="300px" />
        </div>
        </div>
    </div>
    <footer class="end">
      <p className="footer-heading">
       We are available at:
      </p>
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i
      ></a>
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i
      ></a>


      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a>

      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-instagram"></i
      ></a>
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i
      ></a>

     
    </footer>
    

    </div>
        );
    }
}

export default home;
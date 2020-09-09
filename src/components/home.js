import React, { Component } from 'react'


export default class home extends Component {
    render() {
        return (
            <div>
             <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active" ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="first-slide img-fluid" src="/img/carousel-book1.jpg" alt="First slide"/>
            <div class="container">
              <div class="carousel-caption text-left">
                <h1>Good Reads.</h1>
                <p>Something cool will be added here!</p>
                <p><a class="btn btn-lg btn-primary" href="/books" role="button">Explore</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img class="second-slide" src="/img/carousel-book2.jpg" alt="Second slide" />
            <div class="container">
              <div class="carousel-caption">
                <h1>Another example headline.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img class="third-slide" src="/img/carousel-book3.jpg" alt="Third slide" />
            <div class="container">
              <div class="carousel-caption text-right">
                <h1>One more for good measure.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a class="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
              </div>
            </div>
          </div>
        </div>
        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous  </span>
        </a>
        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      
     <div class = "container marketing">
        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">Read Good Choice Awards <span class="text-muted">Your Choice Wins.</span></h2>
            <p class="lead">Vote for the books you love! </p>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" src="/img/bestbooks.png" alt="Generic placeholder image" />
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">Make your own personal library.<span class="text-muted">See for yourself.</span></h2>
            <p class="lead">List all the books you want to read. Rate the ones you've read. Add books you love to the favourites.</p>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="featurette-image img-fluid mx-auto" src="/img/library.jpg" alt="Generic placeholder image" />
          </div>
        </div>



        <hr class="featurette-divider" />
    </div>    
            </div>
        )
    }
}

import React from 'react';

function Home() {
    return (
        <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-4">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Benefits</a></li>
                <li><a href="#">About</a></li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-4">
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Image Gallery</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-4">
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Term and Services</a></li>
                <li><a href="#">About Burnout</a></li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-12">
              <h2>About our Blog</h2>
              <p>To enjoy good health, to bring true happiness to one's family, to bring peace to all, one must first discipline and control one's own mind. If a man can control his mind he can find the way to Enlightenment.</p>
            </div>
          </div>
          <div className="row copy-footer">
            <div className="col-sm-6 col-md-3"> &copy;<script type="text/javascript">document.write(new Date().getFullYear());</script> <a target="_blank" rel="nofollow" href="https://grafreez.com/"></a> Grafreez.com </div>
            <div className="col-sm-6 col-md-3 pull-right text-xs-right">Created with <i class="fa fa-heart"></i></div>
          </div>
        </div>
      </footer>
    );
}

export default Home;

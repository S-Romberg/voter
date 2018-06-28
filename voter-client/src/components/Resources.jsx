import React, { Component } from 'react';

class Resources extends Component {
  render() {
    return (
      <div>
      <div className='resources'>
      <h3>Find Your Nearest Ballot Drop off:</h3>
        <div className='map' >
          <iframe width="600" height="450" frameborder="0" src="https://www.google.com/maps/embed/v1/search?q=ballot&key=AIzaSyC9h7xh2v5hicF_trYIVmBDe9gnlP_b7JU" allowfullscreen></iframe>
        </div> 
        </div>
        <div className='resourceList'>
        <h3 className='R2'>Colorado Voter Resources</h3>
        <div >
        <ul className='siteList'>
          <li><a href='https://www.dmv.org/co-colorado/voter-registration.php'>Register to Vote</a></li>
          <li><a href='https://www.lwv.org/'>League Of Women Voters</a></li>
          <li><a href='http://tracer.sos.colorado.gov/PublicSite/homepage.aspx'>Campaign Finance Disclosure Website (TRACER)</a></li>
          <li><a href='http://www.justvotecolorado.org/index.php?id=10'>Colorado Voters Rights</a></li>
        </ul>
        </div>
        </div>
      </div>
    );
  }
}

export default Resources;
import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';


const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 justify-items-center grid grid-cols-2 lg:grid-cols-3">
  <nav>
    <h6 className="footer-title text-5xl ">DigiTools</h6>
    <p className='max-w-xs'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
  </nav>
  <nav>
    <h6 className="footer-title text-2xl">Product</h6>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Templates</a>
    <a className="link link-hover">Integrations</a>
  </nav>
  <nav>
    <h6 className="footer-title text-2xl">Company</h6>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Press</a>
  </nav>
  <nav>
    <h6 className="footer-title text-2xl">Resources</h6>
    <a className="link link-hover">Documentation</a>
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">Community</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title text-2xl">Social Links</h6>
    <div className='flex space-x-5 text-3xl'>
       <span><FaFacebook></FaFacebook></span>
       <span><FaInstagramSquare></FaInstagramSquare></span>
       <span><FaTwitterSquare></FaTwitterSquare></span>
    </div>
  </nav>
  
</footer>
<footer className="footer bg-neutral  text-neutral-content  border-base-300 border-t px-10 py-4 ">

      <aside className="grid-flow-col items-center">
   
    <p>
      © 2026 Digitools. All rights reserved.
    </p>
  </aside>
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
      <a>
       <p>Privacy Policy </p>
      </a>
      <a>
      <p>Terms of Service</p>
      </a>
      <a>
        <p>Cookies</p>
      </a>
    </div>
  </nav>

</footer>
        </div>
    );
};

export default Footer;

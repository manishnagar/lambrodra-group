import React from 'react';
import logo from '../assets/images/logo.png';


function Footer() {
  return (
    <footer >
        <div className="bg-orange-300 text-gray-800 py-12 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div><img src={logo} alt="Logo" className="w-32 h-auto" /></div>
        {/* Web Solution */}
<div>
  <h2 className="text-orange-600 font-bold mb-4 text-xl border-b-2 border-orange-600 inline-block">Web Solution</h2>
  <ul className="space-y-2 text-sm">
    <li className="cursor-pointer">Web Solution</li>
    <li className="cursor-pointer">Digital Marketing</li>
  </ul>

  <h2 className="text-orange-600 font-bold mt-6 mb-4 text-xl border-b-2 border-orange-600 inline-block">Network</h2>
  <ul className="space-y-2 text-sm">
    <li className="cursor-pointer">Sophos</li>
    <li className="cursor-pointer">FortiGate</li>
    <li className="cursor-pointer">CCTV Solution</li>
  </ul>
</div>


        {/* ERP Solution */}
        <div>
          <h2 className="text-orange-600 font-bold mb-4 text-xl border-b-2 border-orange-600 inline-block">ERP Solution</h2>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer">Fugen ERP</li>
            <li className="cursor-pointer">Microsoft Solution</li>
            <li className="cursor-pointer">Google Workspace</li>
            <li className="cursor-pointer">Tally Solutions</li>
            <li className="cursor-pointer">Custom Software Solutions</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
         <h2 className="text-orange-600 font-bold mb-4 text-xl border-b-2 border-orange-600 inline-block">
  Contact Us
</h2>

          <ul className="space-y-2 text-sm">
            <li><img src="https://lambodragroup.com/wp-content/uploads/2025/12/callicon.png" alt="Address Icon" className="w-5 h-5 inline-block mr-2" /> <a href="tel:+233551122233" className="hover:text-orange-600">+233 55 11 222 33</a></li>
            <li><img src="https://lambodragroup.com/wp-content/uploads/2025/12/mailicon.png" alt="Email Icon" className="w-5 h-5 inline-block mr-2" /> <a href="mailto:info@lambodragroup.com" className="hover:text-orange-600">info@lambodragroup.com</a></li>
            <li><img src="https://lambodragroup.com/wp-content/uploads/2025/12/addrssicon.png" alt="Location Icon" className="w-5 h-5 inline-block mr-2" />  #213,1st Floor, Shell Sign Board, Spintex Rd, Accra, Ghana</li>
          </ul>
        </div>

     
      </div>


</div>
<div><p className="bg-orange-700 text-sm px-10 py-4 text-white">&copy; 2026 Lambodra Group, All Rights Reserved.</p></div>    
    </footer>
    
  );
}

export default Footer;

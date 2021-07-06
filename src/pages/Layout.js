import React from 'react';
import SeeMore from '../components/others/SeeMore';
import SafetyFocuse from '../components/others/SafetyFocuse';
import ThreeCol from './../components/others/ThreeCol';
import MoreLove from '../components/others/MoreLove';
import Footer from '../components/Footer/Footer';
export default function Layout() {
  return (
    <div>
      <SeeMore />
      <SafetyFocuse />
      <ThreeCol />
      <MoreLove />
      <Footer />
    </div>
  );
}

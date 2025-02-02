import React from 'react';
import './App.css';
import AppBox from './components/AppBox.tsx';
import ucGif from './underwater_clock.gif';
import packet from './packet.png';

function App() {
  return (
	<div>
    	<div class="h1-container">
      		<h1>Welcome!</h1>
      		<h1 class="h1-shadow">Welcome!</h1>
      		<div class="h3-container">
      			<h3>apps by leia spagnola</h3>
      			<h3>  <i class="fa-solid fa-diamond"></i>  </h3>
      			<h3>asea-aranion on github</h3>
    		</div>
    	</div>
		<h2>Check out the apps I make!</h2>
		<div class="flex-container">
			<AppBox imgSrc={ucGif} color="rgb(156, 209, 246)" color2="rgb(102, 112, 172)" 
			appName="Underwater Clock" appLink="." appDesc="for Tidbyt devices" appLang="Starlark"></AppBox>
			<AppBox imgSrc={packet} color="rgb(212, 247, 157)" color2="rgb(114, 182, 156)"
			appName="Packet" appLink="." appDesc="for iOS and iPadOS devices" appLang="Swift"></AppBox>
		</div>
		
	</div>
  );
}

export default App;

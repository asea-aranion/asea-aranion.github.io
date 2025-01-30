import React from 'react';
import './App.css';
import AppBox from './components/AppBox.tsx';
import ucGif from './underwater_clock.gif';

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
		<h3>Currently in development</h3>
    	</div>
		<div class="flex-container">
			<AppBox imgSrc={ucGif} color="rgb(156, 209, 246)" 
			appName="Underwater Clock" appLink="." appDesc="for Tidbyt devices"></AppBox>
		</div>
		
	</div>
  );
}

export default App;

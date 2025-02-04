import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import UCPage from './components/UCPage.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PacketPage from './components/PacketPage.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}/>
			<Route path="/underwaterclock" element={<UCPage />} />
			<Route path="/packet" element={<PacketPage />} />
		</Routes>
	</BrowserRouter>
	
  </React.StrictMode>
);


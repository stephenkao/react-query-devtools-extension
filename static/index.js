import React from 'react';
import ReactDOM from 'react-dom';

import App from '../src/App';

import './index.css';

// TODO: set when subscribed to query cache
// or change between default icon + active icon in manifest
//chrome.browserAction.setBadgeText({ text: 'ON' });
//chrome.windows.create({ type: 'popup' });
chrome.windows.create({
  type: 'popup'
});

chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, (response) => {
    console.log(response);
  });
});

ReactDOM.render(<App />, document.querySelector('#root'));

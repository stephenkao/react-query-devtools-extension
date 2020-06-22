import React from 'react';

function openWindow() {
  chrome.contextMenus.create({
    id: 'poopy',
    title: 'poopy',
    contexts: ['all']
  });
}

export default function ActionsList() {
  return (
    <ul className="ActionsList">
      <li>
        <button
          type="button"
          onClick={ openWindow }
        >
          poopy
        </button>
      </li>
    </ul>
  );
}

import React from 'react';

export const removeFromFavoritesButton = (click) => (
  <div className="wrapper" onClick={click}>
    <button>
      Remove from Favorites
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
);

export const addToFavoritesButton = (click) => (
  <div className="add-wrapper" onClick={click}>
    <button>
      Add to Favorites
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
);
import React from 'react'

const Light_Dark = (dets) => {
const root = window.document.documentElement;
  let toggletheme = ()=> {
    if(dets.toggle === true){
        root.classList.add('dark');
        dets.setToggle(false);
    }
    else{
        root.classList.remove('dark');
        dets.setToggle(true);
    }
  }
  return (
    <>
     <button
            onClick={toggletheme}
            className="p-2 rounded-lg active:scale-90 "
            aria-label="Toggle theme"
          >
            {dets.toggle ? '☀️' : '🌙'}
    </button>
    </>
  )
}

export default Light_Dark
import React from "react";
function Promise() {
    const divStyle = {
        padding: '5px',
    };    
  return (
    // fetch('https://api.themoviedb.org/3/movie/550?api_key=ae3a8bc1ed3e98e96aee17639b8cdc43')
    // .then(response => response.json())
    // .then(response => console.log(response))\
    <div style={divStyle}>
      <div>
        <h3>Promise</h3>
        <p>
          Object yang merepresentasikan berhasil atau tidaknya sebuah event
          asynchronus di waktu yang akan datang.
        </p>
        <p>
          janji (terpenuhi / ingkar)<br></br>
          states (fulfilled / rejected / pending)<br></br>
          callback (resolve / reject / finally)<br></br>
          aksi (then / catch)
        </p>
        <p>Sumber : Web Programming Unpas</p>
      </div>
    </div>
  );
}
export default Promise;


function load() {
    document.getElementById("sk1").className="dg1";
    document.getElementById("sk2").className="dg2";
    document.getElementById("sk3").className="dg3";
    document.getElementById("sk4").className="dg1";
    document.getElementById("sk5").className="dg2";
    document.getElementById("sk6").className="dg3";
    
  fetch("https://covid-19-tracking.p.rapidapi.com/v1", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "85e8937993mshb8e7d723ce850b7p1d7af7jsn1eed977796e1",
      "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log (data);
      document.querySelector(".text0").innerText =
        data[0]["Total Cases_text"];
      document.querySelector(".text1").innerText =
        data[0]["Total Recovered_text"];
      document.querySelector(".text2").innerText =
        data[0]["Total Deaths_text"];
        document.querySelector(".text3").innerText =
        data[2]["Total Cases_text"];
      document.querySelector(".text4").innerText =
        data[2]["Total Recovered_text"];
      document.querySelector(".text5").innerText =
        data[2]["Total Deaths_text"];
    })
    .catch((err) => {
      document.write(err);
    });
}

function handleClick() {
    
    fetch("https://covid-19-tracking.p.rapidapi.com/v1", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "85e8937993mshb8e7d723ce850b7p1d7af7jsn1eed977796e1",
        "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(".text0").innerText =
          data[0]["Total Cases_text"];
        document.querySelector(".text1").innerText =
          data[0]["Total Recovered_text"];
        document.querySelector(".text2").innerText =
          data[0]["Total Deaths_text"];
        window.a = data[0]["Total Cases_text"];
        window.b = data[0]["Total Recovered_text"];
      })
      .catch((err) => {
        document.write(err);
      });
  }

class Card extends React.Component {
 
  render() {
    return (
      <>
     <center> <h1 className="H1">Covid Updates</h1></center> 
        <div id="world">
          <div className="row">
            <div className="col-3">
              <button className="btn btn-warning " onClick={handleClick}>
                <i className="fas fa-sync-alt rotateZ"></i>
              </button>
            </div>
            <h3 className="col-9" onLoad={load}>
              <img src="../Assets\globe.png" /> World
            </h3>
          </div>
          <div className="row">
            <div className="col-7 txt">
              <li>Total Cases </li>
              <li>Total Recovered</li>
              <li>Total Deaths</li>
            </div>
            <div className="col-5">
              <div id="sk1">
                <snap className="text0"></snap>
              </div>
              <div id="sk2">
                <snap className="text1" id="sk1"></snap>
              </div>
              <div id="sk3">
                <snap className="text2"></snap>
              </div>
            </div>
          </div>
        </div>

        <div id="india">
          <div className="row">
            <div className="col-3">
              <button className="btn btn-warning " onClick={handleClick}>
                <i className="fas fa-sync-alt rotateZ"></i>
              </button>
            </div>
            <h3 className="col-9" onLoad={load}>
              <img src="../Assets\india.png" /> India
            </h3>
          </div>
          <div className="row">
            <div className="col-7 txt">
              <li>Total Cases</li>
              <li>Total Recovered</li>
              <li>Total Deaths</li>
            </div>
            <div className="col-5">
              <div id="sk4">
                <snap className="text3"></snap>
              </div>
              <div id="sk5">
                <snap className="text4"></snap>
              </div>
              <div id="sk6">
                <snap className="text5"></snap>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

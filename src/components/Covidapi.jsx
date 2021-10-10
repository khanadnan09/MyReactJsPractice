import React, { useEffect, useState } from "react";

const Covidapi = () => {
  const [covidData, setcovidData] = useState([]);

  const getCovidData = async () => {
    const covidResponse = await fetch("https://api.covid19api.com/summary");
    const covidparedData = await covidResponse.json();
    // console.log(covidparedData);
    setcovidData(covidparedData.Countries);
  };

  useEffect(() => {
    getCovidData();
  }, []);
  //  console.log(covidData);
  return (
    <>
      <div className="container-fluid py-5 table-container">
        <div className="row justify-content-center">
          <div className="col-11 col-md-10 col-g-9">
            <div className="table-responsive covid-table" style={{borderRadius:' 0.5rem'}}>
              <table className="table table-bordered table-hover">
                <thead style={{background:'black',color:'white'}}>
                  <tr>
                    <th scope="col">Country</th>
                    <th scope="col">NewConfirmed</th>
                    <th scope="col">TotalConfirmed</th>
                    <th scope="col">NewDeaths</th>
                    <th scope="col">TotalDeaths</th>
                    <th scope="col">NewRecovered</th>
                    <th scope="col">TotalRecovered</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {covidData.map((data) => {
                    return (
                      <tr key={data.ID}>
                        <td>{data.Country}</td>
                        <td>{data.NewConfirmed}</td>
                        <td>{data.TotalConfirmed}</td>
                        <td>{data.NewDeaths}</td>
                        <td>{data.TotalDeaths}</td>
                        <td>{data.NewRecovered}</td>
                        <td>{data.TotalRecovered}</td>
                        <td>{new Date(data.Date).toLocaleDateString()}</td>
                        {/* new Date(data.Date).toGMTString() */}
                        {/* console.log(new Date(data.Date).toGMTString()) */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Covidapi;

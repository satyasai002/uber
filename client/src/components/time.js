import React from 'react';

const Time = () => {
  const disableDates = () => {
    var today, dd, mm, yyyy, min;
    today = new Date();
    dd = today.getDate();
    mm = today.getMonth() + 1;
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    yyyy = today.getFullYear();
    min = yyyy + "-" + mm + "-" + dd;
    return min;
  };
  const maxdisableDates = () => {
    var today, dd, mm, yyyy, min;
    today = new Date();
    dd = today.getDate();
    mm = today.getMonth() + 2;
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    yyyy = today.getFullYear();
    min = yyyy + "-" + mm + "-" + dd;
    return min;
  };
  return (
    <div className="lg:w-full h-screen flex flex-col justify-between ">
      <div className=" max-w-[1240px] m-auto">
        <form >
          <div className="flex flex-col justify-left md:items-start p-5 bg-white rounded-xl w-96">
            <button className="p-0">
              <img src="./imgs/leftarrow.svg"></img>
            </button>
            <h1 className="py-3 text-2xl md:text-3xl font-semibold hover:cursor-default">
              When do you want to leave ?
              <div className="pt-4 flex">
                <div className="px-2">
                  <input
                    className="w-80 lg:w-80 inputbox text-lg p-3 hover:outline-2 form-control"
                    type="date"
                  />
                </div>
              </div>
              <div className="pt-4 flex">
                <div className="px-2">
                  <input
                    className="w-80 lg:w-80 inputbox text-lg p-3 hover:outline-2 form-control"
                    type="time"
                  />
                </div>
              </div>
              <div className="justify-center mt-2">
                <div className="flex">
                  <img
                    className="p-1 mr-2 bg-gray-50 rounded-3xl"
                    src="./imgs/calender.svg"
                    alt=""
                  />
                  <p className=" text-base mt-2 mb-2">
                    Choose your pick-up time upto 30 days in advance
                  </p>
                </div>
              </div>
              <div className="justify-center bg-gray-50">
                <div className="flex">
                  <img
                    className="p-1 mt-1 bg-gray-50 rounded-3xl"
                    src="./imgs/sand.svg"
                    alt=""
                  />
                  <p className=" text-base mt-2 ">
                    Extra wait time included to meet your ride
                  </p>
                </div>
              </div>
              <div className="justify-center pt-3">
                <div className="flex">
                  <img
                    className="p-1  mt-2 bg-gray-50 rounded-3xl"
                    src="./imgs/cancel.svg"
                    alt=""
                  />
                  <p className=" text-base justify-center mt-2">
                    Cancel at no charge up to 60 minutes in advance
                  </p>
                </div>
              </div>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Time;
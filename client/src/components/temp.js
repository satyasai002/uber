<h1 className="py-3 text-2xl md:text-3xl font-semibold hover:cursor-default">
                  {vartext.text}
                </h1>

                <div>
                  <div className="pt-4 flex">
                    <img src="./imgs/arrow.svg" alt="" />
                    <div className="px-2">
                      <input
                        ref={searchInput}
                        className="w-80 lg:w-80 inputbox p-3 hover:outline-2 form-control"
                        type="text"
                        onFocus={console.log("error")}
                        placeholder="Pickup Location"
                      />
                    </div>
                  </div>
                  <div className="pt-2 flex">
                    <img src="./imgs/destination.svg" alt="" />
                    <div className="px-2 pt-2">
                      <input
                        ref={desInput}
                        className="w-80 lg:w-80 inputbox p-3 hover:outline-2 form-control"
                        id="from_places"
                        type="text"
                        placeholder="Enter your destination"
                      />
                    </div>
                  </div>
                </div>
                <div className="py-0 justify-center">
                  <button className="flex bg-gray-50 p-2 rounded-xl mt-4 ">
                    <img
                      className="pt-1 px-1 pr-3"
                      src="./imgs/clock.svg"
                      alt=""
                    />
                    <p>Leave now</p>
                    <img className="pt-2 px-1 pl-3" src="./imgs/v.svg" alt="" />
                  </button>
                </div>
                <div className="justify-center pt-3">
                  <button className="flex" onClick={findMyLocation}>
                    <img
                      className="p-1 mt-2 bg-gray-50 rounded-3xl"
                      src="./imgs/gps.svg"
                      alt=""
                    />
                    <p className="p-3">Get your current location</p>
                  </button>
                </div>
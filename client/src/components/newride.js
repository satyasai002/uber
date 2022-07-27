import React from "react";
import { useRef, useState, Component, useEffect } from "react";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  Autocomplete,
  StandaloneSearchBox,
  InfoWindow,
  Locate,
} from "@react-google-maps/api";
import Geocode from "react-geocode";
import axios from "axios";
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

const mapContainerStyle = {
  width: "72vw",
  height: "100vh",
};
const center = {
  lat: 17.0328064,
  lng: 81.8642944,
};
const gps = {
  lat: "",
  lng: "",
};

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const mapApiJs = "https://maps.googleapis.com/maps/api/js";
const geocodeJson = "https://maps.googleapis.com/maps/api/geocode/json";


const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
const libraries = [`places`];
function loadAsyncScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    Object.assign(script, {
      type: "text/javascript",
      async: true,
      src,
    });
    script.addEventListener("load", () => resolve(script));
    document.head.appendChild(script);
  });
}

const extractAddress = (place) => {
  const address = {
    city: "",
    state: "",
    zip: "",
    country: "",
    plain() {
      const city = this.city ? this.city + ", " : "";
      const zip = this.zip ? this.zip + ", " : "";
      const state = this.state ? this.state + ", " : "";
      return city + zip + state + this.country;
    },
  };

  if (!Array.isArray(place?.address_components)) {
    return address;
  }

  place.address_components.forEach((component) => {
    const types = component.types;
    const value = component.long_name;

    if (types.includes("locality")) {
      address.city = value;
    }

    if (types.includes("administrative_area_level_2")) {
      address.state = value;
    }

    if (types.includes("postal_code")) {
      address.zip = value;
    }

    if (types.includes("country")) {
      address.country = value;
    }
  });

  return address;
};


function Newride() {
  const [data, setData] = useState({
    Passengers: "",
    From: "",
    To: "",
    PickUpDate: "",
    PickUpTime: "",
  });
  
  const [org, setOrg] = useState({
    lat: "17.0459136",
    lng: "81.8479104",
  });
  const [vartext, setVarText] = useState({
    text:"Where we can pick you ?"
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data.To)
  };
  
  const searchInput = useRef(null);
  const desInput = useRef(null);
  const [address, setAddress] = useState({});
  const [des, setDesAddress] = useState({});

  // init gmap script
 
  const initMapScript = () => {
    // if script already loaded
    if (window.google) {
      return Promise.resolve();
    }
    const src = `${mapApiJs}?key=${apiKey}&libraries=places&v=weekly`;
    return loadAsyncScript(src);
  };

  // do something on address change
  const onChangeAddress = (autocomplete) => {
    const place = autocomplete.getPlace();
    setAddress(extractAddress(place));
  };
  const onChangeDesAddress = (autocomplete) => {
    const place = autocomplete.getPlace();
    setDesAddress(extractAddress(place));
    setData({To:autocomplete.gm_accessors_.place.Rj.formattedPrediction});
    Geocode.fromAddress(
      autocomplete.gm_accessors_.place.Rj.formattedPrediction
    ).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
      },
      (error) => {
        console.error(error);
      }
    );
    
    
  };
   

  // init autocomplete
  const initAutocomplete = () => {
    if (!searchInput.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(
      searchInput.current
    );
    autocomplete.setFields(["address_component", "geometry"]);
    autocomplete.addListener("place_changed", () =>
      onChangeAddress(autocomplete)
    );
  };
const initDesAutocomplete = () => {
  if (!desInput.current) return;

  const autocomplete = new window.google.maps.places.Autocomplete(
    desInput.current
  );
  autocomplete.setFields(["address_component", "geometry"]);
  autocomplete.addListener("place_changed", () =>
    onChangeDesAddress(autocomplete)
  );
};

  const reverseGeocode = ({ latitude: latv, longitude: lngv }) => {
    const url = `${geocodeJson}?key=${apiKey}&latlng=${latv},${lngv}`;
    searchInput.current.value = "Getting your location...";
    panTo({
      lat: latv,
      lng: lngv,
    });
    setOrg({
      lat: latv,
      lng: lngv,
    });
    console.log(org)
    fetch(url)
      .then((response) => response.json())
      .then((location) => {
        const place = location.results[0];
        const _address = extractAddress(place);
        setAddress(_address);
        searchInput.current.value = _address.plain();
      });
  };  

  const findMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        reverseGeocode(position.coords);
          
      });
    }
  };

  // load map script after mounted
  useEffect(() => {
    initMapScript().then(() => initAutocomplete(),initDesAutocomplete());
  }, []);
  
  
  const submitHandler = (e) => {
    console.log(data)
    e.preventDefault();
    axios.post("http://localhost:5000/signin", data).then((res) => {
      alert(res.data);
      setData({
        Passengers: "",
        From: "",
        To: "",
        PickUpDate: "",
        PickUpTime: "",
      });
    });
  };
  
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);
  
  
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
 

  return (
    <div className="relative flex">
      <div className="absolute w-full h-full">
        <GoogleMap
          zoom={13}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={center}
          onLoad={onMapLoad}
          options={options}
        >
          
        </GoogleMap>
      </div>
      <div className="relative z-10 mx-8 px-10 pb-16">
        <div className="lg:w-full h-screen flex flex-col justify-between ">
          <div className=" max-w-[1240px] m-auto">
            <form onSubmit={submitHandler}>
              <div className="flex flex-col justify-left md:items-start p-10 bg-white rounded-xl w-full">
                <h1 className="py-3 text-2xl md:text-3xl font-semibold hover:cursor-default">
                  Where we can pick you ?
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newride;

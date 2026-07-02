document.addEventListener("DOMContentLoaded", function() {

  // ===== SERVICE ICONS =====
  const serviceItems = document.querySelectorAll(".service-item");

  if(serviceItems[0]){
    serviceItems[0].style.cursor = "pointer";
    serviceItems[0].onclick = () =>
      window.open("https://aviasales.tpx.lv/jhI0W8b7?currency=inr&locale=en&market=in", "_blank");
  }

  if(serviceItems[1]){
    serviceItems[1].style.cursor = "pointer";
    serviceItems[1].onclick = () =>
      window.open("https://getyourguide.tpx.lv/cHAoDJ4U", "_blank");
  }

  if(serviceItems[4]){
    serviceItems[4].style.cursor = "pointer";
    serviceItems[4].onclick = () =>
      window.open("https://www.irctc.co.in", "_blank");
  }


  // ===== EMERGENCY =====
  function openMap(query){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        window.open(`https://www.google.com/maps/search/${query}/@${lat},${lng},14z`, "_blank");
      });
    } else {
      window.open(`https://www.google.com/maps/search/${query}`, "_blank");
    }
  }

  const emergencyButtons = document.querySelectorAll(".emergency-buttons button");

  if(emergencyButtons.length >= 4){
    emergencyButtons[0].onclick = () => openMap("hospital");
    emergencyButtons[1].onclick = () => openMap("police station");
    emergencyButtons[2].onclick = () => openMap("fire station");
    emergencyButtons[3].onclick = () => openMap("atm");
  }


  // ===== SMART SEARCH (NEW SYSTEM) =====
  const input = document.getElementById("cityInput");
  const button = document.getElementById("searchBtn");

  function formatName(name){
    return name.toLowerCase().trim().replace(/\s+/g, "");
  }

  function openCity(city, state){
    const cityName = formatName(city);
    const stateName = formatName(state);

    const url = `cities/india/${stateName}/${cityName}.html`;
    window.location.href = url;
  }

  function searchCity(){
    const value = input.value.trim().toLowerCase();

    if(!value){
      alert("Please enter a city name");
      return;
    }

    // ===== AUTO DETECT STATE =====
    // MP cities
    const mpCities = ["gwalior","bhopal","indore","ujjain","orchha","jabalpur","khajuraho","mandu","shivpuri","pachmarhi","rewa","satna","katni","dewas","chhatarpur"];

    if(mpCities.includes(value)){
      openCity(value, "mp");
      return;
    }

    // Other direct pages
    const directPages = {
      "delhi": "cities/delhi.html",
      "goa": "cities/goa.html",
      "jaipur": "cities/jaipur.html",
      "kasol": "cities/kasol.html",
      "andaman": "cities/andaman.html",
      "manali": "cities/manali.html",
      "madhya pradesh": "cities/mp.html",
      "uttar pradesh": "cities/up.html",
      "himachal pradesh": "cities/hp.html",
      "uttarakhand": "cities/uttarakhand.html",
      "punjab": "cities/punjab.html",
      "haryana": "cities/haryana.html",
      "rajasthan": "cities/rajasthan.html",
      "gujarat": "cities/gujarat.html",
      "maharashtra": "cities/maharashtra.html",
      "kerala": "cities/kerala.html",
      "tamilnadu": "cities/tamilnadu.html",
      "karnataka": "cities/karnataka.html",
      "telangana": "cities/telangana.html",
      "bihar": "cities/bihar.html",
      "wb": "cities/wb.html"
    };

    if(directPages[value]){
      window.location.href = directPages[value];
    } else {
      alert("City not found! (Check spelling)");
    }
  }

  if(button) button.onclick = searchCity;

  if(input){
    input.addEventListener("keypress", function(e){
      if(e.key === "Enter") searchCity();
    });
  }


  // ===== SLIDER =====
  const scrollContainer = document.querySelector(".city-scroll");
  const leftBtn = document.querySelector(".scroll-btn.left");
  const rightBtn = document.querySelector(".scroll-btn.right");

  if(scrollContainer && leftBtn && rightBtn){
    rightBtn.onclick = () => scrollContainer.scrollBy({left:300, behavior:"smooth"});
    leftBtn.onclick = () => scrollContainer.scrollBy({left:-300, behavior:"smooth"});
  }

});



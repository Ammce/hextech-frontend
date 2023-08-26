// to get current year
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

/** google_map js **/

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(43.136712816872326, 20.530432772713528),
    zoom: 18,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

const scrollToSection = (section) =>
  document
    .querySelector(`#${section}_section`)
    .scrollIntoView({ behavior: "smooth", block: "start" });

const submitForm = () => {
  const fullNameNode = document.querySelector("#input_full_name");
  const emailNode = document.querySelector("#input_email");
  const phoneNode = document.querySelector("#input_phone");
  const messageNode = document.querySelector("#input_message");
  console.log({ fullName, email, phone, message });

  document.querySelector("#input_message").value = 222;
};

const clearValuesOnSuccess = ({
  fullNameNode,
  emailNode,
  phoneNode,
  messageNode,
}) => {
  fullNameNode.value = "";
  emailNode.value = "";
  phoneNode.value = "";
  messageNode.value = "";
};

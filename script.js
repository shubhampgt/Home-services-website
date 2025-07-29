// 1️⃣ Page Load pe message console me aur alert me dikhana
console.log("Website loaded successfully!");
alert("Welcome to Home Repair Booking App!");

// 2️⃣ Home page pe "Book Now" button ka redirect kaam
function goToBookingPage() {
  window.location.href = "booking.html";
}

// 3️⃣ Booking form validation and redirect (booking.html page)
function submitBookingForm() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value.trim();

  if (name === "" || phone === "" || service === "") {
    alert("Please fill all the fields.");
    return;
  }

  // Optional: Basic phone number check
  if (phone.length < 10) {
    alert("Please enter a valid phone number.");
    return;
  }

  alert("Booking successful!");
  window.location.href = "thankyou.html";
}
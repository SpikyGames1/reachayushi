const img = document.querySelector("img");
img.ondragstart = () => {
  return false;
};
function isMobile() {
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}
function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

function isMobileDevice() {
  const userAgent = navigator.userAgent;
  const isMobile = /Mobi|Android/i.test(userAgent);
  const isSmallScreen = window.innerWidth <= 768;
  return isMobile || isSmallScreen;
}
if (isMobileDevice()) {
  window.location.href = "mobileVer/index.html";
}

const img = document.querySelector("img");
img.ondragstart = () => {
  return false;
};
function isMobile() {
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}
if (isMobile()) {
  window.location.href(mobileVer/index.html);
}

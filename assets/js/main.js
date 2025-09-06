if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}else{
  console.log("error in navigator");
}

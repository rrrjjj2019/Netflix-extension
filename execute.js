var enable = true;

const start = () => {
  console.log("start");
  alert("已起用自動跳轉功能");
  enable = true;
};

const terminate = () => {
  console.log("terminate");
  alert("已關閉自動調轉功能");
  enable = false;
}

const skip = () => {
  if(enable){
    console.log("function enabled !");
    if(document.getElementsByClassName("nf-icon-button nf-flat-button nf-flat-button-uppercase no-icon").length > 0){
      console.log("skip button detected");
      document.getElementsByClassName("nf-icon-button nf-flat-button nf-flat-button-uppercase no-icon")[0].click();
    }
  }
  
}

const onMessage = (message) => {
  switch (message.action) {
    case 'START':
      start();
      break;
    case 'TERMINATE':
      terminate();
      break;
    case 'SKIP':
      skip();
      break;
    default:
      break;
  }
}


setInterval(skip, 3000);

chrome.runtime.onMessage.addListener(onMessage);




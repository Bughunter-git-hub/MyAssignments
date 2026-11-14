const browserVersion = "Chrome";

function getBrowserVersion() {
    
 if (browserVersion == "Chrome") {
     let application = "Testleaf"
     var userName= "Madhan"
        console.log("Inside If block",application);
        console.log("Inside If block",userName);
    }
    
  console.log("Outside If block & Inside Function-",browserVersion);
  console.log("Outside If block & Inside Function-",userName);
     }
getBrowserVersion();

console.log("Outside function block",browserVersion);
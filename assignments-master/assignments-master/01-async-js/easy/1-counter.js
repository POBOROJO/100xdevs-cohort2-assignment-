let count =0;
function counter(){
    count++;
    console.log("Counting...",count);
}
setInterval(counter,1000); // function called here for every 1s
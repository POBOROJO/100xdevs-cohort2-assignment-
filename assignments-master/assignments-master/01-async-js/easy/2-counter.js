let counter=1;
function count(){
    console.log("Counting",counter++);// it gets incremented and prints
    setTimeout(count,1000); //it calls the function count again after 1s
}
count();// it first initialises the count function
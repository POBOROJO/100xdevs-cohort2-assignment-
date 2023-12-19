function DisplayTime(){
    const now = new Date();
    let hours= now.getHours();
    let minutes = now.getMinutes();
    let second = now.getSeconds();

    minutes = (minutes < 10 ? '0' : '') + minutes; // if < 10 i.e 9:30 -> adds a '0' -> 09:30 AM 
    second = (second < 10 ? '0' : '') + second;

    let time12hrs = (hours >= 12 ? 'PM' : 'AM'); // if more than 12 its AM and if less than 12 its PM
    hours = hours % 12 || 12; // if hours > 12 (i.e 17:30 then hours = 5 cause 17 % 12=5) if hours = 0 then it will be 12
    hours = (hours < 10 ? '0' : '') + hours;

    console.log(`${hours}:${minutes}:${second} ${time12hrs}`);
    console.log(`${hours}:${minutes}:${second}`);
}
setInterval(DisplayTime,1000);


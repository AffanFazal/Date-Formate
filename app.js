// 01 04/20/2024 13:45:30

// const date   = new Date().getDate();
// const month  = new Date().getMonth();
// const year   = new Date().getFullYear();
// const hours  = new Date().getHours();
// const mint   = new Date().getMinutes();
// const sec    = new Date().getSeconds();
// const result =`${month}/${date}/${year} ${hours}:${mint}:${sec}`
// console.log(result);


// 02 Thu 20/4/2024 13.45

// const day    = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// const day1   = new Date().getDay();
// const date   = new Date().getDate();
// const month  = new Date().getMonth();
// const year   = new Date().getFullYear();
// const hours  = new Date().getHours();
// const mint   = new Date().getMinutes();
// const result =`${day[day1]} ${date}/${month}/${year} ${hours}:${mint}`

// document.write(result);


// 03 2024-04-20 3:45 Thursday

// const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// const day1   = new Date().getDay();  
// const year   = new Date().getFullYear();
// const month  = (new Date().getMonth() + 1 < 10 ? "0" : '' )+ (new Date().getMonth() + 1);
// const date   = new Date().getDate();
// const hours  = new Date().getHours();
// const mint   = new Date().getMinutes();

// const result =`${year}-${month}-${date} ${hours}:${mint} ${day[day1]}`

// document.write(result);



// 04 April 20th, 2024 01.45.30 PM

// const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// const month1 = new Date().getMonth();
// const date   = new Date().getDate();
// const year   = new Date().getFullYear();
// const hours  = new Date().getHours();
// const mint   = new Date().getMinutes();
// const sec    = new Date().getSeconds();
// const ampm = hours >= 12 ? 'PM' : 'AM';
// // const result =`${month}/${date}/${year} ${hours}:${mint}:${sec}`
// const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
// const result = `${month[month1]} ${date}th,${year} ${(formattedHours < 10 ? '0' : '') + formattedHours}.${(mint < 10 ? '0' : '') + mint}.${(sec < 10 ? '0' : '') + sec} ${ampm}`;
// document.write(result);


// 05  20 April 2024 at 01:45 PM

// const date = new Date().getDate();
// const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// const month1 = new Date().getMonth();
// const year = new Date().getFullYear();
// const hour = new Date().getHours();
// const mint = new Date().getMinutes();
// const sec = new Date().getSeconds();
// const ampm = hour >= 12 ? 'PM' : 'AM';
// const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
// const result = `${date} ${month[month1]}  at ${year} ${(formattedHour < 10 ? '0' : '') + formattedHour}:${(mint < 10 ? '0' : '') + mint}:${(sec < 10 ? '0' : '') + sec} ${ampm} `
// document.write(result);

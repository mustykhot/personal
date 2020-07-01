// const now = new Date();
// const before = new Date('Febuary 1 2019 7:30:59');
// console.log(now);
// console.log(before)
// // console.log(now.getTime() , before.getTime());

// const diff = now.getTime() - before.getTime();

// console.log(diff)

// const mins = Math.round(diff/1000/60)

// const hours = Math.round(mins/60);
// const days = Math.round (hours / 24);

// console.log(mins,hours,days)

// //converting timestamp into date object

// const timestamp = 1675938474990;
// console.log(new Date(timestamp));
//date type is an object

//year,month,day,time

// console.log('get fuul year: ' + now.getFullYear());
// console.log('get month: ' + now.getMonth());
// console.log('get date: ' + now.getDate());
// console.log('get day: ' + now.getDay());
// console.log('get hours: ' + now.getHours());
// console.log('get minute: ' + now.getMinutes());
// console.log('get seconds: ' + now.getSeconds());

//timestamp
// console.log('timestamp: ' + now.getTime());

// date string

// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());

// digital clock
//####################################################################################################
// const clock = document.querySelector('.clock');

// const tick = () => {
//     const now = new Date();

//     const h = now.getHours();
//     const m = now.getMinutes();
//     const s = now.getSeconds();

//     // console.log(h,s,m)

//     const html = `
//      <span>${h}</span> : 
//      <span>${m}</span> :
//      <span>${s}</span>
//     `;
//     clock.innerHTML = html
// };

// setInterval(tick,1000);

const countdown = document.querySelector('.countdown');

function xmass() {

    const xmas = new Date('December 31 2020 11:59:59');
    const now = new Date();

    let s = 00;
    let m = 00;
    let h = 00;
    let d = 00;

    const diff = xmas.getTime() - now.getTime()  ;

    if (diff<=0) {
         s = 00;
         m = 00;
         h = 00;
         d = 00
    }

    else{
         s = Math.round( (diff/1000)%60);
         m = Math.round( (((diff/1000)/60)%60));
         h = Math.round((((diff/1000)/60)/60) % 24);
         d = Math.round((((diff/1000)/60)/60) / 24);
  
    }
   
    

    
    const html = `
     <span>${d}</span> :
     <span>${h}</span> : 
     <span>${m}</span> :
     <span>${s}</span>
    `;
    countdown.innerHTML = html;

    
}

setInterval(xmass,1000);





//########################################################
//date fns

// const now = new Date();
// // console.log(dateFns.isToday(now))
// //formatingoptions

// // console.log(dateFns.format(now,'YYYY'));
// // console.log(dateFns.format(now,'MMMM'));
// // console.log(dateFns.format(now,'ddd'));
// // console.log(dateFns.format(now,'Do'));
// // console.log(dateFns.format(now,'dddd Do MMMM YYYY'));

// const before = new Date('Febuary 1 2019 7:30:59');

// console.log(dateFns.distanceInWords(now,before,{addSuffix:true}))

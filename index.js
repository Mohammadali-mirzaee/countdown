const countdown = () => {
    
    const countDate = new Date('Jun 10, 2021, 00:00:00').getTime()
/*     console.log(countDate) */

    const now = new Date().getTime();
    const between = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculate

    const textday = Math.floor(between / day)
    const texthour = Math.floor((between % day) / hour)
    const textminute = Math.floor((between % hour) / minute)
    const textsecond = Math.floor((between % minute) / second)
    /* console.log(texthour) */

    document.querySelector('.day').innerText = textday;
    document.querySelector('.hour').innerText = texthour;
    document.querySelector('.minute').innerText = textminute;
    document.querySelector('.second').innerText = textsecond;

    if (between < 10000) {
       alert('Now is you Time')
   }
};

/* countdown() */

setInterval(countdown, 1000);
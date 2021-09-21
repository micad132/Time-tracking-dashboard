
const hours = document.querySelectorAll('.hours');
const days = document.querySelectorAll('.details__day');
const type = document.querySelectorAll('.type');


/* this script is built mostly with nodelists and their index(es) so
     i would not recommend changing the html in this project */





//choosing the ,,type" of data that we want to display 

type.forEach( (type,index) => {



    

    type.addEventListener('click',()=> {


        removeActiveType();
        type.classList.add('active');
        if(index == 0 ){
            
            getDataDaily();
        }
        else if(index ==1 )
        {
           
            getDataWeekly();
        }
        else{
            getDataMonthly();
        }
    })



})



//fetching the data from json


async function getJson() {

    const res = await fetch('data.json');

    const data= await res.json();

    return data;


}



//setting the ,,daily" data

 async function getDataDaily() {

    
    let data = await getJson();

    hours.forEach( (hours,index)  => {

        hours.innerHTML = `${data[index].timeframes.daily.current}hrs`;



    })

    days.forEach( (day,index) => {


        day.innerHTML = `Last Week - ${data[index].timeframes.daily.previous}hrs`
    })
    



}


//setting the ,,weekly" data

async function getDataWeekly() {


    let data = await getJson();

    hours.forEach( (hours,index)  => {

        hours.innerHTML = `${data[index].timeframes.weekly.current}hrs`;



    })

    days.forEach( (day,index) => {


        day.innerHTML = `Last Week - ${data[index].timeframes.weekly.previous}hrs`
    })


}

//setting the ,,monthly" data

 async function getDataMonthly() {


    let data = await getJson();

    hours.forEach( (hours,index)  => {

        hours.innerHTML = `${data[index].timeframes.monthly.current}hrs`;



    })

    days.forEach( (day,index) => {


        day.innerHTML = `Last Week - ${data[index].timeframes.monthly.previous}hrs`
    })


}



//removing active ,,type"


function removeActiveType() {


    type.forEach( type => type.classList.remove('active'))

}
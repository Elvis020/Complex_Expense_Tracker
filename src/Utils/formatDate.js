// Implementing a custom date format


const formatDate = (date) => {
    let d = new Date(date);
    let month = `${d.getMonth() + 1}`; //+1 is added cuz the mmonths start from 0
    let day = `${d.getDate()}`;
    let year = d.getFullYear();

    // Making sure single digits add 0 in-front of them
    if(month.length < 2){
        month = `0${month}`
    }
    if(day.length < 2){
        day = `0${day}`
    }

    return [year,month,day].join('-');
}


export default formatDate;
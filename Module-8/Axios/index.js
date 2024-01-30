var axios=require('axios');
let URl="https://restcountries.com/v3.1/all?fields=name,flags`"

axios.get(URL).then(function (response){

    let countryList= response.data;
    let statusList=response.status;

    console.log(countryList)
    console.log(statusList)

}).catch(function (error){
    console.log(error)
})
// import Axios from "axios";

// const FetchBoth = async (query) => {
//     const OpenWeatherKey = process.env.REACT_APP_Key;
//     const urls = ['https://api.openweathermap.org/data/2.5/forecast','https://api.openweathermap.org/data/2.5/weather']
//     console.log(query,'from new')
//     const { data } = await Axios.all(urls.map((url)=>{
//         Axios.get(url, {
//             params: {
//                 q: query,
//                 units: "metric",
//                 APPID: OpenWeatherKey,
//             },
//         })
//         .then(data => console.log(data))
//         .catch((err) => {
//             if(err.response){
//                 alert("Enter valid city name");
//                 return null
//               }
//         });
//     })) 
//     return data;
// };

// export default FetchBoth;

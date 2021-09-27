let map;


function initMap() {


    //heatmapData Array
    const heatmapData = [];
    
    //load json data from the payload
    fetch("data.json").then(response=>{
        return response.json();
    })
    .then(data=>{

        //return users data form the json payload
        const usersData = data.users;

        //loop through the array object to obtain data object values
        usersData.forEach(userData => { 
            const latLng = new google.maps.LatLng(
                userData.user_location.lat, 
                userData.user_location.lng
                );

            //push latLng values to heatmapData[]
            heatmapData.push(latLng);
            //console.log(heatmapData);
            
        });
    });

    //map center
    var Eldoret = new google.maps.LatLng(0.514277, 35.269779);

    //load map
    map = new google.maps.Map(document.getElementById("map"), {
        center: Eldoret,
        zoom: 8,
    });

    //load heatmapData to the map to create a visualization
    var heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData
    });
    heatmap.setMap(map);
}


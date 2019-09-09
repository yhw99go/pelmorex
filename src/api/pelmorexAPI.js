function paramsToQueryString(params) {
    return Object.keys(params).map((key) => { return key + "=" + params[key] }).join("&");
}

export function getBoundsWithDetail(ne, sw) {
    var url = 'https://poi.data.pelmorex.com/api/v1/pois/search';
    var params = {
            "client_key": "51e05a51-5caf-42db-aedf-d658eb88f2af",
            "poi_fields" : "id,name,label,center"
    }
    var data = {
        "filters": {
            "bounding_box": {
                "top_left_lat": ne.lat(),
                "top_left_lon": sw.lng(),
                "bottom_right_lat": sw.lat(),
                "bottom_right_lon": ne.lng()
            }
        }
    }

    return fetch(url + "?" + paramsToQueryString(params), {
        method: 'POST',
        body: JSON.stringify(data), 
        headers:{
        'Content-Type': 'application/json'
        }
    })

}

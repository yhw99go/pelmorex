function paramsToQueryString(params) {
    return Object.keys(params).map((key) => { return key + "=" + params[key] }).join("&");
}

export function getBoundsWithDetail(ne, sw) {
    var url = process.env.REACT_APP_PERMOREX_API;
    var params = {
            "client_key": process.env.REACT_APP_PERMOREX_API_CLIENT_ID,
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

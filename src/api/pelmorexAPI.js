/**
 * @file Contains API handler
 */

/**
  * @method
  * @summary method to join url and params and return
  * @param {object} params - parameter for API
  * @return {String} - return string that include URL and params
  */
function paramsToQueryString(params) {
    return Object.keys(params).map((key) => { return key + "=" + params[key] }).join("&");
}

/**
  * @method
  * @summary method to make POST call for permorexAPI
  * @param {object} ne - location of north east of the map
  * @param {object} sw - location of sotuh west of the map
  * @return {object} - return api response
  */
export function getBoundsWithDetail(ne, sw) {
    var url = process.env.REACT_APP_PELMOREX_API;
    var params = {
            "client_key": process.env.REACT_APP_PELMOREX_API_CLIENT_ID,
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

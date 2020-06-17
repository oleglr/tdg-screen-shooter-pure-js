/**
 * @author: Diego Favero <diego.g.favero@gmail.com>
 * @since : jun 2020
 * @version : 0.0.0.1
 *
 * IT NEEDS rasterizeHTML in order to gnerate svg or image < https://github.com/cburgmer/rasterizeHTML.js  >
 *
 * rasterize will return a string with a svg element or ang <img> object
 * The not rendered objects|elements will be at erros !
 * More details at : https://github.com/cburgmer/rasterizeHTML.js/wiki/API
 *
 *
 *
 *
 */


/**
 * just call it any time in your code !
 * @constructor
 */
function TakeScreenShotAndSendiIt(){


    TDG_screenshooter()
        .then( function (svg) {

            // Start new XHR Request
            let request = new XMLHttpRequest()

            // No Need for wait response, so, async=true
            request.open('POST', apiUrl, true);

            // When the request has been complete, let the observers observe again
            request.onreadystatechange = function () {
                if (this.readyState == 4) {

                    console.log('SVG Sent')
                }
            };

            const img = {
                'svg' : svg
            }
            request.send(JSON.stringify(img))


        })

    return;

}

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
 * Takes an screen shot from 'document'
 * @return {Promise<string>} svg string file
 * @constructor
 */

async function TDG_screenshooter(){


    try{

        var canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'canvas');
        var ctx = canvas.getContext('2d')
        // Set the width and height of the canvas to match the element's
        canvas.width = window.innerWidth || document.body.clientWidth;
        canvas.height = window.innerHeight || document.body.clientHeight


        // Append the canvas to your page, this does not have to be done on the body
        // document.body.appendChild(canvas);
        var opt = {
            width : window.innerWidth || document.body.clientWidth
            ,height : window.innerHeight || document.body.clientHeight
        }

        return rasterizeHTML.drawDocument(document, canvas, opt).then( result => {

            if ( result.errors.length > 0 ){
                console.error( result.errors)
            }
            // return result.image
            return result.svg

        })
    }
    catch (e) {

        console.error("ERROR  ==> " + e.message)
        return "";
    }







}


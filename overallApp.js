let users = [
    {
        "id": "0",
        "img": "img/person.png",
        "name": "JSON0",
        "eMail": "@JSON.de"
    },
    {
        
        "id": "1",
        "img": "img/person.png",
        "name": "JSON1",
        "eMail": "@JSON.de"
    },
    {
        
        "id": "2",
        "img": "img/person.png",
        "name": "JSON2",
        "eMail": "@JSON.de"
    },
    {
        
        "id": "3",
        "img": "img/person.png",
        "name": "JSON3",
        "eMail": "@JSON.de"
    }
];

const eisenhowerMatrixCategrories =
{
    DO: "do",
    SCHEDULE: "schedule",
    DELEGATE: "delegate",
    ELIMINATE: "eliminate"
}
Object.freeze(eisenhowerMatrixCategrories);

//includes html file inside container using w3-include-html attribute's values as the name of the html file
//example: <div w3-include-html="fileName.html"></div>
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}
const methodField = document.getElementById("method");
const urlField = document.getElementById("url_field");
const requestBtn = document.getElementById("request__btn");
const response = document.getElementById("response");
const status = document.getElementById("status");
const headersArea = document.getElementById("headers");
const requestBodyField = document.getElementById("requestBody");
const headersField = document.getElementById("headersField");

requestBtn.onclick = async () => {
    let method = methodField.value;
    let url = urlField.value;

    if (!validateUrl(url)) {
        alert("Invalid Url!");
        return;
    }

    let data = {};
    switch (method) {
        case "GET":
            data = await getAndDeleteRequest(url,"GET");
            break
        case "POST":
            data = await postAndPutRequest(url,"POST");
            break
        case "PUT":
            data = await postAndPutRequest(url,"PUT");
            break
        case "DELETE":
            data = await getAndDeleteRequest(url,"DELETE");
            break
    }

    console.log(data)
    response.innerText = JSON.stringify(data.content, null, 2);
    status.innerText = "Status : " + String(data.status);
    headersArea.innerText = JSON.stringify(data.headers);
};

async function postAndPutRequest(url,method) {
    let body = requestBodyField.value;
    console.log(body)

    if (String(body).length === 0) {
        alert("Request body is empty");
        return;
    }

    let headersText = headersField.value;
    let headersObject = {}
    let newHeaders = constructHeaders(headersText);
    if(headersText.length !== 0){
        headersObject = newHeaders;
    }
    headersObject['Content-Type'] = 'application/json';

    try {
        let call = await fetch(url, {
            method: method,
            headers:headersObject,
            body: body
        })
        let data = await call.json();
        return {
            content: data,
            status: call.status,
            headers: call.headers
        }
    } catch (e) {
        console.log(e)
        alert("Could not make post request");
        return {content: "", status: 0, headers: ""};
    }
}

async function getAndDeleteRequest(url,method) {
    try {
        let call = await fetch(url,{
            method,
            headers:{
                'Content-Type':'application/json'
            }
        });
        let content = await call.json();

        return {
            content,
            headers: call.headers,
            status: call.status
        };
    } catch (e) {
        alert("Could not call the url!")
        return {content: "", status: 0, headers: ""};
    }
}

function constructHeaders(headersText) {
    let headers = {};

    let text = String(headersText);
    let arrOfTextWithColon = text.split("\n");
    for (let i = 0; i < arrOfTextWithColon.length; i++) {
        let textWithColon = arrOfTextWithColon[i];
        let singleHeader = textWithColon.split(":");

        for (let j = 0; j < singleHeader.length; j++) {
            headers[singleHeader[i]] = singleHeader[j];
        }
    }

    return headers;
}

function validateUrl(url) {
    if (!String(url).startsWith("http")) {
        return false;
    }
    return true;
}
import german from "../../assets/languages/german.json" assert {type: 'json'};
import english from "../../assets/languages/english.json" assert {type: 'json'};

export function setGerman(jsonpath){
    let element = german.filter(data => data['name'] === jsonpath);

    if (element == undefined || element == null || element == ""){
        return "";
    }
    return element[0].value;
}

export function setEnglish(jsonpath){
    let element = english.filter(data => data['name'] === jsonpath);

    if (element == undefined || element == null || element == ""){
        return "";
    }
    return element[0].value;
}
const dest="florian.fontanez7@gmail.com";
const template="table";

export function sendEmail(data, subject){
    data["_subject"]=`[SIMULAFOOT] ${subject}`;
    data["_template"]=template;

    let response=fetch(`https://formsubmit.co/ajax/${dest}`, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        mode: 'no-cors',
        body: JSON.stringify(data)
    });

    return response;
}
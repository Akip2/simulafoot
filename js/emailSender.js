const dest="florian.fontanez7@gmail.com";
const template="table";

export async function sendEmail(data, subject){
    data["_subject"]=`[SIMULAFOOT] ${subject}`;
    data["_template"]=template;

    let response=await fetch(`https://formsubmit.co/ajax/${dest}`, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if(response.ok){
        return 0;
    }
    else{
        console.log(`erreur : ${response.statusText}`);
        return 1;
    }
}
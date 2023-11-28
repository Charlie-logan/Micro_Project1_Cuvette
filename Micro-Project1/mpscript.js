function show()
{
    let A=document.getElementById("add");
    A.parentNode.removeChild(A);

    // var divTag = document.createElement("div");
    // divTag.id = "affiliation";
    // divTag.innerHTML = "Thank you!";
    // document.body.appendChild(divTag);
    console.log("Done");
    document.getElementById("newp").innerHTML="Thank you!";
}
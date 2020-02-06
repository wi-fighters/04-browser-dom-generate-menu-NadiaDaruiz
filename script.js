(() => {
    const body = document.querySelector("body");
    const header = document.createElement("header");
    const ul = document.createElement("ul");

    // need to create 6 li (base on the number of sections) inside ul
    // need to give each li a link. Each link should have an href attribute  (# + name of section)
    //And each link should contain an innerText 

    const sections = [...document.querySelectorAll('section')]; // this is an array

    const ids = sections.map(section => section.id); // this is an array
    console.log(ids);

    // const hrefs = ids.map(href => "#" + href); NOT NECESSARY TO DO THIS

    ids.forEach(id => {

        const li = document.createElement("li");
        const link = document.createElement("a");
        link.setAttribute("href", "#" + id);

        const addLinkText = document.createTextNode(id.charAt(0).toUpperCase() + id.substring(1));

        link.appendChild(addLinkText);
        li.appendChild(link);
        ul.appendChild(li);
        // console.log(link);
    })

    header.prepend(ul);
    body.prepend(header);
    console.log(body);

})()









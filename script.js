(() => {
    // The general workflow is:
    // create an element
    // target its parent
    // prepend (or append) it as a child
    
    // DO THE SETUP
    
    // grab the closest EXISTING parent already in the DOM (on the page)
    const body = document.body;
    
    // we're creating a list based on the number of sections, so grab those...
    
    // grab all the sections and destructure it into an array
    const sections = [...document.querySelectorAll('section')];
    
    // map over them and store their id in a new array
    const ids = sections.map(section => section.id); // home
    
    // DO THE HARD WORK
    
    // create a new thing
    const header = document.createElement('header');
    
    const ul = document.createElement('ul');
    
    // Which tool do we use to iterate over these steps?
    // Maybe map? Well, we don't need a new array, so forEach works for us this time
    
    ids.forEach(id => {
        const li = document.createElement('li');
    
        const link = document.createElement('a');
        link.setAttribute('href', `#${id}`);
    
        const linkText = document.createTextNode(id[0].toUpperCase() + id.substring(1).toLowerCase());
    
        link.prepend(linkText);
    
        li.prepend(link);
    
        ul.appendChild(li);
    });
        
    header.prepend(ul);
    
    // SEE THE RESULT
    
    // Once you've built the whole subtree in memory,
    // Add it to the DOM
    body.prepend(header);    
})();

function mySearchBar() {
    // Variables

    var input, filter, h2, h4, a, i;

    input = document.getElementById("mySearch");
    filter = input.ariaValueMax.toUpperCase();
    h2 = document.getElementById("myMenu");
    h2 = document.getElemenyByTagName("h2");

    for (i = 0; i < h2.length; i++) {
        a = h2[i]

        let article = document.getElementsByClassName("card")[i]

        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            // Update display style
            article.style.display = "";
        } else {
            // Update display style 
            article.style.display = "none";
        }
    }
}

// Establish constants
const checkbox = document.getElementById("myonoffswitch")
const div1 = document.querySelectorAll('.containersection')[0]
const div2 = document.querySelectorAll('.containersection2')[0]

// Add event listener to detect event
checkbox.addEventListener('change', () => {

    if (checkbox.checked) {
        div1.classList.remove('hidden') // Removes hidden status
        div2.classList.add('hidden') // Adds hidden status
    } else {
        div1.classList.add('hidden') // Adds hidden status
        div2.classList.remove('hidden') // Removes hidden status
    }
})
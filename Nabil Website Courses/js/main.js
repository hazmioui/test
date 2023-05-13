const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classlist.add('idhar');
        }else {
            entry.target.classlist.remove('idhar');
        }
    });
});

const hiddenElements = document.querySelectorAll('.ta-1bac-anim');
hiddenElements.forEach((el) => observer.observe(el));
let student = [
    {
    name: 'Shoaib Ahmed',
    title: 'Front End Developer',
    institute:"Tech Karo",
    email:'shoaib10ahmed10@gmail.com',
    image:'shoaib.jpg',
    socialMedia: [
        {
        facebook:{
            url:"https://www.facebook.com/profile.php?id=100025419765886",
            cssClasses:'facebook',
        },
        instagram:{
            url:'https://www.instagram.com/?hl=en',
            cssClasses:'instagram',
        },
        twiter:{
            url:'https://twitter.com/home',
            cssClasses:'twitter',
        },
        linkedin:{
            url:'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fshoaib-ahmed-9a2803160%3Ffbclid%3DIwAR1LyKE3Que1pTkgvB3P7sdLgdkMPukPJDqnsdPjL0ZXnB0oflZoD-Fvv9o&h=AT3JxwlrSzzzdTqY37Ll3iuqpf_hzLL7MFqy2pZ5YuT_1LeYgaEb9_zzyrAfcpY8tQWI5bZvDWYvLM-gNRoAiWEer8_5MeEO0vT867Vv1gEVtWGr715A_QbaQLfy55LVKsIJQw',
            cssClasses:'linkedin',
        }
      }
    ]
}
];


document.body.innerHTML = student.map(function(learner){
    return`<div class="card">
    <img src=${learner.image} alt="shoaibdp" style="width: 100%; height: 235px;">
    <h1>${learner.name}</h1>
    <p>${learner.title}</p>
    <p>${learner.institute}</p>
    <a href="https://twitter.com/home"><i class="fa fa-twitter"></i></a>
    <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fshoaib-ahmed-9a2803160%3Ffbclid%3DIwAR1LyKE3Que1pTkgvB3P7sdLgdkMPukPJDqnsdPjL0ZXnB0oflZoD-Fvv9o&h=AT3JxwlrSzzzdTqY37Ll3iuqpf_hzLL7MFqy2pZ5YuT_1LeYgaEb9_zzyrAfcpY8tQWI5bZvDWYvLM-gNRoAiWEer8_5MeEO0vT867Vv1gEVtWGr715A_QbaQLfy55LVKsIJQw"><i class="fa fa-linkedin"></i></a>
    <a href="https://www.facebook.com/profile.php?id=100025419765886"><i class="fa fa-facebook"></i></a>
    <a href="https://www.instagram.com/?hl=en"><i class="fa fa-instagram"></i></a>
    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"><button>contact</button></a>
</div>`
})
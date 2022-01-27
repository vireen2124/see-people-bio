let currentPerson=0;
const img=document.querySelector(".person-image");
const personName=document.querySelector(".person-name");
const personBio=document.querySelector(".person-bio");
const backBtn=document.querySelector(".back-btn");
const nextBtn=document.querySelector(".next-btn");
const submit=document.querySelector(".submit");
const uploadImage=document.getElementById("image-input");
const uploadName=document.querySelector(".name");
const uploadBio=document.querySelector(".bio");
const uploadJob=document.querySelector(".job");
const personJob=document.querySelector(".person-job");
const contentWrapper=document.querySelector(".content");
const showBio=document.querySelector(".show-bio-container");
const errorMsg=document.querySelector(".input-file-header");
const randomBtn=document.querySelector(".random-person-bio");
const myPerson=[
    {
        personName:"vireen",
        job:"unemployed",
        bio:"Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur. Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum.",
        image:"images/person.jfif"
    }

]


submit.addEventListener("click",()=>{
    const makePerson=new newPerson(uploadName.value,uploadJob.value,uploadBio.value,uploadImage.value)
    if(uploadName.value===""||uploadJob.value===""||uploadBio.value===""||uploadImage.value===""){
        errorMsg.textContent="*complete the form first";
        errorMsg.style.color="red";

    }else{
        myPerson.push(makePerson);
        contentWrapper.classList.toggle("none");
        showBio.classList.toggle("show-person-details");
    }
})
const showPerson=()=>{
    img.src=myPerson[currentPerson].image;
    personName.textContent=myPerson[currentPerson].personName;
    personBio.textContent=myPerson[currentPerson].bio;
    personJob.textContent=myPerson[currentPerson].job
}
window.addEventListener("load",showPerson)
nextBtn.addEventListener("click",()=>{
    goNext();
    showPerson();
})
backBtn.addEventListener("click",()=>{
    goBack();
    showPerson()
})
randomBtn.addEventListener("click",()=>{
    getRandomBio();
    showPerson()
    console.log(currentPerson)
})
class newPerson{
    constructor(personName,job,bio,image){
        this.personName=personName;
        this.job=job;
        this.bio=bio;
        this.image=image;
    }
}
const goNext=()=>{
    if(currentPerson===myPerson.length-1){
        currentPerson=0;
    }else{
        currentPerson++
    }
}
const goBack=()=>{
    if(currentPerson===0){
        currentPerson=myPerson.length-1;
    }else{
        currentPerson--
    }
}
const getRandomBio=()=>{
    currentPerson=Math.floor(Math.random()*myPerson.length);
    return currentPerson
}


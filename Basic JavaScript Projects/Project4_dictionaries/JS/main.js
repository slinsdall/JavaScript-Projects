function my_Dictionary() {//This function creates a dictionary, Animal is the variable.
    var Animal= {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age: 5;
        Sound:"Bark!"
    };
    delete Animal.Sound;//This deletes a statement
    document.getElementById("Dictionary").innerHTML=Animal.Sound;
}
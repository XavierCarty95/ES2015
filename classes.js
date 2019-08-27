class Student {
  constructor(firstName , lastName, scores , tardies){
   this.firstName = firstName;
   this.lastName = lastName; 
   this.tardies = tardies;
   this.scores = [];
  }
  fullName(){
     return `Your full name is ${this.firstName} ${this.lastName} `
}
   marklate(){ this.tardies += 1 
   if(this.tardies > 1){
   return `${this.firstName} ${this.lastName} has been late ${this.tadies} times`;
}

    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
}
   addScore(score){ 
    this.scores.push(score)
    return this.scores

}

   calculateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b})
        return sum/this.scores.length
        }
}

let firstStudent = new Student('Colt' , 'Steele' , 1)
let secondStudent = new Student('Blue' , 'Steele' , 2)

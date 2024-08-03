// You are creating a website for your college. Create a class User with 2 properties, name and email. It also has a method called viewData() that allows user to view website data.


let data = "secret information";
class User{

    constructor(name, email){
        this.name=name;
        this.email=email;
    }


    viewData(name,email){
        console.log(`Welcome to our Webiste`);
        console.log('Student data:')
        console.log(`data= ${data}`);
    }
}

let obj1 = new User("studentName","student@icp.edu.np")



class Admin extends User{
    constructor(name,email){
        super(name,email);


    }
    editData(){
        data="ding ding"
    }
}

let ad1 = new Admin("Riwaj Thapa","rambathapa562@gmail.com");

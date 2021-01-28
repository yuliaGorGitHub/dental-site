//import Parse from 'parse';

class User 
{
    constructor(parseUser, job) 
    {
        //debugger;
        this.id = parseUser.id;
        this.tzeut = parseUser.get("tzeut");
        this.pwd = parseUser.get("pwd");        
        this.fname = parseUser.get("fname");
        this.lname = parseUser.get("lname");        
        this.birthdate =  parseUser.get("birthdate");  
        this.sex = parseUser.get("sex"); 
        this.phone = parseUser.get("phone");
        this.email = parseUser.get("email");
        this.job =  parseUser.get('jobId') != null ? parseUser.get('jobId').id : "";
        this.jobStr = job;
    }
}
export default User;
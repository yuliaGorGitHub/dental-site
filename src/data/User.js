class User 
{
    constructor(id, tzeut, pwd, fname, lname, birthdate, sex, phone, email, job) 
    {
        this.id = id;
        this.tzeut = tzeut;
        this.pwd = pwd;        
        this.fname = fname;
        this.lname = lname;        
        this.birthdate = new Date(birthdate);
        this.sex = sex;
        this.phone = phone;
        this.email = email;
        this.job = job;
    }
}
export default User;
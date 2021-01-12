class Appointment 
{
    constructor(id, appDateTime, doctorId, pacientId, comments, createdBy, createdAt) 
    {
        this.id = id;
        this.appDateTime = new Date(appDateTime);
        this.doctorId = doctorId;        
        this.pacientId = pacientId;
        this.comments = comments;        
        this.createdBy = createdBy;
        this.createdAt = new Date(createdAt);
        this.appDuration = 30;  // duration of appointment in minutes
    }
}
export default Appointment;
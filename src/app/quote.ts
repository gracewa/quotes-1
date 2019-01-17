export class Quote {
    public uvotes:number
    public dvotes:number

    constructor(
        public id:number,
        public quote:string, 
        public author:string,
        public publisher:string,
        public completeDate:Date
    ){
        this.uvotes = 0
        this.dvotes = 0
    }
}
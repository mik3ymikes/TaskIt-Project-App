export class User{
  public imagePath:string
  public name:string;
  public email:string;


  constructor(imagePath:string, name:string, email:string){
    this.imagePath=imagePath;
    this.name=name;
    this.email=email
  }

}

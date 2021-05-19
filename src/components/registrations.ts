import * as  NGSI from 'ngsijs'

export class Registrations {
  message: string;

  constructor() {
    this.message = 'Registrations';
  }

  async activate(): Promise<void> {
    const connection = new NGSI.Connection("https://192.168.1.69:1026");
    const data = await connection.v2.listEntities({});  
    console.log(data);  
  }
}

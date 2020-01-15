import {Injectable} from '@angular/core';
import {Data} from '../models/data';


@Injectable()
export class DataService {
  

  employeeData: Data[] = [
    {
    id: 111,
    firstname: 'Tyrion',
    lastname: 'Lannister',
    email: 'Tyrion@gmail.com',
    salary:45000
    },
    {
    id: 222,
    firstname: 'Sean',
    lastname: 'Bean',
    email: 'Sean@gmail.com',
    salary:45000
    },
    {
    id: 333,
    firstname: 'Emilia',
    lastname: 'Clark',
    email: 'Emilia@gmail.com',
    salary:45000
    },
    {
    id: 444,
    firstname: 'Catelyn',
    lastname: 'Stark',
    email: 'Catelyn@gmail.com',
    salary:45000
    }
  ];

 getEmployees(){
     return this.employeeData.slice();
 }
 getEmployee(id) {
    return this.employeeData.find(x => x.id === id);
  }

}





  
  




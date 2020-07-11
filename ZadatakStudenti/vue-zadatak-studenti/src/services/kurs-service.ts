import axios from 'axios';
import IKurs from '@/types/kurs'
import { getAccessToken } from './auth-service';


export default class StudentService{
API_URL = process.env.VUE_APP_API_URL;


    public async getAllKurs(): Promise<IKurs[]>{
        let result = await axios.get(`${this.API_URL}/Kurs/`,
        {
            headers:
            { Authorization: `Bearer ${getAccessToken()}` }
        })
        return result.data;
        }
    
    public async getKursStudentbyID(id : number): Promise<IKurs[]>{
        let result = await axios.get(`${this.API_URL}/Kurs/${id}`,
        {
            headers:
            { Authorization: `Bearer ${getAccessToken()}` }
        })
        return result.data;
        }
    

        public async postKurs(kurs : IKurs){
            let result = await axios.post(`${this.API_URL}/Kurs/`, kurs,
            {
                headers:
                { Authorization: `Bearer ${getAccessToken()}` }
            })
            return result.data;
            }
          
            public async deleteKurs(id : number){
                let result = await axios.delete(`${this.API_URL}/Kurs/${id}`,
                {
                    headers:
                    { Authorization: `Bearer ${getAccessToken()}` }
                })
                return result.data;
                }

                public async getStudentKurs(id : number) : Promise<IKurs[]>{
                    let result = await axios.get(`${this.API_URL}/StudentKurs/${id}`,
                    {
                        headers:
                        { Authorization: `Bearer ${getAccessToken()}` }
                    })                 
                    return result.data;
                }


}
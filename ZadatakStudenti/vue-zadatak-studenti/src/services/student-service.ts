import axios from 'axios';
import IStudent from '@/types/student'
import IStatus from '@/types/statusi'
import { getAccessToken } from './auth-service';

export default class StudentService{
API_URL = process.env.VUE_APP_API_URL;


    public async getAllStudents(): Promise<IStudent[]>{
        let result = await axios.get(`${this.API_URL}/Student/`,
        {
            headers:
            { Authorization: `Bearer ${getAccessToken()}` }
        })
        return result.data;
        }

        public async getStudentsByID(id : number) : Promise<IStudent[]>{
            let result = await axios.get(`${this.API_URL}/Student/${id}`,
            {
                headers:
                { Authorization: `Bearer ${getAccessToken()}` }
            })           
            return result.data;            
        }

        public async studentBYID(id : number) : Promise<IStudent>{
            let result = await axios.get(`${this.API_URL}/Student/${id}`,
            {
                headers:
                { Authorization: `Bearer ${getAccessToken()}` }
            })
            return result.data;
        }

        public async getStatus() : Promise<IStatus[]>{
            let result = await axios.get(`${this.API_URL}/Status/`,
            {
                headers:
                { Authorization: `Bearer ${getAccessToken()}` }
            })
            return result.data;
        }
        public async postStudenta(student : IStudent){
            let result = await axios.post(`${this.API_URL}/Student/`, student,
            {
                headers:
                { Authorization: `Bearer ${getAccessToken()}` }
            })
            return result.data;
        }

        public async deleteStudent(id : number){
            let result = await axios.delete(`${this.API_URL}/Student/${id}`,
            {
                headers:
                { Authorization: `Bearer ${getAccessToken()}` }
            })
            return result.data;
        }

        public async putStudent(id: number, student : IStudent){
            let result = await axios.put(`${this.API_URL}/Student/${id}`, student,
            {
                headers:
                { Authorization: `Bearer ${getAccessToken()}` }
            })
                return result.data;
        }

    
}

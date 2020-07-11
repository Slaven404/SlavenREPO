import IStudent from '@/types/student'

export default interface IKurs{
    pkKursId : number;
    nazivKursa : string;
    students : IStudent[];
}
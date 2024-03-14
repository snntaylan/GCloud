import axios, { axiosPrivate } from '../../api/axios';

export default async function addCompany(inputs: any) {
  try {
    const response = await axiosPrivate.post('/api/Company', JSON.stringify(inputs));

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
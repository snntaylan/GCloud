import axios, { axiosPrivate } from '../axios';

export default function addCompany(inputs) {
  try {
    const response = axiosPrivate.post('/api/Company', JSON.stringify(inputs));

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// import axios, { axiosPrivate } from '../axios';
import { companies } from '../../mock-data/companies';

export const companyList = () => {
  try {
    // const response = axiosPrivate.post('/api/Company', JSON.stringify(inputs));

    // return response.data;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(companies);
      }, 2000);
    })
  } catch (error) {
    console.log(error);
  }
}

export const deleteCompany = (id: number) => {
  try {
    // const response = axiosPrivate.post('/api/Company', JSON.stringify(inputs));

    // return response.data;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(companies);
      }, 2000);
    })
  } catch (error) {
    console.log(error);
  }
}

export const getCompanyById = (id: string) => {
  try {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const company = companies.find(x => x.id === parseInt(id));
        resolve(company);
      }, 2000);
    })
  } catch (error) {
    console.log(error);
  }
}
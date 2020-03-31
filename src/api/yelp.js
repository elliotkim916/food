import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 
      'Bearer aVqqO_5awM7YjGV-kH5_q6gWNqbZjJPkgCVvmx4s-MmP6MiC3IcII_CYPO9i3fOil0rRh2vDQ3tNuYnk_niNny_WYP1OYgnTV7LdU9pTps7ASvNAhB6BwQwQkpJ_XnYx'
  }
});
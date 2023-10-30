import axios from 'axios';

// const BASE_URL = 'http://allgoodsbazaar.lp-crm.biz/api/addNewOrder.html';

// export const newOrder = (name, phone, color) => {
// const data = {
//   key: 'a46094a46f4b97d3df84a4aed7e5f84e',
//   order_id: String(Math.round(Date.now() * 10)),
//   country: 'UA',
//   products: ['Термос'],
//   bayer_name: name,
//   phone,
//   comment: color,
// };

//   const response = axios.post(BASE_URL, {
//     key: 'a46094a46f4b97d3df84a4aed7e5f84e',
//     order_id: String(Math.round(Date.now() * 10)),
//     country: 'UA',
//     products: ['Термос'],
//     bayer_name: name,
//     phone,
//     comment: color,
//   });

//   return response.data;
// };
const API_KEY = 'Zjk1MzJmNTNjMjJjOTIxMWJhMDk4MmRhNjFiYjI5MTk5Njk4NmFiYQ';

axios.defaults.baseURL = 'https://openapi.keycrm.app/v1';

export const newOrder = (name, phone, color) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`;

  const response = axios.post('/order', {
    source_id: 1,
    buyer: {
      full_name: name,
      phone,
    },
    buyer_comment: color,
  });

  return response.data;
};

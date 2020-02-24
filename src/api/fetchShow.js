import axios from 'axios';

// fetchShow.js
export const fetchShow = () => {
    return axios.get ('https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes')
      .then(res => {
          return res
  })
        .catch(err => {
            console.log('this is an error', err)
        })
    }

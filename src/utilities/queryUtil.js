


export function queryPetParser(queryObject) {
  let ret = ""
  
  Object.keys(queryObject).forEach((k) => {
    if (k !== 'price') {  
      ret = ret.concat(queryPetHelperParser(queryObject, k))
    } else if (k === 'price') {
      ret = ret.concat(`&pgt=${queryObject[k].min}&plt=${queryObject[k].max}`)
    }
  })

  return ret
}

/*
  queryObject {
    forPets: [],
    stockStatus: [], // notInStock, inStock 
    productTypes: [], 
    price : {min: 0, max: 100000000},
  })
  */

  export function queryPetHelperParser(queryObject, key) {
    let tmp = ""
  
    if (queryObject[key].length !== 0) {
      if (key === 'genders') {
        tmp = tmp.concat('&gender=')
      } else if (key === 'availabilities') {
        tmp = tmp.concat('&status=') 
      } else if (key === 'colors') {
        tmp = tmp.concat('&color=')
      } else if (key === 'breeds') {
        tmp = tmp.concat('&breed=')
      } 
    }
  
    queryObject[key].forEach((elem, index) => {
      if (queryObject[key].length !== 0) {
        let map = ""
        switch (key) {
          case 'genders': 
            map = elem === 'male' ? 'm' : 'f'
            break
          case 'availabilities': 
            map = elem === 'available' ? 'a' : 'na'
            break
          default:
            map = elem
            break
        }
  
        index === queryObject[key].length - 1 ? 
          tmp = tmp.concat(map) : tmp = tmp.concat(`${map},`)
      }
    })
    return tmp
  }

function queryProductHelperParser(queryObject, key) {
  let tmp = ""

  if (queryObject[key].length !==  0) {
    if (key === 'forPets') {
      tmp = tmp.concat('&for=')
    } else if (key === 'productTypes') {
      tmp = tmp.concat('&type=')
    }
  }

  queryObject[key].forEach((elem, index) => {
    if (queryObject[key].length !== 0) {

      index === queryObject[key].length - 1 ? 
        tmp = tmp.concat(elem) : tmp = tmp.concat(`${elem},`)
    }
  })
  return tmp;
}

export function queryProductParser(queryObject) {
  let ret = ""
  
  Object.keys(queryObject).forEach((k) => {
    if (k !== 'price' && k !== 'stockStatus') {  
      ret = ret.concat(queryProductHelperParser(queryObject, k))
    } else if (k === 'price') {
      ret = ret.concat(`&pgt=${queryObject[k].min}&plt=${queryObject[k].max}`)
    } else if (k === 'stockStatus' && queryObject[k].length !== 0 ) {
      let istock = queryObject[k].includes("in stock")
      let ostock = queryObject[k].includes("out of stock")

      if (!istock && ostock) {
        ret = ret.concat(`&qlt=0`)
      } else if (istock && !ostock) {
        ret = ret.concat(`&pgt=1`)
      }
    }
  })

  return ret
}
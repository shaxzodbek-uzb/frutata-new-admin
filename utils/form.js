export function convertJsonToFormData(data, formData = null, prefix = null){
	if(formData == null){
  	formData = new FormData();
  }
  let p = '';
  if(data instanceof Array){
      data.forEach((item, index) => {
      	p = `${prefix}[${index}]`;
      	convertJsonToFormData(item, formData, p)
      })
  } else if(data instanceof Object){
      if(data instanceof File){
        formData.append(prefix, data);
      }else{
        for(const key in data){
          if(prefix == null){
            p = key
          }else{
            p = `${prefix}[${key}]`;
          }
          convertJsonToFormData(data[key], formData, p)
        }
      }
    } else {
    	formData.append(prefix, data)
    }
  
  return formData;
}
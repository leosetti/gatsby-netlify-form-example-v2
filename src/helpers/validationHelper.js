export default (schema, submitObject) => {
  let formErrors = {};
  let err = null;
  schema.validate(submitObject, function (errors) { 
    if(errors != null){
      errors.details.forEach(er => {
        if(er.type === 'object.missing'){
          const peer = er.context.peers[0];
          formErrors[peer] = {
            msg: `errors.${peer}.${er.type}`
          }
        }else{
          formErrors[er.path] = {
            msg: `errors.${er.path.join('_')}.${er.type}`
          }
        }
      })
      err = formErrors;
    }
  });
  return err;
}
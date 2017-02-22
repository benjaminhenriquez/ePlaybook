export default function(form){

  let newCompany = {
                    name:form.target[0].value,
                    status:form.target[1].value,
                    company_info: {
                      industry : form.target[2].value
                    },
                    financial_performance: form.target[3].value,
                    key_contacts:[
                      {[form.target[4].value]: form.target[5].value},
                      {[form.target[6].value]: form.target[7].value}
                    ]
                  }
    return {
            type: "ADD_COMPANY",
            payload: newCompany
            };


}

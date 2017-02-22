export default function(form, targets, index){

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

  targets[index] = newCompany;

  return {
          type: "EDIT_COMPANY",
          payload: targets
          };
}

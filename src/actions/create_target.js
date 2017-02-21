export default function(form){

  let array = [form.target[3].checked,form.target[4].checked,form.target[5].checked,form.target[6].checked]
  let value = array.indexOf(true)
  let newCompany = {
                    name:form.target[0].value,
                    status:form.target[1].value,
                    company_info: {
                      industry : form.target[2].value
                    },
                    financial_performance: form.target[value+3].name,
                    key_contacts:[
                      {[form.target[7].value]: form.target[8].value},
                      {[form.target[9].value]: form.target[10].value}
                    ]
                  }

    return {
            type: "ADD_COMPANY",
            payload: newCompany
            };
}

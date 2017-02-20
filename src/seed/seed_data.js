export const seed_data = [
  {
    name: "Wal-Mart",
    status: "pending approval",
    company_info: {
      industry:"retail",
    },
    key_contacts:[
      {"CEO": "CEO"},
      {"President": "Ms.President"}
    ],
    financial_performance: "Good"
  },

  {
    name: "Ben-Co",
    status: "researching",
    company_info: {
      industry:"retail",
    },
    key_contacts:[
      {"CEO": "CEO"},
      {"President": "Ms.President"}
    ],
    financial_performance: "Good"
  }

  //create at least 5 more and research the catagories
  //seed this before you create form as you will need to know what they need

]



//
//
// - Status (e.g., researching, pending approval, approved, declined)
//           - Company Info
//           - Key Contacts
//           - Financial Performance

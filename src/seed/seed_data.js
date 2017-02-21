export const seed_data = [
  {
    name: "Wal-Mart",
    status: "Pending Approval",
    company_info: {
      industry:"Retail",
    },
    key_contacts:[
      {"CEO": "CEO"},
      {"President": "Ms.President"}
    ],
    financial_performance: "Good"
  },
  {
    name: "Ben-Co",
    status: "Researching",
    company_info: {
      industry:"Food",
    },
    key_contacts:[
      {"CEO": "Ben"},
      {"President": "Mr.Henriquez"}
    ],
    financial_performance: "Excellent"
  }
]
// - Status (e.g., researching, pending approval, approved, declined)
//           - Company Info
//           - Key Contacts
//           - Financial Performance

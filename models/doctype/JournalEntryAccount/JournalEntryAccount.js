module.exports = {
    name: "JournalEntryAccount",
    doctype: "DocType",
    isSingle: 0,
    isChild: 1,
    keywordFields: [],
    layout: 'ratio',
    fields: [
        {
            "fieldname": "account",
            "label": "Account",
            "fieldtype": "Link",
            "target": "Account",
            "required": 1,
        },
        {
            "fieldname": "debit",
            "label": "Debit",
            "fieldtype": "Currency"
        },
        {
            "fieldname": "credit",
            "label": "Credit",
            "fieldtype": "Currency"
        }
    ]
}
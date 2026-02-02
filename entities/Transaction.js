{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Transaction",
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "enum": ["income", "expense"],
      "description": "Type of transaction"
    },
    "amount": {
      "type": "number",
      "minimum": 0,
      "description": "Transaction amount (must be positive)"
    },
    "category": {
      "type": "string",
      "minLength": 1,
      "description": "Category of the transaction"
    },
    "description": {
      "type": "string",
      "description": "Optional description of the transaction"
    },
    "date": {
      "type": "string",
      "format": "date",
      "description": "Transaction date (YYYY-MM-DD)"
    },
    "emoji": {
      "type": "string",
      "description": "Emoji representing category"
    }
  },
  "required": ["type", "amount", "category", "date"],
  "additionalProperties": false
}

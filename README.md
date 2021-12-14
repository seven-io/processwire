![sms77 Logo](https://www.sms77.io/wp-content/uploads/2019/07/sms77-Logo-400x79.png "sms77 Logo")
# Official module for [ProcessWire](https://processwire.com/)

## Installation

1. Extract archive `unzip -d /path/to/processwire/wire/modules <archive_name>.zip`
2. Add mobile phone field `Admin->Setup->Fields->Add New` - see [screenshot](_screenshots/add_new_field.png)
3. Go to `Admin->Setup->Templates`, press `Filters` and set `Show system templates?` to `yes`
4. Select `user` template, add `mobile_phone` field and press `Save` - see [screenshot](_screenshots/edit_user_template.png)
5. Go to `Admin->Modules->Sms77`, enter your `API Key` and press `Submit`

### Features

- Send SMS to user - see [screenshot](_screenshots/sms_user.png)
- Bulk message users - see [screenshot](_screenshots/edit_user_template.png)
- Configurable mobile phone field
- Message placeholder(s) - see [here](#placeholders)

#### Placeholders

- email

Usage: `{{email}}` resolves to the users email address

##### Support

Need help? Feel free to [contact us](https://www.sms77.io/en/company/contact/).

[![MIT](https://img.shields.io/badge/License-MIT-teal.svg)](LICENSE)

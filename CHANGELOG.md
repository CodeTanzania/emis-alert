#### 1.4.0 (2019-05-30)

##### Chores

* **deps:**  force latest version & audit fix ([f05d71aa](https://github.com/CodeTanzania/emis-alert/commit/f05d71aaee752fc5d80d66372abd6e91155a7f4b))
*  force latest dependencies ([158ef975](https://github.com/CodeTanzania/emis-alert/commit/158ef975a1ef42ceb08b89f4662d95202de74da2))

##### New Features

*  format alert dates on exports and reorder columns ([77328ee9](https://github.com/CodeTanzania/emis-alert/commit/77328ee905041cc8e08e7ad4550c1d479f807480))
*  add export colum definition on Alert & Alert Source ([e88bd4ac](https://github.com/CodeTanzania/emis-alert/commit/e88bd4ac5e0e567f12f5ef82c8667369b6b0b53e))
*  apply exprtable plugin to Alert and AlertSource models ([d7aa41a5](https://github.com/CodeTanzania/emis-alert/commit/d7aa41a5f725db2436153f9b42bd0003b03b70df))

##### Bug Fixes

*  update exportable plugins to remove unclered exportable fields ([4c09ef7c](https://github.com/CodeTanzania/emis-alert/commit/4c09ef7c3ee5b7d042bbcf97eab59c1c18ba8d68))

##### Refactors

* **deps:**  update to use latest dependencies api ([f5b05064](https://github.com/CodeTanzania/emis-alert/commit/f5b0506476861508670aed0b21f8e28ce946ea86))

#### 1.3.0 (2019-01-29)

##### New Features

*  implement alert source router ([6c674399](https://github.com/CodeTanzania/emis-alert/commit/6c6743999de31bb0d842552b45405a6eb0f3996c))
*  implement alert source model ([0506ec59](https://github.com/CodeTanzania/emis-alert/commit/0506ec593f9d7e7b3903411edc602f7cd5705316))

# v1.2.2 - 2018-12-24
- Build latest apidoc
- Force latest dependencies & audit fix
- Refactor and improve specs readability

# v1.2.1 - 2018-12-17
- Build latest apidoc
- Reorganize dependencies
- Apply taggable plugin
- Force latest dependencies & audit fix
- Improve package main jsdoc
- Improve example app

# v1.2.0 - 2018-11-24  
- Wire mongoose json schema to extract json schema from alert schema     
- Add alerts/schema endpoint to expose Alert json schema
- Force latest dependencies
- Build latest apidoc

# v1.1.0 - 2018-11-13
- Build latest API doc
- Add notification worker on example
- Add SMTP configuration on example
- Force latest dependencies
- Wire notification queue on alert afterPost
- Re-organize dependencies & add redis in travis build
- Fix centroid calculations
- Add real seed on example
- Add Alert upsert logic
- Add Alert seed logic
- Add Alert upsert integration test
- Add Alert seed integration test
- Add color on alert schema
- Derive alert color based on severity
- Improve alert router api doc
- Improve model unit spec



# v1.0.0 - 2018-10-01
- Initial release

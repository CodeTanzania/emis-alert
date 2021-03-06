#### 1.5.0 (2019-06-20)

##### Chores

* **deps:**  force latest version & audit fix ([98b8d1a2](https://github.com/CodeTanzania/emis-alert/commit/98b8d1a2d892f23add7722efaf72d38208e53c68))

##### New Features

*  add agency and locations ([6990c827](https://github.com/CodeTanzania/emis-alert/commit/6990c827f9aed23e0a40c2503cab0bf0b8e76d15))
*  add agency and locations fields ([ad418d41](https://github.com/CodeTanzania/emis-alert/commit/ad418d41d731f161e744fad514b2b638f0fe698c))
*  refactor to use campaign on alert sending ([1f3c27d1](https://github.com/CodeTanzania/emis-alert/commit/1f3c27d16cdd02ec3e4b639c1b80f265ebf0568d))

##### Code Style Changes

*  fix unused imports ([2fe7877a](https://github.com/CodeTanzania/emis-alert/commit/2fe7877ac9086a90af0084e2d3063885b71f7148))

#### 1.4.1 (2019-06-17)

##### Chores

* **package.json:**  update package version to 1.4.1 ([a0ea96cf](https://github.com/CodeTanzania/emis-alert/commit/a0ea96cfc4a7e01bff4d740786e7bb1184b38cf2))
* **.gitignore:**  ignore .idea and .vscode configuration folders ([3dbace88](https://github.com/CodeTanzania/emis-alert/commit/3dbace88f4e8e26449c08d0898fe0f9a9a38f31c))
* **deps:**  force latest version & audit fix ([208a6041](https://github.com/CodeTanzania/emis-alert/commit/208a60419e9a73de463f5ad40a448b5061056380))
*  ignore neovim editor configs ([7051e424](https://github.com/CodeTanzania/emis-alert/commit/7051e424632531df39f4b628dbf6fade227a115b))
*  remove unused jsbeautify file ([03e539a5](https://github.com/CodeTanzania/emis-alert/commit/03e539a5fda3dcf0158da2ff80d9dc3650463748))
*  install and configure prettier ([48d482a0](https://github.com/CodeTanzania/emis-alert/commit/48d482a0ee184e093500fe3e87c1d4033e5a48fe))

##### Bug Fixes

* **seed:**  use prepareSeedCriteria to seed data ([878553cb](https://github.com/CodeTanzania/emis-alert/commit/878553cb11d7d52e346110347f6ce57d9f54da9e))

##### Code Style Changes

*  format files with prettier ([a75c6c01](https://github.com/CodeTanzania/emis-alert/commit/a75c6c01a511f63466fea523526e50a4955051a3))

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

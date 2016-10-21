<a name="0.3.26"></a>
## [0.3.26](https://github.com/cschroeter/ng2-pickadate/compare/0.3.25...0.3.26) (2016-10-21)


### Bug Fixes

* set click-focus to datepicker when input element is material-design ([fe6ab5b](https://github.com/cschroeter/ng2-pickadate/commit/fe6ab5b))



<a name="0.3.25"></a>
## [0.3.25](https://github.com/cschroeter/ng2-pickadate/compare/0.3.24...0.3.25) (2016-10-21)


### Bug Fixes

* change dependency-versions to remove some dependency-warnings ([fd9fa56](https://github.com/cschroeter/ng2-pickadate/commit/fd9fa56))



<a name="0.3.24"></a>
## [0.3.24](https://github.com/cschroeter/ng2-pickadate/compare/0.3.23...0.3.24) (2016-10-20)


### Bug Fixes

* ensure that empty disabled-dates aren't set to the datepicker ([9b3118e](https://github.com/cschroeter/ng2-pickadate/commit/9b3118e))
* ensure that the generated module is exported for module import ([3f9d494](https://github.com/cschroeter/ng2-pickadate/commit/3f9d494))


### Features

* add design-property to allow material design on component ([68741a8](https://github.com/cschroeter/ng2-pickadate/commit/68741a8))
* support language-key as input parameter, to set the language of the datepicker ([6c50972](https://github.com/cschroeter/ng2-pickadate/commit/6c50972))


### BREAKING CHANGES

* directive replaced by component



<a name="0.3.23"></a>
## [0.3.23](https://github.com/cschroeter/ng2-pickadate/compare/0.3.22...0.3.23) (2016-10-12)



<a name="0.3.22"></a>
## [0.3.22](https://github.com/cschroeter/ng2-pickadate/compare/0.3.20...0.3.22) (2016-10-12)


### Bug Fixes

*  recognize changes by setting disabled-dates and the initial value ([28b1e70](https://github.com/cschroeter/ng2-pickadate/commit/28b1e70))


### Features

* add readonly feature to disable date selection and modification ([04f2db7](https://github.com/cschroeter/ng2-pickadate/commit/04f2db7))



<a name="0.3.20"></a>
## [0.3.20](https://github.com/cschroeter/ng2-pickadate/compare/0.3.19...0.3.20) (2016-10-12)


### Bug Fixes

* add click-listener, that click event is catched for encapsulated input-components ([30c5412](https://github.com/cschroeter/ng2-pickadate/commit/30c5412))
* bind datepicker attributes to angular model for detecting changes ([b7b5ce9](https://github.com/cschroeter/ng2-pickadate/commit/b7b5ce9))
* change build-script , to maintain the shared-folder including pickadate-files as well ([f980dc3](https://github.com/cschroeter/ng2-pickadate/commit/f980dc3)), closes [#6](https://github.com/cschroeter/ng2-pickadate/issues/6)
* change require-path for jquery, that it could be find in node_modules directory ([c5333b0](https://github.com/cschroeter/ng2-pickadate/commit/c5333b0))
* trigger change detectiton after changing value, to set it instantly to angular's form control ([9708924](https://github.com/cschroeter/ng2-pickadate/commit/9708924))



<a name="0.3.19"></a>
## [0.3.19](https://github.com/cschroeter/ng2-pickadate/compare/0.3.18...0.3.19) (2016-10-12)


### Bug Fixes

* recognize input changes from datepicker and synchronize it with the ng-form ([1c1c00b](https://github.com/cschroeter/ng2-pickadate/commit/1c1c00b))


### Chores

* rename directive-selector to conventional standard ([806088b](https://github.com/cschroeter/ng2-pickadate/commit/806088b))


### BREAKING CHANGES

* rename directive-selector from ng2-pickadate to angular conventional ng2Pickadate



<a name="0.3.18"></a>
## [0.3.18](https://github.com/cschroeter/ng2-pickadate/compare/0.3.17...0.3.18) (2016-10-12)


### Bug Fixes

* use ng2-pickadate as a directive instead of a component, that the datepicker may be used on different components ([7b7ea9a](https://github.com/cschroeter/ng2-pickadate/commit/7b7ea9a))
* workaround to use datepicker until the webpack-configuration could be modified ([aadc10f](https://github.com/cschroeter/ng2-pickadate/commit/aadc10f))


### Features

* implement disable-date, placeholder properties and formControl ([18c8fe6](https://github.com/cschroeter/ng2-pickadate/commit/18c8fe6))



<a name="0.3.17"></a>
## [0.3.17](https://github.com/cschroeter/ng2-pickadate/compare/0.3.1...0.3.17) (2016-09-08)



<a name="0.3.1"></a>
## [0.3.1](https://github.com/cschroeter/ng2-pickadate/compare/0.3.0...0.3.1) (2016-08-27)



<a name="0.3.0"></a>
# [0.3.0](https://github.com/cschroeter/ng2-pickadate/compare/0.2.2...0.3.0) (2016-08-05)


### Features

* Reimplement Ng2Pickadate ([b9b6581](https://github.com/cschroeter/ng2-pickadate/commit/b9b6581))


### BREAKING CHANGES

* Rename NgPickdate to Ng2Pickadate for obvious reasons.
* Rename parameters minDate and maxDate to min and max to be consistent with the pickadate.js API.
* Drop support for locale, disabled and disabledDates for the moment.
* Change module format to CommonJs.



<a name="0.2.2"></a>
## [0.2.2](https://github.com/cschroeter/ng2-pickadate/compare/4b12165...0.2.2) (2016-08-03)


### Bug Fixes

* remove angular2-material as a dependency ([4b12165](https://github.com/cschroeter/ng2-pickadate/commit/4b12165)), closes [#1](https://github.com/cschroeter/ng2-pickadate/issues/1)


### Features

* **changelog:** add conventional-changelog ([d489134](https://github.com/cschroeter/ng2-pickadate/commit/d489134))




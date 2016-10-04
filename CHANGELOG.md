<a name="0.3.20"></a>
## [0.3.20](https://github.com/cschroeter/ng2-pickadate/compare/0.3.19...v0.3.20) (2016-10-04)


### Bug Fixes

* add click-listener, that click event is catched for encapsulated input-components ([9b2123a](https://github.com/cschroeter/ng2-pickadate/commit/9b2123a))
* bind datepicker attributes to angular model for detecting changes ([28abbd5](https://github.com/cschroeter/ng2-pickadate/commit/28abbd5))
* change build-script , to maintain the shared-folder including pickadate-files as well ([a933f46](https://github.com/cschroeter/ng2-pickadate/commit/a933f46)), closes [#6](https://github.com/cschroeter/ng2-pickadate/issues/6)
* change require-path for jquery, that it could be find in node_modules directory ([1250aa8](https://github.com/cschroeter/ng2-pickadate/commit/1250aa8))
* trigger change detectiton after changing value, to set it instantly to angular's form control ([f4da96d](https://github.com/cschroeter/ng2-pickadate/commit/f4da96d))



<a name="0.3.19"></a>
## [0.3.19](https://github.com/cschroeter/ng2-pickadate/compare/0.3.18...0.3.19) (2016-09-26)


### Bug Fixes

* recognize input changes from datepicker and synchronize it with the ng-form ([55c0628](https://github.com/cschroeter/ng2-pickadate/commit/55c0628))


### Chores

* rename directive-selector to conventional standard ([339ba4e](https://github.com/cschroeter/ng2-pickadate/commit/339ba4e))


### BREAKING CHANGES

* rename directive-selector from ng2-pickadate to angular conventional ng2Pickadate



<a name="0.3.18"></a>
## [0.3.18](https://github.com/cschroeter/ng2-pickadate/compare/0.3.1...0.3.18) (2016-09-22)


### Bug Fixes

* use ng2-pickadate as a directive instead of a component, that the datepicker may be used on different components ([b792a1e](https://github.com/cschroeter/ng2-pickadate/commit/b792a1e))
* workaround to use datepicker until the webpack-configuration could be modified ([e60f98b](https://github.com/cschroeter/ng2-pickadate/commit/e60f98b))


### Features

* implement disable-date, placeholder properties and formControl ([18c8fe6](https://github.com/cschroeter/ng2-pickadate/commit/18c8fe6))



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




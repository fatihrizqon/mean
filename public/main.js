(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin-companies/admin-companies.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin-companies/admin-companies.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"mat-toolbar\" *ngIf=\"authService.loggedIn()\">\n    <button mat-icon-button (click)=\"sideNav.toggle()\">\n        <mat-icon>menu</mat-icon>\n    </button>\n    <h1 class=\"admin-app-name\">IPT-JPTEI UNY</h1>\n    <span class=\"nav-spacer\"></span>\n    <button mat-icon-button fxShow=\"false\" fxShow.gt-sm [matMenuTriggerFor]=\"menu\"  *ngIf=\"authService.loggedIn()\">\n        <mat-icon class=\"avatar\">person</mat-icon>\n    </button>\n</mat-toolbar>\n      \n<mat-menu #menu=\"matMenu\" style=\"width:100px;\" >\n    <button class=\"mat-menu-button\" mat-menu-item routerLink=\"/dashboard\"  *ngIf=\"authService.loggedIn()\">\n        <span>Home</span>\n    </button>\n    <button class=\"mat-menu-button\"  mat-menu-item routerLink=\"/profile\"  *ngIf=\"authService.loggedIn()\">\n        <span>Profile</span>\n    </button>\n    <button class=\"mat-menu-button\"  mat-menu-item routerLink=\"/data-tracer\" *ngIf=\"authService.loggedIn()\"> \n        <span>Data Tracer</span>\n    </button>\n    <button class=\"mat-menu-button\"  mat-menu-item (click)=\"logoutUser()\"  *ngIf=\"authService.loggedIn()\">\n        <span>Log Out</span>\n    </button>\n</mat-menu>\n      \n<mat-sidenav-container autosize>\n        <mat-sidenav #sideNav mode=\"side\" opened>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin\"><mat-icon>dashboard</mat-icon> Dashboard</a>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/users\"><mat-icon>person</mat-icon> Users</a>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/companies\"><mat-icon>business</mat-icon> Companies</a>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/report\"><mat-icon>warning</mat-icon> Report</a>\n            <mat-divider></mat-divider>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/questioner\"><mat-icon>message</mat-icon> Questioner</a>\n        </mat-sidenav>\n        <mat-sidenav-content> \n        <div class=\"mdl-grid\">\n        <div class=\"mdl-cell mdl-cell--12-col white-background\">\n          <div class=\"company-container table-shadow\">\n            <div class=\"company-header\">\n                \n                <div class=\"\">\n                    <mat-form-field>\n                      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                    </mat-form-field>\n                </div> \n               \n                <div class=\"\" align=\"left\">\n                    <a mat-icon-button class=\"add-btn\" matTooltip=\"Create a New Company\"  routerLink=\"/admin/companies/create\">\n                      <mat-icon>add</mat-icon>\n                    </a>\n                </div>\n            </div>\n\n            <div class=\"table-responsive\">\n            <mat-table #table [dataSource]=\"dataSource\" matSort>\n              <!-- Perusahaan Column -->\n              <ng-container matColumnDef=\"perusahaan\">\n                <mat-header-cell *matHeaderCellDef> Perusahaan </mat-header-cell>\n                <mat-cell *matCellDef=\"let companies\"><a matTooltip=\"Click to View Company Details\"  routerLink=\"/companies/{{companies._id}}\">{{companies.perusahaan}}</a></mat-cell>\n              </ng-container>\n              <!-- Alamat Column -->\n              <ng-container matColumnDef=\"alamat\">\n                <mat-header-cell *matHeaderCellDef> Alamat </mat-header-cell>\n                <mat-cell *matCellDef=\"let companies\"> {{companies.alamat}} </mat-cell>\n              </ng-container>\n              <!-- Email Column -->\n              <ng-container matColumnDef=\"email\">\n                <mat-header-cell *matHeaderCellDef> Email </mat-header-cell>\n                <mat-cell *matCellDef=\"let companies\"> {{companies.email_perusahaan}} </mat-cell>\n              </ng-container>\n              <!-- Telepon Column -->\n              <ng-container matColumnDef=\"telepon\">\n                <mat-header-cell *matHeaderCellDef> Telepon </mat-header-cell>\n                <mat-cell *matCellDef=\"let companies\"> {{companies.telepon}} </mat-cell>\n              </ng-container>\n              <!-- Website Column -->\n              <ng-container matColumnDef=\"website\">\n                <mat-header-cell *matHeaderCellDef> Website </mat-header-cell>\n                <mat-cell *matCellDef=\"let companies\"> <a target=\"_blank\" href=\"http://{{companies.website}}\">{{companies.website}}</a> </mat-cell>\n              </ng-container>\n              <!-- Students Column -->\n              <ng-container matColumnDef=\"students\">\n                <mat-header-cell *matHeaderCellDef> Mahasiswa </mat-header-cell>\n                <mat-cell *matCellDef=\"let companies\"> {{companies.students.length}} </mat-cell>\n              </ng-container>\n              <!-- Kategori Column -->\n              <ng-container matColumnDef=\"kategori\">\n                <mat-header-cell *matHeaderCellDef> Kategori </mat-header-cell>\n                <mat-cell *matCellDef=\"let companies\"> {{companies.kategori}} </mat-cell>\n              </ng-container>\n              <!-- Author Column -->\n              <ng-container matColumnDef=\"author\">\n                <mat-header-cell *matHeaderCellDef> Author </mat-header-cell>\n                <mat-cell *matCellDef=\"let companies\"><mat-chip-list> <mat-chip matTooltip=\"Click to See User Profile\"  class=\"user-chip\">{{companies.author}}</mat-chip> </mat-chip-list></mat-cell>\n              </ng-container>\n              <!-- Last Update Column -->\n              <ng-container matColumnDef=\"update_by\">\n                <mat-header-cell *matHeaderCellDef> Updated By </mat-header-cell>\n                <mat-cell *matCellDef=\"let companies\"><mat-chip-list> <mat-chip matTooltip=\"Click to See User Profile\"  class=\"user-chip\">{{companies.update_by}}</mat-chip> </mat-chip-list></mat-cell>\n              </ng-container>\n              <!-- Option Column -->\n              <ng-container matColumnDef=\"option\">\n                  <mat-header-cell *matHeaderCellDef> Option </mat-header-cell>\n                  <mat-cell *matCellDef=\"let companies\">\n                    <button mat-icon-button class=\"edit-btn\" matTooltip=\"Update Company Data\" (click)=\"updateCompany(companies)\" *ngIf=\"authService.adminMenu()\">\n                        <mat-icon>edit</mat-icon>\n                    </button>\n                    <button mat-icon-button class=\"delete-btn\" matTooltip=\"Delete Selected Company\"  (click)=\"deleteCompany(companies)\" *ngIf=\"authService.adminMenu()\">\n                        <mat-icon>delete</mat-icon>\n                    </button>\n                  </mat-cell>\n              </ng-container>\n\n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n              <mat-row *matRowDef=\"let companies; columns: displayedColumns;\"></mat-row>\n            </mat-table>\n          </div>\n          </div>\n        </div>\n        </div>\n        </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/admin/admin-companies/admin-companies.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-companies/admin-companies.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminCompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCompaniesComponent", function() { return AdminCompaniesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/company.service */ "./src/services/company.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminCompaniesComponent = /** @class */ (function () {
    function AdminCompaniesComponent(router, authService, companyService) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.companyService = companyService;
        this.displayedColumns = ['perusahaan', 'alamat', 'telepon', 'email', 'website', 'students', 'kategori', 'author', 'update_by', 'option'];
        var user = localStorage.getItem('user');
        var token = localStorage.getItem('id_token');
        var level = Number(localStorage.getItem('level'));
        if (this.authService.loggedIn(user, token, level)) {
            if (level == 0 || level == 1) {
                this.router.navigate(['/dashboard']);
                console.log('Unauthorized.');
            }
            else {
                console.log('Admin Mode.');
            }
        }
        else {
            this.router.navigate(['/dashboard']);
            console.log('Unauthorized.');
        }
        this.companyService.getCompanies().subscribe(function (companies) {
            _this.companies = companies;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](companies);
        }, function (err) {
            console.log(err);
            return false;
        });
    }
    AdminCompaniesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    };
    AdminCompaniesComponent.prototype.ngOnInit = function () {
    };
    AdminCompaniesComponent.prototype.getCompany = function (data) {
        var _this = this;
        this.companyService.getCompany(data._id).subscribe(function (company) {
            _this.router.navigate(['companies/' + data._id]);
        }, function (err) {
            console.log(err);
        });
    };
    AdminCompaniesComponent.prototype.updateCompany = function (companies) {
        this.companyService.setter(companies);
        this.router.navigate(['/admin/companies/update/' + companies._id]);
    };
    AdminCompaniesComponent.prototype.deleteCompany = function (company) {
        var _id = company._id;
        this.companyService.deleteCompany(_id).subscribe(function (_id) {
            console.log("Delete Success.");
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], AdminCompaniesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], AdminCompaniesComponent.prototype, "sort", void 0);
    AdminCompaniesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-companies',
            template: __webpack_require__(/*! ./admin-companies.component.html */ "./src/app/admin/admin-companies/admin-companies.component.html"),
            styles: [__webpack_require__(/*! ../admin/admin.component.css */ "./src/app/admin/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]])
    ], AdminCompaniesComponent);
    return AdminCompaniesComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-companies/admin-create-company/admin-create-company.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/admin/admin-companies/admin-create-company/admin-create-company.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"mat-toolbar\" *ngIf=\"authService.loggedIn()\">\n    <button mat-icon-button (click)=\"sideNav.toggle()\">\n        <mat-icon>menu</mat-icon>\n    </button>\n    <h1 class=\"admin-app-name\">IPT-JPTEI UNY</h1>\n    <span class=\"nav-spacer\"></span>\n    <button mat-icon-button fxShow=\"false\" fxShow.gt-sm [matMenuTriggerFor]=\"menu\"  *ngIf=\"authService.loggedIn()\">\n        <mat-icon class=\"avatar\">more_vert</mat-icon>\n    </button>\n</mat-toolbar>\n      \n<mat-menu #menu=\"matMenu\" style=\"width:100px;\" >\n    <button class=\"mat-menu-button\" mat-menu-item routerLink=\"/dashboard\"  *ngIf=\"authService.loggedIn()\">\n        <span>Home</span>\n    </button>\n    <button class=\"mat-menu-button\"  mat-menu-item routerLink=\"/profile\"  *ngIf=\"authService.loggedIn()\">\n        <span>Profile</span>\n    </button>\n    <button class=\"mat-menu-button\"  mat-menu-item routerLink=\"/data-tracer\" *ngIf=\"authService.loggedIn()\"> \n        <span>Data Tracer</span>\n    </button>\n    <button class=\"mat-menu-button\"  mat-menu-item (click)=\"logoutUser()\"  *ngIf=\"authService.loggedIn()\">\n        <span>Log Out</span>\n    </button>\n</mat-menu>\n      \n<mat-sidenav-container autosize>\n        <mat-sidenav #sideNav mode=\"side\" opened>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin\"><mat-icon>dashboard</mat-icon> Dashboard</a>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/users\"><mat-icon>person</mat-icon> Users</a>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/companies\"><mat-icon>business</mat-icon> Companies</a>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/report\"><mat-icon>warning</mat-icon> Report</a>\n            <mat-divider></mat-divider>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/questioner\"><mat-icon>message</mat-icon> Questioner</a>\n        </mat-sidenav>\n        <mat-sidenav-content>\n        <div class=\"mdl-grid\">\n          <div class=\"mdl-layout-spacer\"></div>\n          <div class=\"mdl-cell mdl-cell--12-col white-background\">\n          <mat-card>\n            <mat-card-content>\n            <div class=\"warning-card\">\n              <mat-card-content>\n                <flash-message>\n                </flash-message>\n              </mat-card-content>\n            </div>\n            <form>\n              <mat-form-field>\n                <input name=\"nama\" [(ngModel)]=\"nama\" matInput #input type=\"text\" placeholder=\"Nama Perusahaan\" required>\n                <mat-icon matSuffix>business</mat-icon>\n              </mat-form-field>\n              <mat-form-field>\n                <input name=\"alamat\" [(ngModel)]=\"alamat\" matInput #input type=\"text\" placeholder=\"Alamat Perusahaan\" required>\n                <mat-icon matSuffix>location_on</mat-icon>\n              </mat-form-field>\n              <mat-form-field>\n                  <input name=\"email_perusahaan\" [(ngModel)]=\"email_perusahaan\" matInput #input type=\"email_perusahaan\" placeholder=\"Email Perusahaan\" required>\n                  <mat-icon matSuffix>email</mat-icon>\n              </mat-form-field>\n              <mat-form-field>\n                  <input name=\"telepon\" [(ngModel)]=\"telepon\" matInput #input type=\"telepon\" placeholder=\"Telepon Perusahaan\" required>\n                  <mat-icon matSuffix>phone</mat-icon>\n              </mat-form-field>\n              <mat-form-field>\n                  <input name=\"website\" [(ngModel)]=\"website\" matInput #input type=\"website\" placeholder=\"Website Perusahaan\" required>\n                  <mat-icon matSuffix>language</mat-icon>\n              </mat-form-field>\n              <mat-form-field>\n                  <textarea name=\"deskripsi\" [(ngModel)]=\"deskripsi\" matInput #input type=\"deskripsi\" placeholder=\"Deskripsi Perusahaan\" required></textarea>\n                  <mat-icon matSuffix>textsms</mat-icon>\n              </mat-form-field>\n              <mat-form-field>\n                <mat-select name=\"kategori\" [(ngModel)]=\"kategori\" #kategoriValue   placeholder=\"Bidang\">\n                  <mat-option value=\"Sistem Informasi\">Sistem Informasi</mat-option>\n                  <mat-option value=\"Multimedia\">Multimedia</mat-option>\n                  <mat-option value=\"Jaringan Komputer\">Jaringan Komputer</mat-option>\n                </mat-select>\n              </mat-form-field>\n              <div align=\"right\">\n                  <a mat-raised-button class=\"add-btn\" (click)=\"addCompany($event)\" mat-raised-button>Tambah</a>\n              </div>\n            </form>\n            </mat-card-content>\n          </mat-card>\n          </div>\n          <div class=\"mdl-layout-spacer\"></div>\n        </div>\n        </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/admin/admin-companies/admin-create-company/admin-create-company.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/admin/admin-companies/admin-create-company/admin-create-company.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AdminCreateCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCreateCompanyComponent", function() { return AdminCreateCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/company.service */ "./src/services/company.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/validate.service */ "./src/services/validate.service.ts");
/* harmony import */ var angular_flash_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-flash-message */ "./node_modules/angular-flash-message/dist/index.js");
/* harmony import */ var angular_flash_message__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular_flash_message__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminCreateCompanyComponent = /** @class */ (function () {
    function AdminCreateCompanyComponent(router, authService, flashMessage, companyService, validateService) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.companyService = companyService;
        this.validateService = validateService;
        var user = localStorage.getItem('user');
        var token = localStorage.getItem('id_token');
        var level = Number(localStorage.getItem('level'));
        if (this.authService.loggedIn(user, token, level)) {
            if (level != 2) {
                this.router.navigate(['/dashboard']);
                console.log('Unauthorized.');
            }
            else {
                console.log('Admin Mode.');
            }
        }
        else {
            this.router.navigate(['/dashboard']);
            console.log('Unauthorized.');
        }
    }
    AdminCreateCompanyComponent.prototype.ngOnInit = function () {
    };
    AdminCreateCompanyComponent.prototype.addCompany = function (event) {
        var _this = this;
        user = localStorage.getItem('user');
        var user = JSON.parse(user);
        var nim = user["nim"];
        var company = {
            perusahaan: this.nama,
            alamat: this.alamat,
            deskripsi: this.deskripsi,
            email_perusahaan: this.email_perusahaan,
            website: this.website,
            telepon: this.telepon,
            kategori: this.kategori,
            author: nim,
            update_by: ''
        };
        if (!this.validateService.validateAddCompany(company)) {
            this.flashMessage.warning('WARNING : Please fill in all fields.', { delay: 5000 });
            return false;
        }
        if (!this.validateService.validateEmail(company.email_perusahaan)) {
            this.flashMessage.warning('WARNING : Please fill validate email.', { delay: 5000 });
            return false;
        }
        this.companyService.addCompany(company).subscribe(function (company) {
            _this.company = company;
        });
        this.router.navigate(['/admin/companies']);
    };
    AdminCreateCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-create-company',
            template: __webpack_require__(/*! ./admin-create-company.component.html */ "./src/app/admin/admin-companies/admin-create-company/admin-create-company.component.html"),
            styles: [__webpack_require__(/*! ../../admin/admin.component.css */ "./src/app/admin/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular_flash_message__WEBPACK_IMPORTED_MODULE_5__["FlashMessage"],
            _services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"]])
    ], AdminCreateCompanyComponent);
    return AdminCreateCompanyComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-companies/admin-update-company/admin-update-company.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/admin/admin-companies/admin-update-company/admin-update-company.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"mat-toolbar\" *ngIf=\"authService.loggedIn()\">\n    <button mat-icon-button (click)=\"sideNav.toggle()\">\n        <mat-icon>menu</mat-icon>\n    </button>\n    <h1 class=\"admin-app-name\">IPT-JPTEI UNY</h1>\n    <span class=\"nav-spacer\"></span>\n    <button mat-icon-button fxShow=\"false\" fxShow.gt-sm [matMenuTriggerFor]=\"menu\"  *ngIf=\"authService.loggedIn()\">\n        <mat-icon class=\"avatar\">more_vert</mat-icon>\n    </button>\n</mat-toolbar>\n      \n<mat-menu #menu=\"matMenu\" style=\"width:100px;\" >\n    <button class=\"mat-menu-button\" mat-menu-item routerLink=\"/dashboard\"  *ngIf=\"authService.loggedIn()\">\n        <span>Home</span>\n    </button>\n    <button class=\"mat-menu-button\"  mat-menu-item routerLink=\"/profile\"  *ngIf=\"authService.loggedIn()\">\n        <span>Profile</span>\n    </button>\n    <button class=\"mat-menu-button\"  mat-menu-item routerLink=\"/data-tracer\" *ngIf=\"authService.loggedIn()\"> \n        <span>Data Tracer</span>\n    </button>\n    <button class=\"mat-menu-button\"  mat-menu-item (click)=\"logoutUser()\"  *ngIf=\"authService.loggedIn()\">\n        <span>Log Out</span>\n    </button>\n</mat-menu>\n      \n<mat-sidenav-container autosize>\n        <mat-sidenav #sideNav mode=\"side\" opened>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin\"><mat-icon>dashboard</mat-icon> Dashboard</a>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/users\"><mat-icon>person</mat-icon> Users</a>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/companies\"><mat-icon>business</mat-icon> Companies</a>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/report\"><mat-icon>warning</mat-icon> Report</a>\n            <mat-divider></mat-divider>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/questioner\"><mat-icon>message</mat-icon> Questioner</a>\n        </mat-sidenav>\n        <mat-sidenav-content>\n        <div class=\"mdl-grid\">\n            <div class=\"mdl-layout-spacer\"></div>\n            <div class=\"mdl-cell mdl-cell--12-col white-background\">\n            <mat-card>\n              <mat-card-content>\n              <div class=\"warning-card\">\n                <mat-card-content>\n                  <flash-message>\n                  </flash-message>\n                </mat-card-content>\n              </div>\n              <form *ngIf=\"company\">\n                <mat-form-field>\n                  <input name=\"nama\" [(ngModel)]=\"company.perusahaan\" matInput #input type=\"text\" placeholder=\"Nama Perusahaan\" required>\n                  <mat-icon matSuffix>business</mat-icon>\n                </mat-form-field>\n                <mat-form-field>\n                  <input name=\"alamat\" [(ngModel)]=\"company.alamat\" matInput #input type=\"text\" placeholder=\"Alamat Perusahaan\" required>\n                  <mat-icon matSuffix>location_on</mat-icon>\n                </mat-form-field>\n                <mat-form-field>\n                    <input name=\"email_perusahaan\" [(ngModel)]=\"company.email_perusahaan\" matInput #input type=\"email_perusahaan\" placeholder=\"Email Perusahaan\" required>\n                    <mat-icon matSuffix>email</mat-icon>\n                </mat-form-field>\n                <mat-form-field>\n                    <input name=\"telepon\" [(ngModel)]=\"company.telepon\" matInput #input type=\"telepon\" placeholder=\"Telepon Perusahaan\" required>\n                    <mat-icon matSuffix>phone</mat-icon>\n                </mat-form-field>\n                <mat-form-field>\n                    <input name=\"website\" [(ngModel)]=\"company.website\" matInput #input type=\"website\" placeholder=\"Website Perusahaan\" required>\n                    <mat-icon matSuffix>language</mat-icon>\n                </mat-form-field>\n                <mat-form-field>\n                    <textarea name=\"deskripsi\" [(ngModel)]=\"company.deskripsi\" matInput #input type=\"deskripsi\" placeholder=\"Deskripsi Perusahaan\" required></textarea>\n                    <mat-icon matSuffix>textsms</mat-icon>\n                </mat-form-field>\n                <mat-form-field>\n                  <mat-select name=\"kategori\" [(ngModel)]=\"company.kategori\" #kategoriValue placeholder=\"Bidang\">\n                    <mat-option value=\"Sistem Informasi\">Sistem Informasi</mat-option>\n                    <mat-option value=\"Multimedia\">Multimedia</mat-option>\n                    <mat-option value=\"Jaringan Komputer\">Jaringan Komputer</mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <div align=\"right\">\n                    <a mat-raised-button class=\"save-btn\" (click)=\"updateCompany(company)\" mat-raised-button>Simpan</a>\n                </div>\n              </form>\n              </mat-card-content>\n            </mat-card>\n            </div>\n            <div class=\"mdl-layout-spacer\"></div>\n        </div>\n        </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/admin/admin-companies/admin-update-company/admin-update-company.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/admin/admin-companies/admin-update-company/admin-update-company.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AdminUpdateCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUpdateCompanyComponent", function() { return AdminUpdateCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/company.service */ "./src/services/company.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/validate.service */ "./src/services/validate.service.ts");
/* harmony import */ var angular_flash_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-flash-message */ "./node_modules/angular-flash-message/dist/index.js");
/* harmony import */ var angular_flash_message__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular_flash_message__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminUpdateCompanyComponent = /** @class */ (function () {
    function AdminUpdateCompanyComponent(router, route, authService, flashMessage, companyService, validateService) {
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.companyService = companyService;
        this.validateService = validateService;
        var user = localStorage.getItem('user');
        var token = localStorage.getItem('id_token');
        var level = Number(localStorage.getItem('level'));
        if (this.authService.loggedIn(user, token, level)) {
            if (level != 2) {
                this.router.navigate(['/dashboard']);
                console.log('Unauthorized.');
            }
            else {
                console.log('Admin Mode.');
            }
        }
        else {
            this.router.navigate(['/dashboard']);
            console.log('Unauthorized.');
        }
    }
    AdminUpdateCompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._id = this.route.snapshot.paramMap.get('id');
        this.companyService.getCompany(this._id).subscribe(function (company) {
            _this.company = company;
        });
    };
    AdminUpdateCompanyComponent.prototype.updateCompany = function (company) {
        var _this = this;
        var user = localStorage.getItem('user');
        user = JSON.parse(user);
        var nim = user["nim"];
        var updateCompany = {
            _id: company._id,
            perusahaan: company.perusahaan,
            alamat: company.alamat,
            deskripsi: company.deskripsi,
            email_perusahaan: company.email_perusahaan,
            website: company.website,
            telepon: company.telepon,
            kategori: company.kategori,
            update_by: nim
        };
        this.companyService.updateCompany(updateCompany).subscribe(function (company) {
            _this.company = updateCompany;
        });
        console.log("Update Success.");
        this.router.navigate(['/admin/companies']);
    };
    AdminUpdateCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-update-company',
            template: __webpack_require__(/*! ./admin-update-company.component.html */ "./src/app/admin/admin-companies/admin-update-company/admin-update-company.component.html"),
            styles: [__webpack_require__(/*! ../../admin/admin.component.css */ "./src/app/admin/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular_flash_message__WEBPACK_IMPORTED_MODULE_5__["FlashMessage"],
            _services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"]])
    ], AdminUpdateCompanyComponent);
    return AdminUpdateCompanyComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-index/admin-index.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-index/admin-index.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"mat-toolbar\" *ngIf=\"authService.loggedIn()\">\n    <button mat-icon-button (click)=\"sideNav.toggle()\">\n        <mat-icon>menu</mat-icon>\n    </button>\n    <h1 class=\"admin-app-name\">IPT-JPTEI UNY</h1>\n    <span class=\"nav-spacer\"></span>\n    <button mat-icon-button fxShow=\"false\" fxShow.gt-sm [matMenuTriggerFor]=\"menu\"  *ngIf=\"authService.loggedIn()\">\n        <mat-icon class=\"avatar\">more_vert</mat-icon>\n    </button>\n</mat-toolbar>\n      \n<mat-menu #menu=\"matMenu\" style=\"width:100px;\" >\n    <button class=\"mat-menu-button\" mat-menu-item routerLink=\"/dashboard\"  *ngIf=\"authService.loggedIn()\">\n        <span>Home</span>\n    </button>\n    <button class=\"mat-menu-button\"  mat-menu-item routerLink=\"/profile\"  *ngIf=\"authService.loggedIn()\">\n        <span>Profile</span>\n    </button>\n    <button class=\"mat-menu-button\"  mat-menu-item routerLink=\"/data-tracer\" *ngIf=\"authService.loggedIn()\"> \n        <span>Data Tracer</span>\n    </button>\n    <button class=\"mat-menu-button\"  mat-menu-item (click)=\"logoutUser()\"  *ngIf=\"authService.loggedIn()\">\n        <span>Log Out</span>\n    </button>\n</mat-menu>\n      \n<mat-sidenav-container autosize>\n        <mat-sidenav #sideNav mode=\"side\" opened>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin\"><mat-icon>dashboard</mat-icon> Dashboard</a>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/users\"><mat-icon>person</mat-icon> Users</a>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/companies\"><mat-icon>business</mat-icon> Companies</a>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/report\"><mat-icon>warning</mat-icon> Report</a>\n            <mat-divider></mat-divider>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/questioner\"><mat-icon>message</mat-icon> Questioner</a>\n\n        </mat-sidenav>\n        <mat-sidenav-content>\n        <div class=\"mdl-grid\">\n            <div class=\"mdl-cell mdl-cell--4-col\">\n                <mat-card>Simple card</mat-card>\n            </div>\n            <div class=\"mdl-cell mdl-cell--4-col\">\n                <mat-card>Simple card</mat-card>\n            </div>\n            <div class=\"mdl-cell mdl-cell--4-col\">\n                <mat-card>Simple card</mat-card>\n            </div>\n            <div class=\"mdl-cell mdl-cell--6-col\">\n                <mat-card>Simple card</mat-card>\n            </div>\n            <div class=\"mdl-cell mdl-cell--6-col\">\n                <mat-card>Simple card</mat-card>\n            </div>\n            <div class=\"mdl-cell mdl-cell--12-col\">\n                <mat-card>Simple card</mat-card>\n            </div>\n        </div>\n        </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/admin/admin-index/admin-index.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-index/admin-index.component.ts ***!
  \************************************************************/
/*! exports provided: AdminIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminIndexComponent", function() { return AdminIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminIndexComponent = /** @class */ (function () {
    function AdminIndexComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        var user = localStorage.getItem('user');
        var token = localStorage.getItem('id_token');
        var level = Number(localStorage.getItem('level'));
        if (this.authService.loggedIn(user, token, level)) {
            if (level != 2) {
                this.router.navigate(['/dashboard']);
                console.log('Unauthorized.');
            }
            else {
                console.log('Admin Mode.');
            }
        }
        else {
            this.router.navigate(['/dashboard']);
            console.log('Unauthorized.');
        }
    }
    AdminIndexComponent.prototype.ngOnInit = function () {
    };
    AdminIndexComponent.prototype.logoutUser = function () {
        this.authService.logoutUser();
        this.router.navigate(['/']);
    };
    AdminIndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-index',
            template: __webpack_require__(/*! ./admin-index.component.html */ "./src/app/admin/admin-index/admin-index.component.html"),
            styles: [__webpack_require__(/*! ../admin/admin.component.css */ "./src/app/admin/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AdminIndexComponent);
    return AdminIndexComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-questioner/admin-questioner.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/admin-questioner/admin-questioner.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"mat-toolbar\" *ngIf=\"authService.loggedIn()\">\n    <button mat-icon-button (click)=\"sideNav.toggle()\">\n        <mat-icon>menu</mat-icon>\n    </button>\n    <h1 class=\"admin-app-name\">IPT-JPTEI UNY</h1>\n    <span class=\"nav-spacer\"></span>\n    <button mat-icon-button fxShow=\"false\" fxShow.gt-sm [matMenuTriggerFor]=\"menu\"  *ngIf=\"authService.loggedIn()\">\n        <mat-icon class=\"avatar\">more_vert</mat-icon>\n    </button>\n</mat-toolbar>\n      \n<mat-menu #menu=\"matMenu\" style=\"width:100px;\" >\n    <button class=\"mat-menu-button\" mat-menu-item routerLink=\"/dashboard\"  *ngIf=\"authService.loggedIn()\">\n        <span>Home</span>\n    </button>\n    <button class=\"mat-menu-button\"  mat-menu-item routerLink=\"/profile\"  *ngIf=\"authService.loggedIn()\">\n        <span>Profile</span>\n    </button>\n    <button class=\"mat-menu-button\"  mat-menu-item routerLink=\"/data-tracer\" *ngIf=\"authService.loggedIn()\"> \n        <span>Data Tracer</span>\n    </button>\n    <button class=\"mat-menu-button\"  mat-menu-item (click)=\"logoutUser()\"  *ngIf=\"authService.loggedIn()\">\n        <span>Log Out</span>\n    </button>\n</mat-menu>\n      \n<mat-sidenav-container autosize>\n        <mat-sidenav #sideNav mode=\"side\" opened>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin\"><mat-icon>dashboard</mat-icon> Dashboard</a>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/users\"><mat-icon>person</mat-icon> Users</a>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/companies\"><mat-icon>business</mat-icon> Companies</a>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/report\"><mat-icon>warning</mat-icon> Report</a>\n            <mat-divider></mat-divider>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/questioner\"><mat-icon>message</mat-icon> Questioner</a>\n        </mat-sidenav>\n        <mat-sidenav-content>\n        <mat-tab-group>\n          <mat-tab label=\"Precision\">Content 1</mat-tab>\n          <mat-tab label=\"Recall\">Content 2</mat-tab>\n        </mat-tab-group>\n        </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/admin/admin-questioner/admin-questioner.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin-questioner/admin-questioner.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminQuestionerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminQuestionerComponent", function() { return AdminQuestionerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminQuestionerComponent = /** @class */ (function () {
    function AdminQuestionerComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        var user = localStorage.getItem('user');
        var token = localStorage.getItem('id_token');
        var level = Number(localStorage.getItem('level'));
        if (this.authService.loggedIn(user, token, level)) {
            if (level != 2) {
                this.router.navigate(['/dashboard']);
                console.log('Unauthorized.');
            }
            else {
                console.log('Admin Mode.');
            }
        }
        else {
            this.router.navigate(['/dashboard']);
            console.log('Unauthorized.');
        }
    }
    AdminQuestionerComponent.prototype.ngOnInit = function () {
    };
    AdminQuestionerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-questioner',
            template: __webpack_require__(/*! ./admin-questioner.component.html */ "./src/app/admin/admin-questioner/admin-questioner.component.html"),
            styles: [__webpack_require__(/*! ../admin/admin.component.css */ "./src/app/admin/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AdminQuestionerComponent);
    return AdminQuestionerComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-report/admin-report.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/admin-report/admin-report.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".admin-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: #E0F2F1;\r\n}\r\n  \r\n.admin-is-mobile .admin-toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n}\r\n  \r\nh1.admin-app-name {\r\n margin-left: 8px;\r\n font-family: 'Quicksand';\r\n}\r\n  \r\n.admin-sidenav-container {\r\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n    flex: 1;\r\n}\r\n  \r\n.admin-is-mobile .admin-sidenav-container {\r\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\r\n    flex: 1 0 auto;\r\n}\r\n  \r\n.mat-toolbar{\r\n    background-color: #CFD8DC;\r\n    color: #263238;\r\n}\r\n  \r\nmat-sidenav{\r\n    background-color:#263238;\r\n    color: #B2DFDB;\r\n    width: 250px;\r\n}\r\n  \r\n.mat-menu-button{\r\n    width: 200px;\r\n}\r\n  \r\n.sidenav-button{\r\n    text-align:left;\r\n    width: 100%;\r\n    margin-bottom:5px;\r\n    padding: 10px;\r\n}\r\n  \r\n.sidenav-button:hover{\r\n    text-align:left;\r\n    width: 100%;\r\n    margin-bottom:5px;\r\n    padding: 10px;\r\n    color:#FFF;\r\n    background-color: #455A64;\r\n}\r\n  \r\nmat-list{\r\n    width: 100%;\r\n}\r\n  \r\nmat-sidenav-container {\r\n    position: absolute;\r\n    top: 60px;\r\n    bottom: 0px;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n  \r\nmat-expansion-panel{\r\n    box-shadow: none !important;\r\n    background-color: #263238;\r\n    color: #B2DFDB;\r\n}\r\n  \r\nmat-expansion-panel-header{\r\n    color: #B2DFDB;\r\n    background-color: #263238;\r\n}\r\n  \r\nmat-expansion-panel-header:hover{\r\n    text-align: left;\r\n    background-color: #455A64;\r\n}\r\n  \r\nmat-panel-title{\r\n    color: #B2DFDB;\r\n}\r\n  \r\n/* Admin Company */\r\n  \r\n/* Structure */\r\n  \r\n.company-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n  }\r\n  \r\n.company-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n.mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\nmat-table{\r\n    width: 100%;\r\n  }\r\n  \r\n.white-background{\r\n    background: #FFF;\r\n  }\r\n  \r\n.mdl-grid.center-items {\r\n    justify-content: center;\r\n}\r\n  \r\n.mdl-grid.center-items {\r\n  justify-content: center;\r\n}\r\n  \r\n.table-responsive {\r\n  min-height: .01%;\r\n  overflow-x: auto;\r\n}\r\n  \r\n@media screen and (max-width: 767px) {\r\n  .table-responsive {\r\n      width: 100%;\r\n      margin-bottom: 15px;\r\n      overflow-y: hidden;\r\n      -ms-overflow-style: -ms-autohiding-scrollbar;\r\n      border: 1px solid #ddd;\r\n  }\r\n  .table-responsive > .table {\r\n      margin-bottom: 0;\r\n  }\r\n  .table-responsive > .table > thead > tr > th,\r\n  .table-responsive > .table > tbody > tr > th,\r\n  .table-responsive > .table > tfoot > tr > th,\r\n  .table-responsive > .table > thead > tr > td,\r\n  .table-responsive > .table > tbody > tr > td,\r\n  .table-responsive > .table > tfoot > tr > td {\r\n      white-space: nowrap;\r\n  }\r\n  .table-responsive > .table-bordered {\r\n      border: 0;\r\n  }\r\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\r\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\r\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\r\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\r\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\r\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\r\n      border-left: 0;\r\n  }\r\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\r\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\r\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\r\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\r\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\r\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\r\n      border-right: 0;\r\n  }\r\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\r\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\r\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\r\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\r\n      border-bottom: 0;\r\n  }\r\n}\r\n  \r\n.add-btn{\r\n  color:  #00796B;\r\n}\r\n  \r\n.edit-btn{\r\n  color : #1E88E5;\r\n}\r\n  \r\n.save-btn{\r\n  background-color : #3F51B5;\r\n  color: #FFF;\r\n}\r\n  \r\n.delete-btn{\r\n  color:#EF5350;\r\n}\r\n  \r\n.table-shadow{\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n}\r\n  \r\n/*  */\r\n  \r\n.user-chip{\r\n    background-color: #00796B;\r\n    color: #B2DFDB;\r\n}"

/***/ }),

/***/ "./src/app/admin/admin-report/admin-report.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-report/admin-report.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"mat-toolbar\" *ngIf=\"authService.loggedIn()\">\n    <button mat-icon-button (click)=\"sideNav.toggle()\">\n        <mat-icon>menu</mat-icon>\n    </button>\n    <h1 class=\"admin-app-name\">IPT-JPTEI UNY</h1>\n    <span class=\"nav-spacer\"></span>\n    <button mat-icon-button fxShow=\"false\" fxShow.gt-sm [matMenuTriggerFor]=\"menu\"  *ngIf=\"authService.loggedIn()\">\n        <mat-icon class=\"avatar\">more_vert</mat-icon>\n    </button>\n</mat-toolbar>\n      \n<mat-menu #menu=\"matMenu\" style=\"width:100px;\" >\n    <button class=\"mat-menu-button\" mat-menu-item routerLink=\"/dashboard\"  *ngIf=\"authService.loggedIn()\">\n        <span>Home</span>\n    </button>\n    <button class=\"mat-menu-button\"  mat-menu-item routerLink=\"/profile\"  *ngIf=\"authService.loggedIn()\">\n        <span>Profile</span>\n    </button>\n    <button class=\"mat-menu-button\"  mat-menu-item routerLink=\"/data-tracer\" *ngIf=\"authService.loggedIn()\"> \n        <span>Data Tracer</span>\n    </button>\n    <button class=\"mat-menu-button\"  mat-menu-item (click)=\"logoutUser()\"  *ngIf=\"authService.loggedIn()\">\n        <span>Log Out</span>\n    </button>\n</mat-menu>\n      \n<mat-sidenav-container autosize>\n        <mat-sidenav #sideNav mode=\"side\" opened>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin\"><mat-icon>dashboard</mat-icon> Dashboard</a>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/users\"><mat-icon>person</mat-icon> Users</a>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/companies\"><mat-icon>business</mat-icon> Companies</a>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/report\"><mat-icon>warning</mat-icon> Report</a>\n            <mat-divider></mat-divider>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/questioner\"><mat-icon>message</mat-icon> Questioner</a>\n        </mat-sidenav>\n        <mat-sidenav-content>\n        <div class=\"mdl-grid\">\n          <div class=\"company-container table-shadow\">\n            <div class=\"company-header\">\n                <div class=\"\">\n                    <mat-form-field>\n                      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                    </mat-form-field>\n                </div> \n            </div>\n\n            <div class=\"table-responsive\">\n                <mat-table #table [dataSource]=\"dataSource\" matSort>\n                <!-- Title Column -->\n                <ng-container matColumnDef=\"title\">\n                    <mat-header-cell *matHeaderCellDef> Judul </mat-header-cell>\n                    <mat-cell *matCellDef=\"let reports\"><a matTooltip=\"Click to View Report Details\"  routerLink=\"/view-report/{{reports._id}}\">{{reports.title}}</a></mat-cell>\n                </ng-container>\n                <!-- Text Column -->\n                <ng-container matColumnDef=\"text\">\n                  <mat-header-cell *matHeaderCellDef> Deskripsi </mat-header-cell>\n                  <mat-cell *matCellDef=\"let reports\"> {{reports.text}} </mat-cell>\n                </ng-container>\n                <!-- Created At Column -->\n                <ng-container matColumnDef=\"created_at\">\n                  <mat-header-cell *matHeaderCellDef> Dibuat Pada </mat-header-cell>\n                  <mat-cell *matCellDef=\"let reports\"> {{reports.created_at}} </mat-cell>\n                </ng-container>\n                <!-- Author Column -->\n                <ng-container matColumnDef=\"author\">\n                  <mat-header-cell *matHeaderCellDef> Pelapor </mat-header-cell>\n                  <mat-cell *matCellDef=\"let reports\"> {{reports.author}} </mat-cell>\n                </ng-container>\n                <!-- Option Column -->\n                <ng-container matColumnDef=\"option\">\n                    <mat-header-cell *matHeaderCellDef> Option </mat-header-cell>\n                    <mat-cell *matCellDef=\"let reports\">\n                      <a mat-button matTooltip=\"View Company\" routerLink=\"/companies/{{reports.company}}\">View Company</a>\n                      <button mat-icon-button class=\"delete-btn\" matTooltip=\"Delete Selected Report\"  (click)=\"deleteReport(reports)\">\n                          <mat-icon>delete</mat-icon>\n                      </button>\n                    </mat-cell>\n                </ng-container>\n\n\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                <mat-row *matRowDef=\"let reports; columns: displayedColumns;\"></mat-row>\n                </mat-table>\n            </div>\n            </div>\n        </div>\n        </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/admin/admin-report/admin-report.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-report/admin-report.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminReportComponent", function() { return AdminReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _services_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/report.service */ "./src/services/report.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminReportComponent = /** @class */ (function () {
    function AdminReportComponent(router, authService, reportService) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.reportService = reportService;
        this.displayedColumns = ['title', 'text', 'created_at', 'author', 'option'];
        var user = localStorage.getItem('user');
        var token = localStorage.getItem('id_token');
        var level = Number(localStorage.getItem('level'));
        if (this.authService.loggedIn(user, token, level)) {
            if (level != 2) {
                this.router.navigate(['/dashboard']);
                console.log('Unauthorized.');
            }
            else {
                console.log('Admin Mode.');
            }
        }
        else {
            this.router.navigate(['/dashboard']);
            console.log('Unauthorized.');
        }
        this.reportService.getReports().subscribe(function (reports) {
            _this.reports = reports;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](reports);
        }, function (err) {
            console.log(err);
            return false;
        });
    }
    AdminReportComponent.prototype.ngOnInit = function () {
    };
    AdminReportComponent.prototype.viewReport = function (reports) {
        this.reportService.setter(reports);
        this.router.navigate(['/admin/view-report/' + reports._id]);
    };
    AdminReportComponent.prototype.deleteReport = function (reports) {
        var _id = reports._id;
        this.reportService.deleteReport(_id).subscribe(function (_id) {
            console.log("Delete Success.");
            window.location.reload();
        }, function (err) {
            console.log(err);
        });
    };
    AdminReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-report',
            template: __webpack_require__(/*! ./admin-report.component.html */ "./src/app/admin/admin-report/admin-report.component.html"),
            styles: [__webpack_require__(/*! ./admin-report.component.css */ "./src/app/admin/admin-report/admin-report.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"]])
    ], AdminReportComponent);
    return AdminReportComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-report/view-report/view-report.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/admin-report/view-report/view-report.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"mat-toolbar\" *ngIf=\"authService.loggedIn()\">\n    <button mat-icon-button (click)=\"sideNav.toggle()\">\n        <mat-icon>menu</mat-icon>\n    </button>\n    <h1 class=\"admin-app-name\">IPT-JPTEI UNY</h1>\n    <span class=\"nav-spacer\"></span>\n    <button mat-icon-button fxShow=\"false\" fxShow.gt-sm [matMenuTriggerFor]=\"menu\"  *ngIf=\"authService.loggedIn()\">\n        <mat-icon class=\"avatar\">more_vert</mat-icon>\n    </button>\n</mat-toolbar>\n      \n<mat-menu #menu=\"matMenu\" style=\"width:100px;\" >\n    <button class=\"mat-menu-button\" mat-menu-item routerLink=\"/dashboard\"  *ngIf=\"authService.loggedIn()\">\n        <span>Home</span>\n    </button>\n    <button class=\"mat-menu-button\"  mat-menu-item routerLink=\"/profile\"  *ngIf=\"authService.loggedIn()\">\n        <span>Profile</span>\n    </button>\n    <button class=\"mat-menu-button\"  mat-menu-item routerLink=\"/data-tracer\" *ngIf=\"authService.loggedIn()\"> \n        <span>Data Tracer</span>\n    </button>\n    <button class=\"mat-menu-button\"  mat-menu-item (click)=\"logoutUser()\"  *ngIf=\"authService.loggedIn()\">\n        <span>Log Out</span>\n    </button>\n</mat-menu>\n      \n<mat-sidenav-container autosize>\n        <mat-sidenav #sideNav mode=\"side\" opened>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin\"><mat-icon>dashboard</mat-icon> Dashboard</a>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/users\"><mat-icon>person</mat-icon> Users</a>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/companies\"><mat-icon>business</mat-icon> Companies</a>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/report\"><mat-icon>warning</mat-icon> Report</a>\n            <mat-divider></mat-divider>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/questioner\"><mat-icon>message</mat-icon> Questioner</a>\n        </mat-sidenav>\n        <mat-sidenav-content>\n        <div class=\"mdl-grid\"  *ngIf=\"report\">\n          <mat-list>\n            <h5>{{report.title}}</h5>\n            <mat-divider></mat-divider>\n            <label><b>Created by : {{report.author}} - on {{report.created_at}}</b></label>\n            <br>\n            <p>{{report.text}}</p>\n            <hr>\n            <button>Respon</button>\n          </mat-list> \n        </div>\n        </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/admin/admin-report/view-report/view-report.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/admin-report/view-report/view-report.component.ts ***!
  \*************************************************************************/
/*! exports provided: ViewReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewReportComponent", function() { return ViewReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _services_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/report.service */ "./src/services/report.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewReportComponent = /** @class */ (function () {
    function ViewReportComponent(route, router, authService, reportService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.reportService = reportService;
        this._id = this.route.snapshot.paramMap.get('id');
        this.reportService.getReport(this._id).subscribe(function (report) {
            _this.report = report;
            console.log(_this.report);
        });
        var user = localStorage.getItem('user');
        var token = localStorage.getItem('id_token');
        var level = Number(localStorage.getItem('level'));
        if (this.authService.loggedIn(user, token, level)) {
            if (level != 2) {
                this.router.navigate(['/dashboard']);
                console.log('Unauthorized.');
            }
            else {
                console.log('Admin Mode.');
            }
        }
        else {
            this.router.navigate(['/dashboard']);
            console.log('Unauthorized.');
        }
    }
    ViewReportComponent.prototype.ngOnInit = function () {
    };
    ViewReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-report',
            template: __webpack_require__(/*! ./view-report.component.html */ "./src/app/admin/admin-report/view-report/view-report.component.html"),
            styles: [__webpack_require__(/*! ../../admin/admin.component.css */ "./src/app/admin/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"]])
    ], ViewReportComponent);
    return ViewReportComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-users/admin-users.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-users/admin-users.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"mat-toolbar\" *ngIf=\"authService.loggedIn()\">\n    <button mat-icon-button (click)=\"sideNav.toggle()\">\n        <mat-icon>menu</mat-icon>\n    </button>\n    <h1 class=\"admin-app-name\">IPT-JPTEI UNY</h1>\n    <span class=\"nav-spacer\"></span>\n    <button mat-icon-button fxShow=\"false\" fxShow.gt-sm [matMenuTriggerFor]=\"menu\"  *ngIf=\"authService.loggedIn()\">\n        <mat-icon class=\"avatar\">more_vert</mat-icon>\n    </button>\n</mat-toolbar>\n      \n<mat-menu #menu=\"matMenu\" style=\"width:100px;\" >\n    <button class=\"mat-menu-button\" mat-menu-item routerLink=\"/dashboard\"  *ngIf=\"authService.loggedIn()\">\n        <span>Home</span>\n    </button>\n    <button class=\"mat-menu-button\"  mat-menu-item routerLink=\"/profile\"  *ngIf=\"authService.loggedIn()\">\n        <span>Profile</span>\n    </button>\n    <button class=\"mat-menu-button\"  mat-menu-item routerLink=\"/data-tracer\" *ngIf=\"authService.loggedIn()\"> \n        <span>Data Tracer</span>\n    </button>\n    <button class=\"mat-menu-button\"  mat-menu-item (click)=\"logoutUser()\"  *ngIf=\"authService.loggedIn()\">\n        <span>Log Out</span>\n    </button>\n</mat-menu>\n      \n<mat-sidenav-container autosize>\n        <mat-sidenav #sideNav mode=\"side\" opened>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin\"><mat-icon>dashboard</mat-icon> Dashboard</a>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/users\"><mat-icon>person</mat-icon> Users</a>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/companies\"><mat-icon>business</mat-icon> Companies</a>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/report\"><mat-icon>warning</mat-icon> Report</a>\n            <mat-divider></mat-divider>\n            <a class=\"sidenav-button\" mat-button routerLink=\"/admin/questioner\"><mat-icon>message</mat-icon> Questioner</a>\n        </mat-sidenav>\n        <mat-sidenav-content>\n        <div class=\"mdl-grid\">\n            Admin Users\n        </div>\n        </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/admin/admin-users/admin-users.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-users/admin-users.component.ts ***!
  \************************************************************/
/*! exports provided: AdminUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsersComponent", function() { return AdminUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminUsersComponent = /** @class */ (function () {
    function AdminUsersComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        var user = localStorage.getItem('user');
        var token = localStorage.getItem('id_token');
        var level = Number(localStorage.getItem('level'));
        if (this.authService.loggedIn(user, token, level)) {
            if (level != 2) {
                this.router.navigate(['/dashboard']);
                console.log('Unauthorized.');
            }
            else {
                console.log('Admin Mode.');
            }
        }
        else {
            this.router.navigate(['/dashboard']);
            console.log('Unauthorized.');
        }
    }
    AdminUsersComponent.prototype.ngOnInit = function () {
    };
    AdminUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-users',
            template: __webpack_require__(/*! ./admin-users.component.html */ "./src/app/admin/admin-users/admin-users.component.html"),
            styles: [__webpack_require__(/*! ../admin/admin.component.css */ "./src/app/admin/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AdminUsersComponent);
    return AdminUsersComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin/admin.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin/admin/admin.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".admin-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: #E0F2F1;\r\n}\r\n  \r\n.admin-is-mobile .admin-toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n}\r\n  \r\nh1.admin-app-name {\r\n margin-left: 8px;\r\n font-family: 'Quicksand';\r\n}\r\n  \r\n.admin-sidenav-container {\r\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n    flex: 1;\r\n}\r\n  \r\n.admin-is-mobile .admin-sidenav-container {\r\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\r\n    flex: 1 0 auto;\r\n}\r\n  \r\n.mat-toolbar{\r\n    background-color: #CFD8DC;\r\n    color: #263238;\r\n}\r\n  \r\nmat-sidenav{\r\n    background-color:#263238;\r\n    color: #B2DFDB;\r\n    width: 250px;\r\n}\r\n  \r\n.mat-menu-button{\r\n    width: 200px;\r\n}\r\n  \r\n.sidenav-button{\r\n    text-align:left;\r\n    width: 100%;\r\n    margin-bottom:5px;\r\n    padding: 10px;\r\n}\r\n  \r\n.sidenav-button:hover{\r\n    text-align:left;\r\n    width: 100%;\r\n    margin-bottom:5px;\r\n    padding: 10px;\r\n    color:#FFF;\r\n    background-color: #455A64;\r\n}\r\n  \r\nmat-list{\r\n    width: 100%;\r\n}\r\n  \r\nmat-sidenav-container {\r\n    position: absolute;\r\n    top: 60px;\r\n    bottom: 0px;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n  \r\nmat-expansion-panel{\r\n    box-shadow: none !important;\r\n    background-color: #263238;\r\n    color: #B2DFDB;\r\n}\r\n  \r\nmat-expansion-panel-header{\r\n    color: #B2DFDB;\r\n    background-color: #263238;\r\n}\r\n  \r\nmat-expansion-panel-header:hover{\r\n    text-align: left;\r\n    background-color: #455A64;\r\n}\r\n  \r\nmat-panel-title{\r\n    color: #B2DFDB;\r\n}\r\n  \r\n/* Admin Company */\r\n  \r\n/* Structure */\r\n  \r\n.company-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n  }\r\n  \r\n.company-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n.mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\nmat-table{\r\n    width: 100%;\r\n  }\r\n  \r\n.white-background{\r\n    background: #FFF;\r\n  }\r\n  \r\n.mdl-grid.center-items {\r\n    justify-content: center;\r\n}\r\n  \r\n.mdl-grid.center-items {\r\n  justify-content: center;\r\n}\r\n  \r\n.table-responsive {\r\n  min-height: .01%;\r\n  overflow-x: auto;\r\n}\r\n  \r\n@media screen and (max-width: 767px) {\r\n  .table-responsive {\r\n      width: 100%;\r\n      margin-bottom: 15px;\r\n      overflow-y: hidden;\r\n      -ms-overflow-style: -ms-autohiding-scrollbar;\r\n      border: 1px solid #ddd;\r\n  }\r\n  .table-responsive > .table {\r\n      margin-bottom: 0;\r\n  }\r\n  .table-responsive > .table > thead > tr > th,\r\n  .table-responsive > .table > tbody > tr > th,\r\n  .table-responsive > .table > tfoot > tr > th,\r\n  .table-responsive > .table > thead > tr > td,\r\n  .table-responsive > .table > tbody > tr > td,\r\n  .table-responsive > .table > tfoot > tr > td {\r\n      white-space: nowrap;\r\n  }\r\n  .table-responsive > .table-bordered {\r\n      border: 0;\r\n  }\r\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\r\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\r\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\r\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\r\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\r\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\r\n      border-left: 0;\r\n  }\r\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\r\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\r\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\r\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\r\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\r\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\r\n      border-right: 0;\r\n  }\r\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\r\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\r\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\r\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\r\n      border-bottom: 0;\r\n  }\r\n}\r\n  \r\n.add-btn{\r\n  color:  #00796B;\r\n}\r\n  \r\n.edit-btn{\r\n  color : #1E88E5;\r\n}\r\n  \r\n.save-btn{\r\n  background-color : #3F51B5;\r\n  color: #FFF;\r\n}\r\n  \r\n.delete-btn{\r\n  color:#EF5350;\r\n}\r\n  \r\n.mat-cell{\r\n    \r\n}\r\n  \r\nmat-cell{\r\n    text-align:justify;\r\n}\r\n  \r\nmat-cell:nth-child(1),\r\nmat-header-cell:nth-child(1) {\r\n    flex: 0 0 15%;\r\n}\r\n  \r\nmat-cell:nth-child(2),\r\nmat-header-cell:nth-child(2) {\r\n    flex: 0 0 27%;\r\n}\r\n  \r\nmat-cell:nth-child(3),\r\nmat-header-cell:nth-child(3) {\r\n    flex: 0 0 7%;\r\n}\r\n  \r\nmat-cell:nth-child(4),\r\nmat-header-cell:nth-child(4) {\r\n    flex: 0 0 8%;\r\n}\r\n  \r\nmat-cell:nth-child(5),\r\nmat-header-cell:nth-child(5) {\r\n    flex: 0 0 8%;\r\n}\r\n  \r\nmat-cell:nth-child(6),\r\nmat-header-cell:nth-child(6) {\r\n    flex: 0 0 5%;\r\n}\r\n  \r\nmat-cell:nth-child(7),\r\nmat-header-cell:nth-child(7) {\r\n    flex: 0 0 7%;\r\n}\r\n  \r\nmat-cell:nth-child(8),\r\nmat-header-cell:nth-child(8) {\r\n    flex: 0 0 7%;\r\n}\r\n  \r\nmat-cell:nth-child(9),\r\nmat-header-cell:nth-child(9) {\r\n    flex: 0 0 7%;\r\n}\r\n  \r\nmat-cell:nth-child(10),\r\nmat-header-cell:nth-child(10) {\r\n    flex: 0 0 10%;\r\n}\r\n  \r\n.table-shadow{\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n}\r\n  \r\n/*  */\r\n  \r\n.user-chip{\r\n    background-color: #00796B;\r\n    color: #B2DFDB;\r\n}"

/***/ }),

/***/ "./src/app/admin/admin/admin.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/admin/admin.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin/admin.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        var user = localStorage.getItem('user');
        var token = localStorage.getItem('id_token');
        var level = Number(localStorage.getItem('level'));
        if (this.authService.loggedIn(user, token, level)) {
            if (level > 2) {
                this.router.navigate(['/dashboard']);
                console.log('Unauthorized.');
            }
            else {
                console.log('Admin Mode.');
            }
        }
        else {
            this.router.navigate(['/dashboard']);
            console.log('Unauthorized.');
        }
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'Internship Program Tracer';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material.module */ "./src/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/validate.service */ "./src/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/company.service */ "./src/services/company.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var angular_flash_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-flash-message */ "./node_modules/angular-flash-message/dist/index.js");
/* harmony import */ var angular_flash_message__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angular_flash_message__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _templates_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./templates/header/header.component */ "./src/app/templates/header/header.component.ts");
/* harmony import */ var _templates_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./templates/footer/footer.component */ "./src/app/templates/footer/footer.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _data_tracer_data_tracer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./data-tracer/data-tracer.component */ "./src/app/data-tracer/data-tracer.component.ts");
/* harmony import */ var _snackbar_logged_in_logged_in_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./snackbar/logged-in/logged-in.component */ "./src/app/snackbar/logged-in/logged-in.component.ts");
/* harmony import */ var _company_index_company_index_company_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./company/index-company/index-company.component */ "./src/app/company/index-company/index-company.component.ts");
/* harmony import */ var _company_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./company/create-company/create-company.component */ "./src/app/company/create-company/create-company.component.ts");
/* harmony import */ var _company_view_company_view_company_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./company/view-company/view-company.component */ "./src/app/company/view-company/view-company.component.ts");
/* harmony import */ var _company_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./company/update-company/update-company.component */ "./src/app/company/update-company/update-company.component.ts");
/* harmony import */ var _admin_admin_index_admin_index_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/admin-index/admin-index.component */ "./src/app/admin/admin-index/admin-index.component.ts");
/* harmony import */ var _templates_admin_sidenav_admin_sidenav_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./templates/admin-sidenav/admin-sidenav.component */ "./src/app/templates/admin-sidenav/admin-sidenav.component.ts");
/* harmony import */ var _templates_admin_toolbar_admin_toolbar_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./templates/admin-toolbar/admin-toolbar.component */ "./src/app/templates/admin-toolbar/admin-toolbar.component.ts");
/* harmony import */ var _admin_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./admin/admin-users/admin-users.component */ "./src/app/admin/admin-users/admin-users.component.ts");
/* harmony import */ var _admin_admin_companies_admin_companies_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./admin/admin-companies/admin-companies.component */ "./src/app/admin/admin-companies/admin-companies.component.ts");
/* harmony import */ var _admin_admin_report_admin_report_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./admin/admin-report/admin-report.component */ "./src/app/admin/admin-report/admin-report.component.ts");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./guards/admin.guard */ "./src/app/guards/admin.guard.ts");
/* harmony import */ var _admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin/admin/admin.component */ "./src/app/admin/admin/admin.component.ts");
/* harmony import */ var _admin_admin_questioner_admin_questioner_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin/admin-questioner/admin-questioner.component */ "./src/app/admin/admin-questioner/admin-questioner.component.ts");
/* harmony import */ var _admin_admin_companies_admin_create_company_admin_create_company_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./admin/admin-companies/admin-create-company/admin-create-company.component */ "./src/app/admin/admin-companies/admin-create-company/admin-create-company.component.ts");
/* harmony import */ var _admin_admin_companies_admin_update_company_admin_update_company_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./admin/admin-companies/admin-update-company/admin-update-company.component */ "./src/app/admin/admin-companies/admin-update-company/admin-update-company.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");
/* harmony import */ var _dashboard_company_pipe_filter__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./dashboard/company-pipe.filter */ "./src/app/dashboard/company-pipe.filter.ts");
/* harmony import */ var _error_page404_page404_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./error/page404/page404.component */ "./src/app/error/page404/page404.component.ts");
/* harmony import */ var _error_page403_page403_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./error/page403/page403.component */ "./src/app/error/page403/page403.component.ts");
/* harmony import */ var _services_report_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../services/report.service */ "./src/services/report.service.ts");
/* harmony import */ var _admin_admin_report_view_report_view_report_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./admin/admin-report/view-report/view-report.component */ "./src/app/admin/admin-report/view-report/view-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































var appRoutes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"]
    },
    {
        path: 'header',
        component: _templates_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"]
    },
    {
        path: 'admin',
        component: _admin_admin_index_admin_index_component__WEBPACK_IMPORTED_MODULE_26__["AdminIndexComponent"]
    },
    {
        path: 'admin/users',
        component: _admin_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_29__["AdminUsersComponent"]
    },
    {
        path: 'admin/companies',
        component: _admin_admin_companies_admin_companies_component__WEBPACK_IMPORTED_MODULE_30__["AdminCompaniesComponent"]
    },
    {
        path: 'admin/companies/create',
        component: _admin_admin_companies_admin_create_company_admin_create_company_component__WEBPACK_IMPORTED_MODULE_35__["AdminCreateCompanyComponent"]
    },
    {
        path: 'admin/companies/update/:id',
        component: _admin_admin_companies_admin_update_company_admin_update_company_component__WEBPACK_IMPORTED_MODULE_36__["AdminUpdateCompanyComponent"]
    },
    {
        path: 'admin/report',
        component: _admin_admin_report_admin_report_component__WEBPACK_IMPORTED_MODULE_31__["AdminReportComponent"]
    },
    {
        path: 'admin/questioner',
        component: _admin_admin_questioner_admin_questioner_component__WEBPACK_IMPORTED_MODULE_34__["AdminQuestionerComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"]
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"]
    },
    {
        path: 'data-tracer',
        component: _data_tracer_data_tracer_component__WEBPACK_IMPORTED_MODULE_20__["DataTracerComponent"]
    },
    {
        path: 'company',
        component: _company_index_company_index_company_component__WEBPACK_IMPORTED_MODULE_22__["IndexCompanyComponent"]
    },
    {
        path: 'company/addCompany',
        component: _company_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_23__["CreateCompanyComponent"]
    },
    {
        path: 'company/updateCompany/:id',
        component: _company_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_25__["UpdateCompanyComponent"]
    },
    {
        path: 'companies/:id',
        component: _company_view_company_view_company_component__WEBPACK_IMPORTED_MODULE_24__["ViewCompanyComponent"]
    },
    {
        path: 'report/:id',
        component: _report_report_component__WEBPACK_IMPORTED_MODULE_37__["ReportComponent"]
    },
    {
        path: 'view-report/:id',
        component: _admin_admin_report_view_report_view_report_component__WEBPACK_IMPORTED_MODULE_42__["ViewReportComponent"]
    },
    {
        path: 'forbidden',
        component: _error_page403_page403_component__WEBPACK_IMPORTED_MODULE_40__["Page403Component"]
    },
    {
        path: 'notfound',
        component: _error_page404_page404_component__WEBPACK_IMPORTED_MODULE_39__["Page404Component"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _dashboard_company_pipe_filter__WEBPACK_IMPORTED_MODULE_38__["CompanyFilterPipe"],
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _templates_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _templates_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"],
                _data_tracer_data_tracer_component__WEBPACK_IMPORTED_MODULE_20__["DataTracerComponent"],
                _snackbar_logged_in_logged_in_component__WEBPACK_IMPORTED_MODULE_21__["LoggedInComponent"],
                _company_index_company_index_company_component__WEBPACK_IMPORTED_MODULE_22__["IndexCompanyComponent"],
                _company_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_23__["CreateCompanyComponent"],
                _company_view_company_view_company_component__WEBPACK_IMPORTED_MODULE_24__["ViewCompanyComponent"],
                _company_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_25__["UpdateCompanyComponent"],
                _admin_admin_index_admin_index_component__WEBPACK_IMPORTED_MODULE_26__["AdminIndexComponent"],
                _templates_admin_sidenav_admin_sidenav_component__WEBPACK_IMPORTED_MODULE_27__["AdminSidenavComponent"],
                _templates_admin_toolbar_admin_toolbar_component__WEBPACK_IMPORTED_MODULE_28__["AdminToolbarComponent"],
                _admin_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_29__["AdminUsersComponent"],
                _admin_admin_companies_admin_companies_component__WEBPACK_IMPORTED_MODULE_30__["AdminCompaniesComponent"],
                _admin_admin_report_admin_report_component__WEBPACK_IMPORTED_MODULE_31__["AdminReportComponent"],
                _admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_33__["AdminComponent"],
                _admin_admin_questioner_admin_questioner_component__WEBPACK_IMPORTED_MODULE_34__["AdminQuestionerComponent"],
                _admin_admin_companies_admin_create_company_admin_create_company_component__WEBPACK_IMPORTED_MODULE_35__["AdminCreateCompanyComponent"],
                _admin_admin_companies_admin_update_company_admin_update_company_component__WEBPACK_IMPORTED_MODULE_36__["AdminUpdateCompanyComponent"],
                _report_report_component__WEBPACK_IMPORTED_MODULE_37__["ReportComponent"],
                _error_page404_page404_component__WEBPACK_IMPORTED_MODULE_39__["Page404Component"],
                _error_page403_page403_component__WEBPACK_IMPORTED_MODULE_40__["Page403Component"],
                _admin_admin_report_view_report_view_report_component__WEBPACK_IMPORTED_MODULE_42__["ViewReportComponent"],
            ],
            imports: [
                angular_flash_message__WEBPACK_IMPORTED_MODULE_13__["FlashMessageModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_12__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_7__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_32__["AdminGuard"], _services_company_service__WEBPACK_IMPORTED_MODULE_9__["CompanyService"], _services_report_service__WEBPACK_IMPORTED_MODULE_41__["ReportService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/company/create-company/create-company.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/company/create-company/create-company.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* mat-card-header{\n    background-color: #00796B;\n    padding: 20px;\n} */\n.white-background{\n    background-color: #FFF;\n}\nmat-form-field{\n    color: #FFC107;\n    width:100%;\n}\n.add-btn{\n    background-color: #FFC107;\n    color: #FFF;\n}\n.warning-card {\n    background-color: rgb(255, 56, 56);\n    color: #FFF;\n    font-family: 'Quicksand';\n    font-weight: bold;\n    text-align: center;\n    border-radius: 3px;\n}"

/***/ }),

/***/ "./src/app/company/create-company/create-company.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/company/create-company/create-company.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"mdl-grid\">\n  <div class=\"mdl-layout-spacer\"></div>\n  <div class=\"mdl-cell mdl-cell--8-col white-background\">\n  <mat-card>\n    <mat-card-content>\n    <div class=\"warning-card\">\n      <mat-card-content>\n        <flash-message>\n        </flash-message>\n      </mat-card-content>\n    </div>\n    <form>\n      <mat-form-field>\n        <input name=\"nama\" [(ngModel)]=\"nama\" matInput #input type=\"text\" placeholder=\"Nama Perusahaan\" required>\n        <mat-icon matSuffix>business</mat-icon>\n      </mat-form-field>\n      <mat-form-field>\n        <input name=\"alamat\" [(ngModel)]=\"alamat\" matInput #input type=\"text\" placeholder=\"Alamat Perusahaan\" required>\n        <mat-icon matSuffix>location_on</mat-icon>\n      </mat-form-field>\n      <mat-form-field>\n          <input name=\"email_perusahaan\" [(ngModel)]=\"email_perusahaan\" matInput #input type=\"email_perusahaan\" placeholder=\"Email Perusahaan\" required>\n          <mat-icon matSuffix>email</mat-icon>\n      </mat-form-field>\n      <mat-form-field>\n          <input name=\"telepon\" [(ngModel)]=\"telepon\" matInput #input type=\"telepon\" placeholder=\"Telepon Perusahaan\" required>\n          <mat-icon matSuffix>phone</mat-icon>\n      </mat-form-field>\n      <mat-form-field>\n          <span matPrefix>www. &nbsp;</span>\n          <input name=\"website\" [(ngModel)]=\"website\" matInput #input type=\"website\" placeholder=\"Website Perusahaan\" required>\n          <mat-icon matSuffix>language</mat-icon>\n      </mat-form-field>\n      <mat-form-field>\n          <textarea name=\"deskripsi\"  rows=\"5\" cols=\"40\"   [(ngModel)]=\"deskripsi\" matInput #input type=\"deskripsi\" placeholder=\"Deskripsi Perusahaan\" required></textarea>\n          <mat-icon matSuffix>textsms</mat-icon>\n      </mat-form-field>\n      <mat-form-field>\n        <mat-select name=\"kategori\" [(ngModel)]=\"kategori\" #kategoriValue   placeholder=\"Bidang\">\n          <mat-option value=\"Sistem Informasi\">Sistem Informasi</mat-option>\n          <mat-option value=\"Multimedia\">Multimedia</mat-option>\n          <mat-option value=\"Jaringan Komputer\">Jaringan Komputer</mat-option>\n          <mat-option value=\"Telekomunikasi Seluler\">Telekomunikasi Seluler</mat-option>\n          <mat-option value=\"Audio Video\">Audio Video</mat-option>\n          <mat-option value=\"Elektronika Industri\">Elektronika Industri</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <div align=\"right\">\n          <a mat-raised-button class=\"add-btn\" (click)=\"addCompany($event)\" mat-raised-button>Tambah</a>\n      </div>\n    </form>\n    </mat-card-content>\n  </mat-card>\n  </div>\n  <div class=\"mdl-layout-spacer\"></div>\n</div>\n\n<app-footer></app-footer> "

/***/ }),

/***/ "./src/app/company/create-company/create-company.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/company/create-company/create-company.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCompanyComponent", function() { return CreateCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/company.service */ "./src/services/company.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/validate.service */ "./src/services/validate.service.ts");
/* harmony import */ var angular_flash_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-flash-message */ "./node_modules/angular-flash-message/dist/index.js");
/* harmony import */ var angular_flash_message__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular_flash_message__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateCompanyComponent = /** @class */ (function () {
    function CreateCompanyComponent(route, validateService, flashMessage, authService, companyService) {
        this.route = route;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.companyService = companyService;
        var user = localStorage.getItem('user');
        var token = localStorage.getItem('id_token');
        var level = Number(localStorage.getItem('level'));
        if (this.authService.loggedIn(user, token, level)) {
            if (level == 1) {
                this.route.navigate(['/company']);
                console.log('Unauthorized.');
            }
            else {
                console.log('Admin Mode.');
            }
        }
        else {
            this.route.navigate(['/dashboard']);
            console.log('Unauthorized.');
        }
        // di naskah, tambai
    }
    CreateCompanyComponent.prototype.ngOnInit = function () {
    };
    CreateCompanyComponent.prototype.addCompany = function (event) {
        var _this = this;
        user = localStorage.getItem('user');
        var user = JSON.parse(user);
        var nim = user["nim"];
        var company = {
            perusahaan: this.nama,
            alamat: this.alamat,
            deskripsi: this.deskripsi,
            email_perusahaan: this.email_perusahaan,
            website: this.website,
            telepon: this.telepon,
            kategori: this.kategori,
            author: nim,
            update_by: ''
        };
        if (!this.validateService.validateAddCompany(company)) {
            this.flashMessage.warning('WARNING : Please fill in all fields.', { delay: 5000 });
            return false;
        }
        if (!this.validateService.validateEmail(company.email_perusahaan)) {
            this.flashMessage.warning('WARNING : Please fill validate email.', { delay: 5000 });
            return false;
        }
        this.companyService.addCompany(company).subscribe(function (company) {
            _this.company = company;
        });
        this.authService.upgrade(user).subscribe(function (user) {
            _this.user = user;
        });
        this.route.navigate(['/company']);
    };
    CreateCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-company',
            template: __webpack_require__(/*! ./create-company.component.html */ "./src/app/company/create-company/create-company.component.html"),
            styles: [__webpack_require__(/*! ./create-company.component.css */ "./src/app/company/create-company/create-company.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"],
            angular_flash_message__WEBPACK_IMPORTED_MODULE_4__["FlashMessage"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]])
    ], CreateCompanyComponent);
    return CreateCompanyComponent;
}());



/***/ }),

/***/ "./src/app/company/index-company/index-company.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/company/index-company/index-company.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\r\n.company-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n.company-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n.mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n\r\n  }\r\nmat-table{\r\n    width: 100%;\r\n  }\r\n.white-background{\r\n    background: #FFF;\r\n  }\r\n.mdl-grid.center-items {\r\n    justify-content: center;\r\n}\r\n.mdl-grid.center-items {\r\n  justify-content: center;\r\n}\r\n.table-responsive {\r\n  min-height: .01%;\r\n  overflow-x: auto;\r\n}\r\n@media screen and (max-width: 767px) {\r\n  .table-responsive {\r\n      width: 100%;\r\n      margin-bottom: 15px;\r\n      overflow-y: hidden;\r\n      -ms-overflow-style: -ms-autohiding-scrollbar;\r\n      border: 1px solid #ddd;\r\n  }\r\n  .table-responsive > .table {\r\n      margin-bottom: 0;\r\n  }\r\n  .table-responsive > .table > thead > tr > th,\r\n  .table-responsive > .table > tbody > tr > th,\r\n  .table-responsive > .table > tfoot > tr > th,\r\n  .table-responsive > .table > thead > tr > td,\r\n  .table-responsive > .table > tbody > tr > td,\r\n  .table-responsive > .table > tfoot > tr > td {\r\n      white-space: nowrap;\r\n  }\r\n  .table-responsive > .table-bordered {\r\n      border: 0;\r\n  }\r\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\r\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\r\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\r\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\r\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\r\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\r\n      border-left: 0;\r\n  }\r\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\r\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\r\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\r\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\r\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\r\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\r\n      border-right: 0;\r\n  }\r\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\r\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\r\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\r\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\r\n      border-bottom: 0;\r\n  }\r\n}\r\n.add-btn{\r\n  color:  #FFC107;\r\n}\r\n.edit-btn{\r\n  color : #1E88E5;\r\n}\r\n.save-btn{\r\n  background-color : #FFC107;\r\n}\r\n.delete-btn{\r\n  color:#EF5350;\r\n}"

/***/ }),

/***/ "./src/app/company/index-company/index-company.component.html":
/*!********************************************************************!*\
  !*** ./src/app/company/index-company/index-company.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"mdl-grid center-items\">\n  <div class=\"mdl-cell mdl-cell--8-col\">\n      <div class=\"white-background\">\n          <div class=\"company-container\">\n            <div class=\"company-header\">\n                <div class=\"\">\n                    <mat-form-field>\n                      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                    </mat-form-field>\n                </div>\n                <!-- Off when level = 1 -->\n                <div class=\"\" align=\"right\">\n                    <a mat-icon-button class=\"add-btn\" matTooltip=\"Buat Perusahaan Baru\" *ngIf=\"!authService.moderatorMenu() || authService.adminMenu()\" (click)=\"addCompany($event)\">\n                      <mat-icon>add</mat-icon>\n                    </a>\n                </div>\n            </div>\n\n            <div class=\"table-responsive\">\n            <mat-table #table [dataSource]=\"dataSource\">\n              <!-- Perusahaan Column -->\n              <ng-container matColumnDef=\"perusahaan\">\n                <mat-header-cell *matHeaderCellDef> Perusahaan </mat-header-cell>\n                <mat-cell *matCellDef=\"let companies\"> <a matTooltip=\"Klik Untuk Melihat Detail\" (click)=\"viewCompany(companies)\">{{companies.perusahaan}}</a> </mat-cell>\n              </ng-container>\n              <!-- Mahasiswa Column -->\n              <ng-container matColumnDef=\"kategori\">\n                <mat-header-cell *matHeaderCellDef> Bidang Praktik Industri </mat-header-cell>\n                <mat-cell *matCellDef=\"let companies\"> {{companies.kategori}} </mat-cell>\n              </ng-container>\n              <!-- Mahasiswa Column -->\n              <ng-container matColumnDef=\"mahasiswa\">\n                <mat-header-cell *matHeaderCellDef> Jumlah Mahasiswa </mat-header-cell>\n                <mat-cell *matCellDef=\"let companies\"> {{companies.students.length}} </mat-cell>\n              </ng-container>\n              <!-- Option Column -->\n              <ng-container matColumnDef=\"option\">\n                  <mat-header-cell *matHeaderCellDef> Option </mat-header-cell>\n                  <mat-cell *matCellDef=\"let companies\">\n                    <button matTooltip=\"Ada kesalahan penulisan? Laporkan perusahaan ini\" routerLink=\"/report/{{companies._id}}\" mat-icon-button class=\"add-btn\">\n                        <mat-icon>warning</mat-icon>\n                    </button>\n                    <button mat-icon-button class=\"edit-btn\" matTooltip=\"Ubah Data Perusahaan\" (click)=\"updateCompany(companies)\" *ngIf=\"authService.moderatorMenu()\">\n                        <mat-icon>edit</mat-icon>\n                    </button>\n                    <button mat-icon-button class=\"delete-btn\" matTooltip=\"Hapus Data Perusahaan\" (click)=\"deleteCompany(companies)\" *ngIf=\"authService.adminMenu()\" >\n                        <mat-icon>delete</mat-icon>\n                    </button>\n                  </mat-cell>\n              </ng-container>\n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n              <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n            </mat-table>\n          </div>\n          </div>\n        </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/company/index-company/index-company.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/company/index-company/index-company.component.ts ***!
  \******************************************************************/
/*! exports provided: IndexCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexCompanyComponent", function() { return IndexCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/company.service */ "./src/services/company.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _models_company_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/company.model */ "./src/models/company.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IndexCompanyComponent = /** @class */ (function () {
    function IndexCompanyComponent(router, authService, companyService) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.companyService = companyService;
        this.displayedColumns = ['perusahaan', 'kategori', 'mahasiswa', 'option'];
        var user = localStorage.getItem('user');
        var token = localStorage.getItem('id_token');
        var level = Number(localStorage.getItem('level'));
        if (!this.authService.loggedIn(user, token, level)) {
            this.router.navigate(['/']);
            console.log('Please login first.');
        }
        this.companyService.getCompanies().subscribe(function (companies) {
            _this.companies = companies;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](companies);
        }, function (err) {
            console.log(err);
            return false;
        });
    }
    IndexCompanyComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    };
    IndexCompanyComponent.prototype.ngOnInit = function () {
    };
    IndexCompanyComponent.prototype.viewCompany = function (companies) {
        this.router.navigate(['companies/' + companies._id]);
    };
    IndexCompanyComponent.prototype.addCompany = function (event) {
        event.preventDefault();
        this.companyService.setter(new _models_company_model__WEBPACK_IMPORTED_MODULE_4__["Company"]());
        this.router.navigate(['company/addCompany']);
    };
    IndexCompanyComponent.prototype.updateCompany = function (companies) {
        this.companyService.setter(companies);
        this.router.navigate(['company/updateCompany/' + companies._id]);
    };
    IndexCompanyComponent.prototype.deleteCompany = function (company) {
        var _id = company._id;
        this.companyService.deleteCompany(_id).subscribe(function (_id) {
            console.log("Delete Success.");
            window.location.reload();
        }, function (err) {
            console.log(err);
        });
    };
    IndexCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index-company',
            template: __webpack_require__(/*! ./index-company.component.html */ "./src/app/company/index-company/index-company.component.html"),
            styles: [__webpack_require__(/*! ./index-company.component.css */ "./src/app/company/index-company/index-company.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]])
    ], IndexCompanyComponent);
    return IndexCompanyComponent;
}());



/***/ }),

/***/ "./src/app/company/update-company/update-company.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/company/update-company/update-company.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\n.company-container {\n    display: flex;\n    flex-direction: column;\n    min-width: 300px;\n  }\n.company-header {\n    min-height: 64px;\n    padding: 8px 24px 0;\n  }\n.mat-form-field {\n    font-size: 14px;\n    width: 100%;\n  }\n.mat-table {\n    overflow: auto;\n    max-height: 500px;\n\n  }\nmat-table{\n    width: 100%;\n  }\n.white-background{\n    background: #FFF;\n  }\n.mdl-grid.center-items {\n    justify-content: center;\n}\n.mdl-grid.center-items {\n  justify-content: center;\n}\n.table-responsive {\n  min-height: .01%;\n  overflow-x: auto;\n}\n@media screen and (max-width: 767px) {\n  .table-responsive {\n      width: 100%;\n      margin-bottom: 15px;\n      overflow-y: hidden;\n      -ms-overflow-style: -ms-autohiding-scrollbar;\n      border: 1px solid #ddd;\n  }\n  .table-responsive > .table {\n      margin-bottom: 0;\n  }\n  .table-responsive > .table > thead > tr > th,\n  .table-responsive > .table > tbody > tr > th,\n  .table-responsive > .table > tfoot > tr > th,\n  .table-responsive > .table > thead > tr > td,\n  .table-responsive > .table > tbody > tr > td,\n  .table-responsive > .table > tfoot > tr > td {\n      white-space: nowrap;\n  }\n  .table-responsive > .table-bordered {\n      border: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n      border-left: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n      border-right: 0;\n  }\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n      border-bottom: 0;\n  }\n}\n.add-btn{\n  color:  #FFC107;\n}\n.edit-btn{\n  color : #1E88E5;\n}\n.save-btn{\n  background-color : #FFC107;\n  color: #FFF;\n}\n.delete-btn{\n  color:#EF5350;\n}\nmat-icon{\n  color:  #FFC107;\n}\nmat-form-field{\n    color: #FFC107;\n    width:100%;\n}"

/***/ }),

/***/ "./src/app/company/update-company/update-company.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/company/update-company/update-company.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"mdl-grid\">\n    <div class=\"mdl-layout-spacer\"></div>\n    <div class=\"mdl-cell mdl-cell--8-col white-background\">\n    <mat-card>\n      <mat-card-content>\n      <div class=\"warning-card\">\n        <mat-card-content>\n          <flash-message>\n          </flash-message>\n        </mat-card-content>\n      </div>\n      <form *ngIf=\"company\">\n        <mat-form-field>\n          <input name=\"nama\" [(ngModel)]=\"company.perusahaan\" matInput #input type=\"text\" placeholder=\"Nama Perusahaan\" required>\n          <mat-icon matSuffix>business</mat-icon>\n        </mat-form-field>\n        <mat-form-field>\n          <input name=\"alamat\" [(ngModel)]=\"company.alamat\" matInput #input type=\"text\" placeholder=\"Alamat Perusahaan\" required>\n          <mat-icon matSuffix>location_on</mat-icon>\n        </mat-form-field>\n        <mat-form-field>\n            <input name=\"email_perusahaan\" [(ngModel)]=\"company.email_perusahaan\" matInput #input type=\"email_perusahaan\" placeholder=\"Email Perusahaan\" required>\n            <mat-icon matSuffix>email</mat-icon>\n        </mat-form-field>\n        <mat-form-field>\n            <input name=\"telepon\" [(ngModel)]=\"company.telepon\" matInput #input type=\"telepon\" placeholder=\"Telepon Perusahaan\" required>\n            <mat-icon matSuffix>phone</mat-icon>\n        </mat-form-field>\n        <mat-form-field>\n            <span matPrefix>www. &nbsp;</span>\n            <input name=\"website\" [(ngModel)]=\"company.website\" matInput #input type=\"website\" placeholder=\"Website Perusahaan\" required>\n            <mat-icon matSuffix>language</mat-icon>\n        </mat-form-field>\n        <mat-form-field>\n            <textarea name=\"deskripsi\"  rows=\"5\" cols=\"40\"   [(ngModel)]=\"company.deskripsi\" matInput #input type=\"deskripsi\" placeholder=\"Deskripsi Perusahaan\" required></textarea>\n            <mat-icon matSuffix>textsms</mat-icon>\n        </mat-form-field>\n        <mat-form-field>\n          <mat-select name=\"kategori\" [(ngModel)]=\"company.kategori\" #kategoriValue placeholder=\"Bidang\">\n              <mat-option value=\"Sistem Informasi\">Sistem Informasi</mat-option>\n              <mat-option value=\"Multimedia\">Multimedia</mat-option>\n              <mat-option value=\"Jaringan Komputer\">Jaringan Komputer</mat-option>\n              <mat-option value=\"Telekomunikasi Seluler\">Telekomunikasi Seluler</mat-option>\n              <mat-option value=\"Audio Video\">Audio Video</mat-option>\n              <mat-option value=\"Elektronika Industri\">Elektronika Industri</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <div align=\"right\">\n            <a mat-raised-button class=\"save-btn\" (click)=\"updateCompany(company)\" mat-raised-button>Simpan</a>\n        </div>\n      </form>\n      </mat-card-content>\n    </mat-card>\n    </div>\n    <div class=\"mdl-layout-spacer\"></div>\n</div>\n\n<app-footer></app-footer>\n  \n  \n  "

/***/ }),

/***/ "./src/app/company/update-company/update-company.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/company/update-company/update-company.component.ts ***!
  \********************************************************************/
/*! exports provided: UpdateCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCompanyComponent", function() { return UpdateCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/company.service */ "./src/services/company.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateCompanyComponent = /** @class */ (function () {
    function UpdateCompanyComponent(companyService, route, router) {
        this.companyService = companyService;
        this.route = route;
        this.router = router;
    }
    UpdateCompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._id = this.route.snapshot.paramMap.get('id');
        this.companyService.getCompany(this._id).subscribe(function (company) {
            _this.company = company;
        });
    };
    UpdateCompanyComponent.prototype.updateCompany = function (company) {
        var _this = this;
        var user = localStorage.getItem('user');
        user = JSON.parse(user);
        var nim = user["nim"];
        var level = Number(localStorage.getItem('level'));
        var updateCompany = {
            _id: company._id,
            perusahaan: company.perusahaan,
            alamat: company.alamat,
            deskripsi: company.deskripsi,
            email_perusahaan: company.email_perusahaan,
            website: company.website,
            telepon: company.telepon,
            kategori: company.kategori,
            update_by: nim
        };
        if (level > 1) {
            this.companyService.updateCompany(updateCompany).subscribe(function (company) {
                _this.company = updateCompany;
                console.log("Update by Admin Success.");
                _this.router.navigate(['/company']);
            });
        }
        else if (company.author != nim) {
            console.log("Anda tidak memiliki akses mengubah data ini, silahkan kontak admin.");
            this.router.navigate(['/forbidden']);
        }
        else {
            this.companyService.updateCompany(updateCompany).subscribe(function (company) {
                _this.company = updateCompany;
                console.log("Update by Moderator Success.");
                _this.router.navigate(['/company']);
            });
        }
    };
    UpdateCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-company',
            template: __webpack_require__(/*! ./update-company.component.html */ "./src/app/company/update-company/update-company.component.html"),
            styles: [__webpack_require__(/*! ./update-company.component.css */ "./src/app/company/update-company/update-company.component.css")]
        }),
        __metadata("design:paramtypes", [_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UpdateCompanyComponent);
    return UpdateCompanyComponent;
}());



/***/ }),

/***/ "./src/app/company/view-company/view-company.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/company/view-company/view-company.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card-avatar{\n    background-color: #FFC107;\n}\n.avatar-icon{ \n    color: #FFC107;\n    width: 100%;\n    height: auto;\n    background-size: cover;\n}\n.company-card{\n    max-width: 100%;\n    height: auto;\n}\n.mdl-grid.center-items {\n    justify-content: center;\n}\n.mat-card-actions{\n    background-color: #FFC107;\n    color: #FFF;\n}\n.outer {\n    display: table;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n}\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n.inner {\n    margin-left: auto;\n    margin-right: auto;\n    width: 400px;\n    /*whatever width you want*/\n}\n.add-btn{\n  color:  #FFC107;\n}\n.edit-btn{\n  color : #1E88E5;\n}\n.save-btn{\n  background-color : #FFC107;\n}\n.delete-btn{\n  color:#EF5350;\n}"

/***/ }),

/***/ "./src/app/company/view-company/view-company.component.html":
/*!******************************************************************!*\
  !*** ./src/app/company/view-company/view-company.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"mdl-grid center-items\">\n      <div class=\"mdl-cell mdl-cell--6-col\" *ngIf=\"company\">\n        <mat-card class=\"company-card\">\n          <mat-card-header>\n            <div mat-card-avatar><mat-icon class=\"avatar-icon\">business</mat-icon></div>\n            <mat-card-title>{{company.perusahaan}}</mat-card-title>\n            <mat-card-subtitle>\n              {{company.alamat}}\n            </mat-card-subtitle>\n          </mat-card-header>\n          <mat-card-content>\n            <table>\n              <tr>\n                <td><label>Email</label></td>\n                <td>: {{company.email_perusahaan}}</td>\n              </tr>\n              <tr>\n                <td><label>Telepon</label></td>\n                <td>: {{company.telepon}}</td>\n              </tr>\n              <tr>\n                <td><label>Website</label></td>\n                <td>: <a target=\"_blank\" href=\"http://www.{{company.website}}\">www.{{company.website}}</a></td>\n              </tr>\n              <tr>\n                <td><label>Bidang</label></td>\n                <td>: {{company.kategori}}</td>\n              </tr>\n            </table>\n            <hr>\n            <p align=\"justify\">\n              {{company.deskripsi}}\n            </p>\n            <div align=\"right\">\n              <button mat-icon-button matTooltip=\"Ubah Data Perusahaan\" class=\"edit-btn\" (click)=\"updateCompany(companies)\" *ngIf=\"authService.adminMenu()\"><mat-icon>edit</mat-icon></button>\n              <button mat-icon-button  matTooltip=\"Hapus Data Perusahaan\" class=\"delete-btn\" (click)=\"deleteCompany(companies)\" *ngIf=\"authService.adminMenu()\" ><mat-icon>delete</mat-icon></button>\n            </div>\n          </mat-card-content>\n          <mat-card-actions>\n            <table>\n              <tr>\n                <td><mat-icon>person</mat-icon></td>\n                <td matTooltip=\"Jumlah Mahasiswa Praktik Industri {{company.students.length}}\" >{{company.students.length}}</td>\n              </tr>\n            </table>\n          </mat-card-actions>\n      </mat-card>\n      </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/company/view-company/view-company.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/company/view-company/view-company.component.ts ***!
  \****************************************************************/
/*! exports provided: ViewCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCompanyComponent", function() { return ViewCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/company.service */ "./src/services/company.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewCompanyComponent = /** @class */ (function () {
    function ViewCompanyComponent(authService, companyService, route, router) {
        this.authService = authService;
        this.companyService = companyService;
        this.route = route;
        this.router = router;
    }
    ViewCompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._id = this.route.snapshot.paramMap.get('id');
        this.companyService.getCompany(this._id).subscribe(function (company) {
            _this.company = company;
        });
    };
    ViewCompanyComponent.prototype.updateCompany = function (company) {
        this.companyService.setter(company);
        this.router.navigate(['company/updateCompany/' + this._id]);
    };
    ViewCompanyComponent.prototype.deleteCompany = function (company) {
        var _this = this;
        var _id = this._id;
        this.companyService.deleteCompany(_id).subscribe(function (_id) {
            console.log("Delete Success.");
            _this.router.navigate(['/company']);
        }, function (err) {
            console.log(err);
        });
    };
    ViewCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-company',
            template: __webpack_require__(/*! ./view-company.component.html */ "./src/app/company/view-company/view-company.component.html"),
            styles: [__webpack_require__(/*! ./view-company.component.css */ "./src/app/company/view-company/view-company.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ViewCompanyComponent);
    return ViewCompanyComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/company-pipe.filter.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/company-pipe.filter.ts ***!
  \**************************************************/
/*! exports provided: CompanyFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyFilterPipe", function() { return CompanyFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CompanyFilterPipe = /** @class */ (function () {
    function CompanyFilterPipe() {
    }
    CompanyFilterPipe.prototype.searchCategory = function (kategori) {
        console.log(kategori);
    };
    CompanyFilterPipe.prototype.transform = function (companies, searchCompany) {
        if (!searchCompany) {
            return companies;
        }
        var value = searchCompany.toLowerCase();
        if (!companies || !searchCompany) {
            return companies;
        }
        return companies.filter(function (companies) { return companies.perusahaan.toLowerCase().indexOf(searchCompany.toLowerCase(value)) !== -1; });
    };
    CompanyFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'companyFilter'
        })
    ], CompanyFilterPipe);
    return CompanyFilterPipe;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-paginator{\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\na{\r\n    text-decoration: none;\r\n}\r\nmat-card-avatar{\r\n    background-color: #FFB300;\r\n}\r\n.avatar-icon{ \r\n    color: #FFB300;\r\n    width: 100%;\r\n    height: auto;\r\n    background-size: cover;\r\n}\r\n.company-card{\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n.mdl-grid.center-items {\r\n    justify-content: center;\r\n}\r\n.mat-card-actions{\r\n    background-color: #FFB300;\r\n    color: #FFF;\r\n}\r\n.outer {\r\n    display: table;\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.middle {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n.inner {\r\n    width: 400px;\r\n    /*whatever width you want*/\r\n}\r\n.search-form-field {\r\n    width: 100%;\r\n}\r\n.search-container{\r\n    background-color: #FFF;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"mdl-grid center-items\">\n  <div class=\"mdl-cell mdl-cell--4-col\" align=\"center\">\n      <mat-form-field class=\"search-form-field\">\n          <input matInput type=\"text\" placeholder=\"Search\" [(ngModel)]=\"searchCompany\"/>\n          <button *ngIf=\"searchCompany\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"searchCompany=''\">\n            <mat-icon>close</mat-icon>\n          </button>\n      </mat-form-field>\n  </div>\n</div>\n<div class=\"mdl-grid center-items\">\n      <div class=\"mdl-cell mdl-cell--4-col\" *ngFor=\"let data of companies | companyFilter:searchCompany | companyFilter:sear\">\n        <a (click)=\"getCompany(data)\">\n          <mat-card class=\"company-card\">\n              <label>Praktik Industri Bidang {{data.kategori}}</label>\n              <hr>\n              <mat-card-header>\n                <div mat-card-avatar><mat-icon class=\"avatar-icon\">business</mat-icon></div>\n                <mat-card-title>{{data.perusahaan}}</mat-card-title>\n                <mat-card-subtitle>{{data.alamat}}</mat-card-subtitle>\n              </mat-card-header>\n              <mat-card-content>\n                <!-- Content -->\n              </mat-card-content>\n              <mat-card-actions>\n                <table>\n                  <tr matTooltip=\"Jumlah Mahasiswa Praktik Industri {{data.students.length}}\">\n                    <td><mat-icon>person</mat-icon></td>\n                    <td>{{data.students.length}}</td>\n                  </tr>\n                </table>\n              </mat-card-actions>\n          </mat-card>\n        </a>\n      </div>\n      \n      <div class=\"mdl-cell mdl-cell--12-col\">\n        <!-- Paginator -->\n      </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/company.service */ "./src/services/company.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(snackBar, zone, router, route, authService, companyService, http) {
        var _this = this;
        this.snackBar = snackBar;
        this.zone = zone;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.companyService = companyService;
        this.http = http;
        var user = localStorage.getItem('user');
        var token = localStorage.getItem('id_token');
        var level = Number(localStorage.getItem('level'));
        if (this.authService.loggedIn(user, token, level)) {
            if (!user) {
                this.router.navigate(['/']);
                console.log('Please Login.');
            }
        }
        this.companyService.getCompanies().subscribe(function (companies) {
            _this.companies = companies;
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.getCompany = function (data) {
        var _this = this;
        this.companyService.getCompany(data._id).subscribe(function (company) {
            _this.router.navigate(['companies/' + data._id]);
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/data-tracer/data-tracer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/data-tracer/data-tracer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/data-tracer/data-tracer.component.html":
/*!********************************************************!*\
  !*** ./src/app/data-tracer/data-tracer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div>\n  data-tracer\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/data-tracer/data-tracer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/data-tracer/data-tracer.component.ts ***!
  \******************************************************/
/*! exports provided: DataTracerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTracerComponent", function() { return DataTracerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataTracerComponent = /** @class */ (function () {
    function DataTracerComponent() {
    }
    DataTracerComponent.prototype.ngOnInit = function () {
    };
    DataTracerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-tracer',
            template: __webpack_require__(/*! ./data-tracer.component.html */ "./src/app/data-tracer/data-tracer.component.html"),
            styles: [__webpack_require__(/*! ./data-tracer.component.css */ "./src/app/data-tracer/data-tracer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DataTracerComponent);
    return DataTracerComponent;
}());



/***/ }),

/***/ "./src/app/error/page403/page403.component.css":
/*!*****************************************************!*\
  !*** ./src/app/error/page403/page403.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mdl-grid{\r\n    /* background-image: url(http://backgroundcheckall.com/wp-content/uploads/2017/12/blurred-background-app-9.jpg); */\r\n    background-image: url(http://i66.tinypic.com/23vc9ar.png);\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    height: 98.35%;\r\n}\r\n.center{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    color: #FFF;\r\n    display: \"block\";\r\n    vertical-align :middle;\r\n}\r\nh1{\r\n  margin-top:50%;\r\n  font-family: 'Quicksand';\r\n  color: #FFF;\r\n  font-weight: bold;\r\n  \r\n}\r\n@media screen and (max-width: 768px) {\r\n    h1{\r\n        margin-top:100%;\r\n        font-size:20px;\r\n        color: #FFF;\r\n        font-weight: bold;\r\n    }\r\n    h2{\r\n        font-size:15px;\r\n        color: #FFF;\r\n        font-weight: bold;\r\n    }\r\n}\r\nh2{\r\n  font-family: 'Quicksand';\r\n  color: #FFF;\r\n  font-weight: bold;\r\n  \r\n}\r\n.back-btn{\r\n    font-family: 'Quicksand';\r\n    color: #FFF;\r\n    background-color: #00E676;\r\n}"

/***/ }),

/***/ "./src/app/error/page403/page403.component.html":
/*!******************************************************!*\
  !*** ./src/app/error/page403/page403.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n  <div class=\"mdl-layout-spacer\"></div>\n  <div class=\"mdl-cell mdl-cell--8-col mdl-shadow--2-dp\" align=\"center\">\n      <h1 class=\"color-transition\">403 Forbidden Access</h1>\n      <h2>Check the console log</h2>\n      <a  class=\"back-btn\" mat-button routerLink=\"/company\">Back</a>\n  </div>\n  <div class=\"mdl-layout-spacer\"></div>\n</div>"

/***/ }),

/***/ "./src/app/error/page403/page403.component.ts":
/*!****************************************************!*\
  !*** ./src/app/error/page403/page403.component.ts ***!
  \****************************************************/
/*! exports provided: Page403Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page403Component", function() { return Page403Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page403Component = /** @class */ (function () {
    function Page403Component() {
    }
    Page403Component.prototype.ngOnInit = function () {
    };
    Page403Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page403',
            template: __webpack_require__(/*! ./page403.component.html */ "./src/app/error/page403/page403.component.html"),
            styles: [__webpack_require__(/*! ./page403.component.css */ "./src/app/error/page403/page403.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Page403Component);
    return Page403Component;
}());



/***/ }),

/***/ "./src/app/error/page404/page404.component.css":
/*!*****************************************************!*\
  !*** ./src/app/error/page404/page404.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mdl-grid{\r\n    /* background-image: url(http://backgroundcheckall.com/wp-content/uploads/2017/12/blurred-background-app-9.jpg); */\r\n    background-image: url(http://i66.tinypic.com/23vc9ar.png);\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    height: 98.35%;\r\n}\r\n.center{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    color: #FFF;\r\n    display: \"block\";\r\n    vertical-align :middle;\r\n}\r\nh1{\r\n  margin-top:50%;\r\n  font-family: 'Quicksand';\r\n  color: #FFF;\r\n  font-weight: bold;\r\n  \r\n}\r\n@media screen and (max-width: 768px) {\r\n    h1{\r\n        margin-top:100%;\r\n        font-size:20px;\r\n        color: #FFF;\r\n        font-weight: bold;\r\n    }\r\n    h2{\r\n        font-size:15px;\r\n        color: #FFF;\r\n        font-weight: bold;\r\n    }\r\n}\r\nh2{\r\n  font-family: 'Quicksand';\r\n  color: #FFF;\r\n  font-weight: bold;\r\n  \r\n}\r\n.back-btn{\r\n    font-family: 'Quicksand';\r\n    color: #FFF;\r\n    background-color: #00E676;\r\n}"

/***/ }),

/***/ "./src/app/error/page404/page404.component.html":
/*!******************************************************!*\
  !*** ./src/app/error/page404/page404.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n  <div class=\"mdl-layout-spacer\"></div>\n  <div class=\"mdl-cell mdl-cell--8-col mdl-shadow--2-dp\" align=\"center\">\n      <h1 class=\"color-transition\">403 Forbidden Access</h1>\n      <h2>Check the console log</h2>\n      <a class=\"back-btn\" mat-button routerLink=\"/company\">Back</a>\n  </div>\n  <div class=\"mdl-layout-spacer\"></div>\n</div>"

/***/ }),

/***/ "./src/app/error/page404/page404.component.ts":
/*!****************************************************!*\
  !*** ./src/app/error/page404/page404.component.ts ***!
  \****************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page404Component = /** @class */ (function () {
    function Page404Component() {
    }
    Page404Component.prototype.ngOnInit = function () {
    };
    Page404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page404',
            template: __webpack_require__(/*! ./page404.component.html */ "./src/app/error/page404/page404.component.html"),
            styles: [__webpack_require__(/*! ./page404.component.css */ "./src/app/error/page404/page404.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Page404Component);
    return Page404Component;
}());



/***/ }),

/***/ "./src/app/guards/admin.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = /** @class */ (function () {
    function AdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        var level = Number(localStorage.getItem('level'));
        if (this.authService.adminMenu()) {
            return true;
        }
        this.router.navigate(['/dashboard']);
        return false;
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// class Permissions{
//   canActivate(user, token):boolean{
//     return true;
//   }
// }
var AuthGuard = /** @class */ (function () {
    function AuthGuard(
    // private permissions : Permissions,
    router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var user;
        var token;
        var level;
        if (this.authService.loggedIn(user, token, level)) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            console.log('Please login first.');
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card{\n  margin: auto;\n}\nh5{\n  font-family: 'Quicksand';\n  text-align: center;\n}\nmat-card-content{\n  width: 100%;\n}\n.login-container {\n  display: flex;\n  flex-direction: column;\n}\n.login-header-image {\n  background-image: url('http://i68.tinypic.com/352hg79.png');\n  background-size: cover;\n}\n.login-container > * {\n  width: 100%;\n}\n.login-card{\n  position: relative;\n  padding: 8px;\n  margin:auto;\n  border-top-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  background-color: #FFF;\n  color: #FFC107;\n  width: 400px;\n}\n.flash-message {\n  color: #FFC107;\n  font-family: 'Quicksand';\n  font-weight: bold;\n  text-align: center;\n  border-radius: 3px;\n}\n.white-text{\n  color:#FFF;\n}\n.mat-raised-button{\n  background-color: #FFC107;\n  color: #FFF;\n}\n.header-login-card{\n  border-top-left-radius: 8px;\n  background-color: #FFC107;\n  color: #FFF;\n}\n.header-transition-background{\n\tbackground: linear-gradient(-45deg, #F44336, #E65100, #FFC400, #00E676, #FFC400, #E65100, #F44336);\n\tbackground-size: 400% 400%;\n\t-webkit-animation: Gradient 15s ease infinite;\n\tanimation: Gradient 15s ease infinite;\n}\n@-webkit-keyframes Gradient {\n\t0% {\n\t\tbackground-position: 0% 50%\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%\n\t}\n}\n@keyframes Gradient {\n\t0% {\n\t\tbackground-position: 0% 50%\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%\n\t}\n}\n.mdl-grid{\n  /* background-image: url(http://backgroundcheckall.com/wp-content/uploads/2017/12/blurred-background-app-9.jpg); */\n  background-image: url(http://i66.tinypic.com/23vc9ar.png);\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 98.35%;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n\n<mat-card class=\"login-card mat-elevation-z2\">\n  <mat-card-header class=\"header-login-card\"  matTooltip=\"Informasi Riwayat Tempat Praktik Industri Mahasiswa Jurusan Pendidikan Teknik Elektronika & Informatika Fakultas Teknik Universitas Negeri Yogyakarta\">\n      <mat-card-title><h5>Internship Program Tracer</h5></mat-card-title>\n      <mat-card-subtitle><label class=\"white-text\">Jurusan Pendidikan Teknik Elektronika & Informatika Fakultas Teknik Universitas Negeri Yogyakarta</label></mat-card-subtitle>\n  </mat-card-header>\n  \n  <div class=\"flash-message\">\n    <mat-card-content>\n      <flash-message>\n      </flash-message>\n    </mat-card-content>\n  </div>\n  \n  <mat-card-content>\n    <mat-tab-group class=\"login-tab-group\">\n      <mat-tab label=\"Masuk\">\n        <div class=\"login-tab-content\">\n          <h5 class=\"\"><b>Masuk</b></h5>\n          <form (submit)=\"loginUser($event)\">\n          <div class=\"login-container\">\n            <mat-form-field hintLabel=\"Min/Max 11 Angka\">\n              <input name=\"nim\" [(ngModel)]=\"nim\" matInput #input minlength=\"11\" maxlength=\"11\" type=\"number\" placeholder=\"NIM\" required>\n              <mat-icon matSuffix matTooltip=\"Masukkan NIM mahasiswa yang telah terdaftar.\">credit_card</mat-icon>\n              <mat-hint align=\"end\"></mat-hint>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n              <input name=\"password\" [(ngModel)]=\"password\" minlength=\"6\" matInput placeholder=\"Masukkan Password\" [type]=\"hide ? 'password' : 'text'\" required>\n              <mat-icon matSuffix matTooltip=\"Masukkan Password sesuai dengan NIM yang telah terdaftar.\" (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n            </mat-form-field>\n            <div align=\"right\">\n              <button mat-raised-button color=\"primary\">Masuk</button>\n            </div>\n            <div align=\"left\"> \n              <!-- <a href=\"#\">Lupa password?</a> -->\n            </div>\n          </div>\n        </form>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Daftar\">\n        <div class=\"register-tab-content\">\n          <h5>Daftar</h5>\n  \n          <form (submit)=\"registerUser($event)\">\n          <div class=\"login-container\">\n            <mat-form-field>\n              <input name=\"nim\" [(ngModel)]=\"nim\" matInput #input type=\"number\" placeholder=\"NIM\" required>\n              <mat-icon matSuffix matTooltip=\"Masukkan Nomor Induk Mahasiswa dengan benar.\">credit_card</mat-icon>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n              <input name=\"nama\" [(ngModel)]=\"nama\" matInput #input maxlength=\"40\" type=\"text\" placeholder=\"Nama Lengkap\" required>\n              <mat-icon matSuffix matTooltip=\"Masukkan Nama Lengkap\" >person</mat-icon>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n              <input name=\"email\" [(ngModel)]=\"email\" matInput #input maxlength=\"40\" type=\"text\" placeholder=\"E-mail\" required>\n              <mat-icon matSuffix matTooltip=\"Masukkan Email UNY / Email Aktif\" >mail</mat-icon>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n              <input name=\"password\" [(ngModel)]=\"password\" matInput placeholder=\"Masukkan Password\" [type]=\"hide ? 'password' : 'text'\" required>\n              <mat-icon matSuffix matTooltip=\"Masukkan Password dengan benar\"  (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n              <input name=\"repassword\" [(ngModel)]=\"repassword\" matInput placeholder=\"Masukkan Password\" [type]=\"hide ? 'password' : 'text'\" required>\n              <mat-icon matSuffix  matTooltip=\"Masukkan Password dengan benar\" (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n            </mat-form-field>\n            <br>\n            <mat-slide-toggle (change)=\"onChange($event)\" matTooltip=\"Apabila sudah Praktik Industri, silahkan pilih.\">\n              Sudah Praktik Industri\n            </mat-slide-toggle>\n            <br>\n            <div align=\"right\">\n              <button mat-raised-button class=\"login-btn\">Daftar</button>\n            </div>\n          </div>\n          </form>\n        </div>\n      </mat-tab>\n    </mat-tab-group>\n  </mat-card-content>\n  <!-- <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions> -->\n  <mat-divider></mat-divider>\n  <div align=\"center\">\n    <br>\n      Copyright © 2018 - <a href=\"https://instagram.com/fatihrizqon\">Fatih</a> PTIF UNY 2014 \n      <!-- Material Design oleh <a href=\"https://material.angular.io/\">Material Angular</a> -->\n  </div>\n</mat-card>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var angular_flash_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-flash-message */ "./node_modules/angular-flash-message/dist/index.js");
/* harmony import */ var angular_flash_message__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular_flash_message__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, validateService, flashMessage, authService, snackBar, zone) {
        this.router = router;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.snackBar = snackBar;
        this.zone = zone;
        this.hide = true;
        this.status = 0;
        console.log('🍕 You are running on MEAN Stack App 🍕');
        console.log('Touch me on : http://instagram.com/fatihrizqon');
        var token = localStorage.getItem('id_token');
        if (token) {
            this.router.navigate(['/dashboard']);
        }
    }
    LoginComponent.prototype.onChange = function (value) {
        if (value.checked === true) {
            this.status = 1;
            this.precision = 0;
            this.recall = 1;
        }
        else {
            this.status = 0;
            this.precision = 1;
            this.recall = 0;
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.registerUser = function (e) {
        var _this = this;
        var user = {
            nama: this.nama,
            email: this.email,
            nim: this.nim,
            password: this.password,
            repassword: this.repassword,
            precision: this.precision,
            recall: this.recall,
            status: this.status,
            level: 0
        };
        // Form Validation
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.warning('PERHATIAN : Harap isi semua form.', { delay: 5000 });
            return false;
        }
        // Password Validation
        if (!this.validateService.validatePassword(user)) {
            this.flashMessage.warning('PERHATIAN : Password tidak cocok.', { delay: 5000 });
            return false;
        }
        // Email Validation
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.warning('PERHATIAN : Email salah.', { delay: 5000 });
            return false;
        }
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.success('PESAN : Anda Telah Terdaftar, silahkan login.', { delay: 5000 });
                _this.router.navigate(['/']);
            }
            else {
                _this.flashMessage.warning('PERHATIAN : ' + data.msg, { delay: 5000 });
                _this.router.navigate(['/']);
            }
        });
    };
    LoginComponent.prototype.loginUser = function (e) {
        var _this = this;
        var user = {
            nim: this.nim,
            password: this.password
        };
        // Form Validation
        if (!this.validateService.validateLogin(user)) {
            this.flashMessage.warning('PERHATIAN : Harap isi semua form.', { delay: 5000 });
            return false;
        }
        this.authService.loginUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.warning('PERHATIAN : ' + data.msg, { delay: 5000 });
                _this.router.navigate(['/']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            angular_flash_message__WEBPACK_IMPORTED_MODULE_4__["FlashMessage"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".admin-btn{\n    color: #FFF;\n    background-color: #FFC107;\n}\n.profile-body{\n    background-color: #FFF;\n    height: 100%;\n}\nh5{\n    font-family: 'Quicksand';\n    text-align: center;\n}\nmat-card {\n    transition: none !important;\n    box-shadow: none !important;\n}\n.profile-card {\n    font-family: 'Quicksand';\n}\n.profile-header-image {\n    background-image: url('https://ssl.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png');\n    background-size: cover;\n    font-family: 'Quicksand';\n}\n.profile-card-content{\n    font-family: 'Quicksand';\n    flex: 1 1 auto;\n}\n.table-responsive {\n    min-height: .01%;\n    overflow-x: auto;\n}\n@media screen and (max-width: 767px) {\n    .table-responsive {\n        width: 100%;\n        margin-bottom: 15px;\n        overflow-y: hidden;\n        -ms-overflow-style: -ms-autohiding-scrollbar;\n        border: 1px solid #ddd;\n    }\n    .table-responsive > .table {\n        margin-bottom: 0;\n    }\n    .table-responsive > .table > thead > tr > th,\n    .table-responsive > .table > tbody > tr > th,\n    .table-responsive > .table > tfoot > tr > th,\n    .table-responsive > .table > thead > tr > td,\n    .table-responsive > .table > tbody > tr > td,\n    .table-responsive > .table > tfoot > tr > td {\n        white-space: nowrap;\n    }\n    .table-responsive > .table-bordered {\n        border: 0;\n    }\n    .table-responsive > .table-bordered > thead > tr > th:first-child,\n    .table-responsive > .table-bordered > tbody > tr > th:first-child,\n    .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n    .table-responsive > .table-bordered > thead > tr > td:first-child,\n    .table-responsive > .table-bordered > tbody > tr > td:first-child,\n    .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n        border-left: 0;\n    }\n    .table-responsive > .table-bordered > thead > tr > th:last-child,\n    .table-responsive > .table-bordered > tbody > tr > th:last-child,\n    .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n    .table-responsive > .table-bordered > thead > tr > td:last-child,\n    .table-responsive > .table-bordered > tbody > tr > td:last-child,\n    .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n        border-right: 0;\n    }\n    .table-responsive > .table-bordered > tbody > tr:last-child > th,\n    .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n    .table-responsive > .table-bordered > tbody > tr:last-child > td,\n    .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n        border-bottom: 0;\n    }\n}\n.full-field{\n    width: 100%;\n}\n.account-container {\n    display: flex;\n    flex-direction: column;\n  }\n.account-container  > * {\n    width: 100%;\n  }\n.add-btn{\n    color:  #FFC107;\n  }\n.edit-btn{\n    color : #1E88E5;\n  }\n.save-btn{\n    background-color : #FFC107;\n    color: #FFF;\n  }\n.delete-btn{\n    background-color: #EF5350;\n    color:#FFF;\n  }\n.flash-message {\n    color: #FFC107;\n    font-family: 'Quicksand';\n    font-weight: bold;\n    text-align: center;\n    border-radius: 3px;\n  }"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"profile-body\">\n  <mat-card class=\"profile-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"profile-header-image\"></div>\n      <mat-card-title *ngFor=\"let data of results\">{{data.nim}}</mat-card-title>\n      <mat-card-subtitle *ngFor=\"let data of results\">{{data.nama}}</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content class=\"profile-card-content\">\n      <mat-accordion> \n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Informasi Umum\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <hr>\n          <mat-list> \n            <table>\n              <tbody>\n              <tr>\n                  <td><label>NIM</label></td>\n                  <td *ngFor=\"let data of results\">{{data.nim}}</td>\n              </tr>\n              <tr>\n                  <td>Nama</td>\n                  <td *ngFor=\"let data of results\">{{data.nama}}</td>\n              </tr>\n              <tr>\n                  <td>Jurusan</td>\n                  <td>Pendidikan Teknik Elektronika dan Informatika</td>\n              </tr>\n              <tr>\n                  <td>Program Studi</td>\n                  <td *ngFor=\"let data of results\">{{data.prodi}}</td>\n              </tr>\n              <tr>\n                  <td>Angkatan</td>\n                  <td *ngFor=\"let data of results\">{{data.angkatan}}</td>\n              </tr>\n              </tbody>\n            </table>\n          </mat-list>\n          <div align=\"right\">\n              <button class=\"admin-btn\" mat-raised-button routerLink=\"/admin\" *ngIf=\"authService.adminMenu()\">Admin</button>\n          </div>\n          \n        </mat-expansion-panel>\n\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Riwayat Tempat Praktik Industri\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <form (submit)=\"updateProfileCompany()\">\n\n          <mat-form-field>\n              <mat-select name=\"company\" [(ngModel)]=\"company\" #companyValue placeholder=\"Pilih Perusahaan\">\n                  <mat-option *ngFor=\"let company of companies\" [value]=\"company._id\">\n                  {{company.perusahaan}}\n                  </mat-option>\n                </mat-select>\n          </mat-form-field>\n\n          <div align=\"right\">\n            <button mat-raised-button class=\"save-btn\">Simpan</button>\n          </div>\n          </form>\n          <br>\n          Perusahaan Belum Tercantum? <a routerLink=\"/company\">Tambah Disini</a>\n          <hr>\n          <mat-list> \n              <table>\n                <tbody>\n                <tr>\n                    <td>Nama Perusahaan</td>\n                    <td *ngFor=\"let data of results\">{{data.perusahaan}}</td>\n                </tr>\n                <tr>\n                    <td>Alamat</td>\n                    <td *ngFor=\"let data of results\">{{data.alamat}}</td>\n                </tr>\n                <tr>\n                    <td>Email Perusahaan</td>\n                    <td *ngFor=\"let data of results\">{{data.email_perusahaan}}</td>\n                </tr>\n                <tr>\n                    <td>Website</td>\n                    <td *ngFor=\"let data of results\"><a target=\"_blank\" href=\"http://www.{{data.website}}\">{{data.website}}</a></td>\n                </tr>\n                <tr>\n                    <td>Telepon</td>\n                    <td *ngFor=\"let data of results\">{{data.telepon}}</td>\n                </tr>\n                <tr>\n                    <td>Bidang</td>\n                    <td *ngFor=\"let data of results\">{{data.kategori}}</td>\n                </tr>\n                </tbody>\n              </table>\n          </mat-list>\n          <div align=\"right\">\n            <button mat-raised-button class=\"delete-btn\" (click)=\"resetProfileCompany()\">Hapus Riwayat</button>\n          </div>\n        </mat-expansion-panel>\n\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Informasi Akun\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n  \n          <div class=\"flash-message\">\n            <mat-card-content>\n              <flash-message>\n              </flash-message>\n            </mat-card-content>\n          </div>\n\n          <form (submit)=\"updateAccount($event)\">\n          <div class=\"account-container\">\n              <mat-form-field>\n                  <input name=\"nim\" [(ngModel)]=\"nim\" matInput #input type=\"number\" placeholder=\"NIM\" required>\n                  <mat-icon matSuffix matTooltip=\"Masukkan Nomor Induk Mahasiswa dengan benar.\">credit_card</mat-icon>\n                </mat-form-field>\n                <br>\n                <mat-form-field>\n                  <input name=\"nama\" [(ngModel)]=\"nama\" matInput #input maxlength=\"40\" type=\"text\" placeholder=\"Nama Lengkap\" required>\n                  <mat-icon matSuffix matTooltip=\"Masukkan Nama Lengkap\" >person</mat-icon>\n                </mat-form-field>\n                <br>\n                <mat-form-field>\n                  <input name=\"email\" [(ngModel)]=\"email\" matInput #input maxlength=\"40\" type=\"text\" placeholder=\"E-mail\" required>\n                  <mat-icon matSuffix matTooltip=\"Masukkan Email UNY / Email Aktif\" >mail</mat-icon>\n                </mat-form-field>\n                <br>\n                <mat-form-field>\n                  <input name=\"password\" [(ngModel)]=\"password\" matInput placeholder=\"Masukkan Password\" [type]=\"hide ? 'password' : 'text'\" required>\n                  <mat-icon matSuffix matTooltip=\"Masukkan Password dengan benar\"  (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n                </mat-form-field>\n                <br>\n                <mat-form-field>\n                  <input name=\"repassword\" [(ngModel)]=\"repassword\" matInput placeholder=\"Masukkan Password\" [type]=\"hide ? 'password' : 'text'\" required>\n                  <mat-icon matSuffix  matTooltip=\"Masukkan Password dengan benar\" (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n                </mat-form-field>\n                <br>\n                <div align=\"right\">\n                    <button class=\"save-btn\" mat-raised-button (click)=\"updateAccount()\">Simpan</button>\n                </div>\n          </div>\n          </form>\n        </mat-expansion-panel>\n      </mat-accordion>\n    </mat-card-content>\n  </mat-card>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/company.service */ "./src/services/company.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/validate.service */ "./src/services/validate.service.ts");
/* harmony import */ var angular_flash_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-flash-message */ "./node_modules/angular-flash-message/dist/index.js");
/* harmony import */ var angular_flash_message__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular_flash_message__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, route, companyService, http, validateService, flashMessage, authService) {
        this.router = router;
        this.route = route;
        this.companyService = companyService;
        this.http = http;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.hide = true;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.results = profile.results;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.companyService.getCompanies().subscribe(function (companies) {
            _this.companies = companies;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.updateProfileCompany = function () {
        var _this = this;
        var getUser = localStorage.getItem('user');
        getUser = JSON.parse(getUser);
        var id_student = getUser["id"];
        var nim = getUser["nim"];
        var nama = getUser["nama"];
        var email = getUser["email"];
        var company = this.company;
        var user = {
            id: id_student,
            nama: nama,
            email: email,
            nim: nim,
            company: this.company
        };
        if (user.company != undefined) {
            this.authService.updateProfileCompany(user)
                .subscribe(function (user) { _this.user = user; });
            this.router.navigate(['companies/' + this.company]);
        }
    };
    ProfileComponent.prototype.updateAccount = function () {
        var _this = this;
        var user = {
            nim: this.nim,
            nama: this.nama,
            email: this.email,
            password: this.password,
            repassword: this.repassword
        };
        // Form Validation
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.warning('PERHATIAN : Harap isi semua form.', { delay: 5000 });
            return false;
        }
        // Password Validation
        if (!this.validateService.validatePassword(user)) {
            this.flashMessage.warning('PERHATIAN : Password tidak cocok.', { delay: 5000 });
            return false;
        }
        // Email Validation
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.warning('PERHATIAN : Email salah.', { delay: 5000 });
            return false;
        }
        // Update Account
        this.authService.updateAccount(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.success('PESAN : Data Anda Telah Diperbarui.', { delay: 5000 });
                _this.router.navigate(['/']);
            }
            else {
                _this.flashMessage.warning('PERHATIAN : ' + data.msg, { delay: 5000 });
                _this.router.navigate(['/']);
            }
        });
    };
    ProfileComponent.prototype.resetProfileCompany = function (user) {
        var _this = this;
        this.authService.resetProfileCompany(user)
            .subscribe(function (user) { _this.user = user; });
        window.location.reload();
    };
    ProfileComponent.prototype.getCompanies = function () {
        var _this = this;
        this.companyService.getCompanies().subscribe(function (res) {
            _this.companies = res;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_6__["ValidateService"],
            angular_flash_message__WEBPACK_IMPORTED_MODULE_7__["FlashMessage"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/report/report.component.css":
/*!*********************************************!*\
  !*** ./src/app/report/report.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field{\r\n    width: 100%;\r\n}\r\nmat-card-avatar{\r\n    background-color: #FFC107;\r\n}\r\n.avatar-icon{ \r\n    color: #FFC107;\r\n    width: 100%;\r\n    height: auto;\r\n    background-size: cover;\r\n}\r\n.company-card{\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n.mdl-grid.center-items {\r\n    justify-content: center;\r\n}\r\n.mat-card-actions{\r\n    background-color: #FFC107;\r\n    color: #FFF;\r\n}\r\n.outer {\r\n    display: table;\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.middle {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n.inner {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 400px;\r\n    /*whatever width you want*/\r\n}\r\n.add-btn{\r\n    background-color: #FFC107;\r\n    color: #FFF;\r\n}\r\n.warning-card {\r\n    color: #FFC107;\r\n    font-family: 'Quicksand';\r\n    font-weight: bold;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/report/report.component.html":
/*!**********************************************!*\
  !*** ./src/app/report/report.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"mdl-grid\">\n  <div class=\"mdl-layout-spacer\"></div>\n  <div class=\"mdl-cell mdl-cell--8-col\" *ngIf=\"company\">\n      <mat-card class=\"company-card\">\n          <mat-divider></mat-divider>\n          <br>\n          <mat-card-header>\n            <div mat-card-avatar><mat-icon class=\"avatar-icon\">business</mat-icon></div>\n            <mat-card-title>{{company.perusahaan}}</mat-card-title>\n            <mat-card-subtitle>\n              {{company.alamat}}\n            </mat-card-subtitle>\n          </mat-card-header>\n          <mat-card-content>\n            <table>\n              <tr>\n                <td><label>Email</label></td>\n                <td>: {{company.email_perusahaan}}</td>\n              </tr>\n              <tr>\n                <td><label>Telepon</label></td>\n                <td>: {{company.telepon}}</td>\n              </tr>\n              <tr>\n                <td><label>Website</label></td>\n                <td>: <a target=\"_blank\" href=\"http://{{company.website}}\">{{company.website}}</a></td>\n              </tr>\n              <tr>\n                <td><label>Bidang</label></td>\n                <td>: {{company.kategori}}</td>\n              </tr>\n            </table>\n            <hr>\n            <p align=\"justify\">\n              {{company.deskripsi}}\n            </p>\n\n            <mat-divider></mat-divider>\n            \n            <div class=\"warning-card\">\n              <mat-card-content>\n                <flash-message>\n                </flash-message>\n              </mat-card-content>\n            </div>\n            <form>\n            <mat-form-field>\n              <input matInput name=\"title\" [(ngModel)]=\"title\"  placeholder=\"Judul Laporan\">\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n              <textarea name=\"text\" [(ngModel)]=\"text\"  rows=\"5\" cols=\"40\"  matInput placeholder=\"Deskripsi Laporan\"></textarea>\n            </mat-form-field>\n            <br>\n            <div align=\"right\">\n              <button mat-button class=\"add-btn\" (click)=\"addReport()\">Kirim</button>\n            </div>\n            </form>\n          </mat-card-content>\n      </mat-card>\n  </div>\n  <div class=\"mdl-layout-spacer\"></div>\n</div>"

/***/ }),

/***/ "./src/app/report/report.component.ts":
/*!********************************************!*\
  !*** ./src/app/report/report.component.ts ***!
  \********************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/company.service */ "./src/services/company.service.ts");
/* harmony import */ var _services_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/report.service */ "./src/services/report.service.ts");
/* harmony import */ var angular_flash_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-flash-message */ "./node_modules/angular-flash-message/dist/index.js");
/* harmony import */ var angular_flash_message__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular_flash_message__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/validate.service */ "./src/services/validate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportComponent = /** @class */ (function () {
    function ReportComponent(validateService, companyService, reportService, route, router, flashMessage) {
        this.validateService = validateService;
        this.companyService = companyService;
        this.reportService = reportService;
        this.route = route;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._id = this.route.snapshot.paramMap.get('id');
        this.companyService.getCompany(this._id).subscribe(function (company) {
            _this.company = company;
        });
    };
    ReportComponent.prototype.addReport = function () {
        var _this = this;
        user = localStorage.getItem('user');
        var user = JSON.parse(user);
        var nim = user["nim"];
        var report = {
            title: this.title,
            text: this.text,
            company: this._id,
            author: nim
        };
        if (!this.validateService.validateAddReport(report)) {
            this.flashMessage.warning('WARNING : Please fill in all fields.', { delay: 5000 });
            return false;
        }
        this.reportService.addReport(report).subscribe(function (report) {
            _this.report = report;
        });
        this.router.navigate(['companies/' + this._id]);
    };
    ReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.css */ "./src/app/report/report.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_5__["ValidateService"],
            _services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"],
            _services_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angular_flash_message__WEBPACK_IMPORTED_MODULE_4__["FlashMessage"]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/snackbar/logged-in/logged-in.component.css":
/*!************************************************************!*\
  !*** ./src/app/snackbar/logged-in/logged-in.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/snackbar/logged-in/logged-in.component.html":
/*!*************************************************************!*\
  !*** ./src/app/snackbar/logged-in/logged-in.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  logged-in works!\n</p>\n"

/***/ }),

/***/ "./src/app/snackbar/logged-in/logged-in.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/snackbar/logged-in/logged-in.component.ts ***!
  \***********************************************************/
/*! exports provided: LoggedInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInComponent", function() { return LoggedInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoggedInComponent = /** @class */ (function () {
    function LoggedInComponent() {
    }
    LoggedInComponent.prototype.ngOnInit = function () {
    };
    LoggedInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logged-in',
            template: __webpack_require__(/*! ./logged-in.component.html */ "./src/app/snackbar/logged-in/logged-in.component.html"),
            styles: [__webpack_require__(/*! ./logged-in.component.css */ "./src/app/snackbar/logged-in/logged-in.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoggedInComponent);
    return LoggedInComponent;
}());



/***/ }),

/***/ "./src/app/templates/admin-sidenav/admin-sidenav.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/templates/admin-sidenav/admin-sidenav.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".admin-container {\r\n  width: 100%;\r\n  height:100%;\r\n  background-color:#CFD8DC;\r\n}\r\n  \r\n  .admin-sidenav-content {\r\n    display: flex;\r\n    height: 100%;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  \r\n  .admin-sidenav {\r\n    background-color:#37474F;\r\n    color: #B2DFDB; \r\n  }\r\n  \r\n  mat-list{\r\n    width: 200px;\r\n  }\r\n  \r\n  .nav-list-btn{\r\n    text-align: left;\r\n    width: 100%;\r\n    font-family: 'Quicksand', sans-serif;\r\n    padding-top:5px;\r\n    padding-bottom:5px;\r\n  }\r\n  \r\n  .nav-list-btn:hover{\r\n    text-align: left;\r\n    width: 100%;\r\n    font-family: 'Quicksand', sans-serif;\r\n    background-color: #4DB6AC;\r\n    color:#FFF;\r\n    padding-top:5px;\r\n    padding-bottom:5px;\r\n  }"

/***/ }),

/***/ "./src/app/templates/admin-sidenav/admin-sidenav.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/templates/admin-sidenav/admin-sidenav.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/templates/admin-sidenav/admin-sidenav.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/templates/admin-sidenav/admin-sidenav.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSidenavComponent", function() { return AdminSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminSidenavComponent = /** @class */ (function () {
    function AdminSidenavComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        var user = localStorage.getItem('user');
        var token = localStorage.getItem('id_token');
        var level = Number(localStorage.getItem('level'));
        if (!this.authService.loggedIn(user, token, level)) {
            this.router.navigate(['/']);
            console.log('Please login first.');
        }
    }
    AdminSidenavComponent.prototype.ngOnInit = function () { };
    AdminSidenavComponent.prototype.logoutUser = function () {
        this.authService.logoutUser();
        this.router.navigate(['/']);
    };
    AdminSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-sidenav',
            template: __webpack_require__(/*! ./admin-sidenav.component.html */ "./src/app/templates/admin-sidenav/admin-sidenav.component.html"),
            styles: [__webpack_require__(/*! ./admin-sidenav.component.css */ "./src/app/templates/admin-sidenav/admin-sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminSidenavComponent);
    return AdminSidenavComponent;
}());



/***/ }),

/***/ "./src/app/templates/admin-toolbar/admin-toolbar.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/templates/admin-toolbar/admin-toolbar.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatar{\r\n    color: #fff;\r\n    font-size: 20pt;\r\n}\r\n.mat-toolbar{\r\n    background-color: #00796B;\r\n    color: #B2DFDB;\r\n}\r\n.mat-raised-button{\r\n    background-color: #00796B;\r\n    color: #B2DFDB;\r\n}\r\n.mat-menu-button{\r\n    width: 200px;\r\n}\r\nmat-sidenav-container {\r\n    position: absolute;\r\n    top: 60px;\r\n    bottom: 60px;\r\n    left: 0;\r\n    right: 0;\r\n}\r\nmat-list{\r\n    width: 100%;\r\n}\r\n.list-button{\r\n    text-align:left;\r\n    width: 100%;\r\n    margin-bottom:5px;\r\n}\r\n.admin-container {\r\n    width: 100%;\r\n    height:auto;\r\n}\r\n.admin-sidenav-content {\r\n    display: flex;\r\n    height: 100%;\r\n    align-items: center;\r\n    justify-content: center;\r\n}    "

/***/ }),

/***/ "./src/app/templates/admin-toolbar/admin-toolbar.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/templates/admin-toolbar/admin-toolbar.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"mat-toolbar\" *ngIf=\"authService.loggedIn()\">\n  <button mat-icon-button (click)=\"sideNav.toggle()\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <span class=\"nav-spacer\"></span>\n  <button mat-icon-button fxShow=\"false\" fxShow.gt-sm [matMenuTriggerFor]=\"menu\"  *ngIf=\"authService.loggedIn()\">\n    <mat-icon class=\"avatar\">person</mat-icon>\n  </button>\n</mat-toolbar>\n\n<mat-menu #menu=\"matMenu\" style=\"width:100px;\" >\n  <button class=\"mat-menu-button\" mat-menu-item routerLink=\"/dashboard\"  *ngIf=\"authService.loggedIn()\">\n    <span>Home</span>\n  </button>\n  <button class=\"mat-menu-button\"  mat-menu-item routerLink=\"/profile\"  *ngIf=\"authService.loggedIn()\">\n    <span>Profile</span>\n  </button>\n  <button class=\"mat-menu-button\"  mat-menu-item routerLink=\"/data-tracer\" *ngIf=\"authService.loggedIn()\"> \n    <span>Data Tracer</span>\n  </button>\n  <button class=\"mat-menu-button\"  mat-menu-item (click)=\"logoutUser()\"  *ngIf=\"authService.loggedIn()\">\n    <span>Log Out</span>\n  </button>\n</mat-menu>\n\n<mat-sidenav-container autosize>\n    <mat-sidenav #sideNav mode=\"side\" opened>Sidenav List</mat-sidenav>\n    <mat-sidenav-content>Content</mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/templates/admin-toolbar/admin-toolbar.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/templates/admin-toolbar/admin-toolbar.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminToolbarComponent", function() { return AdminToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminToolbarComponent = /** @class */ (function () {
    function AdminToolbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.toggleSideNav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        var user = localStorage.getItem('user');
        var token = localStorage.getItem('id_token');
        var level = Number(localStorage.getItem('level'));
        if (!this.authService.loggedIn(user, token, level)) {
            this.router.navigate(['/']);
            console.log('Please login first.');
        }
    }
    AdminToolbarComponent.prototype.navToggle = function () {
        this.toggleSideNav.emit(true);
    };
    AdminToolbarComponent.prototype.ngOnInit = function () {
    };
    AdminToolbarComponent.prototype.logoutUser = function () {
        this.authService.logoutUser();
        this.router.navigate(['/']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AdminToolbarComponent.prototype, "toggleSideNav", void 0);
    AdminToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-toolbar',
            template: __webpack_require__(/*! ./admin-toolbar.component.html */ "./src/app/templates/admin-toolbar/admin-toolbar.component.html"),
            styles: [__webpack_require__(/*! ./admin-toolbar.component.css */ "./src/app/templates/admin-toolbar/admin-toolbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminToolbarComponent);
    return AdminToolbarComponent;
}());



/***/ }),

/***/ "./src/app/templates/footer/footer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/templates/footer/footer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/templates/footer/footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/templates/footer/footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\" color=\"primary\" *ngIf=\"authService.loggedIn()\" >\n  <p align=\"center\"></p>\n</div>\n"

/***/ }),

/***/ "./src/app/templates/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/templates/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var angular_flash_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-flash-message */ "./node_modules/angular-flash-message/dist/index.js");
/* harmony import */ var angular_flash_message__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_flash_message__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FooterComponent = /** @class */ (function () {
    function FooterComponent(router, flashMessage, authService) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.authService = authService;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.logoutUser = function () {
        this.authService.logoutUser();
        this.router.navigate(['/']);
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/templates/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/templates/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular_flash_message__WEBPACK_IMPORTED_MODULE_3__["FlashMessage"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/templates/header/header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/templates/header/header.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar{\r\n    background-color: #FFB300;\r\n    color: #FFF;\r\n}\r\n.mat-raised-button{\r\n    background-color: #FFB300;\r\n    color: #FFF;\r\n}\r\n.mat-menu-button{\r\n    width: 200px;\r\n}"

/***/ }),

/***/ "./src/app/templates/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/app/templates/header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mat-toolbar id=\"myToolbar\" *ngIf=\"authService.loggedIn()\">\n  <a style=\"text-decoration: none; color:#FFF;\" routerLink=\"/\"><mat-icon matSuffix>business</mat-icon></a>\n  <!-- This fills the remaining space of the current row -->\n  <span class=\"nav-spacer\"></span>\n  <div fxLayout=\"row\" fxShow=\"false\" fxShow.gt-sm *ngIf=\"authService.loggedIn()\" >\n      <a mat-button routerLink=\"/dashboard\">Home</a>\n      <a mat-button routerLink=\"/profile\">Profil</a>\n      <a mat-button routerLink=\"/data-tracer\">Data Tracer</a>\n      <a mat-button (click)=\"logoutUser()\">Sign Out</a>\n  </div>\n\n  <button mat-button fxHide=\"false\" fxHide.gt-sm [matMenuTriggerFor]=\"menu\" *ngIf=\"authService.loggedIn()\">\n    <mat-icon>menu</mat-icon>\n  </button>\n</mat-toolbar>\n\n<!-- \n  <mat-toolbar>\n    <button mat-button>\n        Admin Mode\n    </button>\n    <span class=\"nav-spacer\"></span>\n    <div fxLayout=\"row\" fxShow=\"false\" fxShow.gt-sm *ngIf=\"authService.loggedIn()\" >\n        <a mat-button (click)=\"logoutUser()\">Sign Out</a>\n    </div>\n</mat-toolbar>\n-->\n\n<mat-menu #menu=\"matMenu\" style=\"width:100px;\">\n<button class=\"mat-menu-button\" mat-menu-item routerLink=\"/dashboard\" *ngIf=\"authService.loggedIn()\" >\n  <span>Home</span>\n</button>\n<button class=\"mat-menu-button\"  mat-menu-item routerLink=\"/profile\" *ngIf=\"authService.loggedIn()\" >\n  <span>Profile</span>\n</button>\n<button class=\"mat-menu-button\"  mat-menu-item routerLink=\"/data-tracer\" *ngIf=\"authService.loggedIn()\" >\n  <span>Data Tracer</span>\n</button>\n<button class=\"mat-menu-button\"  mat-menu-item (click)=\"logoutUser()\" *ngIf=\"authService.loggedIn()\" >\n  <span>Log Out</span>\n</button>\n</mat-menu>\n"

/***/ }),

/***/ "./src/app/templates/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/templates/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var angular_flash_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-flash-message */ "./node_modules/angular-flash-message/dist/index.js");
/* harmony import */ var angular_flash_message__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_flash_message__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, flashMessage, authService) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.authService = authService;
        var user = localStorage.getItem('user');
        var token = localStorage.getItem('id_token');
        var level = Number(localStorage.getItem('level'));
        if (!this.authService.loggedIn(user, token, level)) {
            this.router.navigate(['/']);
            console.log('Please login first.');
        }
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            return false;
        });
    };
    // adminMenu(){
    //   const level = Number(localStorage.getItem('level'));
    //   if(level == 1){
    //     return true;
    //   }
    // }
    HeaderComponent.prototype.logoutUser = function () {
        this.authService.logoutUser();
        this.router.navigate(['/']);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/templates/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/templates/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular_flash_message__WEBPACK_IMPORTED_MODULE_3__["FlashMessage"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(function () {
        if ('serviceWorker' in navigator && _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            navigator.serviceWorker.register('/ngsw-worker.js');
        }
    })
        .catch(function (err) { return console.log(err); });
});


/***/ }),

/***/ "./src/material.module.ts":
/*!********************************!*\
  !*** ./src/material.module.ts ***!
  \********************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { MatButtonModule } from  '@angular/material';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatListModule } from '@angular/material/list';
// import { MatIconModule} from '@angular/material/icon';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatChipsModule } from '@angular/material/chips';
// import { MatCardModule } from '@angular/material/card';

// import { MatInputModule } from '@angular/material/input';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { MatSelectModule } from '@angular/material/select';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { MatDatepickerModule } from '@angular/material/datepicker';

var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/models/company.model.ts":
/*!*************************************!*\
  !*** ./src/models/company.model.ts ***!
  \*************************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
var Company = /** @class */ (function () {
    function Company() {
        this.students = [];
    }
    return Company;
}());



/***/ }),

/***/ "./src/services/auth.service.ts":
/*!**************************************!*\
  !*** ./src/services/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
        // private baseUri:String='';
        this.baseUri = 'http://localhost:8080/';
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUri + 'users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateAccount = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.baseUri + 'users/updateAccount', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loginUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUri + 'users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUsers = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.baseUri + 'users', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        var users = localStorage.getItem(this.user);
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.baseUri + 'users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.resetProfileCompany = function (user) {
        this.loadToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.baseUri + 'users/reset', user, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    AuthService.prototype.updateProfileCompany = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        var users = localStorage.getItem(this.user);
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.baseUri + 'users/update', user, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    AuthService.prototype.upgrade = function (user) {
        var level = localStorage.getItem('level');
        if (level == '0') {
            localStorage.setItem('level', '1');
        }
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        var users = localStorage.getItem(this.user);
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.baseUri + 'users/upgrade', user, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.getUserData = function (user) {
        localStorage.getItem(user);
        this.user = user;
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('level', user.level);
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loggedIn = function (token, user, level) {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["tokenNotExpired"])('id_token', user);
    };
    AuthService.prototype.isLogin = function (token, user) {
        if (!token && !user) {
            return false;
        }
    };
    AuthService.prototype.adminMenu = function () {
        var level = Number(localStorage.getItem('level'));
        if (level == 2) {
            return true;
        }
    };
    AuthService.prototype.moderatorMenu = function () {
        var level = Number(localStorage.getItem('level'));
        if (level == 1 || level > 1) {
            return true;
        }
    };
    AuthService.prototype.logoutUser = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/services/company.service.ts":
/*!*****************************************!*\
  !*** ./src/services/company.service.ts ***!
  \*****************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyService = /** @class */ (function () {
    function CompanyService(http) {
        this.http = http;
        // private baseUri:String='';  
        this.baseUri = 'http://localhost:8080/';
    }
    CompanyService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    CompanyService.prototype.addCompany = function (company) {
        this.loadToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUri + 'companies/addCompany', company, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CompanyService.prototype.updateCompany = function (company) {
        this.loadToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.baseUri + 'companies/updateCompany', company, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CompanyService.prototype.deleteCompany = function (_id) {
        this.loadToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.baseUri + 'companies/deleteCompany/' + _id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CompanyService.prototype.getCompanies = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.baseUri + 'companies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CompanyService.prototype.getCompany = function (_id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.baseUri + 'companies/' + _id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CompanyService.prototype.setter = function (company) {
        this.company = company;
    };
    CompanyService.prototype.getter = function () {
        return this.company;
    };
    CompanyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CompanyService);
    return CompanyService;
}());



/***/ }),

/***/ "./src/services/report.service.ts":
/*!****************************************!*\
  !*** ./src/services/report.service.ts ***!
  \****************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportService = /** @class */ (function () {
    function ReportService(http) {
        this.http = http;
        // private baseUri:String='';
        this.baseUri = 'http://localhost:8080/';
    }
    // private baseUri:String='http://192.168.100.10:3000';
    ReportService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    ReportService.prototype.getReports = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.baseUri + 'reports', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ReportService.prototype.getReport = function (_id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.baseUri + 'reports/' + _id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ReportService.prototype.addReport = function (report) {
        this.loadToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUri + 'reports/addReport', report, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ReportService.prototype.deleteReport = function (_id) {
        this.loadToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.baseUri + 'reports/deleteReport/' + _id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ReportService.prototype.setter = function (report) {
        this.report = report;
    };
    ReportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "./src/services/validate.service.ts":
/*!******************************************!*\
  !*** ./src/services/validate.service.ts ***!
  \******************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.nama == undefined || user.email == undefined || user.nim == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateLogin = function (user) {
        if (user.nim == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validatePassword = function (user) {
        if (user.password != user.repassword) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateAddCompany = function (company) {
        if (company.perusahaan == undefined || company.alamat == undefined || company.email_perusahaan == undefined || company.telepon == undefined || company.deskripsi == undefined || company.website == undefined || company.kategori == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateAddReport = function (report) {
        if (report.title == undefined || report.text == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\mean\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const users_module_1 = require("./users/users.module");
const vacancy_module_1 = require("./vacancy/vacancy.module");
const workExperiences_module_1 = require("./workExperiences/workExperiences.module");
const middleware_1 = require("./conception/middleware");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const resume_module_1 = require("./resume/resume.module");
const industry_module_1 = require("./Industry/industry.module");
const education_module_1 = require("./education/education.module");
const company_module_1 = require("./company/company.module");
const application_module_1 = require("./application/application.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(middleware_1.JwtMiddleware)
            .forRoutes('company');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            users_module_1.UsersModule,
            vacancy_module_1.VacancyModule,
            workExperiences_module_1.WorkExperiencesModule,
            resume_module_1.ResumeModule,
            industry_module_1.IndustryModule,
            education_module_1.EducationModule,
            company_module_1.CompanyModule,
            application_module_1.ApplicationModule,
            jwt_1.JwtModule.register({
                secret: 'secret',
                signOptions: { expiresIn: '1h' },
            }),
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
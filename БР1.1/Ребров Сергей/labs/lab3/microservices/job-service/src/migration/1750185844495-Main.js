"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main1750185844495 = void 0;
class Main1750185844495 {
    constructor() {
        this.name = 'Main1750185844495';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "Job" DROP CONSTRAINT "FK_49e7fe616ab0301bd31084eac9e"`);
            yield queryRunner.query(`ALTER TABLE "Job" ALTER COLUMN "user_id" SET NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "Job" DROP COLUMN "experience"`);
            yield queryRunner.query(`ALTER TABLE "Job" ADD "experience" character varying(256) NOT NULL`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "Job" DROP COLUMN "experience"`);
            yield queryRunner.query(`ALTER TABLE "Job" ADD "experience" character varying(100) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "Job" ALTER COLUMN "user_id" DROP NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "Job" ADD CONSTRAINT "FK_49e7fe616ab0301bd31084eac9e" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
}
exports.Main1750185844495 = Main1750185844495;

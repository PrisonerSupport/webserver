"use strict";
/**
 * Unit tests for the auth server utilities
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const db_utils_1 = require("../../../src/servers/auth/db_utils");
const Errors = __importStar(require("../../../src/servers/errors"));
const mocha_1 = require("mocha");
const chai_1 = require("chai");
mocha_1.describe('Authentication database integration testing', function () {
    this.beforeAll(function () {
        return __awaiter(this, void 0, void 0, function* () {
        });
    });
    mocha_1.describe('User insertion', function () {
        mocha_1.it('inserts user', function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield db_utils_1.insertUser('user1', 'User 1', 'email', 'password');
            });
        });
        mocha_1.it('fails at duplicate user entry', function () {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield db_utils_1.insertUser('user1', 'Other User Name', 'email', 'otherPassword');
                }
                catch (err) {
                    chai_1.expect(err.name == Errors.DuplicateEntryError.name);
                }
            });
        });
    });
    mocha_1.describe('User authentication', function () {
        mocha_1.it('authenticates the correct password of a user', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const shouldBeTrue = yield db_utils_1.authenticate('user1', 'password');
                chai_1.expect(shouldBeTrue);
            });
        });
        mocha_1.it('fails to authenticate wrong password of a user'), function () {
            return __awaiter(this, void 0, void 0, function* () {
                const shouldBeFalse = yield db_utils_1.authenticate('user1', 'wrongpassword');
                chai_1.expect(!shouldBeFalse);
            });
        };
        mocha_1.it('properly throws error for non-existent user', function () {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield db_utils_1.authenticate('nonExistentUser', 'password');
                }
                catch (err) {
                    chai_1.expect(err.name == Errors.NotFoundError.name);
                }
            });
        });
    });
});

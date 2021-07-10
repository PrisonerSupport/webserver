"use strict";
/**
 * DB UTILITIES FOR `RESOURCES` DATABASE
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
const constants_1 = require("./constants");
const Errors = __importStar(require("../errors"));
// -- DB QUERY TOOLS -- 
// INSERT
/**
 * Inserts a new entry into the `prisoner` table of the `resources` database.
 *
 * @param prisoner - the prisoner info to populate the entry
 */
function insertPrisoner(prisoner) {
    return __awaiter(this, void 0, void 0, function* () {
        const resourceDB = yield constants_1.constants.RESOURCE_DB;
    });
}
/**
 * Inserts a new entry into the `facility` table of the `resources` database.
 *
 * @param facility - the facility info to populate the entry
 */
function insertFacility(facility) {
    return __awaiter(this, void 0, void 0, function* () {
        const resourceDB = constants_1.constants.RESOURCE_DB_POOL.promise();
        console.log(`Inserting new entry for facility with id: ${facility.id}`);
        try {
            // Check to see whether the facility entry already exists/
            // Entry for the facility already exists, throw duplicate error
        }
        catch (err) {
            if (err.name !== Errors.NotFoundError.name)
                throw err;
            // The entry wasn't found, good to insert new entry
            yield resourceDB.execute('INSERT INTO `facility` SET ?', [escape(facility)]);
        }
    });
}
// EDIT
// PULL BY ID
/**
 * Selects the entry in prisoner table of the resources database for the given prisoner page id, if one exists.
 *
 * @param pageId - the id for the prisoner's page.
 * @returns the full prisoner information as a Prisoner type.
 */
function selectPrisonerByPageId(pageId) {
    return __awaiter(this, void 0, void 0, function* () {
        const resourceDB = constants_1.constants.RESOURCE_DB_POOL.promise();
        console.log(`Querying 'prisoner' table in 'resources' for pageId: ${pageId}`);
        let [rows,] = yield resourceDB.execute('SELECT * FROM `prisoner` WHERE `pageId` = ?', [escape(pageId)]);
        if (!rows.length) {
            console.log(`Could not find any prisoner entries with pageId: ${pageId}.`);
            throw new Errors.NotFoundError(`No prisoner entry for pageId: ${pageId}.`);
        }
        return rows[0];
    });
}
/**
 * Selects the entry entry in the facility table of the resources database for the given facility id, if one exists.
 *
 * @param id - the id for the facility entry
 * @returns the full facility entry as a Facility type.
 */
function selectFacilityById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const resourceDB = constants_1.constants.RESOURCE_DB_POOL.promise();
        console.log(`Querying 'facility' table in 'resources' database for id: ${id}`);
        let [rows,] = yield resourceDB.execute('SELECT * FROM `facility` WHERE `id` = ?', [escape(id)]);
        if (!rows.length) {
            console.log(`Could not find any facility entries with id: ${id}.`);
            throw new Errors.NotFoundError(`No facility entry for id: ${id}`);
        }
        return rows[0];
    });
}

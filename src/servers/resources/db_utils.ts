/**
 * DB UTILITIES FOR `RESOURCES` DATABASE
 */

import { Schema, model } from 'mongoose';

import { constants } from './constants';
import * as Errors from '../errors';
import * as Types from './interfaces';

// -- DB QUERY TOOLS -- 

// INSERT

/**
 * Inserts a new entry into the `prisoner` table of the `resources` database.
 * 
 * @param prisoner - the prisoner info to populate the entry
 */
async function insertPrisoner(prisoner: Types.Prisoner) {
    const resourceDB = await constants.RESOURCE_DB;

    
}

/**
 * Inserts a new entry into the `facility` table of the `resources` database.
 * 
 * @param facility - the facility info to populate the entry
 */
async function insertFacility(facility: Facility) {
    const resourceDB = constants.RESOURCE_DB_POOL.promise();

    console.log(`Inserting new entry for facility with id: ${facility.id}`);
    try {

        // Check to see whether the facility entry already exists/

        // Entry for the facility already exists, throw duplicate error
    }
    catch(err) {
        if (err.name !== Errors.NotFoundError.name) throw err;

        // The entry wasn't found, good to insert new entry
        await resourceDB.execute('INSERT INTO `facility` SET ?', [escape(facility)]);
    }
}

// EDIT

// PULL BY ID

/**
 * Selects the entry in prisoner table of the resources database for the given prisoner page id, if one exists.
 * 
 * @param pageId - the id for the prisoner's page.
 * @returns the full prisoner information as a Prisoner type.
 */
async function selectPrisonerByPageId(pageId: number) {
    const resourceDB = constants.RESOURCE_DB_POOL.promise();

    console.log(`Querying 'prisoner' table in 'resources' for pageId: ${pageId}`);
    let [rows,] = await resourceDB.execute('SELECT * FROM `prisoner` WHERE `pageId` = ?', [escape(pageId)]);

    if (!(rows as any).length) {
        console.log(`Could not find any prisoner entries with pageId: ${pageId}.`);
        throw new Errors.NotFoundError(`No prisoner entry for pageId: ${pageId}.`);
    }

    return (rows as any)[0] as Prisoner;
 }

 /**
  * Selects the entry entry in the facility table of the resources database for the given facility id, if one exists.
  * 
  * @param id - the id for the facility entry
  * @returns the full facility entry as a Facility type.
  */
 async function selectFacilityById(id: number) {
     const resourceDB = constants.RESOURCE_DB_POOL.promise();

     console.log(`Querying 'facility' table in 'resources' database for id: ${id}`);
     let [rows,] = await resourceDB.execute('SELECT * FROM `facility` WHERE `id` = ?', [escape(id)]);

     if (!(rows as any).length) {
         console.log(`Could not find any facility entries with id: ${id}.`);
         throw new Errors.NotFoundError(`No facility entry for id: ${id}`);
     }

     return (rows as any)[0] as Facility;
 }


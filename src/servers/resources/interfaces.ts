/**
 * Type interfaces designed according to the schema of each resource in the `resources` DB.
 */

/**
 * Mixin to designate which types we need to keep an editing history of
 */
interface EditableContent {
    history: {
        _id: number,
        snapshot: EditableContent,
        date: Date,
        editedBy: number // userID 
        editComment: string
    }[]
}

interface Prisoner {
    _id: number,
    name: string,
    pronouns: string,
    charge: string,
    trialStatus: string,
    facility: Facility,
    prisonerId: number,
    interests: string[],
    bookWishlist: string[],
    supportSite: string,
    cohortTags: Cohort[]
}

interface Facility {
    _id: number,
    name: string,
    address: string
}

interface FacilityDetails {
    _id: number,
    facilityId: number
    aliases: string[],
    jurisdictionId: number,
    // TODO: are there facility ratings we could put here?
}

interface Cohort {
    _id: number,
    name: string,
}

interface CohortDetails {
    _id: number,
    cohortId: number,
    startArrestDate: Date,
    endArrestDate: Date,
    description: string
}

interface Jurisdiction {
    _id: number,
    name: string
}

interface JurisdictionDetails {
    _id: number,
    jurisdictionId: number
}

export { Prisoner, Facility, FacilityDetails, Cohort, CohortDetails, Jurisdiction, JurisdictionDetails }
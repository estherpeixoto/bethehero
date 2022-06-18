import {
  getDocs,
  collection,
  doc,
  query,
  where,
  CollectionReference,
  DocumentData,
  addDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore'

import { db } from '@lib/firebase'
import { Case, Organization, UpdatedCase } from '@lib/entities'
import { organizationService } from './organization.services'

class CaseService {
  caseRef: CollectionReference<DocumentData>

  constructor() {
    this.caseRef = collection(db, 'cases')
  }

  /**
   * Get all registered cases
   */
  async findAll() {
    let cases: Case[] = []
    const organizations = await organizationService.findAll()

    const casesQuerySnapshot = await getDocs(this.caseRef)

    casesQuerySnapshot.forEach(async (rows) => {
      const item = rows.data()

      const organizationData = organizations.find((row) => {
        if (item.organization === row.id) {
          return row
        }
      })

      cases.push({
        id: rows.id,
        organization: {
          id: organizationData.id,
          name: organizationData.name,
          email: organizationData.email,
          phone: organizationData.phone,
          city: organizationData.city,
          state: organizationData.state,
        },
        title: item.title,
        description: item.description,
        value: item.value,
      })
    })

    return cases
  }

  /**
   * Get all registered cases of one organization
   */
  async findAllByOrganization(organization: Organization) {
    const querySnapshot = await getDocs(
      query(this.caseRef, where('organization', '==', organization.id))
    )

    let cases: Case[] = []

    querySnapshot.forEach(async (rows) => {
      const item = rows.data()

      cases.push({
        id: rows.id,
        organization,
        title: item.title,
        description: item.description,
        value: item.value,
      })
    })

    return cases
  }

  public async add(newCase: Case) {
    const caseRef = await addDoc(this.caseRef, {
      organization: newCase.organization.id,
      title: newCase.title,
      description: newCase.description,
      value: newCase.value,
    })

    return caseRef.id ? true : false
  }

  public async update(updatedCase: UpdatedCase) {
    await updateDoc(doc(db, 'cases', updatedCase.id), updatedCase)
    return true
  }

  public async delete(id: string) {
    await deleteDoc(doc(db, 'cases', id))
    return true
  }
}

export const caseService = new CaseService()

import {
  getDocs,
  collection,
  doc,
  query,
  where,
  CollectionReference,
  DocumentData,
} from 'firebase/firestore'

import { db } from '@lib/firebase'
import { Case, Organization } from '@lib/entities'
import { organizationService } from './organization.services'

class CaseService {
  caseRef: CollectionReference<DocumentData>

  constructor() {
    this.caseRef = collection(db, 'cases')
  }

  async findAll() {
    let cases: Case[] = []
    const organizations = await organizationService.findAll()

    const casesQuerySnapshot = await getDocs(this.caseRef)

    casesQuerySnapshot.forEach(async (rows) => {
      const item = rows.data()

      const organizationData = organizations.find((row) => {
        if (item.organization.id === row.id) {
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

  async findAllByOrganization(organization: Organization) {
    const organizationRef = doc(db, 'organization', organization.id)

    const querySnapshot = await getDocs(
      query(this.caseRef, where('organization', '==', organizationRef))
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
}

export const caseService = new CaseService()

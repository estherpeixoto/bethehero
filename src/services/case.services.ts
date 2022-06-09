import {
  getDocs,
  collection,
  doc,
  query,
  where,
  CollectionReference,
  DocumentData,
  addDoc,
} from 'firebase/firestore'

import { db } from '@lib/firebase'
import { Case, Organization } from '@lib/entities'
import { organizationService } from './organization.services'

class CaseService {
  caseRef: CollectionReference<DocumentData>

  constructor() {
    this.caseRef = collection(db, 'cases')
  }

  public async findAll() {
    const organizations = await organizationService.findAll()

    let cases: Case[] = []

    const querySnapshot = await getDocs(this.caseRef)

    querySnapshot.forEach(async (rows) => {
      const item = rows.data()

      const organizationData = organizations.find(async (row) => {
        if (item.organization.id === row.uid) {
          return row
        }
      })

      cases.push({
        id: rows.id,
        organization: {
          uid: organizationData.uid,
          name: organizationData.name,
          email: organizationData.email,
          phone: organizationData.phone,
          city: organizationData.city,
          state: organizationData.state,
          avatar: organizationData.avatar,
        },
        title: item.title,
        description: item.description,
        value: item.value,
      })
    })

    return cases
  }

  public async findAllByOrganization(organization: Organization) {
    const querySnapshot = await getDocs(
      query(this.caseRef, where('organization', '==', organization.uid))
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
      organization: newCase.organization.uid,
      title: newCase.title,
      description: newCase.description,
      value: newCase.value,
    })

    return caseRef.id ? true : false
  }
}

export const caseService = new CaseService()

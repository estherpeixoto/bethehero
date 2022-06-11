import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  CollectionReference,
  DocumentData,
} from 'firebase/firestore'

import { db } from '@lib/firebase'
import { Organization } from '@lib/entities'

class OrganizationService {
  organizationRef: CollectionReference<DocumentData>

  constructor() {
    this.organizationRef = collection(db, 'organization')
  }

  async findAll() {
    const querySnapshot = await getDocs(this.organizationRef)

    let organizations: Organization[] = []

    querySnapshot.forEach(async (rows) => {
      const item = rows.data()

      organizations.push({
        id: item.id,
        name: item.name,
        email: item.email,
        phone: item.phone,
        city: item.city,
        state: item.state,
      })
    })

    return organizations
  }

  async find(id: string) {
    const querySnapshot = await getDocs(
      query(this.organizationRef, where('id', '==', id))
    )

    let organization: Organization

    querySnapshot.forEach(async (item) => {
      const data = item.data()

      organization = {
        id: data.id,
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city,
        state: data.state,
      }
    })

    return organization
  }

  async add(newOrganization: Organization) {
    const organizationRef = await addDoc(this.organizationRef, newOrganization)
    return organizationRef.id ? true : false
  }
}

export const organizationService = new OrganizationService()

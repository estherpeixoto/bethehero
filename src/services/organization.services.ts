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

  async add(newOrganization: Organization) {
    const organizationRef = await addDoc(this.organizationRef, newOrganization)
    return organizationRef.id ? true : false
  }

  async find(email: string) {
    const querySnapshot = await getDocs(
      query(this.organizationRef, where('email', '==', email))
    )

    let organization: Organization

    querySnapshot.forEach(async (item) => {
      const data = item.data()

      organization = {
        id: item.id,
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city,
        state: data.state,
      }
    })

    return organization
  }
}

export const organizationService = new OrganizationService()

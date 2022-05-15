import { addDoc, collection } from 'firebase/firestore'
import { db } from '@lib/firebase'
import { Organization } from '@lib/entities'

class OrganizationService {
  async add(newOrganization: Organization) {
    const organizationRef = await addDoc(
      collection(db, 'organization'),
      newOrganization
    )

    return organizationRef.id ? true : false
  }
}

export const organizationService = new OrganizationService()

import { addDoc, collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '@lib/firebase'
import { Organization } from '@lib/entities'

class OrganizationService {
  async add(newOrganization: Organization) {
    const organizationRef = await addDoc(
      collection(db, 'organization'),
      newOrganization,
    )

    return organizationRef.id ? true : false
  }

  async find({ email }: Organization) {
    const organizationsRef = collection(db, 'organization')

    const querySnapshot = await getDocs(
      query(organizationsRef, where('email', '==', email)),
    )

    let organization: Organization

    querySnapshot.forEach(async (rows) => {
      const data = rows.data()

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
}

export const organizationService = new OrganizationService()

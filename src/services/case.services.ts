import { getDocs, collection, doc, getDoc } from 'firebase/firestore'

import { db } from '@lib/firebase'
import { Case } from '@lib/entities'

class CaseService {
  async findAll() {
    const querySnapshot = await getDocs(collection(db, 'cases'))

    let cases: Case[] = []

    querySnapshot.forEach(async (rows) => {
      const item = rows.data()

      if (item.organization) {
        const organizationRef = doc(db, 'organization', item.organization.id)
        const organizationDoc = await getDoc(organizationRef)
        const organization = organizationDoc.data()

        cases.push({
          id: rows.id,
          organization: {
            id: item.organization.id,
            name: organization.name,
            email: organization.email,
            phone: organization.phone,
            city: organization.city,
            state: organization.state,
          },
          title: item.title,
          description: item.description,
          value: item.value,
        })
      }
    })

    return cases
  }
}

export const caseService = new CaseService()

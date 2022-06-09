import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  CollectionReference,
  DocumentData,
  QuerySnapshot,
} from 'firebase/firestore'
import { db } from '@lib/firebase'
import { Organization } from '@lib/entities'

class OrganizationService {
  organizationRef: CollectionReference<DocumentData>

  constructor() {
    this.organizationRef = collection(db, 'organization')
  }

  private generateOrganization(querySnapshot: QuerySnapshot<DocumentData>) {
    let organization: Organization | null = null

    querySnapshot.forEach(async (item) => {
      const data = item.data()

      organization = {
        uid: data.uid,
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city,
        state: data.state,
        avatar: data.avatar,
      }
    })

    return organization
  }

  public async findAll() {
    const querySnapshot = await getDocs(this.organizationRef)

    let organizations: Organization[] = []

    querySnapshot.forEach(async (rows) => {
      const item = rows.data()

      organizations.push({
        uid: item.uid,
        name: item.name,
        email: item.email,
        phone: item.phone,
        city: item.city,
        state: item.state,
        avatar: item.avatar,
      })
    })

    return organizations
  }

  public async find(email: string) {
    const querySnapshot = await getDocs(
      query(this.organizationRef, where('email', '==', email))
    )

    return this.generateOrganization(querySnapshot)
  }

  public async add(newOrganization: Organization) {
    const organizationRef = await addDoc(this.organizationRef, newOrganization)
    return organizationRef.id ? true : false
  }

  public async findByUID(uid: string) {
    const querySnapshot = await getDocs(
      query(this.organizationRef, where('uid', '==', uid))
    )

    return this.generateOrganization(querySnapshot)
  }

  public async save(organization: Organization) {
    console.log({ save: organization })

    // Try to find organization
    let data = await this.findByUID(organization.uid)

    // Return if it's registered
    if (data !== null) {
      return data
    }

    // Register if it's not registered
    await this.add(organization)
    data = await this.findByUID(organization.uid)
    return data
  }
}

export const organizationService = new OrganizationService()

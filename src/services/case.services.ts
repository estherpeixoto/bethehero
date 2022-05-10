import { collection, getDocs } from 'firebase/firestore'

import { db } from '@lib/firebase'
import { Case } from '@lib/entities'

class CaseService {
  // add() {}

  async findAll() {
    const querySnapshot = await getDocs(collection(db, 'cases'))

    let cases: Case[] = []

    querySnapshot.forEach((doc) => {
      const { ong, descricao, valor } = doc.data()

      cases.push({
        id: doc.id,
        ong: ong.id,
        descricao,
        valor,
      })
    })

    return cases
  }
}

export const caseService = new CaseService()

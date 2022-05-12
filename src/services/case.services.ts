import { getDocs, collection, doc, getDoc } from 'firebase/firestore'

import { db } from '@lib/firebase'
import { Case } from '@lib/entities'

class CaseService {
  async findAll() {
    const querySnapshot = await getDocs(collection(db, 'cases'))

    let cases: Case[] = []

    querySnapshot.forEach(async (rows) => {
      const item = rows.data()

      if (item.ong) {
        const ongRef = doc(db, 'organization', item.ong.id)
        const ongDoc = await getDoc(ongRef)
        const ong = ongDoc.data()
        ong.id = item.ong.id

        cases.push({
          id: rows.id,
          ong: {
            cidade: ong.cidade,
            email: ong.email,
            id: ong.id,
            nome: ong.nome,
            uf: ong.uf,
            whatsapp: ong.whatsapp,
          },
          descricao: item.descricao,
          valor: item.valor,
        })
      }
    })

    return cases
  }
}

export const caseService = new CaseService()

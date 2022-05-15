import { useLocation } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { Case } from '@lib/entities'
import { PageHeader } from '@components/PageHeader'
import { Link } from '@components/Link'
import { Item } from '@components/Cases/Item'
import { Button } from '@components/Button'
import itemStyles from '@components/Cases/Item/styles.module.css'
import styles from './styles.module.css'

export function Show() {
  const { state } = useLocation()
  const { id, title, description, organization, value } = state as Case

  const whatsAppMessage = `Olá! Quero ajudar com o caso "${description}".`
  const whatsAppLink = `https://wa.me/${organization.phone}/?text=${whatsAppMessage}`
  const emailLink = `mailto:${organization.email}`

  return (
    <div id={styles.Show} className={styles.container}>
      <main>
        <PageHeader>
          <Link to="/" style={{ padding: '10px' }}>
            <FiArrowLeft style={{ color: 'var(--color-red-hero)' }} />
          </Link>
        </PageHeader>

        <form className={styles.form}>
          <Item
            detailPage={true}
            item={{ id, title, description, organization, value }}
            key={id}
          />

          <div id={styles.contactCard} className={itemStyles.card}>
            <main>
              <p className={styles.saveTheDay}>
                Salve o dia!<br></br>Seja o herói desse caso.
              </p>

              <p className={styles.contact}>Entre em contato:</p>

              <div className={styles.buttonsContainer}>
                <Button
                  type="button"
                  onClick={() => window.open(whatsAppLink, '_blank')}
                >
                  WhatsApp
                </Button>

                <Button
                  type="button"
                  onClick={() => window.open(emailLink, '_blank')}
                >
                  E-mail
                </Button>
              </div>
            </main>
          </div>
        </form>
      </main>
    </div>
  )
}

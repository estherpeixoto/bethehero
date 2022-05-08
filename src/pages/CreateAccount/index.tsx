import { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { PageHeader } from '@components/PageHeader'
import { Title } from '@components/Title'
import { Link } from '@components/Link'
import styles from './styles.module.css'

export function CreateAccount() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [cidade, setCidade] = useState('')
  const [uf, setUf] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log({
      nome,
      email,
      whatsapp,
      cidade,
      uf,
    })
  }

  return (
    <div id={styles.CreateAccount} className={styles.container}>
      <main>
        <PageHeader>
          <Link to="/sign-in" style={{ padding: '10px' }}>
            <FiArrowLeft style={{ color: 'var(--color-red-hero)' }} />
          </Link>
        </PageHeader>

        <form onSubmit={handleSubmit} className={styles.form}>
          <Title>Cadastro</Title>

          <p className={styles.subtitle}>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <Input
            label="Nome da ONG"
            name="nome"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNome(e.target.value)
            }
            value={nome}
          />

          <Input
            label="E-mail"
            name="email"
            type="email"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
            value={email}
          />

          <Input
            label="WhatsApp"
            name="whatsapp"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setWhatsapp(event.target.value)
            }
            value={whatsapp}
          />

          <Input
            label="Cidade"
            name="cidade"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setCidade(event.target.value)
            }
            value={cidade}
          />

          <Input
            label="UF"
            name="uf"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setUf(event.target.value)
            }
            value={uf}
            maxlength="2"
          />

          <Button type="submit">Cadastrar</Button>
        </form>
      </main>
    </div>
  )
}

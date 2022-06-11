import { FormEvent, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { caseService } from '@services/case.services'
import { useAuth } from '@hooks/useAuth'
import { stringToFloat } from '@utils/number'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { PageHeader } from '@components/PageHeader'
import { Subtitle, Title } from '@components/Title'
import { Link } from '@components/Link'
import { DarkModeToggle } from '@components/DarkModeToggle'
import { ButtonIcon } from '@components/ButtonIcon'
import { Container, Main } from '@components/Layout'

export function Create() {
  const { organization } = useAuth()
  const navigation = useNavigate()

  const [isValid, setIsValid] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  // Form validation
  useEffect(() => {
    if (
      title.trim() !== '' &&
      description.trim() !== '' &&
      value.trim() !== ''
    ) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }, [title, description, value])

  // Form submit event
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const isRegistered = await caseService.add({
      organization,
      title,
      description,
      value: stringToFloat(value),
    })

    if (isRegistered) {
      navigation('/')
    }
  }

  // Form
  return (
    <Container>
      <Main>
        <PageHeader showLogo={false}>
          <Link to="/">
            <ButtonIcon>
              <FiArrowLeft size={24} />
            </ButtonIcon>
          </Link>
          <DarkModeToggle />
        </PageHeader>

        <form onSubmit={handleSubmit}>
          <Title>Cadastrar novo caso</Title>

          <Subtitle>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </Subtitle>

          <Input
            label="Título do caso"
            name="title"
            value={title}
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />

          <Input
            label="Descrição"
            name="description"
            value={description}
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDescription(e.target.value)
            }
          />

          <Input
            label="Valor em reais"
            name="value"
            value={value}
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
          />

          <Button disabled={!isValid} type="submit" style={{ width: '100%' }}>
            Cadastrar
          </Button>
        </form>
      </Main>
    </Container>
  )
}

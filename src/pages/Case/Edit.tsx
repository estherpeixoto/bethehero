import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Case } from '@lib/entities'
import { Container, Main } from '@components/Layout'
import { PageHeader } from '@components/PageHeader'
import { ButtonIcon } from '@components/ButtonIcon'
import { FiArrowLeft } from 'react-icons/fi'
import { DarkModeToggle } from '@components/DarkModeToggle'
import { Subtitle, Title } from '@components/Title'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { FormEvent, useEffect, useState } from 'react'
import { floatToString, stringToFloat } from '@utils/number'
import { caseService } from '@services/case.services'

export function Edit() {
  const navigation = useNavigate()
  const { state } = useLocation()

  const { id, title, description, organization, value } = state as Case

  const [isValid, setIsValid] = useState(false)

  const [newTitle, setTitle] = useState(title)
  const [newDescription, setDescription] = useState(description)
  const [newValue, setValue] = useState(floatToString(value))

  // Form validation
  useEffect(() => {
    const isFilled =
      newTitle.trim() !== '' &&
      newDescription.trim() !== '' &&
      newValue.trim() !== ''

    const wasChanged =
      newTitle.trim() !== title ||
      newDescription.trim() !== description ||
      newValue.trim() !== floatToString(value)

    if (isFilled && wasChanged) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }, [newTitle, newDescription, newValue])

  // Form submit event
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const isRegistered = await caseService.update({
      id: id,
      title: newTitle,
      description: newDescription,
      value: stringToFloat(newValue),
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
          <Title>Editar o caso</Title>

          <Subtitle>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </Subtitle>

          <Input
            label="Título do caso"
            name="title"
            value={newTitle}
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />

          <Input
            label="Descrição"
            name="description"
            value={newDescription}
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDescription(e.target.value)
            }
          />

          <Input
            label="Valor em reais"
            name="value"
            value={newValue}
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
          />

          <Button disabled={!isValid} type="submit" style={{ width: '100%' }}>
            Salvar
          </Button>
        </form>
      </Main>
    </Container>
  )
}

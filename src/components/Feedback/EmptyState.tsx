import { FiFolderPlus } from 'react-icons/fi'
import { AddCaseButton } from '@components/PrivateList/AddCaseButton'

export const EmptyState = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
      }}
    >
      <FiFolderPlus size={48} strokeWidth={1} strokeOpacity="30%" />
      <p style={{ textAlign: 'center' }}>
        <p style={{ color: 'var(--text_primary)', fontWeight: 500 }}>
          Nenhum caso
        </p>
        <p style={{ color: 'var(--text_secondary)' }}>
          Comece adicionando algum caso.
        </p>
      </p>
      <AddCaseButton />
    </div>
  )
}

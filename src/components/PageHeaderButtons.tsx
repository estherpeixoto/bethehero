export const PageHeaderButtons = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 24,
      }}
    >
      {children}
    </div>
  )
}

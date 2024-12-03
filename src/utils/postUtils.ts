// Function that returns a color word depending on the provided category
export const getPostColorFromCategory = (category: string) => {
  switch (category) {
    case 'Sustainability':
      return 'lime'
    case 'Innovation':
      return 'cyan'
    case 'Security':
      return 'violet'
    default:
      return 'fuchsia'
  }
}

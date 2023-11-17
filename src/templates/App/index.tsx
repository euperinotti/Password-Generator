import { GenerateButton } from '@/components/GenerateButton'
import * as S from './styles'

export const AppTemplate = () => {
  const handleClick = async () => {}

  return (
    <S.Container>
      <S.Main>
        <GenerateButton value="Generate" onClick={handleClick} />
      </S.Main>
    </S.Container>
  )
}

import { GenerateButton } from '@/components/GenerateButton'
import { AsideMenu } from '@/patterns/AsideMenu'
import * as S from './styles'

export const AppTemplate = () => {
  const handleClick = async () => {}

  return (
    <S.Container>
      <S.Main>
        <AsideMenu />
        <GenerateButton value="Generate" onClick={handleClick} />
      </S.Main>
    </S.Container>
  )
}

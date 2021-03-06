import styled from 'styled-components/native';
import * as theme from 'utils/theme';
import i18n from 'i18n';

export const SearchButton = styled.TouchableOpacity`
  padding: 16px;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholder: i18n.t('search'),
  placeholderTextColor: theme.white,
  underlineColorAndroid: theme.white,
  selectionColor: theme.waterMelon
})`
  width: 100%;
  color: ${theme.white};
`;

export const CardLoadMoreIndicatorContainer = styled.View`
  padding: 10px;
`;

export const CardContainer = styled.TouchableOpacity`
  border-radius: 10px;
  border: 1px solid #aaa;
  margin: 10px 10px 0 10px;
  overflow: hidden;
`;

export const CardImage = styled.ImageBackground.attrs({
  resizeMode: 'cover'
})`
  width: 100%;
  height: 156px;
  justify-content: space-between;
`;

export const CardImageText = styled.Text`
  align-self: flex-start;
  font-size: ${props => (props.topic ? '22px' : '14px')};
  color: ${theme.white};
  background-color: ${theme.greyshBrownOpac};
  padding: 3px 6px;
`;

export const CardNewsCount = styled.Text`
  align-self: flex-end;
  color: ${theme.white};
  font-size: 14px;
  background-color: ${theme.waterMelon};
  border-radius: 13px;
  padding: 4px 8px;
  margin: 4px;
`;

export const CardDescription = styled.View`
  padding: 5px;
`;

export const CardDescText = styled.Text`
  color: ${theme.greyshBrown};
  font-size: 14px;
`;

export const CardDescSource = styled.Text`
  font-weight: bold;
`;

export const CardDescDate = styled.Text`
  color: #aaa;
`;

export const NewsSeparator = styled.View`
  height: 1px;
  width: 100%;
  background-color: #aaa;
`;

export const NewsContainer = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
`;

export const NewsImage = styled.Image.attrs({
  resizeMode: 'cover'
})`
  width: 100px;
  height: 100px;
  margin: 10px;
  border-radius: 6px;
  flex: 0 0 100px;
`;

export const NewsDescription = styled.View`
  padding: 10px 5px;
  flex: 1 0 100px;
`;

export const NewsText = styled.Text`
  font-size: 14px;
`;

export const LoadingContainer = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

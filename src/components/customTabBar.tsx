import React from 'react';
import styled from 'styled-components/native';
import Colors from './../../constants/colors';

import HomeIcon from './../assets/home.svg';
import SearchIcon from './../assets/search.svg';
import TodayIcon from './../assets/today.svg';
import FavoriteIcon from './../assets/favorite.svg';
import AccountIcon from './../assets/person.svg';

const TabArea = styled.View`
  flex-direction: row;
  width: 100%;
  height: 60px;
  background-color: ${Colors.buttonColor};
`;

const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const CustomTabBar = ({state, navigation}: any) => {
  const goTo = (screeName: string) => {
    navigation.navigate(screeName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo('Home')}>
        <HomeIcon
          style={{opacity: state.index === 0 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#ffffff"
        />
      </TabItem>

      <TabItem
        style={{opacity: state.index === 1 ? 1 : 0.5}}
        onPress={() => goTo('Search')}>
        <SearchIcon width="24" height="24" fill="#ffffff" />
      </TabItem>

      <TabItem onPress={() => goTo('Appointments')}>
        <TodayIcon width="24" height="24" fill="#ffffff" />
      </TabItem>

      <TabItem
        style={{opacity: state.index === 3 ? 1 : 0.5}}
        onPress={() => goTo('Favorites')}>
        <FavoriteIcon width="24" height="24" fill="#ffffff" />
      </TabItem>

      <TabItem
        style={{opacity: state.index === 4 ? 1 : 0.5}}
        onPress={() => goTo('Profile')}>
        <AccountIcon width="24" height="24" fill="#ffffff" />
      </TabItem>
    </TabArea>
  );
};

export default CustomTabBar;

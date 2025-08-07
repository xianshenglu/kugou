import { Component } from "react";
import { Route } from "react-router-dom";
import classNames from "classnames";
import "./App.less";
import AppHeader from "./components/public/AppHeader";
import PlayerMedContainer from "./containers/player/PlayerMedContainer";
import NewSongsContainer from "./containers/newSong/NewSongsContainer";
import RankListContainer from "./containers/rank/RankListContainer";
import SongListContainer from "./containers/song/SongListContainer";
import {
  // root,
  newSongs,
  rankList,
  songList,
  singerCategories,
  rankInfo,
  songListInfo,
  singerList,
  singerInfo,
  search,
  player,
} from "./constants/router";
import SingerCategoriesContainer from "./containers/singer/SingerCategoriesContainer";
import RankInfoContainer from "./containers/rank/RankInfoContainer";
import SongListInfoContainer from "./containers/song/SongListInfoContainer";
import SingerListContainer from "./containers/singer/SingerListContainer";
import SingerInfoContainer from "./containers/singer/SingerInfoContainer";
import SearchContainer from "./containers/search/searchContainer";
import PlayerMaxContainer from "./containers/player/PlayerMaxContainer";
import AppNavContainer from "./containers/public/AppNavContainer";

class App extends Component {
  render() {
    const { isPlayerMedShow, isAppNavShow } = this.props as any;
    const mainClassName = classNames("App__main", {
      "App__main--underNav": isAppNavShow,
    });
    return (
      <div className="App">
        <AppHeader />
        <AppNavContainer />
        {isPlayerMedShow ? <PlayerMedContainer /> : undefined}
        <main className={mainClassName}>
          <Route path={player} element={<PlayerMaxContainer />} />
          <Route path={newSongs} element={<NewSongsContainer />} />
          <Route path={rankList} element={<RankListContainer />} />
          <Route path={songList} element={<SongListContainer />} />
          <Route
            path={singerCategories}
            element={<SingerCategoriesContainer />}
          />
          <Route path={rankInfo + ":id"} element={<RankInfoContainer />} />
          <Route
            path={songListInfo + ":id"}
            element={<SongListInfoContainer />}
          />
          <Route path={singerList + ":id"} element={<SingerListContainer />} />
          <Route
            path={singerInfo + ":singerListId/:id"}
            element={<SingerInfoContainer />}
          />
          <Route path={search} element={<SearchContainer />} />
        </main>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { urls } from '../constants/app.config';
import LeaderboardModel from '../models/leaderboard';
import { fetchLeaderboard, setSeasonChampion } from '../store/actions/leaderboard';
import Wrapper from '../components/Wrapper/Wrapper';
import Header from '../components/Header/Header';
import Item from '../components/List/Item/Item';
import Arrow from '../assets/arrow.svg';

interface LeaderboardProps {
  data: LeaderboardModel[],
  getLeaderboard: Function,
  setChampion: Function,
  history: {
    push: Function
  }
}

const LinkList = ({ items, onClick }) => items.map(options => (
  <Item
    key={options.year}
    avatar={`${urls.placeholder}${options.code}`}
    title={options.champion}
    subtext={options.year}
    score={options.wins}
    scorePercent={options.winPercent}
    icon={Arrow}
    onClick={() => onClick(options.code, options.year)}
  />
));
class Leaderboard extends Component<LeaderboardProps> {
  componentDidMount() {
    const { data, getLeaderboard } = this.props;

    if (data.length === 0) {
      getLeaderboard();
    }
  }

  handleClick = (code, year) => {
    const { setChampion, history } = this.props;
    setChampion(code);
    history.push(`/results/${year}`);
  }

  render() {
    const { data } = this.props;
    return (
      <Wrapper>
        <Header title="Leaderboard" />
        <LinkList items={data} onClick={this.handleClick} />
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getLeaderboard: () => dispatch(fetchLeaderboard()),
  setChampion: code => dispatch(setSeasonChampion(code))
});

const mapStateToProps = ({ leaderboard }) => ({
  data: leaderboard.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);

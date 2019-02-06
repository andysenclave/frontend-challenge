import React, { Component } from 'react';
import { connect } from 'react-redux';

import { urls } from '../constants/app.config';
import LeaderboardModel from '../models/leaderboard';
import { fetchLeaderboard, setSeasonChampion } from '../redux/actions/leaderboard';
import Wrapper from '../components/Wrapper/Wrapper';
import Header from '../components/Header/Header';
import Item from '../components/List/Item/Item';
import DisplayError from '../components/DisplayError/Error';
import Arrow from '../assets/arrow.svg';

interface LeaderboardProps {
  data: LeaderboardModel[],
  error: boolean,
  errorMessage: string,
  getLeaderboard: Function,
  setChampion: Function,
  history: {
    push: Function
  }
}

interface ContentProps {
  data: LeaderboardModel[],
  fetchError: boolean,
  errorMessage: string,
  onClick: Function
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

const Content = ({
  data, fetchError, errorMessage, onClick
}: ContentProps) => {
  if (fetchError) {
    return <DisplayError message={errorMessage} />;
  }
  return <LinkList items={data} onClick={onClick} />;
};
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
    const { data, error, errorMessage } = this.props;
    return (
      <Wrapper>
        <Header title="Leaderboard" />
        <Content
          data={data}
          fetchError={error}
          errorMessage={errorMessage}
          onClick={this.handleClick}
        />
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
  error: leaderboard.fetchError.leaderboard,
  errorMessage: leaderboard.errorMessage
});

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);

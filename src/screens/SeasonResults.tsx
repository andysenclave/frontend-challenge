import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SeasonResultsModel from '../models/seasonResult';
import { fetchSeasonResult } from '../store/actions/leaderboard';
import Wrapper from '../components/Wrapper/Wrapper';
import Header from '../components/Header/Header';
import Item from '../components/List/Item/Item';
import Trophy from '../assets/trophy.svg';

interface RouteParams {
  params: {
    year: string
  }
}
interface SeasonResultsProps {
  seasonChampionCode: string,
  results: SeasonResultsModel[],
  getSeasonResult: Function,
  match: RouteParams
}

const ItemList = ({ items, seasonChampionCode }) => items.map(options => (
  <Item
    key={options.raceName}
    title={options.winner}
    subtext={options.raceName}
    highlight={seasonChampionCode === options.winnerCode}
    icon={seasonChampionCode === options.winnerCode ? Trophy : undefined}
  />
));

class SeasonResults extends Component<SeasonResultsProps> {
  componentDidMount() {
    const { getSeasonResult, match: { params } } = this.props;

    getSeasonResult(params.year);
  }

  render() {
    const { results, seasonChampionCode } = this.props;

    return (
      <Wrapper>
        <Header title="Leaderboard" />
        <Link to="/">Go back to leaderboard</Link>
        <ItemList items={results} seasonChampionCode={seasonChampionCode} />
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getSeasonResult: year => dispatch(fetchSeasonResult(year))
});

const mapStateToProps = ({ leaderboard }) => ({
  results: leaderboard.seasonResults,
  seasonChampionCode: leaderboard.championCode
});

export default connect(mapStateToProps, mapDispatchToProps)(SeasonResults);

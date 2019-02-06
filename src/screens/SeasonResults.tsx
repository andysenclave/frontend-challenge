import React, { Component } from 'react';
import { connect } from 'react-redux';

import SeasonResultsModel from '../models/seasonResult';
import { fetchSeasonResult } from '../redux/actions/leaderboard';
import Wrapper from '../components/Wrapper/Wrapper';
import Header from '../components/Header/Header';
import Item from '../components/List/Item/Item';
import Link from '../components/Link/link';
import DisplayError from '../components/DisplayError/Error';

interface RouteParams {
  params: {
    year: string
  }
}
interface SeasonResultsProps {
  seasonChampionCode: string,
  results: SeasonResultsModel[],
  error: boolean,
  errorMessage: string,
  getSeasonResult: Function,
  match: RouteParams
}

interface ContentProps{
  seasonChampionCode: string,
  results: SeasonResultsModel[],
  fetchError: boolean,
  errorMessage: string
}

const ItemList = ({ items, seasonChampionCode }) => items.map(options => (
  <Item
    key={options.raceName}
    title={options.winner}
    subtext={options.raceName}
    highlight={seasonChampionCode === options.winnerCode}
  />
));

const Content = ({
  results, fetchError, errorMessage, seasonChampionCode
}: ContentProps) => {
  if (fetchError) {
    return <DisplayError message={errorMessage} />;
  }
  return <ItemList items={results} seasonChampionCode={seasonChampionCode} />;
};

class SeasonResults extends Component<SeasonResultsProps> {
  componentDidMount() {
    const { getSeasonResult, match: { params } } = this.props;

    getSeasonResult(params.year);
  }

  render() {
    const {
      results,
      error,
      errorMessage,
      seasonChampionCode,
      match: { params }
    } = this.props;
    const title = `${params.year} Season Results`;

    return (
      <Wrapper>
        <Header title={title} />
        <Link to="/">Go back to leaderboard</Link>
        <Content
          results={results}
          fetchError={error}
          errorMessage={errorMessage}
          seasonChampionCode={seasonChampionCode}
        />
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getSeasonResult: year => dispatch(fetchSeasonResult(year))
});

const mapStateToProps = ({ leaderboard }) => ({
  results: leaderboard.seasonResults,
  seasonChampionCode: leaderboard.championCode,
  error: leaderboard.fetchError.seasonResult,
  errorMessage: leaderboard.errorMessage
});

export default connect(mapStateToProps, mapDispatchToProps)(SeasonResults);

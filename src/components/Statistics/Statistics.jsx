import PropTypes from 'prop-types';
import {
  WrapperStatistics,
  StatisticsList,
  StatisticsItem,
} from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <WrapperStatistics>
      {title.length > 0 && <h2>{title}</h2>}
      <StatisticsList>
        {stats.map(data => {
          return (
            <StatisticsItem key={data.id}>
              <span className="label">{data.label}</span>
              <span className="percentage">{data.percentage}%</span>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </WrapperStatistics>
  );
};

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

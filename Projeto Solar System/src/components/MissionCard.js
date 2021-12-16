import React from 'react';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="mission-item" data-testid="mission-card">
        <p data-testid="mission-name">{name}</p>
        <span data-testid="mission-year">{year}</span>
        <span data-testid="mission-country">{country}</span>
        <span data-testid="mission-destination">{destination}</span>
      </div>
    );
  }
}

export default MissionCard;
